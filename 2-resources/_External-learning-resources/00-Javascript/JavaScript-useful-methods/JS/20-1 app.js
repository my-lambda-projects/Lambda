const url = "https://api.chucknorris.io/jokes/random";
const btn = document.querySelector("button");
btn.addEventListener("click", getJoke);

function getJoke() {
  fetch(url)
    .then(function (rep) {
      return rep.json();
    })
    .then(function (data) {
      console.log(data);
      document.querySelector("div").textContent = data.value;
    });
}
