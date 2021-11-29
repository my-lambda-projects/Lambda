let navLinks = document.querySelectorAll(".nav-link");
let navBar = document.querySelector(".nav");
let body = document.querySelector("body");
let currNavColor = "#212529";
let headerImg = document.querySelector(".intro img");
let eveObjElement = document.createElement("p");
headerImg.parentElement.appendChild(eveObjElement);
headerImg.remove();
let img = document.querySelector(".content-destination img");
let dragBool = false;
let textContent = document.querySelector(".text-content");

Array.from(textContent.children).forEach((element) => {
  console.log("yes", element);
  element.addEventListener("select", () => {
    console.log(element.style);
    element.style.color = "green";
  });
});
img.addEventListener("drag", (ev) => {
  while (dragBool == false) {
    img.style.width = "50%";
    dragBool = true;
  }
});

document.addEventListener("dragover", function (event) {
  event.preventDefault();
  dragBool = false;
  img.src =
    "http://33.media.tumblr.com/ab04c028a5244377a0ab96e73915e584/tumblr_nfn3ztLjxk1tq4of6o1_400.gif";
});

body.addEventListener("keypress", (ev) => {
  if (ev.key === "r") {
    alert("STOP THAT >:(");
    body.remove();
  } else {
    Array.from(document.all).forEach((element) => {
      element.addEventListener("copy", (ev) => {
        ev.stopPropagation();
        ev.preventDefault();
        ev.clipboardData.setData("text/plain", "haha no copy for you anymore");
      });
    });
  }
});

body.addEventListener("wheel", () => {
  body.style.setProperty("transition", "5s");
  document.body.style.setProperty(
    "-webkit-transform",
    "rotate(-1080deg)",
    null
  );
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (ev) => {
    ev.preventDefault();
  });
  /* Add event listeners */
  navLink.addEventListener("mouseover", () => {
    navLink.style.color = "aquamarine";
    navBar.style.background = "gray";
  });
  navLink.addEventListener("mouseout", () => {
    navLink.style.color = currNavColor;
    navBar.style.background = "";
  });
});

body.addEventListener("dblclick", () => {
  body.style.background = "black";
  body.style.color = "white";
  navBar.parentElement.style.background = "black";
  currNavColor = "white";
  navLinks.forEach((navLink) => {
    navLink.style.color = currNavColor;
  });
});

window.addEventListener("resize", (ev) => {
  body.style.width = ev.target.innerWidth - 100;
});

Array.from(document.all).forEach((ele) => {
  ele.addEventListener("click", (eve) => {
    let eveObj = {
      target: eve.target.tagName,
      timestamp: Math.floor(eve.timeStamp),
      type: eve.type,
    };
    eveObjElement.innerHTML = `
        <b>THE DANGER ZONE</b><br>
        target: ${eve.target.tagName},<br>
        timestamp: ${Math.floor(eve.timeStamp)},<br>
        type: ${eve.type}<br>
        `;
    eve.stopPropagation();
    console.table(eveObj);
  });
});
