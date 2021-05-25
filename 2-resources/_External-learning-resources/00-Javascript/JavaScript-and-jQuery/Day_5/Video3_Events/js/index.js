function random(n) {
  return Math.floor(Math.random() * n);
}

function randomCoords() {
  const randomY = random(window.innerHeight);
  const randomX = random(window.innerWidth);

  return {
    position: "absolute",
    top: `${randomY}px`,
    left: `${randomX}px`,
  };
}

const catObj = {
  clicked: 0,
};

$("img").click((evt) => {
  catObj.clicked++;
  alert(catObj.clicked);
});

/** Listening on the boxes **/
$(".inner-box").on("click", (evt) => {
  console.log(`I am the inner box`, evt);
});
$(".outer-box").on("click", (evt) => {
  console.log(`I am the outer box`, evt);
});
$("button").on("click", (evt) => {
  console.log(`I am the button`, evt);
});

setInterval(function () {
  if (catObj.clicked < 3) {
    $("img").css(randomCoords());
  }
}, 1000);
