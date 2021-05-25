const url = "https://randomuser.me/api/";
const btn = document.querySelector("button");
const el = document.createElement("input");
const output = document.querySelector("div");
el.setAttribute("type", "number");
el.setAttribute("value", 5);
document.body.appendChild(el);
btn.addEventListener("click", getUsers);

function getUsers() {
  let temp = url + "?results=" + el.value;
  fetch(temp)
    .then(function (rep) {
      return rep.json();
    })
    .then(function (data) {
      console.log(data.results);
      let html;
      for (let x = 0; x < data.results.length; x++) {
        console.log(data.results[x]);
        html +=
          data.results[x].name.first + " " + data.results[x].name.last + "<br>";
      }
      output.innerHTML = html;
    });
}
