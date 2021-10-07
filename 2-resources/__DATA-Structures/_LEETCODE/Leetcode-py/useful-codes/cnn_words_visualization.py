def _get_highlight_offsets_with_cnn(text: str) -> List[Tuple[int, int]]:
    clean_text = clean_str(text)
    if not clean_text:
        return []

    kernel_sizes = [conv.kernel_size[0] for conv in CNN_MODEL.convs1]

    def get_ngrams(k, n, tokens):
        for i in range(n):
            yield " *".join(
                re.escape(tokens[j]) for j in range(i, i + k) if j < len(tokens)
            )

    def get_index(c, n, top_n):
        _, indice = F.max_pool1d(c, n, return_indices=True)
        top_indice = Counter(list(indice.squeeze().data.numpy())).most_common()
        if len(top_indice) > top_n:
            top_indice = top_indice[:top_n]
        return [i[0] for i in top_indice]

    with torch.no_grad():
        CNN_MODEL.eval()
        tokens = word_tokenize(clean_text)
        ids = [[CNN_MODEL.vocab_stoi[x] for x in tokens]]
        x = CNN_MODEL.tensor_type(ids)
        emb = CNN_MODEL.embed(x).unsqueeze(1)
        kernel_ngram, kernel_conv = dict(), dict()
        for i, c in enumerate(CNN_MODEL.convs1):
            e = emb
            if e.size(2) < kernel_sizes[i]:
                e = torch.nn.ZeroPad2d((0, 0, 0, kernel_sizes[i] - e.size(2)))(e)
            output = F.relu(c(e)).squeeze(3)
            kernel_ngram[kernel_sizes[i]] = output.size(2)
            kernel_conv[kernel_sizes[i]] = output
        filters = {k: list(get_ngrams(k, n, tokens)) for k, n in kernel_ngram.items()}

        ngrams = dict()
        for k, c in kernel_conv.items():
            if kernel_ngram[k] == 1:
                ngrams[k] = [filters[k][0]]
            else:
                index = get_index(c, kernel_ngram[k], top_n=CNN_HIGHLIGHTS_TOP_N)
                ngrams[k] = [filters[k][i] for i in index if filters[k][i]]

    ngrams = list(
        w
        for ngram in ngrams.values()
        for w in ngram
        if len(w) > 1 and not INTRA_SENT_BOUNDARY_PATTERN.findall(w)
    )
    offsets = [
        (m.start(), m.end())
        for ngram in ngrams
        for m in re.finditer(ngram, text, re.IGNORECASE)
    ]
    return merge_offsets(offsets)
