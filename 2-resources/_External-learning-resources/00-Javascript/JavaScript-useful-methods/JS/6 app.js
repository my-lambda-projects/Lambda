const arr = ["hello", "welcome", "bye bye"];
let temp = randomItem(arr);
let mes = document.createTextNode(temp);
document.body.appendChild(mes);

function randomItem(arr) {
  let temp = Math.floor(Math.random() * arr.length);
  return arr[temp];
}
