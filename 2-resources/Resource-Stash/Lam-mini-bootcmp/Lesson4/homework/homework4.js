// From lecture:
document.getElementById('about_header').innerHTML = 'JavaScript\'s About Me';
// Homework Assignment:
// 1. Change the background color of the entire document to red
document.body.style.backgroundColor = '#ff0000';
// 2. Change the background color of just the "about me" portion to blue
document.getElementById('about_header').style.backgroundColor = '#0000ff';
// 3. Change the font-style of the entire document to sans-serif
document.body.style.fontFamily = 'sans-serif';
// 4. Add your nickname
document.getElementById('nickname').innerHTML = 'JavaScript says it\'s, "mixelpix."';
// 5. Add your favorites
document.getElementById('favorites').innerHTML = 'JavaScript says it\'s, "Korean food, my dog \'Lucy\' & philosophy."';
// 6. Add your hometown
document.getElementById('hometown').innerHTML = 'JavaScript says it\'s, "Kailua, HI."';

// Extra Credit 1: Iterate through each li and change the class to "listitem".
var allListItems = document.getElementsByTagName('li');
// console.log(allListItems)
for (var i = 0; i < allListItems.length; i++) {
  allListItems[i].className = 'listitem';
};

// Extra Credit 1: Add a style tag that sets a rule for "listitem" to make the color red.
var allListItemsByClass = document.getElementsByClassName('listitem');
// console.log(allListItemsByClass);
// w3c compliance requires b.g. color be declared with (?) text color:
// https://www.w3schools.com/css/css_text.asp
for (var i = 0; i < allListItemsByClass.length; i++) {
  allListItemsByClass[i].style.color = '#ff0000';
  allListItemsByClass[i].style.backgroundColor = '#ffff00';
};

// Extra Credit 2: Create a new img element and set its src attribute to a picture of you.
var image = document.createElement('img');
image.setAttribute('src', 'IMG_1488.JPG');
image.setAttribute('alt', 'JavaScript says, "it\'s Lucy wearing mixelpix\'s gardening hat!"');
image.style.transform = 'rotate(90deg)';
image.style.paddingTop = '150px';
image.style.width='100%';

// Extra Credit 2: Append that element to the page.
document.body.appendChild(image);
