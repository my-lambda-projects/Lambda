/*
// www.sciencealert.com/13-science-facts-never-learned-high-school-2017
var facts = [];

document
  .querySelectorAll('.article-fulltext p > strong')
  .forEach(titleElem => facts.push(titleElem.innerText));
  
copy(facts);
*/

var coolFacts = [
  "1. Water can boil and freeze at the same time",
  "2. Lasers can get trapped in a waterfall",
  "3. We've got spacecraft hurtling towards the edge of our Solar System really, really fast",
  "5. You can prove Pythagoras' theorem with fluid",
  "6. This is what happens when a black hole swallows a star",
  "7. You CAN see without your glasses",
  "8. This is how a face forms in the womb",
  "9. Popping your knuckles isn't necessarily bad for you",
  "10. A single solar flare can release the equivalent energy of millions of 100-megaton atomic bombs",
  "11. Cats always land on their feet, thanks to physics",
  "12. You'd be better off surviving a grenade on land rather than underwater",
];

const myImageCss = {
  height: "225px",
  width: "300px",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: "0.2rem",
  backgroundSize: "contain",
  backgroundImage:
    'url("https://lh3.googleusercontent.com/9LQFuo-14igtId-fHkTq9bDGgjBF7DDzQwHtPWfZMc5yDB-ZWncKiMtuJNpCqarXyBVSON424POUIPphhd-RjOOQOsClhtVsBrsEWFW9nBzcEKhRa42CjoKLEK89osPkgiYxta8TSbRFk3_9-o2AALZ7ftoLEN4VBj_tlUaCoM0Zm59WmK96p3l-uLMiVnefy7ujP2Tm3JM9Rq7mW7o73LMAU4bmXreUJ8FzDga2wZ-NN_tjV_NIbOjOkpAG8AzxlQ-ye_tL3RLvGlscZondNppBhMKkWA6sCA11oWQPlDJeZbTE6_3seNbtIe_gzMHXAd_8w7espiygRx5-TfCfvuVW9s55MchDVVM91e5i36U-dgqi7nlPyfVXmZf4riZU5GfTGTmO0AdLGlpmI1r-iEkdq4GgbWqtGZVZjAwi0XNhe59_9J_FigjdeRNBLpT0pwdYzknbRK-nJjKh2wPU1MPiFihoLbaG7GCeGMvIcTHUjfpEwT3iaygwzi_3dqMc0YoJZz4T9-QsCXSPsU5iOow-VpnrH0cOkPYZnOxoGzbqx_r4Oe1ROjp9Xp724xWpOCvdsSOM94QPiyLxikxHau39fIEvNqs5NO6hfXH2baNdXIs75eaigL45jWarg4iwMXrjaDiI7n5aS2DUSuBVSaALmh3HuOhVMw=w891-h668-no"), url("https://lh3.googleusercontent.com/9LQFuo-14igtId-fHkTq9bDGgjBF7DDzQwHtPWfZMc5yDB-ZWncKiMtuJNpCqarXyBVSON424POUIPphhd-RjOOQOsClhtVsBrsEWFW9nBzcEKhRa42CjoKLEK89osPkgiYxta8TSbRFk3_9-o2AALZ7ftoLEN4VBj_tlUaCoM0Zm59WmK96p3l-uLMiVnefy7ujP2Tm3JM9Rq7mW7o73LMAU4bmXreUJ8FzDga2wZ-NN_tjV_NIbOjOkpAG8AzxlQ-ye_tL3RLvGlscZondNppBhMKkWA6sCA11oWQPlDJeZbTE6_3seNbtIe_gzMHXAd_8w7espiygRx5-TfCfvuVW9s55MchDVVM91e5i36U-dgqi7nlPyfVXmZf4riZU5GfTGTmO0AdLGlpmI1r-iEkdq4GgbWqtGZVZjAwi0XNhe59_9J_FigjdeRNBLpT0pwdYzknbRK-nJjKh2wPU1MPiFihoLbaG7GCeGMvIcTHUjfpEwT3iaygwzi_3dqMc0YoJZz4T9-QsCXSPsU5iOow-VpnrH0cOkPYZnOxoGzbqx_r4Oe1ROjp9Xp724xWpOCvdsSOM94QPiyLxikxHau39fIEvNqs5NO6hfXH2baNdXIs75eaigL45jWarg4iwMXrjaDiI7n5aS2DUSuBVSaALmh3HuOhVMw=w1029-h772-no")',
};

const topics = ["Science", "Literature", "JavaScript", "Poker", "Chess"];
const colors = {
  beige: "#FEFAE0",
  tan: "#DDA15E",
  easterBlue: "#BCF4F5",
  easterGreen: "#B4EBCA",
  easterPink: "#FFB7C3",
  greyish: "#DDD1C7",
};

/**
 * APPEND THE 3 MAIN SECTIONS TO THE BODY
 */
$(document.body)
  .append(
    `
  <main id='my-website'>
    <section id='header'></section>
    <section id='about'></section>
    <section id='fun-facts'></section>
  </main>
`
  )
  .css("background", colors.tan);

/**
 *  PUT TITLE AND IMAGE IN THE HEADER
 */
const $header = $("#header")
  .html(`<h2>My <strong><s>HTML</s>JavaScript</strong> Website</h2>`)
  .append('<div class="my-image">');

var $myimage = pinkBorder($header.find(".my-image"));

$myimage.css(myImageCss);

/**
 *  PUT BIO IN THE ABOUT SECTION
 */
var $p = pinkBorder($("<p>")).css({
  width: "90%",
  margin: "0.6rem auto",
  padding: "0.3rem",
  background: colors.beige,
  marginBottom: "2.9rem",
}).text(`My name is Michael, I'm a JavaScript developer. 
    Additionally, I enjoy ${topics.join(", ")}. This website was 
    made using JavaScript and jQuery. HTML is just side-effect!`);

$p.appendTo("#about");

const $funFacts = buildFacts(coolFacts);

animateFacts("#fun-facts .fun-fact");

// Animate the facts list
function animateFacts(factsElems) {
  var $allFacts = $(factsElems).hide();

  setInterval(function () {
    const $hiddenFacts = $allFacts.not(".visible");

    const $visibleFact = $allFacts.filter(".visible");

    const i = Math.floor(Math.random() * $hiddenFacts.length);

    $visibleFact.slideUp(500).removeClass("visible");

    $hiddenFacts.eq(i).delay(700).slideDown(600).addClass("visible");
  }, 3800);
}

// Build the facts list html
function buildFacts(facts) {
  for (let i = 0; i < facts.length; i++) {
    const fact = facts[i];
    const $nextFact = $(`<h3 class='fun-fact'>${fact}</h3>`).css({
      padding: "0.6rem",
      margin: "0.6rem auto",
      background: colors.easterGreen,
      width: "80%",
      maxWidth: "600px",
      border: `3px solid ${colors.easterBlue}`,
    });

    $("#fun-facts").append($nextFact);
  }

  return $("#fun-facts .fun-fact");
}

// put a pink border on an element
function pinkBorder($elem) {
  return $($elem).css({
    border: `2px solid ${colors.easterPink}`,
    borderRadius: "0.5rem",
  });
}
