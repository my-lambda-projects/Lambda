$("form[name=search-form]").on("submit", (evt) => {
  evt.preventDefault();
  const $form = $(evt.target);
  const searchText = $form.find("input[type=text]").val();

  const allPosts = getPosts();

  const filteredPosts = [];
  for (let i = 0; i < allPosts.length; i++) {
    const entry = allPosts[i];
    const inStr =
      entry.post.indexOf(searchText) !== -1 ||
      entry.title.indexOf(searchText) !== -1;

    if (inStr) {
      filteredPosts.push(entry);
    }
  }

  renderPosts(filteredPosts);
});
