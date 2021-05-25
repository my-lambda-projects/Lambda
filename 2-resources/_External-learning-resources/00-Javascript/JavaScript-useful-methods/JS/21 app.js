const url = "https://jsonplaceholder.typicode.com/todos";
const output = document.querySelector("div");
loadJSON();

function loadJSON() {
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      for (let x = 0; x < data.length; x++) {
        let div = document.createElement("div");
        div.style.color = data[x].completed ? "green" : "red";
        div.textContent = data[x].id + ". " + data[x].title;
        output.appendChild(div);
      }
    });
}
