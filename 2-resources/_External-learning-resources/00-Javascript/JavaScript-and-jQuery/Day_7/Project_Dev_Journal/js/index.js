// Render initial posts on the page
const entries = getPosts();
renderPosts(entries);

// Handle new form submites
$("form[name=insert-post]").submit((evt) => {
  evt.preventDefault();
  const $form = $(evt.target);
  const title = $("input#title", $form).val();
  const codeSrc = $("input#code-src", $form).val();
  const post = $("textarea#post", $form).val();

  const posts = getPosts();
  const newPost = {
    title,
    codeSrc,
    date: moment().format("Y-MM-DD H:m"),
    id: moment().format("x"),
    post: post.split("\n"),
  };

  // Clear the form
  $form.trigger("reset");

  // Save new post to array and localStorage
  posts.push(newPost);
  savePosts(posts);

  // Re-render the posts
  renderPosts(posts);
});
