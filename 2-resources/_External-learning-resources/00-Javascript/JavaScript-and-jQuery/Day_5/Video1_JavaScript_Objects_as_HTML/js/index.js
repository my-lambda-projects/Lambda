renderArticleHTML(data[0]);

for (let i = 0; i < data.length; i++) {
  const article = data[i];
  renderArticleHTML(article);
}

function renderArticleHTML(article) {
  const id = article.id;
  const author = article.author;
  const title = article.title;
  const tags = article.tags || [];
  const image = article.picture;
  const paragraphs = article.post.split("\n\n");
  const $main = $("#main");

  let tagsA = "";
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    tagsA += `<a 
       class="${tag}" 
       href="tags/${tag}">${tag}</a>&nbsp;&nbsp;&nbsp;`;
  }

  const $article = $(`
    <article>
      <header>
        <h2 class="title">${title}</h2>
        <p class="byline">
          ${author.first} ${author.last}
        </p>
      </header>
      
      <figure class="photo">
        <img src="${image}" alt="Image for article" />
      </figure>
      
      <div class='post'>
        <p>
          ${paragraphs.join("</p><p>")}
        </p>
      </div>
    
      <footer class="tags">
        ${tagsA}
      </footer>
    </article>
  `);

  return $main.append($article);
}
