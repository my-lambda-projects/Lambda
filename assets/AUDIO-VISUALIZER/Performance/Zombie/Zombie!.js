(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Zombie__atlas_", frames: [[216,0,214,480],[0,0,214,480]]}
];


// symbols:



(lib.zombBW = function() {
	this.spriteSheet = ss["Zombie__atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.zombCol = function() {
	this.spriteSheet = ss["Zombie__atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#323232","#111111"],[0,0.51,1],70.5,-48.5,0,70.5,-48.5,217.3).s().p("A13NSIAA6jMArvAAAIAAajg");
	this.shape.setTransform(79.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.light, new cjs.Rectangle(-60.5,-70.5,280,170), null);


(lib.col = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zombCol();
	this.instance.parent = this;
	this.instance.setTransform(-107,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.col, new cjs.Rectangle(-107,-240,214,480), null);


(lib.bw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zombBW();
	this.instance.parent = this;
	this.instance.setTransform(-107,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bw, new cjs.Rectangle(-107,-240,214,480), null);


// stage content:
(lib.Zombie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Layer 2
	this.instance = new lib.bw();
	this.instance.parent = this;
	this.instance.setTransform(288,263);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

	// Layer 1
	this.instance_1 = new lib.col();
	this.instance_1.parent = this;
	this.instance_1.setTransform(288,263);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(58).to({_off:false},0).to({alpha:1},61).wait(1));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAH+AhLQgFAAgDgCIg+g6IAAgKQAEhqAkhKQAAgFgCgEQgPgxgXgqIAAgKIAAhQIgFAAQgFhaAAhaIgBgKQgdiBgUiNIgFAAQgFg3AAg3IAAgKIAAgeIgFAAQgFhQAAhQQAAgFgCgEQgSgpgUgoIAAgKIAAhGQgFAAgBgBQhmlQiEkvQg3B5gzB/QgwB1gZCRQAAAFgCAEQgvBNgpBUIgBAKQgsFjhVE7IAABGIAAAKIAAAKQAHA/gRAlIgBAKQgUBYgJA0QAAAFACABQBtA+gVCOQgFAAgEACQiJBFhyhbQAAgFgCgEQgdg8g7gfIgFAAQgNhwgWhiQAFAAACgCQADgDAAgFIAAgKIAAhaIAKAAIAAgKQA0isAIjaIAAgKIAAgKIAAhQIAKAAIAAgKQAThaAjhOQABgCAFAAQAUi9ATi/IABgKIAAgKIAAhaIAKAAIAAgKIAAhGIAAgKIAAhGIAKAAIABgKQAWiMgXhaIgFAAQgFgsAAgtIAKAAIAAgKIAAgUQAcjyApjkIABgKIAAgKIAAhQIgBgJQgNg5gGhAQgvBKgHB0QgHBugdBaIAAAKQARAcgMAzQAAABgFAAIAAAKQAHAwgRAWIAACMIAAAKQARAhgMA4QAAABgFAAQAAAFgCABQgIAEgKAAQAzBigjB1QgBAEgPAAIgKAAIAAAKQAAAFgCABQhbAcBTAaQAmAHggARIgLAGQANAbgSAhIgKABQhAAMg4hdIgBgKQgGgwgNgqIgFAAQgFg8AAg8IAKAAIAAgKQAIg/gwgGIgFAAQgFiRAAiRIAKAAIAAgKIAAgKIAAgKIAAigIAKAAIAAgKIAAgeQBCobBxnNIABgKQCkg4CThIQAEgCAFAAQA7hkB5gmQAFgCAFAAIAAh4IAAgKQA2hQA+hIQADgDAAgFQBRgSBZgLIAKgBQA/AbAsAuQADACAAAFQAbANACAlIABAKIAFABQAKCHgZBoQgFAAgCADQgkAxglAwQgCAlAqgCIAAAFQAeAKAcAOQACABAAAFQCNAOgGCmIAFAAQARAmgHA+IAAAKQARAwgHBIIAAAKIAAAKIAAAKQARAmgHA+IAAAKQARAIgGAgIgBAKQARAcgHA0IAAAKQAJBMAKBKIABAKQARAcgHA0IAAAKQAZA3AEBLIABAKQARAXgHAvIAAAKQAoDoATDjIABAKQARAmgHA+IAAAKIgBAKQgJA9geAnIgPAKQgGhTg7A1QAAAFgBABQgTAEgUAAIAAAKQApBoASB+IABAKIABAKQACALgBAIQAEBAgGBXIAAAKQAQAegGAyIAAAKQARAXgHAvIAAAKIAABQIAAAKQA4BpgGClIAAAKQARAhgHA5IAAAKQAEBgAPBUIABAKQARAhgMA4QAAABgFAAIAAAKQAHC9gbDxQgFAAgCADQgtA9hqAAQgYAAgcgEg");
	mask.setTransform(284,261.7);

	// Layer 4
	this.instance_2 = new lib.light();
	this.instance_2.parent = this;
	this.instance_2.setTransform(322.5,192.3,2.5,2.529);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:3.75,scaleY:3.79,x:-166.5,y:240.3},115).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(581,223,214,480);
// library properties:
lib.properties = {
	id: '27C8CD2244DA4F51A507421D66FAE2F2',
	width: 800,
	height: 400,
	fps: 24,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/Zombie__atlas_.png?1522547284064", id:"Zombie__atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['27C8CD2244DA4F51A507421D66FAE2F2'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;