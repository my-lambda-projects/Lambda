

var lastTime = 0;
var vendors = ['ms', 'moz', 'webkit', 'o'];
for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                               || window[vendors[x]+'CancelRequestAnimationFrame'];
}
if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
          timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
window.requestAnimFrame = window.requestAnimationFrame;

var width = 480;
var height = 320;
var bunnyW, bunnyH;

var wabbitTexture;

var bunnys = [];
var gravity = 0.75;

var maxX = width;
var minX = 0;
var maxY = height;
var minY = 0;

var startBunnyCount = 100;
var isAdding = false;
var count = 0;
var container;
var mode;

var amount = 20;

function onReady() {
	stage = new (location.search.match(/c2d/i) ? createjs.Stage : createjs.StageGL)("renderer");
	renderer = stage;
	
	mode = renderer._webGLContext ? "webgl" : "c2d";
	
	if (mode == "c2d") {
		renderer.canvas.getContext("2d").mozImageSmoothingEnabled = false
		renderer.canvas.getContext("2d").webkitImageSmoothingEnabled = false;
	}
	renderer.canvas.style.position = "absolute";
	stats = new Stats();
	
	wabbitTexture = new createjs.Bitmap("snowflake.png"); // "heart.png"
	wabbitTexture.image.addEventListener("load", _handleTextureLoaded.bind(this));
	
	document.body.appendChild( stats.domElement );
	stats.domElement.style.position = "absolute";
	stats.domElement.style.top = "0px";

	requestAnimFrame(update);

	counter = document.createElement("div");
	counter.className = "counter";
	document.body.appendChild( counter);
	
	container = stage;
	// stage.addChild(container);
	
	stage.addChild(new createjs.Bitmap("bg.jpg"));
	
	stage.on("stagemousedown", function() {
		isAdding = true;
	});
	
	stage.on("stagemouseup", function(){
		isAdding = false;
	});
	
	resize();
}

function _handleTextureLoaded (event) {
	bunnyW = wabbitTexture.image.width;
	bunnyH = wabbitTexture.image.height;
	wabbitTexture.regX = bunnyW;
	wabbitTexture.regY = bunnyH;
	resize();
	addBunnies(startBunnyCount);
}

function onTouchStart(event)
{
	isAdding = true;
}

function onTouchEnd(event)
{
	isAdding = false;
}

function resize()
{

	var width = window.innerWidth; 
	var height = window.innerHeight; 
	
	if(width > 800)width  = 800;
	if(height > 600)height = 600;
	
	maxX = width+bunnyW;
	minX = 0;
	maxY = height+bunnyH;
	minY = 0;
	
	var w = window.innerWidth / 2 - width/2;
	var h = window.innerHeight / 2 - height/2;
	
	renderer.canvas.style.left = w + "px"
	renderer.canvas.style.top = h + "px"
	
	stats.domElement.style.left = w + "px";
	stats.domElement.style.top = h+10 + "px";
	
	counter.style.left = w + "px";
	counter.style.top = h + 50 + 10 + "px";
	
	
	renderer.canvas.width = width;
	renderer.canvas.height = height;
}

var tickCount = 0;
function update() {
	stats.begin();
	
	tickCount++;
	var velX = Math.sin(tickCount*0.005)*15;
	if(isAdding) {
		addBunnies(amount);
	}
	
	for (var i = 0; i < bunnys.length; i++) {
		var bunny = bunnys[i];
		
		bunny.x += (bunny.speedX+velX)*bunny.scaleX;
		bunny.y += bunny.speedY*bunny.scaleY;
		
		bunny.x = (bunny.x+maxX)%maxX;
		if (bunny.y > maxY) { bunny.y = 0; }
		
		
	}

	renderer.update();
	requestAnimFrame(update);
	stats.end();
}

function addBunnies(amount) {
	for (var i = 0; i < amount; i++) {
		var bunny = wabbitTexture.clone();
		var sc = Math.random()*0.7+0.3;
		bunny.set({x:Math.random()*maxX, y:0});
		bunny.speedX = (Math.random() * 10 - 5);
		bunny.speedY = (Math.random() * 5 + 5);
		bunny.rotation = Math.random()*360;
		bunny.scaleX = bunny.scaleY = sc;
		
		bunnys.push(bunny);
		
		var random = Math2.randomInt(0, container.children.length-2);
		container.addChild(bunny)//, random);
		
		count++;
	}
	counter.innerHTML = count;// + " BUNNIES";
}
