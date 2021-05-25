const $form = $("form[name=search-songs]");

$form.submit(function (evt, theForm) {
  evt.preventDefault();
  const $input = $("input[type=text]", theForm);
  const searchTerm = encodeURIComponent($input.val());

  const url = `https://itunes.apple.com/search?term=${searchTerm}&limit=10`;

  fetch(url)
    .then(function (resp) {
      console.log(resp);
      return resp.json();
    })
    .then(function (songData) {
      $("#results ul").html(buildList(songData.results));
    })
    .catch(function (err) {
      alert("ERROR!");
    });
});

function buildList(songs) {
  let rv = "";

  for (let i = 0; i < songs.length; i++) {
    const item = songs[i];
    rv += `
      <li class="song">
        ${item.artistName} - ${item.collectionName}
        <img src="${item.artworkUrl100}" />
      </li>
    `;
  }

  return rv;
}
