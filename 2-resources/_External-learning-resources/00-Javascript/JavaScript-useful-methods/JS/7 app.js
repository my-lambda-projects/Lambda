document.querySelector("button").addEventListener("click", function () {
  document.body.style.backgroundColor = ranColor();
});

function ranColor() {
  return "#" + Math.random().toString(16).substr(-6);
}
