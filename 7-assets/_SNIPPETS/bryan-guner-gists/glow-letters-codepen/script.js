var otTitle = document.getElementById("textBox"),
		sSpan = document.getElementsByClassName('text').length,
		letters = document.getElementsByClassName('text'),
		whichLetter = 0,
		trailAmount = 7;


//Used to get random colors
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

//Animate color change 
setInterval(function() {
	var rColor = getRandomColor();
	var tColor = getRandomColor();
	if (whichLetter < sSpan + trailAmount) {
		if (whichLetter > (trailAmount - 1)) {
			letters[(whichLetter - trailAmount)].style.color = 'whitesmoke';
		}
		if (whichLetter < sSpan) {
			letters[whichLetter].style.color = rColor;
			letters[whichLetter].style.textShadow = '0px 0px 10px ' + tColor;
		}
		whichLetter++;
	} else if (whichLetter > sSpan + (trailAmount - 1)) whichLetter = 0;
}, 75)