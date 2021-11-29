const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

var print = (x) => {
  console.log(x);
};
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
let navBar = document.querySelector("nav");
let ctaText = document.querySelector(".cta-text h1");
let ctaButton = document.querySelector(".cta-text button");
let ctaImg = document.getElementById("cta-img");
let topContent = document.querySelector(".top-content");
let middleImg = document.querySelector(".middle-img");
let bottomContent = document.querySelector(".bottom-content");
let contactContent = document.querySelector(".contact");
let copyrightInfo = document.querySelector("footer p");
let navLinks = document.querySelector("nav");

logo.setAttribute("src", siteContent["nav"]["img-src"]);
ctaImg.setAttribute("src", siteContent.cta["img-src"]);
ctaText.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;
topContent.children[0].children[0].textContent =
  siteContent["main-content"]["features-h4"];
topContent.children[0].children[1].textContent =
  siteContent["main-content"]["features-content"];
topContent.children[1].children[0].textContent =
  siteContent["main-content"]["about-h4"];
topContent.children[1].children[1].textContent =
  siteContent["main-content"]["about-content"];
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let currentItemDivisor = -1;
let currentItem = -1;

for (let i = 5; i < Object.keys(siteContent["main-content"]).length; i++) {
  let currentContent =
    siteContent["main-content"][Object.keys(siteContent["main-content"])[i]];
  currentItem += 1;
  if (Number.isInteger((i - 5) / 2)) {
    currentItemDivisor += 1;
    currentItem = 0;
  }
  console.log(currentItemDivisor);

  bottomContent.children[currentItemDivisor].children[currentItem].textContent =
    currentContent;
}

contactIterator = -1;
for (const item in siteContent.contact) {
  contactIterator++;
  console.log(
    (contactContent.children[contactIterator].textContent =
      siteContent.contact[item])
  );
}

navBar.innerHTML = "";
for (const item in siteContent.nav) {
  if (item.includes("nav-item")) {
    navBar.innerHTML += `<a href="#test" aria-label='${item}'>${siteContent.nav[item]}</a>\n`;
  }
}

const yepNode = document.createElement("a");
yepNode.href = "#yep";
yepNode.innerText = "Yep!";
const nopeNode = document.createElement("a");
nopeNode.href = "#nope";
nopeNode.innerText = "Nope!";

console.log(navLinks);
copyrightInfo.innerHTML = siteContent.footer.copyright;

navBar.appendChild(yepNode);
navBar.prepend(nopeNode);

for (let i of navLinks.children) {
  console.log(i);
  i.style.color = "green";
}
