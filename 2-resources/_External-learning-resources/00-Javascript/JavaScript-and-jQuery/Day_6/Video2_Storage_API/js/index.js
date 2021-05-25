setupFavoriteList();

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
      $("#results ul")
        .find("li.song")
        .click(function (evt) {
          const favSongs = JSON.parse(localStorage.getItem("favSongs"));
          const favSong = $(evt.currentTarget).data();

          favSongs.push(favSong);
          localStorage.setItem("favSongs", JSON.stringify(favSongs));

          $("#favorites ul").html(buildList(favSongs));
        });
    })
    .catch(function (err) {
      alert("ERROR!");
    });
});

function buildList(songs) {
  let rv = "";
  if (!songs || !songs.length) {
    return rv;
  }
  for (let i = 0; i < songs.length; i++) {
    const item = songs[i];
    rv += `
      <li class="song"
        data-artist-name="${item.artistName}"
        data-collection-name="${item.collectionName}"
        data-artwork-url-100="${item.artworkUrl100 || item["artworkUrl-100"]}"
:
}"
      >
        ${item.artistName} - ${item.collectionName}
        <img src="${item.artworkUrl100 || item["artworkUrl-100"]}" />
      </li>
    `;
  }

  return rv;
}

function setupFavoriteList() {
  const favSongs = localStorage.getItem("favSongs");
  if (!favSongs) {
    localStorage.setItem("favSongs", JSON.stringify([]));
  }
  $("#favorites ul").html(buildList(JSON.parse(favSongs)));
}
