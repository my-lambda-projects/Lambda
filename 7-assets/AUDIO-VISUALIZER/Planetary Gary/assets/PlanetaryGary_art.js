(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [];


// symbols:
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


(lib.StartBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0C924").s().p("AAAA+IgHgBQgKAAgKgFQgVgGgGgWQgDgKACgMQADgKAIgIQADgKAIgIQADgOAIgIQAJgJANAAQARAAAKANQAQAFAHANQAGANABAOQABAPgIALQgFAHgEADQgFANgLAIQgKAIgNAAIgCAAg");
	this.shape.setTransform(86.1,0.1,0.366,0.366);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0C924").s().p("AgaAxQgNgGgGgLIgCgCQgHgKABgOQAAgKAEgLQAGgLAJgGIAFgDQAWgUAQABQATACAMAMQAIAHAFANIAAABQACAFAAAGQAAAGgCAEIAAABIgBABIAAACQAAAZgXAPQgJAGgVACIgEABQgKAAgLgGg");
	this.shape_1.setTransform(-101.2,-0.1,0.366,0.366);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0C924").s().p("AitAmQgUgEgBgYQAAgXAVgDQAfgGAvABIBOAAQBegCBPgZQAYgHALAZQALAagXAKQhJAkhkAHQgWABgXAAQhCAAhEgMg");
	this.shape_2.setTransform(70.9,5.6,0.366,0.366);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E0C924").s().p("AhFAUQgLgYAWgMQAbgOAcgFQAggGAYAIQAVAHAAAVQAAATgVAHQgIADgPAAIgXABQgYAEgTAHQgGADgFAAQgPAAgHgTg");
	this.shape_3.setTransform(67,1.9,0.366,0.366);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E0C924").s().p("AAFAkIhdgLQgegDAAgcQgBgeAfgBQApgDA0AHQAiAEA8ALQAUAEAAAXQAAAYgUADQgTADgYAAQgXAAgcgDg");
	this.shape_4.setTransform(68.1,-3.1,0.366,0.366);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0C924").s().p("AgBCAIgKhAQgGgogFgYIgGg1QgDghgNgSQgPgTAWgQQAVgRAQATQARAVAGAfIAIA5QAEAZAKAxQAJAtgEAeQgCAWgXAEIgHABQgRAAgCgUg");
	this.shape_5.setTransform(64,1.6,0.366,0.366);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E0C924").s().p("AjoCNQgDhdAHgxQANhnA1gHQAtgGAlAtQASAWAjBEQAJgRAIghIAJgrQAJgnAHgOQAOgfAXgIQAygSArBgQANAbAYBSQAUBEAaAnQAOAVgUAOQgUAOgTgPQgkgdgUg8QgThHgKggQgNgsgOgUIgCADQgJAdgUBPQgYBEgrANQgLADgJgEQgKgFgGgJIgthJQgkg7ABgBQgXAbgEBBQgBAkABBAQgBAegeAAQgdAAgCgeg");
	this.shape_6.setTransform(51.9,0.8,0.366,0.366);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E0C924").s().p("AAzAjQgVgNgkAAQgqACgUgBQgbgBAAgaQAAgbAbgCIBSgHQAxAAAYAdQAQASgPAVQgIANgMAAQgIAAgJgGg");
	this.shape_7.setTransform(31.7,2.4,0.366,0.366);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0C924").s().p("AB3C7QgsglgbhzQgbhygtglQgngegVAgQgNAUgIA0QgJA1gCBuQgBAagbAAQgbAAAAgaQgCiCANhCQAbiJBXAUQBZAVAuB9QAMAiAWBGQAUA9AXAgQAQAVgWAQQgLAHgKAAQgLAAgJgIg");
	this.shape_8.setTransform(33.4,1.6,0.366,0.366);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E0C924").s().p("ABDBeQgdgNgGgpQgEgZAFgxQhBABgrALQgbAGgHgaQgHgaAagKQAigMAsgEQAWgCA5gBQANAAAJAKQAJAJAAANIgBAkQgCAYABAMQAAANAFAPIAJAaQAGAUgQALQgJAGgKAAQgHAAgHgEg");
	this.shape_9.setTransform(18,3.5,0.366,0.366);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E0C924").s().p("AhSCGQgrgfgVgoQgYgvAMguQAMguAnglQAlgjAwgOQAwgPArAOQAvAQAZAxQAMAXgWANQgWANgOgWQgSgcghgGQgfgGghAOQghANgVAZQgXAbABAfQABAdAUAaQATAWAeAOQAmASAmgFQAYgDAzgUQAZgKAKAbQALAagWANQg7Aig6ABIgFAAQg6AAgzglg");
	this.shape_10.setTransform(15,0.4,0.366,0.366);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E0C924").s().p("ABJAkQg4gPgZAAQgVAAg2AGQgvAGgcgCQgdgBABgbQAAgbAcgDIBTgOQAzgJAfAEQAeADAxAMQA5APAWADQAbAFgFAbQgFAbgaACIgJAAQgdAAgtgMg");
	this.shape_11.setTransform(-17.6,-5.6,0.366,0.366);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E0C924").s().p("AAAClQgng4gKhgQgGg6AFhoQACgdAcAAQAcAAABAdIADBLQADAtADAdQAEAfALApIATBHQAHAYgXAJQgHADgHAAQgNAAgJgOg");
	this.shape_12.setTransform(-16.1,0,0.366,0.366);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E0C924").s().p("ACICzQgpgmgYgPQgcgShHggQhBgdghgXQgUgOAGgXQAGgYAZAAQBUgBAvgQIAWgIQAHgFgJgKQgrgugtgJQgigHgZADQgkAEgLAYQgQAhABAyQABBaAZA5QANAHACAQIACAPQAAAYgVAEQgVAFgNgSQglgwgMhPQgLhHANhBQAQhMA0gXQAigPArgBQArAAAjAOQA7AZAlAtQAwA6gwAsQgbAZg1ALQAsATAVAMIApAYQAXAPAOAOIAaAaQAOANARAGQATAHABAWQACAXgWADIgNABQggAAgggZg");
	this.shape_13.setTransform(-32,-0.4,0.366,0.366);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E0C924").s().p("AhuAeQgRgWASgQQAigfBCgDQA1gCA2APQAUAFABAWQAAAVgVAFQgRAFgbgBIgtgBQgbgCgPABQgbABgNAKQgIAGgIAAQgLAAgKgNg");
	this.shape_14.setTransform(-50.9,0.1,0.366,0.366);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E0C924").s().p("ABXCjQgRhJgQgyQgXhDgcgxQgSgfgFgFQgRgSgNAVQg0BUAWB/QAFAbgaAHQgZAHgIgaQgThFAHhCQAIhLAlg2QAWgfAggGQAhgGAbAYQAeAaAZAvQAOAdAVA4QAhBaAMBAQAGAegeAJQgHACgGAAQgTAAgFgYg");
	this.shape_15.setTransform(-50.7,0.4,0.366,0.366);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E0C924").s().p("AihAoQgXgJAIgWQAOgiAzgLQAagGA6AAQBTAABlAQQAaAEgFAZQgFAZgYADQgdADgrgCIhIgEQgogEgegBQg4gCgFAJQgIANgNAAQgGAAgIgDg");
	this.shape_16.setTransform(-67.8,-5.5,0.366,0.366);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E0C924").s().p("AASCUQgXgBgEgTQgUhUgIgrQgNhLAKg0QAFgYAbAEQAaADgDAYQgEApAUBSQATBRgGArQgDAUgWAAIgBAAg");
	this.shape_17.setTransform(-68.4,0,0.366,0.366);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E0C924").s().p("AiHCJQgUgNAKgZQAJgYAYAJIA/AbQAnAPAbgCQAUgBAcgRQAggUgTgQQgXgTg0gUQg1gVgWgQQgtgigOgtQgQg2AzgdQAvgbA8ANQA5ALApAnQAUATgUATQgTASgVgQQgZgUgqgKQgxgMgTAVQgQASAfAaQAUARAeANQAWALA0AVQAtAUATAcQAXAigVApQgSAlgmASQgiAQgmAAQhDAAhPgyg");
	this.shape_18.setTransform(-83.1,-0.8,0.366,0.366);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5E5E5E").s().p("EgzjAA8QgZAAgRgSQgSgRAAgZQAAgYASgRQARgSAZAAMBnHAAAQAZAAASASQARARAAAYQAAAZgRARQgSASgZAAg");
	this.shape_19.setTransform(-7.2,-23.3,0.366,0.366);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("Egy5AD9Qg0ABgkgkQgkgiAAgyIAMmCQAQAeAdASQAfASAkAAMBlzAAAQAjAAAdgRQAcgQARgcIAPF9QAAAygkAiQgkAkg0gBg");
	this.shape_20.setTransform(-6.9,9.9,0.366,0.366);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Eg0+ALVQhAAAgtgqQgtgrAAg8IAoyHQAAg8AtgrQAtgqBAAAMBojAAAQA/AAAuAqQAsArABA8IAySHQAAA8guArQgtAqg/AAgEg1fgKGQgfAcAAAnIgpSIQABAnAeAcQAfAbArAAMBp9AAAQArAAAegbQAegcABgnIgyyIQAAgngegcQgfgcgrAAMhojAAAQgrAAgeAcg");
	this.shape_21.setTransform(-6.7,-1.9,0.366,0.366);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4C4C4C").s().p("Eg0+AK8Qg2AAgmgjQglgjAAgyIAoyHQAAgyAmgjQAmgjA1AAMBojAAAQA1AAAmAjQAmAjAAAyIAySHQAAAygmAjQglAjg2AAg");
	this.shape_22.setTransform(-6.7,-1.9,0.366,0.366);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFCC").s().p("AAAA+IgHgBQgKAAgKgFQgVgGgGgWQgDgKACgMQADgKAIgIQADgKAIgIQADgOAIgIQAJgJANAAQARAAAKANQAQAFAHANQAGANABAOQABAPgIALQgFAHgEADQgFANgLAIQgKAIgNAAIgCAAg");
	this.shape_23.setTransform(95.5,0.3,0.402,0.402);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFCC").s().p("AgaAxQgNgGgGgLIgCgCQgHgKABgOQAAgKAEgLQAGgLAJgGIAFgDQAWgUAQABQATACAMAMQAIAHAFANIAAABQACAFAAAGQAAAGgCAEIAAABIgBABIAAACQAAAZgXAPQgJAGgVACIgEABQgKAAgLgGg");
	this.shape_24.setTransform(-110.5,0.1,0.402,0.402);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFCC").s().p("AitAmQgUgEgBgYQAAgXAVgDQAfgGAvABIBOAAQBegCBPgZQAYgHALAZQALAagXAKQhJAkhkAHQgWABgXAAQhCAAhEgMg");
	this.shape_25.setTransform(78.9,6.4,0.402,0.402);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFCC").s().p("AhFAUQgLgYAWgMQAbgOAcgFQAggGAYAIQAVAHAAAVQAAATgVAHQgIADgPAAIgXABQgYAEgTAHQgGADgFAAQgPAAgHgTg");
	this.shape_26.setTransform(74.6,2.2,0.402,0.402);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFCC").s().p("AAFAkIhdgLQgegDAAgcQgBgeAfgBQApgDA0AHQAiAEA8ALQAUAEAAAXQAAAYgUADQgTADgYAAQgXAAgcgDg");
	this.shape_27.setTransform(75.8,-3.2,0.402,0.402);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFCC").s().p("AgBCAIgKhAQgGgogFgYIgGg1QgDghgNgSQgPgTAWgQQAVgRAQATQARAVAGAfIAIA5QAEAZAKAxQAJAtgEAeQgCAWgXAEIgHABQgRAAgCgUg");
	this.shape_28.setTransform(71.3,1.9,0.402,0.402);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFCC").s().p("AjoCNQgDhdAHgxQANhnA1gHQAtgGAlAtQASAWAjBEQAJgRAIghIAJgrQAJgnAHgOQAOgfAXgIQAygSArBgQANAbAYBSQAUBEAaAnQAOAVgUAOQgUAOgTgPQgkgdgUg8QgThHgKggQgNgsgOgUIgCADQgJAdgUBPQgYBEgrANQgLADgJgEQgKgFgGgJIgthJQgkg7ABgBQgXAbgEBBQgBAkABBAQgBAegeAAQgdAAgCgeg");
	this.shape_29.setTransform(58,1.1,0.402,0.402);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFCC").s().p("AAzAjQgVgNgkAAQgqACgUgBQgbgBAAgaQAAgbAbgCIBSgHQAxAAAYAdQAQASgPAVQgIANgMAAQgIAAgJgGg");
	this.shape_30.setTransform(35.7,2.8,0.402,0.402);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFCC").s().p("AB3C7QgsglgbhzQgbhygtglQgngegVAgQgNAUgIA0QgJA1gCBuQgBAagbAAQgbAAAAgaQgCiCANhCQAbiJBXAUQBZAVAuB9QAMAiAWBGQAUA9AXAgQAQAVgWAQQgLAHgKAAQgLAAgJgIg");
	this.shape_31.setTransform(37.6,1.9,0.402,0.402);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFCC").s().p("ABDBeQgdgNgGgpQgEgZAFgxQhBABgrALQgbAGgHgaQgHgaAagKQAigMAsgEQAWgCA5gBQANAAAJAKQAJAJAAANIgBAkQgCAYABAMQAAANAFAPIAJAaQAGAUgQALQgJAGgKAAQgHAAgHgEg");
	this.shape_32.setTransform(20.7,4,0.402,0.402);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFCC").s().p("AhSCGQgrgfgVgoQgYgvAMguQAMguAnglQAlgjAwgOQAwgPArAOQAvAQAZAxQAMAXgWANQgWANgOgWQgSgcghgGQgfgGghAOQghANgVAZQgXAbABAfQABAdAUAaQATAWAeAOQAmASAmgFQAYgDAzgUQAZgKAKAbQALAagWANQg7Aig6ABIgFAAQg6AAgzglg");
	this.shape_33.setTransform(17.4,0.6,0.402,0.402);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFCC").s().p("ABJAkQg4gPgZAAQgVAAg2AGQgvAGgcgCQgdgBABgbQAAgbAcgDIBTgOQAzgJAfAEQAeADAxAMQA5APAWADQAbAFgFAbQgFAbgaACIgJAAQgdAAgtgMg");
	this.shape_34.setTransform(-18.5,-6,0.402,0.402);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFCC").s().p("AAAClQgng4gKhgQgGg6AFhoQACgdAcAAQAcAAABAdIADBLQADAtADAdQAEAfALApIATBHQAHAYgXAJQgHADgHAAQgNAAgJgOg");
	this.shape_35.setTransform(-16.8,0.1,0.402,0.402);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFCC").s().p("ACICzQgpgmgYgPQgcgShHggQhBgdghgXQgUgOAGgXQAGgYAZAAQBUgBAvgQIAWgIQAHgFgJgKQgrgugtgJQgigHgZADQgkAEgLAYQgQAhABAyQABBaAZA5QANAHACAQIACAPQAAAYgVAEQgVAFgNgSQglgwgMhPQgLhHANhBQAQhMA0gXQAigPArgBQArAAAjAOQA7AZAlAtQAwA6gwAsQgbAZg1ALQAsATAVAMIApAYQAXAPAOAOIAaAaQAOANARAGQATAHABAWQACAXgWADIgNABQggAAgggZg");
	this.shape_36.setTransform(-34.4,-0.3,0.402,0.402);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFCC").s().p("AhuAeQgRgWASgQQAigfBCgDQA1gCA2APQAUAFABAWQAAAVgVAFQgRAFgbgBIgtgBQgbgCgPABQgbABgNAKQgIAGgIAAQgLAAgKgNg");
	this.shape_37.setTransform(-55.1,0.3,0.402,0.402);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFCC").s().p("ABXCjQgRhJgQgyQgXhDgcgxQgSgfgFgFQgRgSgNAVQg0BUAWB/QAFAbgaAHQgZAHgIgaQgThFAHhCQAIhLAlg2QAWgfAggGQAhgGAbAYQAeAaAZAvQAOAdAVA4QAhBaAMBAQAGAegeAJQgHACgGAAQgTAAgFgYg");
	this.shape_38.setTransform(-55,0.6,0.402,0.402);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFCC").s().p("AihAoQgXgJAIgWQAOgiAzgLQAagGA6AAQBTAABlAQQAaAEgFAZQgFAZgYADQgdADgrgCIhIgEQgogEgegBQg4gCgFAJQgIANgNAAQgGAAgIgDg");
	this.shape_39.setTransform(-73.8,-5.9,0.402,0.402);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFCC").s().p("AASCUQgXgBgEgTQgUhUgIgrQgNhLAKg0QAFgYAbAEQAaADgDAYQgEApAUBSQATBRgGArQgDAUgWAAIgBAAg");
	this.shape_40.setTransform(-74.5,0.1,0.402,0.402);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFCC").s().p("AiHCJQgUgNAKgZQAJgYAYAJIA/AbQAnAPAbgCQAUgBAcgRQAggUgTgQQgXgTg0gUQg1gVgWgQQgtgigOgtQgQg2AzgdQAvgbA8ANQA5ALApAnQAUATgUATQgTASgVgQQgZgUgqgKQgxgMgTAVQgQASAfAaQAUARAeANQAWALA0AVQAtAUATAcQAXAigVApQgSAlgmASQgiAQgmAAQhDAAhPgyg");
	this.shape_41.setTransform(-90.6,-0.7,0.402,0.402);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF9900").s().p("AAAA+IgHgBQgKAAgKgFQgVgGgGgWQgDgKACgMQADgKAIgIQADgKAIgIQADgOAIgIQAJgJANAAQARAAAKANQAQAFAHANQAGANABAOQABAPgIALQgFAHgEADQgFANgLAIQgKAIgNAAIgCAAg");
	this.shape_42.setTransform(81.8,0,0.349,0.349);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF9900").s().p("AgaAxQgNgGgGgLIgCgCQgHgKABgOQAAgKAEgLQAGgLAJgGIAFgDQAWgUAQABQATACAMAMQAIAHAFANIAAABQACAFAAAGQAAAGgCAEIAAABIgBABIAAACQAAAZgXAPQgJAGgVACIgEABQgKAAgLgGg");
	this.shape_43.setTransform(-96.8,-0.2,0.349,0.349);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF9900").s().p("AitAmQgUgEgBgYQAAgXAVgDQAfgGAvABIBOAAQBegCBPgZQAYgHALAZQALAagXAKQhJAkhkAHQgWABgXAAQhCAAhEgMg");
	this.shape_44.setTransform(67.3,5.3,0.349,0.349);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF9900").s().p("AhFAUQgLgYAWgMQAbgOAcgFQAggGAYAIQAVAHAAAVQAAATgVAHQgIADgPAAIgXABQgYAEgTAHQgGADgFAAQgPAAgHgTg");
	this.shape_45.setTransform(63.6,1.7,0.349,0.349);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF9900").s().p("AAFAkIhdgLQgegDAAgcQgBgeAfgBQApgDA0AHQAiAEA8ALQAUAEAAAXQAAAYgUADQgTADgYAAQgXAAgcgDg");
	this.shape_46.setTransform(64.6,-3,0.349,0.349);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF9900").s().p("AgBCAIgKhAQgGgogFgYIgGg1QgDghgNgSQgPgTAWgQQAVgRAQATQARAVAGAfIAIA5QAEAZAKAxQAJAtgEAeQgCAWgXAEIgHABQgRAAgCgUg");
	this.shape_47.setTransform(60.7,1.4,0.349,0.349);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF9900").s().p("AjoCNQgDhdAHgxQANhnA1gHQAtgGAlAtQASAWAjBEQAJgRAIghIAJgrQAJgnAHgOQAOgfAXgIQAygSArBgQANAbAYBSQAUBEAaAnQAOAVgUAOQgUAOgTgPQgkgdgUg8QgThHgKggQgNgsgOgUIgCADQgJAdgUBPQgYBEgrANQgLADgJgEQgKgFgGgJIgthJQgkg7ABgBQgXAbgEBBQgBAkABBAQgBAegeAAQgdAAgCgeg");
	this.shape_48.setTransform(49.2,0.7,0.349,0.349);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF9900").s().p("AAzAjQgVgNgkAAQgqACgUgBQgbgBAAgaQAAgbAbgCIBSgHQAxAAAYAdQAQASgPAVQgIANgMAAQgIAAgJgGg");
	this.shape_49.setTransform(30,2.2,0.349,0.349);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF9900").s().p("AB3C7QgsglgbhzQgbhygtglQgngegVAgQgNAUgIA0QgJA1gCBuQgBAagbAAQgbAAAAgaQgCiCANhCQAbiJBXAUQBZAVAuB9QAMAiAWBGQAUA9AXAgQAQAVgWAQQgLAHgKAAQgLAAgJgIg");
	this.shape_50.setTransform(31.6,1.4,0.349,0.349);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF9900").s().p("ABDBeQgdgNgGgpQgEgZAFgxQhBABgrALQgbAGgHgaQgHgaAagKQAigMAsgEQAWgCA5gBQANAAAJAKQAJAJAAANIgBAkQgCAYABAMQAAANAFAPIAJAaQAGAUgQALQgJAGgKAAQgHAAgHgEg");
	this.shape_51.setTransform(16.9,3.2,0.349,0.349);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF9900").s().p("AhSCGQgrgfgVgoQgYgvAMguQAMguAnglQAlgjAwgOQAwgPArAOQAvAQAZAxQAMAXgWANQgWANgOgWQgSgcghgGQgfgGghAOQghANgVAZQgXAbABAfQABAdAUAaQATAWAeAOQAmASAmgFQAYgDAzgUQAZgKAKAbQALAagWANQg7Aig6ABIgFAAQg6AAgzglg");
	this.shape_52.setTransform(14,0.2,0.349,0.349);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF9900").s().p("ABJAkQg4gPgZAAQgVAAg2AGQgvAGgcgCQgdgBABgbQAAgbAcgDIBTgOQAzgJAfAEQAeADAxAMQA5APAWADQAbAFgFAbQgFAbgaACIgJAAQgdAAgtgMg");
	this.shape_53.setTransform(-17.1,-5.4,0.349,0.349);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF9900").s().p("AAAClQgng4gKhgQgGg6AFhoQACgdAcAAQAcAAABAdIADBLQADAtADAdQAEAfALApIATBHQAHAYgXAJQgHADgHAAQgNAAgJgOg");
	this.shape_54.setTransform(-15.6,-0.1,0.349,0.349);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF9900").s().p("ACICzQgpgmgYgPQgcgShHggQhBgdghgXQgUgOAGgXQAGgYAZAAQBUgBAvgQIAWgIQAHgFgJgKQgrgugtgJQgigHgZADQgkAEgLAYQgQAhABAyQABBaAZA5QANAHACAQIACAPQAAAYgVAEQgVAFgNgSQglgwgMhPQgLhHANhBQAQhMA0gXQAigPArgBQArAAAjAOQA7AZAlAtQAwA6gwAsQgbAZg1ALQAsATAVAMIApAYQAXAPAOAOIAaAaQAOANARAGQATAHABAWQACAXgWADIgNABQggAAgggZg");
	this.shape_55.setTransform(-30.8,-0.5,0.349,0.349);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF9900").s().p("AhuAeQgRgWASgQQAigfBCgDQA1gCA2APQAUAFABAWQAAAVgVAFQgRAFgbgBIgtgBQgbgCgPABQgbABgNAKQgIAGgIAAQgLAAgKgNg");
	this.shape_56.setTransform(-48.8,0,0.349,0.349);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF9900").s().p("ABXCjQgRhJgQgyQgXhDgcgxQgSgfgFgFQgRgSgNAVQg0BUAWB/QAFAbgaAHQgZAHgIgaQgThFAHhCQAIhLAlg2QAWgfAggGQAhgGAbAYQAeAaAZAvQAOAdAVA4QAhBaAMBAQAGAegeAJQgHACgGAAQgTAAgFgYg");
	this.shape_57.setTransform(-48.7,0.2,0.349,0.349);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF9900").s().p("AihAoQgXgJAIgWQAOgiAzgLQAagGA6AAQBTAABlAQQAaAEgFAZQgFAZgYADQgdADgrgCIhIgEQgogEgegBQg4gCgFAJQgIANgNAAQgGAAgIgDg");
	this.shape_58.setTransform(-65,-5.4,0.349,0.349);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF9900").s().p("AASCUQgXgBgEgTQgUhUgIgrQgNhLAKg0QAFgYAbAEQAaADgDAYQgEApAUBSQATBRgGArQgDAUgWAAIgBAAg");
	this.shape_59.setTransform(-65.6,-0.1,0.349,0.349);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF9900").s().p("AiHCJQgUgNAKgZQAJgYAYAJIA/AbQAnAPAbgCQAUgBAcgRQAggUgTgQQgXgTg0gUQg1gVgWgQQgtgigOgtQgQg2AzgdQAvgbA8ANQA5ALApAnQAUATgUATQgTASgVgQQgZgUgqgKQgxgMgTAVQgQASAfAaQAUARAeANQAWALA0AVQAtAUATAcQAXAigVApQgSAlgmASQgiAQgmAAQhDAAhPgyg");
	this.shape_60.setTransform(-79.6,-0.9,0.349,0.349);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22,p:{scaleX:0.366,scaleY:0.366,x:-6.7}},{t:this.shape_21,p:{scaleX:0.366,scaleY:0.366,x:-6.7}},{t:this.shape_20,p:{scaleX:0.366,scaleY:0.366,y:9.9}},{t:this.shape_19,p:{scaleX:0.366,scaleY:0.366,x:-7.2,y:-23.3}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_22,p:{scaleX:0.402,scaleY:0.402,x:-6.6}},{t:this.shape_21,p:{scaleX:0.402,scaleY:0.402,x:-6.6}},{t:this.shape_20,p:{scaleX:0.402,scaleY:0.402,y:11.1}},{t:this.shape_19,p:{scaleX:0.402,scaleY:0.402,x:-7.3,y:-25.4}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_22,p:{scaleX:0.349,scaleY:0.349,x:-6.7}},{t:this.shape_21,p:{scaleX:0.349,scaleY:0.349,x:-6.7}},{t:this.shape_20,p:{scaleX:0.349,scaleY:0.349,y:9.3}},{t:this.shape_19,p:{scaleX:0.349,scaleY:0.349,x:-7.2,y:-22.3}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_22,p:{scaleX:0.349,scaleY:0.349,x:-6.7}},{t:this.shape_21,p:{scaleX:0.349,scaleY:0.349,x:-6.7}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.3,-28.4,259.2,53);
p.frameBounds = [rect, new cjs.Rectangle(-149.1,-31.1,285.2,58.3), rect=new cjs.Rectangle(-130.3,-27.2,247.2,50.6), rect];


(lib.ScoreboardNumbers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Numbers
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0C924").s().p("AgbCZQg5gNgRg9QgQg3AYg8QANggAVggQAfgwAWAAQAGgIAHADQAxAWAdAyQAeA0gIA4QgHA3gnAoQgiAhgjAAQgKAAgJgCgAgvg9QgVAugEATQgKA1AeAmQAfAoArggQAggWANgmQAOgngOgmQgIgYgZgZIgmgpQgTAKgYA1g");
	this.shape.setTransform(10.9,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0C924").s().p("AgTCUQABheASipQgKALgIAFQgGAEgFgHQgEgIAFgGIATgaQALgPAJgJQAGgFAGAFQAGAGABAJQAFA4gJBeQgMB1AAAgQgBAVgQAAQgRAAABgVg");
	this.shape_1.setTransform(3.2,17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0C924").s().p("AAvCjQgVgChlgBQgKAAgEgJQgEgJAEgKQANgeA2hHQAug7AKgxQANg4gtAKQgdAHgwAiQADABAAADQAAAEgDAAIgSAFQgFACgDgFQgEgGADgFQARgmA7gcQBAgfAVAqQAYAsgqBVQgNAageApQgjAugLATIBEACQAnAAAcgGQAIgCAGAIQAGAIgFAJQgKAPgOAEQgIACgLAAIgMAAg");
	this.shape_2.setTransform(10.4,16.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E0C924").s().p("AgzCgQgVgJgIgQQgKgTAOgSQADgDAFAAQAEAAADADQAMAQAEAEQAJAHAOAAIAbgDQAQgDAKgGIARgIQALgFAEgGQAPgVgEgYQgEgZgWgMQghgPgrgBQgNgBgEgOQgEgOAMgHQALgGAYgKQAigPgRghQgQgggYADQgMABgaAJQgZAIgOABQgHAAgCgIQgBgHAGgEQAtgdAggCQAngCAeAnQALAOAFATQAEAWgIAOQgJAOgMAJQA4AQATAuQANAggOAjQgOAjgeANQgmAQgSAEQgOADgNAAQgQAAgNgFg");
	this.shape_3.setTransform(11.2,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E0C924").s().p("AA5CfIgDh3QgcALgrgJQgmgIgagQQgEgCgCgEQgDgEABgEIALhZQAJg0ATgiQACgEAEACQAFACgBAEQgGAigDAvIgGBRQAaALAdACQAfADAXgKQgBhWANg/QABgGAGAAQAHAAABAGQAHAhAAAsIgBBNQgBAeABAuIADBMQACAPgRACIgDAAQgPAAAAgQg");
	this.shape_4.setTransform(9,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0C924").s().p("AhDCoQgagLgKgUQgLgXAYgTQAEgDAFACQAFACAAAFQAJA7BDglQAbgOAWgXQAWgXADgSQAKhFhBgNQgTgEhcAFQgGAAgFgFQgGgGABgHQACgXAJgeIARg0QADgMAMAAIAugCQAbgCASACQAGABAOAFQAPAHgDADQADgDACADIACACQAEADAAAGQAAAHgGABQgJABgOgDQgQgFgIABIhFAGQgPArgFAWQBAgGAVADQAuAGAdAjQAZAegEArQgDAqgbAcQghAkghARQgZAOgXAAQgQAAgPgHg");
	this.shape_5.setTransform(10.9,17.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E0C924").s().p("AhaBrQgNg6AahCQAUg1AfgvQAvhJAjASQACABABAEQAAADgDACQgYAKgTAbIgdAyIgUAlQAggBAmATQAmATAMAVQAZAwgcA1QgdA2g2ABIgDAAQhGAAgPhFgAg1ATQgDAGgGABQgGAaACAYQAGA4AuAJQAuAKAXg0QALgcgKgZQgLgZgbgNQgWgKgQAAQgWAAgLAVg");
	this.shape_6.setTransform(9.5,17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E0C924").s().p("AgfCeQABhtAag+IAcg+QASgmAGgaQgUgIgnABQgwABgNgCIgDAAQgFgBgBgGQAAgGAGgCQAugLAdgBQAtgDAdAQQAIAEAAAJQAAAcgQAmIgdA/QgfBJgBBoQgBASgRAAQgTAAABgSg");
	this.shape_7.setTransform(8.2,17.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0C924").s().p("AhDCiQgsgcAGg4QAEgdAUgjQAYgnAcgMQglgRAFgtQACgXASgXQAVgaAUAEQAJgPASAEQAZAFATAhQAUAjgJAaQgFAOgQANQAaAUAMAxQAPA5gPArQgRA0g3AJQgOACgNAAQgmAAgdgSgAgvASQgTAZgFAgQgHAnAeAUQAbASAngIQAmgHALgiQAKgdgKgoIgJgcQgGgPgIgJQgJgJgJABQgEAAgQAGQgDACgDgBQgcANgTAYgAgbh5QgIAQABAQQABAXAWAFQARAFAVgKQAogUgVgjQgLgTgLgGQgFgCgEADIgGAHQgEAEgFgCQgEgDgBgFQgOAGgIARg");
	this.shape_8.setTransform(10.7,18);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E0C924").s().p("ABCCkQgQghgEgtQgEgiADgyQgLAHgIADQgZAJgbgHQgcgHgRgUQgTgYgBgcQAAgbARgaQAdgqAqgIQArgJAjAiQAGAGgFAIQAIAEABALIAAATQgBCVAIBmQABALgLADIgFABQgHAAgEgHgAgIiAQgnAPgIAkQgDAPAHANQAGANANAHQAlAUAYgbQAUgXACgsIAAgLQAAgJAHgFQgQgHgQAAQgRAAgRAHg");
	this.shape_9.setTransform(9.2,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,21.8,31);
p.frameBounds = [rect, new cjs.Rectangle(0,0,6.4,33.9), new cjs.Rectangle(0,0,20.9,32.7), new cjs.Rectangle(0,0,22.5,33), new cjs.Rectangle(0,0,18.1,35), new cjs.Rectangle(0,0,21.8,35), new cjs.Rectangle(0,0,19.1,35.3), new cjs.Rectangle(0,0,16.4,35.2), new cjs.Rectangle(0,0,21.4,36), new cjs.Rectangle(0,0,18.4,34.2)];


(lib.Scoreboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0C924").s().p("AgCASQgIAAgEgGQgEgFAAgHQAAgGAEgFQAEgGAIAAIACAAQAFAAAFAFIADABQAGADAAAIQAAAJgGADIgDABQgFAFgFAAg");
	this.shape.setTransform(140.1,32.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0C924").s().p("AgPANIAAgBQgFgOAIgKQAEgKAIAAQAKAAADAKQAJAKgGAOIAAABQgEAKgMAAQgLAAgEgKg");
	this.shape_1.setTransform(138.9,19.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0C924").s().p("AgvCHQgtgWABgiQABgKAJgBQAPgCAYAPQAcAUAJACQAPAFALgCQAMgDAKgNQAPgTgHgOQgMgVgegWQgigZgLgNQgRgWAGgmQAGgkAWgRQAYgTAdAKQAeAKAMAfQADAGgEAFQgEAFgGgEQg/gpgJAuQgFAXAGAKQADAHATAOQAiAaAMALQAYAaAFAcQAGAegXAfQgXAdgcADIgKAAQgbAAghgPg");
	this.shape_2.setTransform(121.3,25.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E0C924").s().p("AgLB5QgIgUgCgeIgBg0IgDhiQg2gCgegOQgHgDAAgIQAAgIAHgDQAYgKAjgBQAUAAAmACIA1AAQAfAAAUALQAFACAAAHQgBAGgEADQgTAQgfADQgLABgrgBIgIAAQAJAeADA0IAEA5QABAigEAWQgBAKgKABIgCABQgHAAgEgIg");
	this.shape_3.setTransform(100.6,25.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E0C924").s().p("AA7CMQghgXgegoQgQgUgkg3QADBLgCAlQAAAKgJABQgJABgDgJQgLgkgDgyQgBgUAAhCQAAgMALgGQALgGAHAKQATAbAkA4QAhAyAdAbQAEgmgFhGQgEhJACgjQABgRAOAAQAOAAACARQAIBRABAtQACBIgLA3QgBAJgIAEIgHACQgEAAgEgDg");
	this.shape_4.setTransform(76,26.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0C924").s().p("AAMBlQgPgHgIgbIgHgtQgKg/AFguQABgNALAAQAKAAABANIAFA4QAEAgAEAXQADALAIAZQAFAXgHAOQgBACgDACIgEAAIgCAAg");
	this.shape_5.setTransform(59,30.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E0C924").s().p("AgSBsQgngPgSgmQgQggADgzQADg6AfgLQABgEAEgCQAigVArAZQAqAZANApQALAigIAlQgJAmgZAVQgTARgXAAQgNAAgPgGgAg1gsQgDAPgBAOQAAAzAfAXQATAOAQABQAUAAAMgUQALgTABgWQACgXgKgTQgNgYgbgJQgfgGgQgHQgHALgEAUg");
	this.shape_6.setTransform(41.7,29.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E0C924").s().p("AgeCDQgLgagLg1IgGgBQgMgEAAgOQAAgOALgEQgJg/AJgnQAKgxAkgDQAlgCAbAhQAcAigLApQgHAhgXAWQgVAXgcAHIAHBDQACANgLAGQgEACgDAAQgHAAgDgJgAgZhQIAJBZQAbgJAPgQQARgUgIgdQgHgagXgIIgJgBQgPAAgGAUg");
	this.shape_7.setTransform(21.3,27.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("A2iEVIhigKIhRgJIgDglQADAACHAPQCNAPAkABQA2ABHSgZQHbgZCJACQCQABD0AOQEdAPBnADQCqAGDSgGQDxgHBAgRQAWgDCUjuQBKh5BMiBQAFgFAHACQAGACACAGQAKAdiZD1QiYD0gTABQhEAUhbAEQgbACiIAAQj6ABhlgCQh0gDkGgOQj0gMiFgDQidgDjaANIl3AZQhbAGjcAAIgpAAQixAAgtgEg");
	this.shape_8.setTransform(162.5,28.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5596A5").s().p("AGBEFQjcgcjugDQi9gCjeANQk5ASlBAEQnDAHg1gkIAAn3MAytAAAQglBVg2BlQhtDLhYBaQh+AvinAIQhHAEh3AAQizAAkggIg");
	this.shape_9.setTransform(162.6,27.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scoreboard, rect = new cjs.Rectangle(0,0,325,56.3), [rect]);


(lib.logowords = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9EEBB").s().p("ACGAuIhegNQhGACgwAAQhbgBgLgdQgLgYAugOQApgNBGABQBDAAA5AMQA8ANASATIABABIAAAAQAnAuhDAAIgHAAg");
	this.shape.setTransform(259.6,-130.8,0.378,0.378);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9EEBB").s().p("AgoAWQgMgTAJgRQAIgQAUgJQASgIARAFQATAGAGAVQAKAlgmARQgNAGgJAAQgWAAgNgXg");
	this.shape_1.setTransform(250,-129.3,0.378,0.378);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9EEBB").s().p("AitAiQgVgEAAgXQAAgXAVgEQA5gKBAgEIBvgHQA8gBAsAHIAJABQAXAFAAAaQAAAagXAFQhAALg6AAQhKADgmAAIgHAAQg8AAgsgIg");
	this.shape_2.setTransform(230.2,-130.6,0.378,0.378);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9EEBB").s().p("AgfAZQgegdAlgWQAjgXAYAbIABACIABABQAVAbggAUQgQAKgNAAQgPAAgNgNg");
	this.shape_3.setTransform(219.2,-129.5,0.378,0.378);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9EEBB").s().p("AH2A+QhZgPhYgIQiFgLiiAAQivANiCADQj4AGgVgyQgSgpBjgEQA0gCBOADQA4gJBTgBICMABQBYgBDRgIQCyAEBmA1IAGAEQAcAOgOAbQgLAXgWAAIgIgBg");
	this.shape_4.setTransform(175.4,-131,0.378,0.378);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9EEBB").s().p("AgpAgQgQgSAQgeQAJgfAgACQAeACAMAcQAQAagQASQgPAQgbACIgDAAQgZAAgNgPg");
	this.shape_5.setTransform(151.1,-129.7,0.378,0.378);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9EEBB").s().p("AnhBLQgIgaAWgKQA0gXA3gQQB8gnCagPQBTgJC2gaQCcgSBlARIAIACQBfASiZA/Qg5AHhYAHIiQAMQhWAIi+AiQizAfhgAHIgDAAQgVAAgHgYg");
	this.shape_6.setTransform(109.7,-130.9,0.378,0.378);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9EEBB").s().p("AgaA0QgUgIgCgZQgCgVAMgWQANgXATgGQAVgHAUAUQAdAcgeAnQgVAdgWAAQgIAAgJgEg");
	this.shape_7.setTransform(88.1,-125.8,0.378,0.378);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9EEBB").s().p("An1AwQg3gMBDghQA5gbAcgEQA4gGBTgEICKgGQDZgMBegDQCYgDB8AIIAjADQAUACAJASQAIATgNAPQgoAYgwgIQhFAEhdACIiiADQgVAAkdAaQhSAHhDAAQhaAAg/gNg");
	this.shape_8.setTransform(44,-129.2,0.378,0.378);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9EEBB").s().p("AghAZQgOgTAPgeQAHgRAZAAQAaAAAHARIACAEIABACQALAagMASQgLAQgYAAQgWAAgLgRg");
	this.shape_9.setTransform(20.7,-127.7,0.378,0.378);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AA/EuQgagcgmAHQgcAFgwAcQhDAngQAHQgxAWglgEQhDgIAQhUQAehggFgdQgGgjhBglQhQgvgMgNQhIhSB9gmQBSgZBnABQAxABAdghQAVgXASg2QAahMAGgNQAWguAhgSQAugZAeAaQAXAUATA3QALAfATA/QARAyAUAKQAUALAvAEIBUAFQBqAKAMA6QAKAugrApQgWAWg7AjQgmAYgGAvQgCAQAFBIQAICOhWAEIgGAAQhKAAhVhYgABYEEQBPBIAeAMQA7AXABhmQABhoAQgpQAUgwBJg3IAGgEQAwgjgRgXQgNgRg7gMIhrgTQg8gLgOgPQgLgLgWg5QgdhKgLgXQg1hrgnB4QgjBogeAnQguA6hWADQhMADgdAEQhQAKgMAYQgIASA3AjQAcATAqAXQAxAgANAnQAMAmgSA4QgQAwAAATQABAkAtgLQAhgHAsgbQAwgfAYgNQAkgUAgAAQApAAAjAgg");
	this.shape_10.setTransform(190.2,-41.1,0.378,0.378);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AA/EuQgbgcgmAHQgbAFgwAcQhDAngQAHQgxAWglgEQhDgIAQhUQAehggFgdQgGgjhBglQhQgvgMgNQhJhSB+gmQBSgZBnABQAxABAdghQAUgXATg2QAahMAGgNQAWguAhgSQAtgZAfAaQAXAUATA3QALAfASA/QASAyAUAKQAUALAuAEIBVAFQBpAKANA6QAKAugrApQgWAVg7AkQgnAYgFAvQgCAOAEBKQAJCOhWAEIgFAAQhLAAhVhYgABYEEQBPBIAeAMQA7AXABhmQAAhoARgpQAVgyBNg5QAxgjgRgXQgOgRg6gMIhrgTQg8gLgOgPQgLgLgWg5QgdhKgLgXQg1hrgnB4QgjBogfAnQguA6hWADQhLADgeAEQhQAKgLAYQgJASA3AjQAdATAqAXQAxAgANAnQAMAmgTA4QgQAxABASQABAkAtgLQAhgHAsgbQAwgfAYgNQAkgUAgAAQApAAAjAgg");
	this.shape_11.setTransform(98.7,-41.1,0.378,0.378);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AC0H6QgDgDhdhgQgmgng0AIQgmAGhAAmQhgA5gQAHQhBAggzgEQhPgFgBhYQgBg0AdhZQAZhKg/gzQgUgQgqgYQgwgagPgLQiLhhBchIQBGg4CQgOQAJgBBPABQA4ABAegMQARgGAOgWQAPgXAKgHIA4iUQAlhdAsgnQA9g4AvAcQAkAWAhBQQATAtAfBeQAcBLAXANQAfAQA7AFQAjADBKACQCHAKAgBGQAZA3gwA7QghAog/AoQhMAvgMBFQgFAaABAtIADBVQAABHgXAvQgdA9g+AJIgTABQg0AAg2gsgABSE8QAaAUA0A2QBbBfA0gSQA1gSgGiBQgEg+AAgfQAAg1APgnQARgrAvgfQA0gdAcgTIACgCIADgCQBDgwgYgfQgTgYhQgRIiUgaQhSgQgTgUQgcgdghhUQgvh2gGgLQgeg7gbALQgiANgnB2QgZBHgaAzQgqBPgqAQQgmAPhEADIhuAGQhrAMgXAIQhEAYBAA3QAZAVA4AiQA4AhAZAWQAmAhABBCQABAcgNBWQgKBBALAVQAQAfBBgQQA1gNBFg2QBMg7AogPQALgFAMAAQAhAAApAeg");
	this.shape_12.setTransform(143.7,-33,0.378,0.378);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgxD1QgcgmgLhCIgMhwQgNhkAUh0QAaicBSBpQAtA5AWBqQAJAtAOCDIABACIAAADQACAbgMAlQgNArgVAeQgcAngcAAQgbAAgcglgAg/hMQAFA8ASBjQAGA0AUAxQAcBIAehDIABgBQAUgvgQhpQgYh0gGgnQgBgGgcg0IgcgzQgkApALBvg");
	this.shape_13.setTransform(111.8,-102.4,0.378,0.378);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AD9927").s().p("ADTCkQgigZg0gvQg0gwgJgGQgsghgpAIQghAGgpAjQgYAUgxAtQgsAmglALQhEAVgmg2QgkgzAQhCQAXhagCgfQgEg7g6gpINCAAQgrAoAACGIgBBoQgEA6gNAgQgQAnglAAQgkAAg5gog");
	this.shape_14.setTransform(143.9,-21.2,0.378,0.378);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#AD9927").s().p("ACNB/QhfhVgVgNQgcgSggAQQgUAKgkAjQgpAngSAMQgiAXgggGQgzgJgGgyQgEgfAQg5QANg1gTgiQgRgegygdIAvgKIJuAAQg1AtgEBhIgDBQQgEAvgQAiQgLAYgYAAQgeAAgxglg");
	this.shape_15.setTransform(190.5,-33.3,0.378,0.378);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#AD9927").s().p("ACNB/QhfhVgVgNQgcgSggAQQgUAKgkAjQgpAngSAMQgiAXgggGQgzgJgGgyQgEgfAPg5QAOg1gTgiQgRgegygdIAvgKIJuAAQg2AtgDBhIgDBQQgEAvgPAiQgMAYgYAAQgeAAgxglg");
	this.shape_16.setTransform(99,-33.3,0.378,0.378);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E0C924").s().p("ACyFmQgZgQgxgrQgwgqgSgLQgdgRgrAbQgKAGhFA5QgxAogdAEQgoAFgag1QgPgeAWhJQAUhDgbghQgWgbg5gdQg8gfgVgWQgugwCggfQBTgQBxgNIA0iRQAohcAvgcQAugbAoB8IAdBeQARAvAOAGQAXAKCMAWQB3AegtA3QgIAKg5ArQgvAkgGAZQgJAiAABAQAABHgFAcQgMBKgrAAQgVAAgdgSg");
	this.shape_17.setTransform(190,-41.5,0.378,0.378);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E0C924").s().p("ACyFmQgZgQgxgrQgwgqgSgLQgdgRgrAbQgKAGhFA5QgxAogdAEQgoAFgag1QgPgeAWhJQAUhDgbghQgWgbg5gdQg8gfgVgWQgugwCggfQBTgQBxgNIA0iRQAohcAvgcQAugbAoB8IAdBeQARAvAOAGQAXAKCMAWQB3AegtA3QgIAKg5ArQgvAkgGAZQgJAiAABAQAABHgFAcQgMBKgrAAQgVAAgdgSg");
	this.shape_18.setTransform(98.5,-41.5,0.378,0.378);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E0C924").s().p("AEKH1QgkgSg7gyIhbhMQgygmg/AeQggAPhPBAQhFA5gmAJQg5ANgrhAQgTgdADgnQACgYAPgwQAOgwACgYQADgngTgeQgdgqhQgoQhZgugcgbQhDhDDegsQBygWCegSQA6ikAMgcQAzh0A+gxQAngeAhAoQAZAfAcBRIAsCEQAYBDATAIQAOAGBIALQBYAOArAKQCmAogvBDQgOAVhQA7QhFA0gJAlQgLArgBBRQAABegFAhQgQB3g/AAQgWAAgagOg");
	this.shape_19.setTransform(143.3,-33.3,0.378,0.378);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ap5PdQhUgqgZh8QgIgngHhFQgHhLgEgZQgXhsgGhEQgLh+A1gjQBLgyC9AKQAiACB0AKQBWAHApgBQBCgDAcgGQBIgPghgjQgogphqgCIidAJQh6AGg2gGQhmgNg2g4QhGhJAFi2QACg7AKhZIAOh/QAJh0ABhCQAChlgKhSQgNhvA2gtQA+g1CVAEQBSADCNAQQCaAJA8AeQBYAuAKCBQAFBLAAChQAFCMApBUQgMgaAIg1QAKhHAAgMQgHiDgLhJQgQhvAHg3QAMhgBHglQBkg1C7ADQDFADBSBFQBVBFACC7QAABngWC1QgMCzAJEaQAMFDACBqIAAgiIAAAPIACByQAABzgRBLQgvDQjGASQlKAejzgIQg2gChbAJIibANQgkACghAAQiLAAhRgogArYIaQAIBnApDDQAUBeBuAZQBEAPB7gMQBugKEBgIQDtgHCDgPQAOgCByAEQBOACAtgZQA4ggAXhRQAOgxAGhcQANjbgGkgIgMmbQgIj9ABigQABiVg/g2Qg4gxiZgDIhwgCQg/ABgoAMQhoAgAACAQAAALAIBkQAJByABBPQABEEhXg4Qheg9ADjIQAAgiAJh/QAGhdgFgrQgLhRh+gXQg6gLiEACQhxgIhMAAQiRABgKAuQABBQgBBtIgDC9QgBBUgXDFQgNCyAlBcQAfBPCJAOQA7AGCVgLQB9gIBiAZQCZAmhcBpQhHBQjegRQg8gEh1gRQhogOgmgBIgCAAQheAAASDmg");
	this.shape_20.setTransform(241.9,-98,0.378,0.378);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgGBmIhfgFQg4gEgfgKQhVgdAnhsQgVgoCCgHQBEgDBgADQBVgEAeAEQBHAKAQAwIAAAAQAeBXhtAmQg+AWhFAAQgTAAgSgCgAisAhQANADAjABQAlAAAUAEQCvAhA+g2QA4gwhMgNQgrgHhKAFQhxAGh4gEQgPBBArAJg");
	this.shape_21.setTransform(177.5,-111.2,0.378,0.378);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#AD9927").s().p("An2FrQhegEgNgDQgvgOgPg6QgZhhgTh7QgMhVgPiJIgJhAQgFgpAGgYQAKgmB0AEQA9ACBTAMQBdAHB6gLQA1gFCigVQEtArBqADQECAJCGhVQAABfAFDJQgCCugoBzQgfBahQAYQgiALiEAFQlbAPh5ADQhuAChlAAQiLAAh3gFg");
	this.shape_22.setTransform(242.1,-74.8,0.378,0.378);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E0C924").s().p("AoCPYQhmgcghglQgggkgOhiIgUi8QgOh0gbhEQgshuCYgXQA6gJCeAIQARABBMAKQBIAKAsABQCRAEAlhEQA2hkibgFQgxgBhLAJIhSAJQiLAChQgSQiNgggHhfQgFhEABhbIACigQAGkfAPlaQAcg3CZAHIDKAXIBoALQBAAJAqAPQB0ApAABtQAACoABAaQAFBvAUBQQAbBoAmggQAlgeABhXQAChRgJhjQgGhGgQhuQgRh4CRgjQA/gQCnAAIBiAAQA2ABAhALQBWAbABBwQABBeAFC+IALHSQAFEJABDJIAACqQgDBogSBHQgxDCixATQiiASjeAJImBAMQhXAHguABIgXABQhAAAgsgMg");
	this.shape_23.setTransform(241.6,-97.9,0.378,0.378);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AIuPzQiCgPgQgEQhWgRgsgqQgfgdgthRQgrhLgnggQAbBxgVA2QgbBHhsAIQlZAZiPAPQh+AMhFgVQhngfgJhqQgHhbAEiYQAFi+gBg1QgHl7ghl8QgVi3gHhgQgLinAbhuQAShLDFADQA3ABBjAIQBZAIAYgBQDVgJFwAFIEBADQCgAKBVAyQBxBCARDCQAGBFgFBeQgDA2gHBbQgEBAgCCCQgEBzgXBKQgcBdhVAeQgVAHg8ANQg4AMggANQA+BuCGDbQBmC1AsCTIABADQAiCChyAlQgsAOhFAAQgyAAg+gHgACNKEQAxAdAzBhQA0BjAsAcQBIAtBxAMQBMAHBogIQBrgMgDhNQgDg3hChrQgng/gshTIhLiWQgFgKg7hjQgphDgMguQgOg3BVgTQAWgFAxgGQAqgEAOgFQBcghAViRQAHgygBhIIgChrQgBgoAIifQAFh7gIhMQgMhyhLgyQg7goiCgOQjkgYl3ALQnLANiRgFQhogEgBCVQAABQAXCUIATFjIATFiQAGBwgCDeQgCDfAFBuQAFBsBrATQAmAGA9gDQAigCBAgGIBzgDQBpgDBJgGQDpgUgCg9QgWhVgEg2QgGhIAlAAQAQAAAaAPg");
	this.shape_24.setTransform(177.9,-98.5,0.378,0.378);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#AD9927").s().p("AJKFeQhKgBhrgWQhRgRgqgoIhVhsQg6hIg+g6QAVB1gKA3QgSBYhcALQjPAXhMAHQigAPh9AAQhSAAgmgPQg3gWgShBQghh0AJi0QATjOAGhdQEGAlEeAOQD2AMDAgOQBugHBfgRQBVgPAUAJQAVAKAsBNQANAXA8BcQA/BiAjBGQBxDghjAzQhGAjhkAAIgIAAg");
	this.shape_25.setTransform(179,-74.3,0.378,0.378);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E0C924").s().p("AJrPlQhhgDhDgLQhfgRg8gjQgVgMgYgqIgohRQg0hrgxgEQgFAAAAApIAAAtQgFBzhRAiQgeANg2AHIhnAKIjmAWQiGAJhggMQh8gQgTiCQgGgsADhLIAGh5IADiMQAChXgCg1QgFisgNjfIgXmNQgTiFgJhnQgTjHAhgRQAzgaBZgHQAygEBegBQCtgJD4gBQAqAACagFQCAgFBQACQD3AGCQBHQBXAqAZBmQAKApAGCZQAJDqgRDyQgJB3g2A1Qg0Azh3ANQhjALBHCTQAmBNBPB1IBpDCQA5B0APBbQAOBShQAYQgiAJhFAAIgwgBgAhRmkQiKAFgWAdQgjAvAaAqQAXAnAwADICbALQBeAEA7gRQAvgOATgbQAQgZgJgcQgJgcgegTQgfgUgqgBQhCgCguAAIg7ABg");
	this.shape_26.setTransform(177.8,-98.6,0.378,0.378);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ar+P/QgTgDgBhdIABhxIgXpSQgLkagBglQgEi2AJiKQACgogIhDQgJhTgBgYQgFh9BRhAQBXhFCJgfQA8gOC5gWIEOgjQCigVBtgHQCVgKBaAQQCHAaBDBXQA3BHAUBzQAMA/AGCMQAHCHgCGlQgCE5ASDJIAAAEQAGA0AOBeQAJBjgVBAQgfBgh9AfQhMATiKgFQh5AHhKgBQiIgCgsguQgMgNgXiAQgVhygSALQgbARgCArQgBAQAGBDQAGA2gJAbQgLAogrAPQgnAOg9gGQhEgKgfgCQhcgGirAMIhvAOQgqAGggAAQgVAAgQgDgAD3vRQhSAHh2AXQh9Aag1AJQgzAJhUAIQhpAKgeAEQihAUhiA4QhPAugPBTQgGAiAICGQASEhABGJQAADkgEHHQgBBTBIAJQAqAGBvgNQA/gCB7ADQB9ACA9gBQBGgCgMhdIgNhOQgGgtAJgWQAmhhBAAjQA4AeAZBTQAJAbAKA3QAIArAJARQAZAyBjgIQAtgEBHAFIB3AIQCKAHBQgrIgDACIgFADIAXgNIgLAGIgEACQA8gnAHhZQAEgygShzQgSh4gIiWQgFhdgDiyQgBhAAPirQAQi4AChgQADlZiVh3QhkhPi1AAQgmAAgqADg");
	this.shape_27.setTransform(112.6,-100.1,0.378,0.378);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AD9927").s().p("Aq/ExQhUgMgFkIQgBhSAGh6IAGiPQGFBJF5ADQGVADFmhPQACAdAQBiQARBrAGA7QAUDUhRAzQhQAyiTARQhDAIisAEQhqADgsg0Qgegjgih5QgehqgegPQgngTgoB3QANBFAAA3QgCBfgwABIiTAEQiPAEhIAAQh7gBhagNg");
	this.shape_28.setTransform(113.5,-74.7,0.378,0.378);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E0C924").s().p("AFnPnQh5AAhogVQgogHgMgpQgIgbABg+QABhEgFgaQgIgwghgRQg/ghgPCMQgJBZAJBaIgCAAIqCAJQgtAEgKgDQgLgEgBglIgc40QgDihC1g9QBAgVBjgNQA3gIBigKQAcgDDDghQCZgaBlgHQE3gYCNBxQB2BfAMD9QAEBOgFCEQgGCQABApQADB9ADD6QAFDcAKCbQAHBnAAAlQAABJgOAuQgkB0iYAVQhvAPhtAAIgHAAgAhhjlQgHAbgFBDQgHBQADBEQAKDHBVgOQBCgLANiAQALhngWhIQgWhIgrg5QgagigTAAQgXAAgOAyg");
	this.shape_29.setTransform(112.6,-100.3,0.378,0.378);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AizO7QjRgVgzgJQiWgdhahDQijh5gxkFQgfinANkaQACgmgBiwQgBieAIhiQAak6CLhbQBphGCvgRQAqgED/gEQCKgCDbADIFmAFQCZAABNBBQBRBFAKCXQASEejTASQhdAJi5gVQjigZhNgCQiogEhtAsQiHA3hHCGQgZAxgPBHQgQBKAEBGQAKCxB4AhQA3APAxgDQBDgEATgqQAMgbg9gUIhQgTQhmgYANieQAFg9AWhAQAVg9AagiQA3hKB7gaQA+gNCTgFQDUgHCMARQDqAdBQBeQA8BFALCHQADAdADBVQABA9AFAlIABAGIAAAFIADAVIABAEIAAAGIABAGQAUCOAFA/QAKCSgXBvQgbCChmAtQgoAShBAMIh5ARQivAajFAAQioAAi2gTgAjOuZQjHADiPAfQiEAdg8BRQg1BHgQCPQggEagJCsQgOEBAYDEQAiEVCMCDQBbBVCgAhQBNAPDMAPQEnAUFOgRQB9gHBHgZQBqglAXhTIACgIIgBAGIABgGIACgMIgCAMQAVh3gHiZQgFhtgZiyQgEgdgBhMQAAhPgFgnQgRiKhegaQhqgciDgTQh/gRhxgDQhwgFg4ABQhiADhBAeQggAPgmAzQglAygXA9Qg5CWBTAsQASAJAdAHIAyALQA8APATArQAXAyguArQgmAjg2ALQiYAehZhhQhRhYgDidQgDiVA/h0QBEh8CCg9QCBg9CugLQCXgJCjAcIC/AhQB4AOBEgkQBOgogQiaQgGhAgWg4QgWg6gdgZQhShJjSgDQg9gBhuAFQhqAFgngBQj3gGhOAAIgTAAg");
	this.shape_30.setTransform(44.4,-97.8,0.378,0.378);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#AD9927").s().p("AA+E/QjSgIhygOQi4gWiEg1QiBgyhVigQhOiSAAiXQP2CULBi/QAeDrgLBoQgWDOiVA7Qh4AwjCAFIgLAAQhAAAj2gKg");
	this.shape_31.setTransform(44.6,-74,0.378,0.378);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E0C924").s().p("AEFO0QiNgGg2AAQjVgBgrgCQiUgGhngaQkPhEhdjwQg7iZgKjJQgFhyANj4QAOkIAcjLQAJhVAIgtQAOhPAcgsQAfgyCBgZQAegGCZgQQC4gTEIAHQEpAIEmAjQBMgtBFBIQA/BCAUB0QAUB6guBSQg1Bfh+gGQgpgCjpgZQi+gUh3AEQltALhtDoQguBkgFB2QgFCGA2BSQAvBHBMAZQBPAZBLgmQBDghgFgnQgEgohIgPQg8gNgmgwQgjgsgJg/QgJg8ASg9QASg/AqgrQAzg0BFgYQA8gWBQgDQBrgECAANQBjAKCHAWQAiAGBqAOQBgASAcAnQA5BMARCbQAKBYAECgQAGBJASCpQAHCUgtBWQhOCYkQAaQg/AFhTAAIhRgBg");
	this.shape_32.setTransform(44.7,-98,0.378,0.378);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AikOdQmlhMn8jDQlIh+oxkEQonkBmTjzQjgiHigh5Qg+gwgSilQgIi4gGg3MBqtAAAIgRDUQgOB+geBRQgPAthkA/QhwBAggAVQmtEYoMD8QnFDbonDTQjLBQhrAoQi8BHiLApQkIBLjXAAQhiAAhYgQg");
	this.shape_33.setTransform(141.7,-44.2,0.378,0.378);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgQBqIgEhnQgngHgmgpQgggjgPgmQgPglATAAQAVgBA3A5QA4A6ArghQAOgKAdghQAeghATgSIACgCIADgCQA0gvhTCbQgiAngKAQQgQAXAEAoIAMBKQACA3gkABIgBAAQgeAAgIhOg");
	this.shape_34.setTransform(254.3,-147.8,0.378,0.378);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhzCFQgXgjgIhiQgIhsAqACQhDgHAvgWQAsgUAoAAQAdAAA8gDQA3gBAjAKQBGASigAdIhLAAQguAAgdgDQAXAEALBbQANBtAEAJQAhgMBMgFQBcgFgaAkQgVAfhgAGIgcAAQhHAAgQgag");
	this.shape_35.setTransform(138.1,-149,0.378,0.378);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AiHCdQgIgMgGghQgciBABgpQAEhtBigDQAegBAdAZQAZAXAMAhQANAjgJAcQgKAegjAKQASASAeAOIA2AWQA7AZAXAXQAUAVgOALQgOALglgHQgqgHgwgaQg1gdgQgLQgmgbgPggIgHgSIAOBQQAKBJgTALQgLAGgIAAQgOAAgIgOgAhngRQABgOAOgEQAHgCAUgBQASgDAJgHQACgCgOgQQgPgQgNgHQgHgDgFAAQgaAAAJBLg");
	this.shape_36.setTransform(224.8,-148.6,0.378,0.378);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AApBnQgJg1gEgMQhPgLgIACQgeAGgIA+QgEAhgOgfQgPgdAAgPQAAhIAJgpQAQhLAugMQA9gQA1BhQAjBAAQBLQgDgUAGANQAHAPgIgBQAjAFgTAdQgSAcgaAEIgDAAQgYAAgMgtgAg8g2QgMAegDANQAggOAlgBIAEAAQAUABgegkIgigkQgDAOgLAdg");
	this.shape_37.setTransform(195.6,-146.9,0.378,0.378);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgvAuQgBhlAcgTQgPAAgvAOQgrAMgNgDQgUgGgGgPQgHgSAcgJQAdgyBsgBQBdgBA2AeIADABQA4AfhSAMQhAAKgpgFQAaAXgBBiQgCBmgoAAQgqAAgBhpg");
	this.shape_38.setTransform(167.2,-148.4,0.378,0.378);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AhLAFQADgJALgKQALgJADADQgEgFAPgBQAOgBgUAGQAsgMAjAEQAgADAHANQAIANgXAMQgaAOg0AEIgVABQgvAAAKgag");
	this.shape_39.setTransform(138.3,-148.7,0.378,0.378);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("ACNCOQg/gWhEhGQhXhagdgUQgFAYABBTQgEBLgdAKQgjANgEhMQgDgwAHgrQAOhXAjgNQAcgKAwAmQAXASBBBEQA4A4AdARQgDgagVg3QgUg1gBgeQAAg6AgASQAeARAKAjIAAACQAfB4ACANQAPBhgnAAQgGAAgJgDg");
	this.shape_40.setTransform(106.2,-148.2,0.378,0.378);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("ABrCYQgagDgUgrIgYhCQgOAMgsgFQg2gGgJACQgHAJAFAeQAEAagNAFQgRAHgQglQgQgkgDgwQgIiCBWgTQBIgQA3BcQAZAsAhBPIgCgEQgTgfAfA8IgKgZQAPAbgFgCQAdAMgHAjQgHAggbAAIgHgBgAhkgJQABgJAMgCQAMgCgXANQA0gaA4AQQgeg8glgCIgBAAQgmAAgEBIg");
	this.shape_41.setTransform(76,-147.8,0.378,0.378);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AALCEQhggKgSgeQguhLAWiGQADgRAVAAQAUAAADARQACAOADBXQAIBQAcAGQAHABBlgGQBcAFgkAxQgMAQgzAAQgWAAgdgDg");
	this.shape_42.setTransform(49.3,-147.3,0.378,0.378);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AhHCCIgRg9QgXhNAHg3QAJhLA/gYIADgBQA7gWAnAYQAjAVADAuQADAugiAlQgmAphEAIQAFAXAaA+QAOAzgxABIgBAAQgUAAgQgtgAgngRQgBgMASAEQAQAEgVAEQA/gLAOgbQANgZgdgTQgdgTgXARQgdAVAIA/IAAAAg");
	this.shape_43.setTransform(24.8,-148.2,0.378,0.378);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#5E5E5E").s().p("Eg54ABIQgGgMABgkQADhhATAAIBwAAQFngBFnAAQXEgDTiAEQH2ABOKgCQPagBGnAAIPbACQATAAAKAUQAKATgDAZQgGBAg4gBIvBgBUgMOgACgjFAABUgmyAAAgNgAADQgIAVgFAAQgCAAgCgEg");
	this.shape_44.setTransform(142.5,-160.9,0.378,0.378);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("EgIOAhEQirgxk/h9Iiag7Qo6jWnqjnQnqjpmtkCQgjgWg/ghQimhbhJg8Qh8hlgVh0QgYh+gQihQgJhcgOjCIgDgzQg/t2AAsSIAAgJQgBj5AJhaQAFg1ANgNQAKgJANAAIGlgCQMIgCMIAAIO+ABIdQABIPMgBQNZAAMbADIAWAAIAHATQAHAVACAqIAAAKQAOD+gLFBQgHDCgYF5IgPD7QgcHngfFNIgHBgQgLCIgIBBQgPBwgZBUQgPAyhEA1QgqAghaAzIg4AiQi0B3jhB/QnDD/ohD0IgeAOQoqD5klBtQnxC6mOA6QhKALhWAAQjeABkehUgEgzaghZImQABQgLBPABETIAAAKQAAMPA/N0IADA0QANC7AKBgQAPCfAYB8QASBiBzBbQBCA0CbBVQBEAlAgATQGqEBHoDoQHnDlI4DWICaA7QE7B7CnAwQEYBSDXABQBPAABIgLQGKg6HiizQEhhsIxj9IAfgOQIgj0G+j8QDdh8C1h4IA7gkQBNgsAlgbQBAguAKgiQAXhRAOhsQAJhBAKiCIAIhhQAflSAbngQAFhhALiaQAYl9AGi8QALlAgOj6IgCglQsQgCtMAAIvMAAI9QAAIu+gBQsIABsIABg");
	this.shape_45.setTransform(142.3,-83.2,0.378,0.378);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4C4C4C").s().p("EgINAglQiKgoi+hIQjRhRhiglQxnmmtPoAQi8hjhchAQilhxgXh+QgaiHgQivQgIhRgQjmQg/t4ABsOQgBhuAChfQADi8APAAIGlgCQU6gCSTABQJYABZwAAQWIgBNBADQAEAMACAUIACAgQAQEogSGRQgLDqgeHPQgcHjgfFQIgVD1QgPCQgdBiQgQAzhhBBQhwBBgiAWQi2B4jeB9QnCD+oeD0QpBEEkeBrQn0C7mSA8QhIAKhPAAQjhAAkehUg");
	this.shape_46.setTransform(142.3,-83.2,0.378,0.378);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logowords, rect = new cjs.Rectangle(0,-166.4,284.7,166.4), [rect]);


(lib.logohead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhmBOQgQgEACgRQADgSAQACQAzAEAxgpQAFgDBLhKQAMgNAOALQANALgIAPQgkA8g3AlQgwAhgwAAQgPAAgOgDg");
	this.shape.setTransform(101.8,-12.3,0.378,0.378);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkfCKQgSgBAAgRQAAgSASgBICmgNQBfgJBDgSQBfgZAzgmQAdgWASgiQAGgMAVg3QAGgOAQgCQARgBADARQAPBShOBDQg9A1hbAbQiDAmiUAAQgvAAgxgEg");
	this.shape_1.setTransform(94.8,-19.7,0.378,0.378);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABpBwQhbgHhrggQhkgegmgVQhNgpgKhEQgDgTARgFQARgFAHASQAXA9BWAiQAfALBzAbQBMATBVADQBHACBdgIQASgCACATQACATgRAFQhJAVhSAAQgWAAgXgBg");
	this.shape_2.setTransform(73.1,-29.8,0.378,0.378);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgPB4QgLgBgHgIQgeghAAgvQgEguAZgsQAagtApgOQAOgEAMAJQALAJAAAPIACA8QABAjgFAZQABAIgEAGQgOAxgoAWQgGAEgIAAIgEAAg");
	this.shape_3.setTransform(61.4,-48.4,0.378,0.378);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHB6IgJgEQgYgCgSgXQgSgWgDgdQgDghAMghQALghAXgZQAFgEAEgCQAOgUANgJQANgKASAJQAWADALAWQANAaAAAhQAJAngPAiIgRAoQgMAWgQAKQgLANgNAAQgEAAgFgCg");
	this.shape_4.setTransform(103.7,-41.3,0.378,0.378);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AmvCrQguhCgFhaQgGhYAmhHQAFgJArgRQAigNAWgGQA7gQBTgEQC2gICVAMQDFAPBbBoQAsAxARA6QAXBLgrAoQgcAbg7gWQgtgRg6gFQgrgEg/ACQitAGgVACQhuALhNAlQhIAiglAFIgUABQgzAAgegqgAj7iRIhAAIQgrAHgTAMQgGAEgTAgQgSAdgFABQgFAvAHAmQAWB2AwAEQAUACAbgKIAsgVIA2gYQAegNAagGQBEgPBfgFIClgHQBJgEBFAOQBiAXgBADQAag8g6hAQgug1hCgcQg8gahVgIQgogEhtgCIgsAAQhsAAhMAIg");
	this.shape_5.setTransform(103.3,-55.1,0.378,0.378);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAZDKQgrg2gRgTQgcgegzgZQg7gagdgRQgNgHAAgQQABgOAMgIIgBgKQgCAFgDgUQgFgdACgSQAGgxAHgXQAKgkATgRQAVgUAkgBQBqgDBjBAQAtAdAZAYQAlAkAKAlQAKAjgHAtQgFAggPAwQgQAxgMAVQgVAigkALQgKADgKAAQgfAAgggfgAhwioQgXABgQAYQgOATgDAYQgFAeAAAxQBDAZA1AhQBCAqAiAxQAsA/ATglQAPggAHgYQAMgmAFgVQAJglgGgUQgThChbgvQhJgmhBAAIgQABg");
	this.shape_6.setTransform(62.1,-60.9,0.378,0.378);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CEBCA7").s().p("AkIBgQi1gUBVhMIBHgaQBYgfBbgSQEig9DPBOQANBJh3AvQhnApiEAAQj3AAg/gHg");
	this.shape_7.setTransform(103.6,-48.5,0.378,0.378);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AbePlQgIgJAAgOQAAgLAGgJQAHgKAMgCQAEgIAJgLIARgUQAlguAfg7QAagwAehFIAzh4QAag+AchaQAFgOARguQAPglAGgXIAKgvQAHgcAKgQIAHgKIgHgNQhWiMiwiEIhKg1QgtgggbgXQgmgggWgRQgigZgfgQQgNAPgVgFQgWgGAAgYQgBhtgViUQgDgXgWg6QgTgzAAgeQgNgJgogMIgwgPQlxiKn7gbQj9gOqCARQkOAHjFAUQj7AYjSAzQhLARiCAnQiRAqg7APQinArhXAiQEIgBEAA+QCaAkB6BMQBaA5BrBbQAFgGAPAjQAOAigHACQh1ARg8AMQhiAShMAYQhmAghFAqQgmAYgXATQAfAKA5AGQBDAHAWAEQCQAdBIAXQC/BABvB9QALgHAbAOQAKACAHAJQAGAJAAAKQAACtAlChIAXBiQAMA1ACAwQALADgOAiQgNAkgDgQQgJgxgghaQgghegKguQgbiBgGh9QgHgEgFgHIgHgJQgEgDgDgGQh3iWjlg/Qh7gihMgOQhKgOg3gPQhWgXAKgMQAIgIANgLQAQgMAGgGQAegeAhgXQBHgwBfgiQBygnCtgfQhhhQhQguQgcgPhmgmQhmgmgngJQi3griEgKQgygDhNgEIh/gGQgDACgZgCIgagDQgSgBAbgVQAbgUAOAAQBCgsBegiQA3gTB1ggQA6gQCQgsQCBgoBKgSQDSg0DsgbQDKgXD+gKQCdgGEsgDQD/gEDBAJQDyAMDOAgQD0AnDFBAQBNAaA7AYQAdAMAOAKQAYAQAEAWIARBOQARBNAFAjQAJA+AFA4QAugyBEgbQBEgcA2AKQAPADAAARQAAARgPAEQiUAlg5BJQAggJAxACQAzADAbAGQAsAJAaAYQAMAKgJAPQgJAOgOgFQgegKhJgGQg5gFgSABQAXANApAhQA7AtB3BVQBmBNBBBCQBUBUAyBZQAGAMgDAMQgDALgJAIIgIAPQgHAPgFAbIgJAsIglB/QgXBJgWAyQgfBHg+CUQg6B+hGBJIAAAAQAAAMgYALQgUAKgJAAIgBAAQgOAAgJgKg");
	this.shape_8.setTransform(82.5,-94,0.378,0.378);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhvE8QhPguAVh0QAGgkA4iRQAbhNAPgnQAahDAbgrQATggAFgGQASgXAQgFQATgFAyATQAwARAAAIQANAEgBAPQgCAPgPABQgFgBgFACQgGABgngNQglgMgDADQgcAigVArQgPAjgTA1IghBZIg2CQQgbBmA0AeQAZAPgPAZQgJAQgOAAQgHAAgJgFg");
	this.shape_9.setTransform(139.8,-46.6,0.378,0.378);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AkJS4QiIgFiCgbQktg/jhiPQhRgzgngcQhDgwgpgtIg7g7QgqgqgBgKQgBg6AIhIQAGgyANhPIATh7QALhHAMgzQAKgrAThcQARhYALgvQAXhQAKgpQARhHgFgzQgLhoAuiIQALggBUjDIAuhwQAdhDAdgoQASgYAmgxQAggtAQgiQARgnARAAQAkABApAUQAaAOApAdIA2AlQAhAYAQAUQACgBA8AEQA9AEAjADIC+ATICuARQBlALBIAKQCXAXDJAuQB0AbDpA5QARAEAEAQQAEAPgJAOQAEBqgTCgIggEJIgNCKIAhhDQASgmALgcQAwh4Acg6QAthhAxhHQALgQAbgCQAPgBAdACQAjAAAhAHIBFAPQApAJAcAKQAlANAUANQAcATANAaQAUAsgFBXIgGBMQgDAtABAgIAFBqQACA9gGAtQgNBagoBOQglBKhCBHQgrAuhEBEIhwBxQg+A+glAaQhBAvg4gDQgSgBgUgFQgWgHgPgLIgVArQghBFg2BZIhBBtQgoA9gkApQAEAIgLAQQgIANgLAJQgfAdgrAMIhVARQhwAWiEALIiSAPQhIAIg2AAIgVAAgAs8x/QgLAjghAtQgmAygRAYQgcArgdBCQgRAngeBMQgrBmgxCHIgWA+QgLAlgBAcQgBAUADAhQAEAmAAAPQAAAwgSBFIgfB0QgJAqgRBUQgQBUgKArQg5DzgMDmQADADACAGIAFAOIABAEIAZAcQAkArAsAkQBsBZB0BCQDWB5D9AyQCVAdB1AAQA0AABOgIICAgOQCKgKBfgTIBAgMQAngIAagMQAAgIAfgmIAqgzQAvhLAshNQA2heAdg7IAahCQAUgxAHgDQgOghAAggQAAgWAYgDQAYgEAEAWQACAPASAvQARAsAAAGQAAAKAcgBQAWAAAMgEQAogOAqgiQAbgXAqgsQA0g2ByhrQBihiAshTQAgg9ALhMQAIg+gEhUQgDgyACg+IAFhwIACg2QAAghgLgRQgLgRhtgcQhpgag3gCQgtA+gqBaQgOAfg3CCQgqBjgcAzQgOAZgkBUQgfBIgEABQgRBNgdAyQgKARgQgIQgQgIACgSQAGgoAUhPQAThQAHgnQAPhkANigQAHhSASiiQATijAGhRQjig4hygbQjFguiSgVQhKgKhtgMIi4gTQgugFiWgNQh6gKgCgCIhvhLQhohGgGAAIAAAAg");
	this.shape_10.setTransform(98.9,-45.7,0.378,0.378);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CEBCA7").s().p("AiDEdQgLgegGgtQgLhaAchLQAihYA/h7QA9h7ALAAQAbAAAZAGQArAJAOAWQARAagpBfQgpBhgsAZQglAVg2CLQgcBFgUBBQAAADgDABIgFABQgIAAgOgFg");
	this.shape_11.setTransform(140.2,-46.3,0.378,0.378);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#564A3D").s().p("AnBgsQAHgjARgeQAJgPAIgIQAGgVBigSQBkgSB+gCQFKgFBtBlQBqBigOBTQgFAfgUALQgTALgQgRQkIhKjiAwQhNAQhVAhQhVAjghAMQheh8AWhwg");
	this.shape_12.setTransform(103.4,-55,0.378,0.378);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D3BDA3").s().p("AiEIkQg4gIiMgzQiYg3iRhFQmIi6gWiAIBhpaIBkCIQBvCGA2gMQBdBYCGAxQDHBIDBhGQA/gNDCgJQDzgLBggKQGjgpAAiZQATgOALgVQADgFABABIAEAMQAkBtAHBkQAIB3gkBPQgwBrhuCsQhxCxgnAaQgoAclYAgQjqAVh7AAQg5AAgigEg");
	this.shape_13.setTransform(86.7,-22,0.378,0.378);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#564A3D").s().p("AB4DEQgYgCgngfQgvgqgagWQhphXhVALQALhdAVhDQAThAAQAFIAzAAQA+ADA0AMQCoAoAMB9QgNBMgMBaQgLAvgpAAIgJgBg");
	this.shape_14.setTransform(61.5,-60.8,0.378,0.378);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CEBCA7").s().p("Ag0BPIhShRIABiIQAJghBxBMQBmBFAiApQAXAcgdAvQgaAqgjAPIgHACQgcAAhLhGg");
	this.shape_15.setTransform(59.5,-54.5,0.378,0.378);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3A322B").s().p("AXdI6QASmTgMghIqThuQpmhlhkAMIjiiTQhWCghWClQirFMACAeQg6ijgXi2IgLiVQh7h7jRhfQjZhjjhgdQBLhYDNhHQCeg2B6gOQgyg6hqhCQhzhHiLg2QlQiCknAhIBEgJQB1gNCHgEQGvgNG4BMQJmBqIhEOQKoFSITI+QhzCghoDiQg0BxgeBRQAMjDAJjKg");
	this.shape_16.setTransform(70.5,-82.1,0.378,0.378);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EDDAC0").s().p("AjsSSQp7gknonGIC7uxIgFitICsnhICmj9IDjCTIDMATQD2AZDQAZQKgBSA+A+QgNEEghIvIERpKIA0AAQA/ABA0AHQCmAVAABHQAAA5AQDqQALDXgUAoQgNAahNBeQhRBkhaBhQj0EJgwgWQgugVgngMIgdgHQgyB6g+B9Qh9D6g/AQQh+AihPANQibAaiZAAQg0AAgzgDg");
	this.shape_17.setTransform(98.8,-45.8,0.378,0.378);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#564A3D").s().p("ASTIQQAikbgWgNQlqhLolhCInbgzQgmgrgwgrQhhhWgyAFQhWCHhvEiQhnEKgDA8QgshRgmhvQhNjdAdiSQigiwkwhjQihg1iUgSQBihhDMhCQBNgYC1gnQhviVkehZQkGhRl3gWQFbjAJehWQIFhJLUACQJGACGtBbQCkAjBnApQBdAkAIAZQAUA8AhFUIBAAjQBPAuBOA2QD4CvCKDEQgyDGgbBTQhBDGhfCeQkMG+oRCwQBDnwAViug");
	this.shape_18.setTransform(83.5,-85.3,0.378,0.378);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logohead, rect = new cjs.Rectangle(0,-132.1,165,132.1), [rect]);


(lib.logohand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgsA7QgLgPAPgNQAQgNAOggQAPgmAKgMQAMgNAOALQANALgHAOQgGALgOAnQgLAhgOAPQgEANgOACIgGAAQgNAAgJgNg");
	this.shape.setTransform(24.4,-62.2,0.378,0.378);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Aj1A7QgKgNAMgJQAtglBGgYQA1gSBLgOQCMgaBfAqQAZAKgOAYQgOAXgZgLQgtgShEAAQg2ABg7AMQhWAUgSAFQg6AQgpAWQgFADgEAAQgHAAgHgIg");
	this.shape_1.setTransform(25.5,-69.8,0.378,0.378);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AASDsQhvgShOgoQhfgwgxhSQgfg0gLg2QgOhDAXguQAUgnAXgQQAggXAbAfQAIAJgGAKQgHAKgLgBQgMgBgNAZQgKAUgCAPQgGAzASAsQAjBaA5AmQA0AiBCAWQA+AUBBAGQBSAIA3gQQBNgVAUhAQAWhEgZhLQgahPg8giQgcgQANgfQANgfAcAQQBWAyAmBqQAnBsgqBaQgnBUhkAdQgvANg3AAQgoAAgrgHg");
	this.shape_2.setTransform(18.3,-19.5,0.378,0.378);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABaFbQh2gFhwg5Qhzg6hGhaQhOhkgFh2QgCg5AWg2QAVg1AogrIAtgvQAcgVAeASQAMAHgBATQAAAIgFAMQgDALgLADQgLACgKgFQgFAGgLAQQgmAsgOAfQgSApgCArQgDAtAOAqQAbBRA+BAQA6A8BTAlQBXAnBQAIQBeAKBNghQApgRAVgYQAWgaAIgqQAIghADgTQAEglgPgKQgJgHgDgMQgDgLAEgLIAGgMQAKgTAWAFQAVACAFAUIABAAQAWAXADAlQACAbgHAqQgMA8gNAeQgVAugnAZQhcA5h2AAIgTAAg");
	this.shape_3.setTransform(15.5,-38.5,0.378,0.378);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ACEGaQhrgPhmg4IhSgtQgvgdgdgaQhZhTg1h2Qg1h4AGhqQAHiFBpg4QBegxCcASQBeALAzAaQAfAPAQAPIAMANIAAAAIACAEIgCgDIAGADQANAFgBAPQgCAPgOACQgSACgPgJQgSgLgMgGQgugWg4gHQhVgMgzABQhSADgwAhQgvAggQA4QgPAxALA+QAaCbBxB1QBpBuCdA1QBYAdBUgFQB0gHAQhRQAMg5gXg3QgSgpgrg2QhehzhRg9QgzgngfgMQg3gXggAhQgSASgSgOQgTgPAOgVQBQh/C7CYQBDA2BFBSQA5BBAdAwQAkA6AGBEQAGBMglAzQgoA5hOAUQgpALgtAAQgcAAgegEg");
	this.shape_4.setTransform(19.5,-53.1,0.378,0.378);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABnIqQgIgGgBgMQgVijAmibQAliYBdiKQBGhoAOgdQAqhWgTg/QgUhAg+glQg6gihGABQiRACh1BjQhqBag4CSQgyCEgICSIgDBXIgBAoQABAdAGAHQASATgQAUQgQAVgYgMQglgTgDhHQgBgFAGhlQAFhZAMhFQAPhSAdhIQBCihBshjQB7hwCegOQBIgHBCAUQBJAXAsAxQA2A7AIBMQAHBIgkBLQgYA0hEBoQhBBhgaA6QgjBRgNBzQgIBCgLCHQAMAFgCAPQgBAPgNACIgOACIgGABQgHAAgGgFg");
	this.shape_5.setTransform(48.9,-78.1,0.378,0.378);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ACbCjQhEgHhGghQjVhjhbicQgJgPAPgMQAPgLAMANQBIBIA1ArQBHA5BGAjQArAVAdALQApAPAjACQAcACAYgHQAUgFAYgNQAJAiAaAYQgnAfg/AAQgQAAgSgCg");
	this.shape_6.setTransform(43.7,-62.6,0.378,0.378);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AlVLJQiEgkAAhLQAAgQASgDQASgCADAQQAHAhBBAUQA7ASAkgHQBygWBthtQDDjBB1lCQAPgpAUhJQAXhVAKgeQAghiAOg7QAahqgCg1QgChjhIgZQgegLAIgeQAIgdAgAFQBkASATB3QANBRgZB1QgKAtgRA5IgfBkQgQAxgcBiQgaBWgYA5QhPC3hSB6QhsCgiEBVQhhA/hYgBQgeAAgegHg");
	this.shape_7.setTransform(39.9,-33.5,0.378,0.378);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AkaIoQhcgiguhSQgKgSARgJQARgJALAPQBzCaDVhDQBYgcBRg8QBPg7AuhFQA9hbAfhsQAfhqgDhuQgChbguhiQgfhAhIhpQAOgnAMguQBoCaAjBMQA9CFgIB/QgICBgpBwQgtB8hPBaQhHBQhXAyQhbAzhlAPQggAEgeAAQhBAAg4gVg");
	this.shape_8.setTransform(45.3,-21.7,0.378,0.378);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D3BDA3").s().p("AhDJtIiMgOQBLgcgZh1QgUhdhQiOQBrANAEiRQADiFhKh8QC7AMAAjrQAAhJgShaIgThKQGrFQiGCCQgiAihXAZQgkAKgGADQgLAGAQAHQBLAggTBdQgUBhhmBCQAtAAApApQBABAAACHQAACLhpAWQgZAFgkAAQgYAAgdgCg");
	this.shape_9.setTransform(24.6,-35.6,0.378,0.378);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EDDAC0").s().p("Ai1KKQiaiSAThlQAQhXB6gPQjrimgSiyQgIhQAohCQAphCBRgpQhehoAViLQAHgsARgqIAQghQB8iADJA2QBlAbBMA1IgLAkIgXBHQEaEUgHCIQgDA0gsAiQgcAWg9AXQA+BUh5DMQBEBfAcBDQAiBQgNA+QgHAkg1ApQg4AshLAWQg5AQg1AAQiBAAhqhjg");
	this.shape_10.setTransform(17.7,-39.3,0.378,0.378);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D3BDA3").s().p("AhDDAQhJgohRg7IhCgyQgBgjADg3QAGhvAThrQAZDPEIhOQCEgnCAhQQgkBdgSCCQgTCPAQBwQgdArg8AAQhPAAiDhKg");
	this.shape_11.setTransform(45.5,-66.9,0.378,0.378);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("ACvLcQhHgEhAgjQg+gjgjg2Qi/BZhlgmQg4gWgmhMQiikMAokGQAgjRCfjFQBxiNClh4QBTg8A7ggIAkARQAuATAuANQCRAqBaggQBPgIgJBwQgGBThKEBQC/DSgRDpQgMCih9DTQhWCSicAAIgTgBg");
	this.shape_12.setTransform(38.8,-33,0.378,0.378);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EDDAC0").s().p("AhlH8Qiqg0hvilQgIi0A1i+QBpl+Erg5QCogfBRA3QBEAvAABnQAABYgvBpQgsBhg4A3QhYBYgUDhQgKBwAIBfQgrAJgsAAQhFAAhIgWg");
	this.shape_13.setTransform(48.6,-78.2,0.378,0.378);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4C4C4C").s().p("AgqOJQhug0gdhrQhsAOg6g9QgSgTgLgYIgHgVQj3h4AEqeQACjhAejtQAZjHAQgcQAVgjBvgaQBUgTBygKQBRgGELCEQDpB0BtBNQBPA4gLCSQgJCFhPCcQA/AqAYAtQANAXA7CfQBIE6i0DlQh9Cdi7BGQg0AUg0AAQhAAAg8geg");
	this.shape_14.setTransform(36.5,-36,0.378,0.378);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logohand, rect = new cjs.Rectangle(0,-99.2,64.9,99.3), [rect]);


(lib.logobody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiPFcQhHgqAIiAQADgrANg+IAThYQAOhNARgrQAIgUATgkQAVglAIgSQAUgwAUgaQAdgmAmgKQASgFAIASQAIASgRAKQggATgXAuQgXA2gOAZQgoBNgSBrQgCAQgNA4QgLA5gDAnQgKB6BBALQAlAGAigKQApgMAFggQAPhgAGhLIAJhlQAGg7ALgrQAJgjARg1IAbhXQADgKAJgHQAJgIAKACIAPABQAZAEADAWQAEAWgVAJQgKArgaBSQgVBLgFA1QgRC1gKBEQgGAqgOAXQgQAaglARQgoAUgtAAQgwAAgmgWg");
	this.shape.setTransform(25.3,-33.6,0.378,0.378);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACJDcQiCgKhMgQQjPgrhGhUQgIgEgGgFQg8grAWhJQATg/A6gsQBIg2BpgEQBZgDBhAgQBbAdBAAeQBVApA1AyQAxAtAQA9QATBHgvAsQgpAmhHAHQgRACgXAAQgjAAgwgEgAjdiQQgcAKgYARQgbATgQAWIABAEQAAATgOAKQAAAaAKAWQAJALALAKQAJAIABALQAkAhBFAXQApAOBHAOQDKApB+gPQBEgHAJgfQAHgagIgaQgIgZgUgUQgkglg4gfQglgVhDgdQiMg8hkAAQgxAAgoAOg");
	this.shape_1.setTransform(77.1,-49.7,0.378,0.378);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4C4C4C").s().p("ABPC+QlMgyhehgQgdgegBgfIAEgZQBEizC6AVQBAAHBWAhQAxASBPAhQA4AWBBA7QBHA+AUA4QAZBDg8AcQgnAShJAAQg9AAhUgNg");
	this.shape_2.setTransform(77.7,-49.7,0.378,0.378);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AC2JeQAAkeg1lrQgWiSgiiXQgUhWgTgoQgihHg5gZQgjgQggAJQghAIgRAgQgPAeACApQAAAPAJA5QARBoArDWQAqDLAOBrQAYCtgHCNQgBATgVAAQgVAAgBgTQgLimgpjgIhNmBQgUhqgLhHQgHgwAAgaQAAgnANghQAUgzA2gcQA4gcA4ASQBBAWAuA1QApAuAXBDQAYBFATBZQANA9ARBkQBCGSAAFIQAAAhglAAQgmAAAAghg");
	this.shape_3.setTransform(81.9,-24.2,0.378,0.378);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5596A5").s().p("AA3JjQg3gPgtgTQgtgTgCgLQgFiNgTjCQgnmDhLkIQAIhhAlgxQAhgsAxACQAvACAtAnQAtApAaA/QA0B+BFHLQBEHKgZAuQgMAVguAAQgqAAhFgRg");
	this.shape_4.setTransform(82,-23.8,0.378,0.378);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AjQEYQhogDgjgEQhNgJg5gaQh/g6g3hZQg8hiArhyQAUgzAjgiQApgpAxADQARABADASQADASgSAEQgvAKgiA5QgfA1ACAzQAEBXBXBFQBTBBB8ASQBGAKCdgDQCbgDB/gZQCVgdB3g+QA4gcAggWQAvggAZgkQA0hLgYhfQgKgDgGgIQgHgJABgLQABgTAFgSQAGgTAVAAQAVAAAFATIACAHQANAGAGAQQAVA+gDA6QgEBBgiAwQg9BZiCBBQkAB+lmAAIhAgBg");
	this.shape_5.setTransform(46.7,-53,0.378,0.378);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AMNL8QgQgMAEgXIAEgcQACgLALgGQAKgFALACQAWgdAQgpQAMgcAPgyQALgpAbhJQAbhNALgkQBBjagWjIQgMhzgehbQgmh0g+hDQg5g9hYgqQhCgfhngcQhwgfh1gEQhrgDh8ATQh7AThWAWQhyAdhZAqQirBQiQC1QhyCOhaDPQgpBdgtCBQgHAUgmBJQgdA4gGAqQgCAVgUAAQgUAAgBgVQgChBAdg7QAcg7AahMQAziRAxhoQBxj1CjihQAuguAegZQAsglApgXQBZgxBXgeQCvg9DsgeQDWgaDVA9QBiAdA+AcQBWAmA4A0QB1BtA0DbQAuDGgdDIQgLBNgjBtIg7C2QghB2gKAYQgkBXg1AYQgJAEgJAAQgKAAgJgHg");
	this.shape_6.setTransform(40.3,-39.5,0.378,0.378);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C4C4C").s().p("AhKFWQgpgUgfhCQg2h0BikAQAfhQAqhVIAjhEIA1AVQA+AbAtAZQgPAVgeCjQgeCmgFBmQgCA0gZAuQgYAtgjAUQgUALgUAAQgRAAgRgIg");
	this.shape_7.setTransform(25.2,-33.5,0.378,0.378);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#44757A").s().p("AnRIZQBqgyEIoJQCDkFBuj7IEVB/IgJAxQgCBLAgB7QAsDKgtCMQgRA2gkA8IhCBnQhBBljdAmQh4AVicAAQhpAAh6gKg");
	this.shape_8.setTransform(58.4,-26.5,0.378,0.378);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C4C4C").s().p("Ap6CNQgmg9ABhMIAJg+IBlhIQCChTCUgvQHWiXHOD+QAdAygIBDQgKBQhABFQitC5nfAVQgtACgpAAQmAAAhsiwg");
	this.shape_9.setTransform(46,-55.4,0.378,0.378);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5596A5").s().p("AkhK0QlFhAjWhiQjlhpANhhQAajCC1lVQCvlLBuhUQA6gsCEgiQCXgnC9gJQHngWH1C2QCdGNiYHIQhMDlhsCWQiMBjk9AHIg0ABQkHAAkwg7g");
	this.shape_10.setTransform(39.8,-33.3,0.378,0.378);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AibC2QgrgKgegTQglgYgLgkQgNguAVg0QATgvAlgkQAqgoA/gXQAwgSBHgMQA/gKALAAQA0gBAMAZQAnAEAiAYQAiAZAPAjQAVA1gXA4QgWAzgxAkQhEAxhnASQgtAIgrAAQgxAAgugKgAgPh2QhCAUgWAKQgvAVgbAiQgXAcgKAbQgPAnARAXQATAbA8AJQA5AJBAgIQA9gIA4gWQAlgPAagVQAfgaAJgfQAPg6gugaQgsgYgxAcQgXANgOgUQgPgUAQgTIAGgHQgiAGgnALg");
	this.shape_11.setTransform(17.4,-57.4,0.378,0.378);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C4C4C").s().p("AhZChQhCgOgmgiQgkghgCgrQgDhfCThJQB8g/BuA0QA3AaAeAmQgeBPhGBKQhVBbhdAAQgVAAgWgFg");
	this.shape_12.setTransform(16.9,-57.4,0.378,0.378);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logobody, rect = new cjs.Rectangle(0,-68.7,92.4,68.7), [rect]);


(lib.logoarm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhzCzQhZgBgJhAQgDgRARgJQASgJAHASQARAnBOgSQA8gOAsgdQA2giAig9QAhg8ADhCQABggAhAAQAhAAgCAgQgFBhg1BOQg0BMhXAsQg6AehFAAIgFAAg");
	this.shape.setTransform(31.9,-20.7,0.378,0.378);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACFN/QlBhKl0jzQlKjZiwj0QhliNgwiUQg2ilASieQALhhAWhEQAbhYAzg8QA4hCBJggQBRgjBPATQCQAkBXCzQAgBAAeBgQARA2AcBkQCBGjD5DtQCeCXDPBNQDaBQDRgZQBNgKBbgcQBDgVBggnQBugsAYgOQBTguANg3QAEgSATAFQASAFgDATQgHAmghAjQgYAagqAcQhJAxh0AsQhvArg3ARQhdAchPAFQjSAOjNhMQjQhMiKh6QiMh7hmihQhiibhAixQgTgzghhyQghhtgVg4Qgnhmgqg6Qg+hXhPgPQhcgQhTBCQhMA9gbBeQgyCpAYCnQAXCnBdCWQCmEMFNDfQCzB5CaBMQC8BeCsAnQEPA8C3gkQApgIA8gWIBjgkQA8gTAbgLQAvgTAggZQARgNAOASQANATgOAPQgeAigtAYQgiATg3ATIhpAoQg/AYgtAIQhWAPhcAAQiMAAicgjg");
	this.shape_1.setTransform(47.5,-35.2,0.378,0.378);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D3BDA3").s().p("AkNCWQCOggCjjJQA0g/AvhJIAmg8IAXAxQAgBCApBbQAQCsjHBrQhjA3hnATg");
	this.shape_2.setTransform(23,-30.5,0.378,0.378);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5596A5").s().p("AljEQQjihWlIi7QChgkBKhXQBGhSAQiZQA7BdCYBpQDRCQD4AtQDuAsE2iDQCbhDBrhLQAmBFgiA4QgKAQggAmQghAogSAcQg4BWjbBnQjpBtjBAOQgXACgZAAQiuAAjphYg");
	this.shape_3.setTransform(60.9,-14.2,0.378,0.378);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDDAC0").s().p("ADMLNQhNggjBiQQl6k6gllmQgNh8AciJIAyi6QAShHBHgqQBHgqBVAJQBcAJBHBEQBPBOAgCNQA4D6CoEsQBUCWBJBkQATDDiABgQhAAxhEAJQAAAFgIAAQgJAAgWgJg");
	this.shape_4.setTransform(20.3,-41.9,0.378,0.378);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoarm, rect = new cjs.Rectangle(0,-70.3,95.4,70.3), [rect]);


(lib.BGMidDeco = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{midDeco0:0,midDeco1:1,midDeco2:2,midDeco3:3});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC7A7A").s().p("AkRCLQgTgCgKgJQgIgHAAgNQgZgRACgeQACgcAYgYQAbgaAmgJQAjgJAnAIQAOg0ArgfQAvgjBCACQBJABAyAmQAtAiAPA3QA4gBAqAfQAoAfAKAuQAEATgNAPQgOAPgaABQhQADh1AAQiVAAjTgGg");
	this.shape.setTransform(0.4,-14.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC7A7A").s().p("AAVGiQgrhdgGinQgCgoAFiRQgdAMgkgHQg4gMgpg9QgmhPAog0QAVgaAggOQgIgNgCgaQgCgfAIgbQAYhLBbgCQBdABAbBCQARApgMAuQAlAKAeAeQA1A0gbBSQgWBAhCAOQgzALgdgQIACDBQAKCpAtBNQAMAeghAJQgHACgHAAQgVAAgJgXg");
	this.shape_1.setTransform(-5.5,-46);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC7A7A").s().p("AAPKnQgYgzgIk7QgHk7AWhrQgWAggzADQgxACgxgYQgzgagXgpQgaguAWg1QgmgWgNg3QgMg0AQg5QASg7ArgkQAxgoBEAEQAQg4AtgdQAogZAxADQAwABAlAaQAmAaAGAmQBygEAdBlQAMAqgMAtQgMAwghAgQAkAxADA1QACA0gdAmQgeAng3AKQg7ALhLgcQgPBrACEuQABDzAIB+QAAAMgNADIgGACQgIAAgEgJg");
	this.shape_2.setTransform(-1.5,-70);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC7A7A").s().p("ABCHsQgohsgMiqIgGi8QghAdgqAGQgvAFgogZQgugegNgzQgMgsANg4QgfgVgPg5QgThHAog5QAVggAwgNQArgMAjAHQAMgkAagcQA0g4BOAaQA2AWAOBJQALA3gNAmQAuARAlAsQA9BIgkBdQgeBMhPAQQg7AMglgSIAGCvQAKDCAWBvQACAIgJABIgCAAQgIAAgCgHg");
	this.shape_3.setTransform(-8.5,-49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33,-28.9,66.8,28.9);
p.frameBounds = [rect, new cjs.Rectangle(-26.1,-90.1,41.3,88.3), new cjs.Rectangle(-32.3,-138.8,61.6,137.5), new cjs.Rectangle(-35,-98.9,53.1,99.8)];


(lib.BGMid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{bgMid0:0,bgMid1:1,bgMid2:2});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B64444").s().p("Eg/PAAPIAAgdMB+fAAAIAAAdg");
	this.shape.setTransform(404.8,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB9C9B").s().p("Eg/MAMgIAA0lIFcAAQBSAAB7gmQBIgWCYg2QCJguBfgNQCAgSBnAfQBTAZBxALQBBAGCIALQCHAPC0giQBogUDNgzQFthSDxgDQFAgEERB4IDeBiQB+A0BgAbQD7BGDbg8QBUgXB0gvIDFhTQDxhiCqAAQCTAABoAcQCFAjBVBUQBPBNB0gGQA8gECbgtQCXgsCOgXQClgaCGAHQBMAEBgAXQAiAICHAmQDmBADvASQBeAICRgHQDIgJAoAAICTAAIAAUlg");
	this.shape_1.setTransform(404.5,-80);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B64444").s().p("Eg/RAAPIAAgdMB+jAAAIAAAdg");
	this.shape_2.setTransform(405,-1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EB9C9B").s().p("Eg/RAMlIAA0kIB5gFQBEgFAigLQDOhHBSgOQC/giD7AlQCGAQCgAJQCpAIB9gEQA0gDD2gVQDGgSCBgEQGPgOENBUQB5AoC2AFQCrAEB9gbQBfgWHwiBQEthPC1gWQDzgeDkAmQD9ArErCIQDABXENgEQC0gCCNgkQDbhEHkAqIGQAoQDsAZCIADQAuACB9AAQBoAAAmACIAAUmg");
	this.shape_3.setTransform(405,-80.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EB9C9B").s().p("Eg/RANFIAA0bIESAAQCwgkDSgjQGlhHCtAAQCPAAFtAfQFqAfBvgBQBIAADxgzQCPgeFehNQK7iWDWAbQDWAbENCIQBFAjB2A/QBgAwA3AMQBmAXJEhBQL9hXC2gMQFNgVI9BjQEdAyDcA2IEcAAIAAUbg");
	this.shape_4.setTransform(405,-83.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-160,809.7,160);
p.frameBounds = [rect, new cjs.Rectangle(0,-161,810,161), new cjs.Rectangle(0,-167.3,810,167.4)];


(lib.BGFrontDeco = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{frontDeco0:0,frontDeco1:1});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B64444").s().p("AgLCYQhFgbgVgxQAvgpBQgOQAsgGBdgBQBbAAADACIABACIhBAHQBZAJAAAuQAAAmgvAcQgxAchKAAQhCAAg5gWgAA5ApQhvAPgdAWIgBADQAZAkBBAXQA6AVAzAAQBUAAApgjQAcgXAAgZQAAgVgigMQgngKgNgFIAAgCIABgCIh+APgAm9AwQhfgVAAgmQAAgqB3gqQBvgnBVAAQB9AABgAsQBMAkAAAXQAAAtiYAdQhzAWhiAAQhQAAhIgRgAmkhPQhlAmAAAeQAAAmB8ARIB+AJQCrAABPgfQAjgNAngnQgdglgwgLQgIgDhUgHIgBgDQACgCAagCQAcgCAcACQgXgHiEgVQh4ABhwArgAE/hnQgngMAAgRQAAgRAngMQAmgMA2AAQA2AAAmAMQAmAMAAARQAAARgmAMQgmAMg2AAQg2AAgmgMgAFPiVIglATIgCABQAPAFAWALQAXAJAhAAQAqABArgOQAigMALgLQgPgNgYgEQghgFgsAMQAAgDAUgHIAPgFIgmgCQgZAAgoASgABrhyIAAgqIBsAAIAAAqgACKiNQgRACgJALIgBACIAIACIAPABQAKAAAUgDQAYgDAQgFIgHgGIgrgCIgEgBIgMACg");
	this.shape.setTransform(0,-17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B64444").s().p("AiSCQQgHgHgLgQQASgNAVAAIAoACIAAACQgBADgwADIgCACQgCACgHACQAHAQAdAJQAGAAADgJQADgNAIgIIACgBQAFACAAANQAAAegaAAQgTAAgTgTgAmsCDQgugLgKgHQAHgWA9gTQA7gSA6AAQASAAAhAHQAqAIAMAMIgCAEIg9gPIASAHQAJAFAAAKQAAAUgyARQgqAOgfAAQgaAAgxgMgAmLBQQgOAFg1AZIA2ANQAcAHASAAQAgAAAkgOQAhgOAKgNQgPgNgFgHIgmgBQgwAAgmAMgAhMA1QhkggAAgbQAAhBClgwQCQgrCKAAQBqAAArAGQA8AIAFAYQgeAAg7gNQg6gOglAAQi6AAiEA0QhlAnggAwQAVAgBAAWQBMAbByAAQByAABNgYQBWgaAjg2QgggWgzgYIhMghIgBgFIAAgCQAAgBAGAAQAuAMAtASQBZAiAAAXQAAA1h1AmQhhAghUAAQiDAAhugjg");
	this.shape_1.setTransform(0,-16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.1,-34.7,108.3,34.8);
p.frameBounds = [rect, new cjs.Rectangle(-48.4,-32.5,97,32.6)];


(lib.BGFront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F25555").s().p("Eg+fANSIAA6jMB8/AAAIAAajg");
	this.shape.setTransform(0,-85,1.001,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BGFront, rect = new cjs.Rectangle(-400.3,-170,800.6,170), [rect]);


(lib.BGCloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{cloud0:0,cloud1:1,cloud2:2});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDF4D9").s().p("AjnF7QhKgBkTgmIklgpQgtgDhYgQQh0gWhYgcQkHhVBQhqQBUhnDMhTQCghBBtgMQCVgRDogvQE7g/BAgLQDPgkDNAfQAvAHCKAfQByAZBHAGQEfABDZBLQBtAlA2AoQA2A4gUBgQgYB2iJBdQiIBBjNAiQhTANkQAbQi3ASjQAFQhMAChVAAQhsAAh5gDg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DDF4D9").s().p("ANHHmQg9gBhPgJIiKgRQiIgRieAFQh0AEiwATQipATh0gEQiagFh9gsQgkgMi3hcQikhSgigEQiegFhOgNQiKgWhHhNQhUhcBWhpQA5hIB5hCQDUh7HOAAQCTAACoANQBWAGBUAIQAxAIAgABQA7ADAngWQF6jhG/BBQCPAVCLAyQAtAQBUAmQDCCZgECnQgDCKiICFQhzBvinBKQiFA7hOAAIgWgCg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DDF4D9").s().p("AqHCKQgeABgVgWQgTgTgFgeQgEgeANgWQAPgYAfgEIBpgPQAuhFB7geQBLgSB/gGQBEgDBXAGQAqACBvALQDiAVCLAbQFcA8iZB7QisAmlUAMQiFAFiQAAQj6AAkdgOg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.3,-38.2,282.6,76.5);
p.frameBounds = [rect, new cjs.Rectangle(-149.3,-48.8,298.7,97.6), new cjs.Rectangle(-72.3,-15.2,144.8,30.4)];


(lib.BGBuilding = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{building0:0,building1:1,building2:2});

	// building1anim
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BFE0B8").s().p("AAdTiQghgCgYgFQgUiJgTq5IgUreQBJAKA+gKQAEDLA0KPQAaFLAbFDQAEAuAHANQgkAGguAAQgbAAgegCgAiWmCQg8gagSgzQBrAeBwgHQBfgGB6giQgbAyhCAgQg9AdhJADIgVABQg+AAgwgVgAhknvQiagChng5Qh1hBgch9QDoA9DzAHQD1AIDpgxQgZAmggAdIgEAEQhMBCiHArQiGAqiHAAIgKAAgAijrpQjcgXh1hCQAQhFAIggQAShDASgeQAMgVAZgcIArguQAxAWCuADQDWAFDggmQBZBQA4BNQBUB0gpA0Qj7BKjuAAQhSAAhRgJgAAiuoQgOAiADAWQAEAhAPAHQAOAHAPgOQAOgOAEgXQAEgbgPgXQgOgVgLAAQgKAAgJATgAh4uoQgOAiADAWQAEAhAPAHQAOAHAPgOQAOgOAEgXQAEgbgPgXQgOgVgLAAQgKAAgJATgAkQu6QgOAiADAWQAEAgAPAIQAOAGAPgOQAPgOADgXQAEgagPgYQgNgVgLAAQgLAAgJAUgAC7u9QgOAhADAXQAEAgAPAIQAOAGAPgOQAPgOADgXQAEgbgPgXQgNgVgLAAQgLAAgJAUgAFMvYQgOAiADAWQAEAgAPAIQAOAGAPgOQAPgOADgXQAEgagPgYQgNgVgLAAQgLAAgJAUgAmYviQgPAiADAWQAEAgAQAIQANAGAPgOQAPgOADgXQAEgagPgYQgNgVgLAAQgKAAgJAUgAkxycQBShECggDQCdgDBjA9QiHAhhxAFIgrABQhsAAhjgag");
	this.shape.setTransform(-5.3,-124.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ABD3A5").s().p("AC0T2IgCgDQgHgNgEgtQgblDgalLQg0qQgEjLQg+ALhJgLIAULeQATK5AUCJIAAABQgnADgeAGQgbjcgMq7QgLqHgHgRQgZgIgzgtQg3gwgPggIg1gcQgsgYgkgcQhuhXgpiCQg1gSgcggQgkgrAugjQAcgWBLgLQAriXBfhNQgegSgCgTQAAgRAUgNQAUgNAbgDQAdgDAVAKQBxhdDIAKQC9AKBZBWQAqgEASALQAPAKANAhQAzAmBDBUQBGBZAKAtQBBAZAqA2IAAAAIACACQATAdg4AbQgPAHhFAXQgRAuhLBIQhSBQhSAkQgIArg1A4Qg4A7gzAKQAVFIAYFiQAxLCAcDZQg4gKgIgJgAiMlsQA4AYBLgEQBJgEA9gdQBCgfAbgzQh6AjhgAGQhvAGhrgdQASAzA8AagAlboUQBnA5CaABQCMACCLgsQCHgqBMhDIAEgDQAggdAZgmQjpAwj1gHQjzgHjog+QAcB+B1BBgAmJwkQgZAcgMAWQgSAegSBDQgIAfgQBGQB1BBDcAYQE7AiFRhjQApg1hUh0Qg4hNhZhPQjgAmjWgFQiugEgxgWIgrAugAg1zOQigADhSBFQB2AeCEgGQBxgFCHghQhfg6iUAAIgNAAgAA0syQgPgIgEggQgDgXAOghQARgoAbApQAPAYgEAaQgEAXgOAOQgLAKgJAAQgFAAgEgCgAhmsyQgPgIgEggQgDgXAOghQARgoAbApQAPAYgEAaQgEAXgOAOQgLAKgJAAQgFAAgEgCgAj+tFQgPgHgEghQgDgWAOghQASgpAaAqQAPAXgEAbQgDAXgPAOQgKAJgKAAQgEAAgFgCgADNtIQgPgHgEghQgDgWAOgiQASgoAaApQAPAYgEAaQgDAYgPAOQgKAJgKAAQgEAAgFgCgAFetjQgPgHgEghQgDgWAOghQASgpAaAqQAPAXgEAbQgDAXgPAOQgKAJgKAAQgEAAgFgCgAmGttQgQgHgEghQgDgWAPghQARgpAaAqQAPAXgEAbQgDAXgPAOQgKAJgKAAQgEAAgEgCg");
	this.shape_1.setTransform(-6.3,-126.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BFE0B8").s().p("Ag2aKQAKw0gei4QCOASCRgbQgIBcAEJ5QADGGADCagAAVFZQhwgGhXgmQhagngSg2QCWAmC2gDQCsgDChgmQgpBPhqAmQhMAbheAAIgpgBgAmEBZQhXgnghgtQgjguAlgoQAKgKAQgIIAkgRQA1BxCXA0QCGAuCqgKQCjgKB3g2QB+g4ALhOQAOAAAPAIIAbAPQA6AmgTAvQgSArhOAqQivBdj+ACIgOAAQjvAAi8hWgAADALQiigEhyhVQh+hgAAidQCtA/DkACQDcABC3g4QAACih+BbQhsBPibAAIgNAAgAmRm7QgBisAEirQBhA9EigJQETgIBwg1IAOCtQANCugJAIQgmAkhnAVQhiAUh+AAIgDAAQkeAAiNhQgAA9pRQgQAWAAAfQAAAfAQAWQAQAWAXAAQAXAAAQgWQAQgWAAgfQAAgfgQgWQgQgWgXAAQgXAAgQAWgAiXpRQgQAWAAAfQAAAfAQAWQAQAWAXAAQAXAAAQgWQAQgWAAgfQAAgfgQgWQgQgWgXAAQgXAAgQAWgAlOp7QgQAWAAAfQAAAfAQAWQAQAWAXAAQAWAAARgWQAQgXAAgeQAAgfgQgWQgRgWgWAAQgXAAgQAWgAD3p/QgQAWAAAfQAAAfAQAWQAQAWAXAAQAXAAAQgWQAQgWAAgfQAAgfgQgWQgQgWgXAAQgXAAgQAWgAjUtDQh+gUg2gyIALj2QB1AfDqgCQDogCClghQAFAZAHBiQAGBcAAAYQgRAfhnAbQhkAaiBAHQguADgsAAQhWAAhIgLgAA9v3QgQAWAAAfQAAAfAQAWQAQAWAXAAQAXAAAQgWQAQgWAAgfQAAgfgQgWQgQgWgXAAQgXAAgQAWgAiXv3QgQAWAAAfQAAAfAQAWQAQAWAXAAQAXAAAQgWQAQgWAAgfQAAgfgQgWQgQgWgXAAQgXAAgQAWgAlOwiQgQAWAAAfQAAAfAQAWQAQAWAXAAQAWAAARgWQAQgWAAgfQAAgfgQgWQgRgWgWAAQgXAAgQAWgAD3wmQgQAWAAAfQAAAfAQAWQAQAWAXAAQAXAAAQgWQAQgWAAgfQAAgfgQgWQgQgWgXAAQgXAAgQAWgAox0LQgQgIgEgTQgEgVALgYQAbg8BjgcQgFAMgaAwQgVAqARAHQCDA/FhgFQCZgDBxgRQB6gTAggfQgBgfgHgWQgIgSgBgGQBBAeAYAtQAfA4hKAhQgrAUhxAVQiEAYiLAIQg5ADg2AAQkuAAirhkgAmi1gIAZgxQAPgeANgSQBzg/I2A6QAWATAIAaQAFAPAJAmQiCAqkBAEIgqAAQjtAAhwgqgAgh4jQijgChgASQAug5BPgfQBLgeBVABQBWAABKAhQBPAkAuBBQh/gfi4gCg");
	this.shape_2.setTransform(-6.9,-165.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ABD3A5").s().p("ADeapIgBgOQgDiagCmGQgFp5AIhcQiQAbiPgSQAeC4gJQ0IAAAOIhHAAQgGihgEnNQgGqUgGgSQgjgKhHg0QhhhGgFg/IhOgrQg5gfgZgVQgrglgTgnQgWgwATguQAOgiAkgeQAkgeAngJIgGhZIgHhgQg4gkgFgcQgGgeA3gaIADiiQAChzgBgwQgqgggTgVQgageADgXQAEgYApgaQAcgSAdgKQAGhtABg+QgfgFg6gbQhOgkgggsQhjiEFniMQAxhZBvgwQBmgsB8AEQB8ADBiAzQBpA2AnBcQEBBgggB2QgMAtgzAnQgtAhg2APQADAaAMBFQALA+ABAaQAAAFAOAGIAdAOQArAXACAlQABAagkAfQgcAXgaAJIAFCkQAHCaAIAdQA0AXACAnQACAnguAXQAABMAEBZQC2AxgJBwQgDAogdArQgYAjgdAVQhDAwg1AVQgOBKg8A7QggAfg2AoIABIaQAAH4ACD/gAirE+QBXAmBvAGQB3AHBdghQBpgmAqhPQihAmisADQi3ADiWgmQATA2BaAngAnahSQgPAIgKAKQglAoAjAuQAgAtBXAnQDBBZD4gDQD/gCCuhdQBPgqASgsQATgug6gmIgcgPQgOgIgPAAQgLBOh9A4Qh4A2iiAKQirAKiFguQiXg1g2hwIgkARgAkKg9QBxBVCiAEQCkADBxhSQB+hbAAiiQi4A4jcgBQjjgCitg/QAACdB+BggAmKmqQCNBREhgBQB+AABigUQBngVAmgkQAJgIgNiuIgPitQhwA1kTAIQkhAJhhg9QgFCrACCsgAmCt4QA3AyB9AUQBuARCLgJQCBgHBkgaQBmgbASgfQAAgYgHhcQgHhigFgZQikAhjpACQjpACh1gfgAo41CQgLAYAFAVQAEATAPAIQDKB2F/gVQCKgICEgYQBxgVArgUQBLghgfg4QgZgthAgeQABAGAHASQAIAWABAfQggAfh6ATQhyARiYADQlhAFiDg/QgRgHAUgqQAbgwAFgMQhjAcgcA8gAln2wQgMASgPAeIgZAxQB5AuENgEQECgECCgqQgKgmgFgPQgHgagWgTQkSgcinAAQi1AAg8AhgAga4SQC3ACCAAfQgvhBhPgkQhJghhWAAQhWgBhLAeQhOAfgvA5QBXgQCNAAIAgAAgABDnWQgQgWAAgfQAAgfAQgWQAQgWAXAAQAXAAAQAWQAQAWAAAfQAAAfgQAWQgQAWgXAAQgXAAgQgWgAiQnWQgQgWAAgfQAAgfAQgWQAQgWAXAAQAXAAAQAWQAQAWAAAfQAAAfgQAWQgQAWgXAAQgXAAgQgWgAlIoAQgQgWAAgfQAAgfAQgWQAQgWAXAAQAXAAAQAWQAQAWAAAfQAAAegQAXQgQAWgXAAQgXAAgQgWgAD+oEQgQgWAAgfQAAgfAQgWQAQgWAXAAQAWAAARAWQAQAWAAAfQAAAfgQAWQgRAWgWAAQgXAAgQgWgABDt8QgQgWAAgfQAAgfAQgWQAQgWAXAAQAXAAAQAWQAQAWAAAfQAAAfgQAWQgQAWgXAAQgXAAgQgWgAiQt8QgQgWAAgfQAAgfAQgWQAQgWAXAAQAXAAAQAWQAQAWAAAfQAAAfgQAWQgQAWgXAAQgXAAgQgWgAlIunQgQgWAAgfQAAgfAQgWQAQgWAXAAQAXAAAQAWQAQAWAAAfQAAAfgQAWQgQAWgXAAQgXAAgQgWgAD+urQgQgWAAgfQAAgfAQgWQAQgWAXAAQAWAAARAWQAQAWAAAfQAAAfgQAWQgRAWgWAAQgXAAgQgWg");
	this.shape_3.setTransform(-7.5,-167.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BFE0B8").s().p("AlyU+IAIgBQgRh4gBmPQgClcAHibQADhFAEjoQADi9AJhpQAWAKAYABIAwgBQg6FWAMETQAeKtABBaQABBdAFAkQAIAzARAYIAAAPgAFaUiQgJiMACl3QABlpAHh5QAHiKgFilQgGibgQiTQA0AFAsgPQgMA7gCMBQgCLRADA0QABAMAEAHgAj7AAIAHg9QgFCXgBD1QgKi+AJiRgAk4lAQgsgIghgdQgggdgOgrQB1AjCCAOQgNAogkAPQgTAIgYAAQgPAAgRgDgADomBQCVgUB5gqQglBRhSAWQgVAGgUAAQg6AAg0gvgAoFomQgZhGgOhrQBFAkCeAUQCYATCzgBQC7gBCUgYQCkgbBJgxQABBagJBEIgCAKQifB+k/ANIg/ABQkgAAj8hogAovsiQgVg8AKhiQAIhTASglQD6gzFsgBQGJgCBXBCQAQAwAEBeQACAvgBAyQjGBbl4AGIg1ABQlHAAiwhHgAg6t4QgfAVASAfQAJATAUADQASACARgMQAQgLADgQQADgTgRgQQgNgLgPAAQgNAAgPAJgACmt3QgPAnAoALQAmALAPglQAPglgngNQgKgDgIAAQgZAAgLAdgAkMuPQgPAGgJAPQgIAQAEANQAFAOASAFIACAAIABABIAAAAQAgAPARggQARgggfgSQgJgFgKAAQgHAAgHACgAGVukQgfAdAXAhQAJAOAOABQAPACAOgPQAdgegUggQgKgRgOAAQgNAAgQAPgAnauJQAAAmAlAAQAlAAAAgmQAAgnglAAQglAAAAAngAk90XQCRgvCuAGQCoAHCTA1QCXA2BSBXQkag3kUgBQkpgCkEA7QBZhsCfg1g");
	this.shape_4.setTransform(-0.4,-127.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ABD3A5").s().p("Aj8VHQgRgXgIgzQgFgkgBheQgBhageqtQgMkSA6lWIgwABQgYgCgWgJQgJBogDC9QgEDpgDBFQgHCaACFcQABGPARB4IgIABQggADgLgCQgUgCgCgfIgGitQgEibAAgyQgCkvAEizQAGkDAEhqQAJjOARidQADgYghgpQgjgtgDgdQgCgZgNgHQgVgFgSgHQhBgbgvgaQhbgxALgYQAJgUApgPQAkgOAVACIgChJQgBgqgYgPQgvgbgFgEQgOgNgGghQgDgSAigXQAQgJAigRQACgtAJhoQgxAHgNABQgxAEgGgNQgHgPASgSQAFgFAZgUQAMgJAmgMQAfgLALgRQBuiIDAg5QCqgyDLAVQC8ASCfBIQCfBIBABeQAdAJAYAOQAmAWgLAVQgJATgqABQgbACgfgFQAMA9AIBJQBYAtgSAlQgGAMgTANIggASQACARABAsQABAzgCAZQAmADAlAXQAjAUgDAOQgLAphGAkIhmAqQABAogYAnQgVAigkAaQgVBAACBSQACBggCE7QgCEYgCB6IgIFjQgBDPARCUQgjAAgLgDQgJgCgFgIQgEgHgBgMQgDgzACrSQACsBAMg7QgsAQg0gGQAQCUAGCaQAFCmgHCKQgHB5gBFoQgCF4AJCLIABAMQgsAAgIgLQgGgHgFgyQgBgLgDjrIgFlKQAClSgBjeQgCmkgTgIQgXgLgNgJQgZgTgWgeQgHgLh5AHQiTAIgSgBQgUAvgYAYQgVAUghALIgPCAIgKBSIgHA8QgJCSAKC+IABAbQAGB5ASDxQAIB6ABC/IACE6QgTgCgNgUgAmLlQQAhAdAsAIQArAJAggOQAkgPANgnQiCgPh1gjQAOArAgAdgADilrQBHA+BQgWQBSgWAlhRQh5AqiVAVgAoLoRQEXBzFEgMQE/gNCfh+IACgJQAJhFgBhZQhJAwikAbQiUAYi6ABQi0ACiYgUQiegUhFgjQAOBqAZBGgABAxXQlsACj6AyQgSAlgIBUQgKBiAVA7QC+BNFugGQF4gGDGhcQABgygCgvQgEhegQgvQhVhBl0AAIgXAAgAlD0BQifA0hZBsQEEg7EpACQEUACEaA2QhShXiXg2QiTg1ingGIgpgBQiXAAiAAqgAgwsZQgUgCgJgUQgSgfAfgUQAfgVAZAXQARAQgDASQgDAQgQAMQgOAJgPAAIgGAAgAC5swQgogKAPgnQAPgnAnANQAnANgPAkQgLAdgaAAQgHAAgJgDgAkUs0IAAAAIgBAAIgCAAQgSgGgFgNQgEgOAIgQQAJgOAPgGQARgHAQAJQAfATgRAgQgLAVgSAAQgJAAgLgFgAGetCQgOgBgJgNQgXgiAfgdQAhgfAUAhQAUAhgdAeQgMANgOAAIgDgBgAngt0QAAgnAlAAQAlAAAAAnQAAAmglAAQglAAAAgmg");
	this.shape_5.setTransform(0.2,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.5,-255.4,134.4,257.8);
p.frameBounds = [rect, new cjs.Rectangle(-74,-338.1,133.1,341.1), new cjs.Rectangle(-74.5,-267.3,149.5,274.6)];


(lib.Slide = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#525115").s().p("AgXA6QgPgKACgbQADgegPgbQgCgEABgEQACgFAFgBQAKgCAcgKQAXgHANAJQACACAAADQAAADgDABQgYAFgLAEIgVAHQAGAMADAPQAegJALAGQAGAEAAAHQAAAFgGAEQgEACgIABIgNACQgGACgJgBIAAAGQgCAYAVgBQALgBAagIQAHgBACAIQACAHgGAEQgQAJgTADIgKABQgPAAgJgIg");
	this.shape.setTransform(0.9,-21.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#525115").s().p("AgPBKQgDgDgBgFQgKAEgFgIQgJgQgGgWQgQgqAIgYIABgCIAAgEQAAgHAHAAQAKgNATgFQASgEAQAFQAYAHANAUQAMATgDAZQgDAbgTAVQgRAUgbAIIgEABQgDAAgCgCgAgSgvQgPACgBAJQgDAMAFAVQAGAWAOAhIAAABIALgJQAGgFAEgEQAQgSADgLQAGgSgGgPQgHgRgTgDIgMgBIgIABg");
	this.shape_1.setTransform(-0.6,-38.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#525115").s().p("AgIApQgKgRABgZQABgWAJgVQACgFAFACQAEABACAEQADAIACAaIAHAmQABAMgKAFIgHACQgFAAgFgIg");
	this.shape_2.setTransform(-2,-55.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#525115").s().p("AgsAzQglgPAahTQACgGAGAAQAGgBACAHQADAKgBANIgBAXQgBATACAFQABACAJAAQATAAAcgIIAQgFQAKgDAGAAQAJABAFAJQAEAIgIAHQgHAHgRAEIgbAFIgbAEIgHAAQgNAAgIgDg");
	this.shape_3.setTransform(-2.3,-69.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#525115").s().p("AAHBrQgRgCgngMQgQgFAFgQQAEgRARAFIAnALQAaAGANgIQAJgHAFgRQAFgTgSgDQgKgCgLACQgXAEgMABQhSADANg1QAJgiAVgXQAYgaAfgBQAogBAUAMQAPAJAFAJQAGAPgBAAQAEADgCAEIgBAEQgBADgDABQgDABgCgCQgGABgDgDQgRgRgPgHQgRgHgVAFQgYAEgMAWQgFAGgGASQgIAWALAAQAQAAAtgHQApgEAPAQQASAVgCAcQgCAdgWAQQgTANgaAAIgLgBg");
	this.shape_4.setTransform(-2.6,-88.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#525115").s().p("AkQFNQhhhWhDhIQhGhKACgRQAFgUBYgoQBRgjAvgMQgEhdgWjMIgajZQgBgJAIgFQAKgIAVgCIAkAAQB6AEC4AiQCrAgAlATQAOAGAFAWQAEARgEALQgEAOAEDAQAFDBgDAKQAyALBWApQBkAvgFAZQgLA+jfDFQhKBChPBAQhFA4gDAAQhOgPjwjWgAkPoWQgPACAAAOQgDAkALBAQAEAdAEApIAEBEQAXEfgLADIg4AOQghAJgWAHQhLAYgNAfQA+BRDGCnQC+CgAnAMQGLk1AUhFQAGgUgXgQQgCgDgngUQhSgsg2gIQgHgBgBgFIABgBQgFgEABgFQgMicADhZQABgWgCg3QgCgxADgcIAAgZQAAgSACgLIgCgCQABADgpgNQgwgNgNgCQgogGg/gOIhmgWQg6gMhwgJIgdgBIgDAAg");
	this.shape_5.setTransform(0,-56.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFF38").s().p("AjdE7Ij+jxQAagfBjgbQAxgOAsgGQgrl/gYiUQA7goERA5QCIAcB9AlIgMHUIBTAfQBdAlArAcQgSCJmbExIAAAAQgPAAj9jug");
	this.shape_6.setTransform(-0.7,-56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Slide, rect = new cjs.Rectangle(-50.5,-112.4,101.1,112.4), [rect]);


(lib.Shoot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#525115").s().p("AAgAUIgdgDIgcgFQgTgCgJAEQgFADgEgEQgEgEADgFQARgWAngBQAXAAANABQAWADALAKQAFAFgBAEQgBAGgFADQgJAHgRAAIgCAAg");
	this.shape.setTransform(1.4,-23.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#525115").s().p("AAFBAQgJgIgEgQQgDgJgCgTQgFgnACgUQgBgDABgDIABgBQAAgJAJgBQAIgCACAJQADAMACAVQABAYACAJIAFAaQACAPgDALQgCAEgDABIgBAAQgDAAgCgCg");
	this.shape_1.setTransform(1.1,-17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#525115").s().p("AgfBAQgggNgEgfQgEgZARgbQAQgbAYgIQAZgIATAWIABAEQAMAEAMANQAKALADAPQAEAQgHANQgOAcgaAMQgPAHgOAAQgNAAgOgGgAgggUQgJAQABARQACAUASAGQARAFAPgGQASgGAGgPQAFgLgCgJQgCgLgLgFIgMgHQgGgEgEgFQgDgEAEgFIABgBQgZAEgNAVg");
	this.shape_2.setTransform(-0.5,-34.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#525115").s().p("AgqA7QgVgQgDgZQgDgZAPgUQAKgNANgIQAOgIANABQAAgEAEgFQAOgQAVAWQAOAPAKAWQAWAxgkAcQgSAPgaABIgCAAQgXAAgSgNgAgSggQgaAQADAeQAEAgAhAAQAOAAALgFQAOgGAFgMQAHgPgNgYQgHgOgGgHQgDAFgFgCQgIgEgGAAQgJAAgIAGg");
	this.shape_3.setTransform(-0.5,-50.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#525115").s().p("AAABEQgLgFgDgSQgBgJAAgUIAAgiQgBgWABgNIgBgBQgEgKAKgDQAEgCADABQADACABAEQAKAngBAdQgBAcAIAUQADAIgHAFQgEACgEAAIgFgBg");
	this.shape_4.setTransform(3.3,-67.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#525115").s().p("AAHANQgXgBgYgIQgEgCgBgEQAAgEAFgCQAJgCAMAAIAVABIAUgCQAMgCAIACQAFABgCAFQgFASggAAIgBAAg");
	this.shape_5.setTransform(-3,-67.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#525115").s().p("AgJA3QgDgJgCgWIgFhWQgBgIAJgDQAJgCADAHQAJAPACAWQACAOAAAZQABAcAEAOQACAIgBADQAAAEgDAFQgCAEgEAAQgNgBgHgSg");
	this.shape_6.setTransform(-7,-67.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#525115").s().p("AAIBrQgQgCgogMQgQgFAEgRQAFgQAQAEIAnAMQAaAGANgJQAKgGAEgRQAGgUgSgCQgNgCgIABQgXAFgNAAQhSAFAOg2QAIgiAVgXQAYgaAggCQAngBAUANQAQAKAFAIIAEAOQAEAEgCAEIgBAEQAAADgDABQgDAAgDgBQgFABgEgEQgQgRgPgGQgSgHgUAEQgYAFgMAVQgGAJgGAQQgIAWAMAAQAQAAAsgIQApgEAPARQASAUgCAdQgBAdgXAPQgSAOgaAAIgLgBg");
	this.shape_7.setTransform(-2.7,-88.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#525115").s().p("AkRFNQhghWhDhHQhGhLABgRQAFgUBZgoQBQgkAwgLQgEhegXjLIgZjaQgBgJAIgEQAKgJAVgBIAjAAQB7AEC4AiQCqAgAmATQAOAHAEAVQAEASgDAKQgFAOAFDAQAFDBgEAKQAxAKBYAqQBkAvgFAYQgLBAjfDFQhKBBhQBAQhEA4gEAAQhOgOjwjXgAkPoWQgPACgBAOQgCAkAKBBQAFAcADAoIAFBFQAXEfgMADIg3AOQghAJgXAHQhKAXgNAgQA9BRDGCmQC/ChAnAMQGLk1AThFQAHgUgXgRQgCgCgngUQhVgsg0gIQgGAAgCgGIABgCQgFgDABgFIgIh6QgDhDADg4QABgWgCg3QgCgxACgcIAAgZQAAgSACgLIgBgCQABACgpgLQgxgOgMgCQgpgGg/gOIhmgWQg+gMhrgJIgdgBIgDAAg");
	this.shape_8.setTransform(0,-56.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEFF38").s().p("AjcE7Ij+jxQAZgeBjgcQAygNAsgHQgsl/gYiUQA8goEPA5QCJAcB8AlIgLHUIBTAfQBdAlAqAcQgSCJmZExIgBAAQgPAAj8jug");
	this.shape_9.setTransform(-0.8,-56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Shoot, rect = new cjs.Rectangle(-50.5,-112.4,101.1,112.5), [rect]);


(lib.Jump = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#525115").s().p("AgnBfQgfhbALgzQgBgrAWgLQAZgMAdAXQAXARAQAcQAIAOAAAPQgBAQgJALQgKANgWAEQgYAEgLAEQAGAhABAWQABAOgOABIgDAAQgMAAgEgLgAgWhHQgEAIAAATQAAAXAFAYQAIgDATgDQAPgCADgBQAJgFgFgNQgHgQgNgMIgOgNQgJgIgFAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABg");
	this.shape.setTransform(2.3,-22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#525115").s().p("AhEBYQgYgCAAg8QAFhBAAgNQABgMAMgCQAMgBADALQAKAjAMAQQAMAPAKgGQAIgEAFgTQACgYAEgNQAGgXAOgHQAHgDAGADQAHACACAIQAJAjAOArIAHAZQAFAPAHAIQAIAKgGAKQgGAKgMgCQgOgDgJgQQgFgJgGgVIgLgsIgDAPQgNAigZAEQgcAFgUgfIAAAFIgDAfQgBAXAEAIQACADgCADQgCADgDAAIgBAAg");
	this.shape_1.setTransform(3.3,-43.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#525115").s().p("AgDBDQgUgDgLgOQgOgRgEgaIgBgVQAAgOgBgHQgBgFAEgEQAFgEAFADQALAHAEASIAGAcQADALAJAKQALAMAIgKQAMgNgCgZQAAgJgGggQgCgKAJgGQAJgHAHAJQATAWgCAoQgDArgWARQgKAIgOAAIgJgBg");
	this.shape_2.setTransform(-0.9,-61.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#525115").s().p("Ag7B0QgqgcAQgqQADgFAEgBQAEgCAEAEQAIAGAJARQAIAQAIAGQAaAXALgeQAGgSABgeQACg4gGg5IgGACQgwAIgKgXQgEgIAFgHQAEgFAHAAIAAgBQAiAEAigLQArgOAZAPQADACAAAFQAAAEgDACQgWAPgmAIQAMAkAABDQAAAqgBAKQgEAfgSAPQgRAOgTAAQgTAAgUgOg");
	this.shape_3.setTransform(-2.4,-83.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#525115").s().p("AkNI3QgJgCAAgKQAEhyAChpQAFjMgEheQgxgHhTgeQhcgfgGgTQgDgRA/hRQA8hMBZhfQDcjrBMgVQAEAABJAxQBVA6BPA6QDvCwASA/QAGAXhfA4QhTAxgwAQQAEAKAMC/QANDAAFANQAEALgCARQgCAWgNAIQglAXinAuQi0Ayh5APIgkADIgEAAQgSAAgJgIgAAAoOQgnAPiwCxQi2C4g2BWQAOAcBOATIBxATQALACADEgIACBFQAAAogCAdQgFBCAGAjQACAOAPABQAGAAAagEQBtgTA6gRIBjgfQA+gTAngKQANgDAvgSQAogPgBADIABgDQgDgKgBgSIgDgZQgEgcgDgxQgCg3gDgWQgMhXgCidQgBgFAFgEIgBgBQABgGAGgBQA1gOBOgyQAjgWAEgEQAWgTgJgTQgQgrjXiZQjLiQgLAAIAAAAg");
	this.shape_4.setTransform(0,-57.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEFF38").s().p("AkLIqQAHheAHjmIAGjTQgtgEgygJQhkgRgdgdIDokGQDqkGAMABQAJABBEAsQBNAyBLA5QDZCkATBXQgpAfhYAtIhRAnIA2HRQh6AviEAoQi7A5hWAAQglAAgTgKg");
	this.shape_5.setTransform(-0.8,-57.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Jump, rect = new cjs.Rectangle(-50.2,-114.9,100.5,115), [rect]);


(lib.Shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(35,31,32,0.2)").s().p("AomB8QhggWgngOQhegkAAg0QAAgzBegkQAngOBggWQDlg0FBAAQFDAADlA0QBfAWAnAOQBdAkAAAzQAAA0hdAkQgnAOhfAWQjlA0lDgBQlBABjlg0g");
	this.shape.setTransform(78,17.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Shadow, rect = new cjs.Rectangle(0,0,155.9,35.1), [rect]);


(lib.PinkChunk3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#752C44").s().p("AhODTQgcgbgVgfQgXgjgLgpQgKgqAFgoQAFguAVgsQAVgrAiggQASgSAlgTQAogWAMgKQAPgNBBB+QA8B0AFAcIAAACQAKBFhCBBQgwAwhNAkQgFADgGAAQgUAAghgegAgNDTQgBgCAagRIADgBQBmhOAIhjQgfgngehIQgbhAgOg6QgJAIguAhQgiAXgSAZQgxBEgBBOQAABGAqA3QAIAKAiAYQAfAWAGAOIAAAAg");
	this.shape.setTransform(0,-24.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E54875").s().p("AhEC/Qg4hEgShEQgShJAnhDQAcgxBGg9QBBg6AjBGQAKAVAOAvQAOAwAIAPQBLCciPBcQgoAZgYACIgDAAQgeAAgaggg");
	this.shape_1.setTransform(-1.1,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.PinkChunk3, rect = new cjs.Rectangle(-16.8,-48.1,33.8,48.2), [rect]);


(lib.PinkChunk1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#752C44").s().p("AguCVQgYgHgegOQgpgUgBgLQgHg+Aag/QAag/AwgoQA5gwA0AYQAbAMAVATQAcAagEAXQAXAugUBSQgVBVgvAUQgPAGgVAAQgfAAgugPgAgyhRQgdArgQAjQgVAtAAAyQAPADAiANQAeALASADQA9AMAfgeQAbgaAKhBIABgDQAHgxgbgtQgegygzgDIgBAAQgVAAgmA4g");
	this.shape.setTransform(0,-16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E54875").s().p("AgHCXQg5gBglglQgmglAQg/QANg4AugxQAvgyAtgHQA0gJAYA3IAAABQAZA5AAA3QAABEgoAmQgmAjg2AAIgEAAg");
	this.shape_1.setTransform(0.1,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.PinkChunk1, rect = new cjs.Rectangle(-14.4,-32.7,28.9,32.8), [rect]);


(lib.PinkChunk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#752C44").s().p("AAnBoQg8gLgRgPQgkAOgPgsQgNglAJgfQANgtAXgZQAegfAdAeQBHBIAXBmIABAGQAEASgeAAQgNAAgTgDgAhEgcQgRAoAYAXQAXAXAQAGQAMAFAjACIAlAAQgfhUg6hHQgbAVgOAjg");
	this.shape.setTransform(0,-10.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E54875").s().p("AAcBdQg2gDgWgQQghgXAAgsQAAgkAXglQAlg6AxBGQAlA0APA8IABAEQAHAfgyAAIgKAAg");
	this.shape_1.setTransform(-0.2,-11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.PinkChunk, rect = new cjs.Rectangle(-9.7,-21.4,19.6,21.4), [rect]);


(lib.TunnelFrontAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AA4646").s().p("AgTApQgXgHgIgaQgFgPArgVQAmgUALAJIABABQAHAIgHgIQASAWgHAVQgGAUgWAKQgOAIgNAAQgGAAgHgCg");
	this.shape.setTransform(8.5,-361.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AA4646").s().p("Ah4B4QgpgaAAghQABgQAHgQIAPgdQAZg2AIgQQAZguAYgOQAggTAiANQAYAIAjAdQAWARAYAYQAGAGAFAMQAHAPADAEIADAHQAYAZgBAhQgBAhgbAYQgTASgfAJQgNADgrAHQgcAEgaAAQg6AAgkgWg");
	this.shape_1.setTransform(21.6,-433.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#702F2F").s().p("AgBGDQgpgxgNgqQgMgnAPhcQAThjADgiQAFgzAFhoQAFhnAFg0IgDhdQgDhPAHgFQASgSAHBfQAFBRgEAcQgQCDADByQABAzgGBOQgJBbgBAcQgDCABGBkIAFAHQgogtgWgbg");
	this.shape_2.setTransform(87.4,-204.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#702F2F").s().p("AAED4QgTgLgBh/QAEiHgDgVQgGgiAEhOQAEhkAbANQgDgBgBBHIAABSIAHBoQADA2AAArIAAAHIgCBIQgEA9gJAAIgBAAgAAOj1IAAAAIAAAAg");
	this.shape_3.setTransform(83.6,-144.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#702F2F").s().p("AgHFWQgbg0ABgTQAAgZgHhNQgHhOAAgjQADiaAli2QAFgdAPgmQAWg2ANAfQADAHgPAtIgTBAQgSBhgIBuQgGBXABB3QAAAhASBPQASBJgDAjIgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQgEAAgTgog");
	this.shape_4.setTransform(80.8,-83.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#702F2F").s().p("AhoDOQgRhIAEgPQAGgfATgCQAVgCAKgdQA9igAIgVQBAiXAiAHQALACACANQACAMgJAGQhjCig/C1QgJAagRgIQgOgGgCAaQgBAGAKA8QAJA2gFAGIgCABQgJAAgOhBg");
	this.shape_5.setTransform(68.2,-27.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AA4646").s().p("AgKH2QgTg5ARh5QARh6gSg9IgxibQgQhSAjhOQAlhTAThYQAGgcABg2QAAg2AGgaQABgIAJAjIAIAjQACARgEAgQgDAhACAQQAFAtgJA2QgHAigSA+QgWBNAjBtIAdBZQANAwACApIAAAIQAAA5gDAfQgDAwgLAmQgMAlgQAkQgTArgIAAQgFAAgCgIg");
	this.shape_6.setTransform(88.7,-265.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AA4646").s().p("AC9FEIgagsQgNgSgXgUQgbgWhZhCQhJg2gnglQhDhAgagiQgxhBACg4QABglAdhEQAUgwAHgdIgCApQgCApAAAbQACBFAbAjQATAWA6A1QAaAcA6AgIBpA4QB8BIAKBcIAAAEIAAABQAFAYgQAwQgLAggMAAQgJAAgJgPg");
	this.shape_7.setTransform(60,-321.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#AA4646").s().p("AHNHKQgfgOgUgRQgigeg/hDQhwhzhDg4QgMgKgWgaQgVgYgOgLQgggZgOgWQgNgUgVgKQgIACgJAAQhagNg0g7QgLgOgbgRQgggUgJgIIgdgdQgTgTgOgFIgigNQgTgGgRAAQgHAAgNgEQgNgDgHgBQgIgBgMADQgOADgGAAQgbACggAaQgjAcgTAEQgNADgJgIQgJgHgBgNQgCgTAJgeIASgvIAQguQAKgbAJgSQA7h1BGgRQAVgFAQANQAQAMABAVIAAADQAhAKADgEQAXAEAPARQAOAQAEAYIB8BFIAzAeQAcAUAKAXQAHAPABAIQABABAPAKQBKA0AnAfQBAAzAmAvQAHAJA3A5QAoApAOAdQAVApAmAwQAkAvAjAgQAdAZA8AhQBAAiAaAWIAJAIQgtAwgzASIg2gXg");
	this.shape_8.setTransform(95.2,-374.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#702F2F").s().p("AhNDFQgOgMAZguQAfgvAEgKQAMgbgCgpQgBgRgGg0QgEgdAyhDQAyhDAOAXQAFAKgbAsIghA1QgKAWgEAXQgCAMgCAhQgqDIgiAAQgFAAgFgFg");
	this.shape_9.setTransform(176.3,-269.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#702F2F").s().p("AgWgQQAWgHAugCQATACAIARQgEgGhDAMQhEANgGANQAPgfAjgLg");
	this.shape_10.setTransform(70.2,-422.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#702F2F").s().p("AiGAiQArg4AdgaQAngjA3gTQAzgRA1gBIAEAAQAVABAOARQgHgGhVAbQhSAagSALQgTAKhFBLQhGBLAHAFQgWgMA4hLg");
	this.shape_11.setTransform(52.1,-419.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#702F2F").s().p("AgKAAQADgPAFgIQAFgKAFAKQAEAHAAAQQABARgGAFQgHAHgFAAQgJAAAEgdg");
	this.shape_12.setTransform(122.8,-123.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#702F2F").s().p("AiuBnIAAAAIAAAAgAiIAVQAZgYAyglQAughBEgTQBNgUAsASIACACQANAGhdAgQhjAhgKAFQgLAFhMA4QhLA4ABACQgOgeA0g0g");
	this.shape_13.setTransform(143,-138);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#702F2F").s().p("AgLAAQAAgNAJABQAIABAEAIQAGAJgOAFIgFACQgIAAAAgNg");
	this.shape_14.setTransform(90.9,-334.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#702F2F").s().p("AgPABQgDgdAWAAQAHAAAEAcQADAdgHAAIgCAAQgUAAgEgcg");
	this.shape_15.setTransform(89.7,-327.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#702F2F").s().p("ACgFaQg3hEhxiBIAAABQgMgQjhjiQgegegghSQgfhPgYgaQAbAcA8BNQA2BHAlAiIgOiAQgKhRgEguQgFg4AVhHQAZhMAMgrQgbBvANCcIAkEUQAcAaCzDMQCsDEAbAhQgahlAChAQADhJAnhXQAmhXARg8QAYhYgKg9QATBhgcBzQgQBFgvCNQgOAxASBTIAfCEQAXAggFArIgGA7QgehRiNiug");
	this.shape_16.setTransform(54.8,-297.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7C3232").s().p("AgjAOQgHgPAmgVQAlgTAAgBIAAAAQAOAogeAgQgNAOgKAAQgQAAgNgegAAhgrIAAABg");
	this.shape_17.setTransform(72.6,-340.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7C3232").s().p("AgiBDQg3gWAzhfQALgLAOgJQAZgRARADIABAAIABAAIACABIADABQAUALAGBEQAGBHgUAOQgFAEgKAAQgXAAgsgTg");
	this.shape_18.setTransform(63,-356);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7C3232").s().p("AgIA2QgWgHgFg+QgEgNAGgLQAGgNANgBQAogFAJAfQAIAagRAeQgOAagOAAIgGgBg");
	this.shape_19.setTransform(133.4,-178.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7C3232").s().p("AgwAZQgHgqABgTQADgpAgAAQAdAAARAiQAKASAPAlIABACQAGALgNASQgMASgTAKQgOAHgKAAQgeAAgJg1g");
	this.shape_20.setTransform(119.2,-193.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7C3232").s().p("AgnCnQgzgygMg4QgMg0AThIQALgtA7goQA6gqAuAIQAaAEACBHQACBDgTBOQgVBUggAmQgUAYgTAAQgSAAgTgRg");
	this.shape_21.setTransform(137.9,-213.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#702F2F").s().p("AgFAYQgdgEALgcQAEgMANgEQANgEAIAMIABACQAIASADAWIgggCg");
	this.shape_22.setTransform(162.1,-125.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#702F2F").s().p("AjZFoQAuh4AbgXQAegaA4gmQBCgtAVgQQBrhRAri7QAEgPALiMQAHhdAhgzIACgDQALgRgCAkQgBASgDAWQgIAvgJBhQgJBggQBCQgVBSgoBFQgcAyhDAtQgmAahMAwQhAAtgqBdIgYBMQgUA+gJABIgBAAQghAAAvh8g");
	this.shape_23.setTransform(131.5,-67.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#AA4646").s().p("AgEAtQgggTADgrQAEgrAlASQAhAQgJArQgDARgKAJQgGAFgHAAQgFAAgFgDg");
	this.shape_24.setTransform(101.7,-134.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#AA4646").s().p("AgWBGQgWgHgHgeQgFgWAKgaQAJgaARgQQASgSAQAEQASAEAMAZIAEALIABAEQAJAbgJAZQgJAagWANQgOAJgMAAQgHAAgHgDg");
	this.shape_25.setTransform(111.2,-120.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#AA4646").s().p("AiLEAQgPiDAHhYQAKh0A0haQAfg3AigXQAUgNAMgdQAOghAOgNQAdgZAgAdQAeAZACAiIABADIAAAGIABAGIAKBxQAGBKgBAwQgECHhKBiQhJBgguAcQgVAMgQAAQgtAAgKhbg");
	this.shape_26.setTransform(92.1,-90.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#AA4646").s().p("AghAjQgSgTAKgfQAKghAfgBQAfgBADAlIABABIAAABQARAZgLASQgKARgZABIgDAAQgXAAgNgPg");
	this.shape_27.setTransform(148.6,-306.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AA4646").s().p("AgvBGQgJgQgJgsQgFgcADgQQAEgXAUgNQAkgVAVgCQAhgDALAmQAQA6gIAjQgLAtg3AMIgLACQgXAAgNgYg");
	this.shape_28.setTransform(164.8,-291.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#AA4646").s().p("AgMB4QgfgpgTgsQg3iDBqggQAMgZAZABQAZAAAQAeIABACIAAACQAXAwgPBbQgPBhgoAiIgCABQgHAAgYghg");
	this.shape_29.setTransform(112.5,-261.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#933A3A").s().p("AhqGjQgxg9AoiqQANg1AahPIAghmIAliGQAThMAMg6QAKgvATgoQAehDAWAvIAEAHQAqBggdChQgKA6gWBRIgjB8IgQBTQgQBQgRA1QgkB3goAAQgSAAgSgWg");
	this.shape_30.setTransform(168.3,-224.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#933A3A").s().p("ABQKMQg2ghgRhsQgIh8gEgrQgUjMgjjoQgSiDgKhCQgThygdhPQgcgygPgeQgdg4AOgcQAMgZAfAFQAaAEAUASQAxArApBXQANAcAsB4QA+CkAkDWQAUB0AeEQQAMBkgOBOQgQBagwAAQgUAAgagQg");
	this.shape_31.setTransform(91.7,-249.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#7C3232").s().p("AoITgQhAgWASg9QADgJAthTQg6g6ADgnQACgZAvhQQAjg7BghEQBphLAjgtQA7hNAeh4IAnjXQAOhOAnhGQAZgtA+hUQAVgcAHg/QAGhGAEgcQAaikAIheQAHhJgFiPQgEiSAGhHQAJhnALhBQAZiUAjABQgGAAAPEQIASE1QACA7gBBPIgDCJQAAAagGAdIgLA1QgBAMAKAYQAKAZAAAMQgBCnAsC+QAhCNBHDNQBAC2A4CyIAwCjQADAKAaASQAYARADARIABAFQAIAugIAaQgHAYgiAtQgXAegnALQgaAHgwAAQiGgBkLABQjoABhOgBIhmACQg/AAglgNgACrzsIAAAAIAAAAg");
	this.shape_32.setTransform(165.7,-126.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7C3232").s().p("AD2EaQhshqgqgvQjXjshrh3QgygkgogoQhOhOADhHQAqACBPASQBYAVAYARQFGDsDgDfQgkAuAFCvQADBYAJBNQgghIhfhig");
	this.shape_33.setTransform(46.5,-294.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#933A3A").s().p("EgF3AicQgLAAgJgTQgKgWAAggQgQhAAig2IAigwQAVggAMgdQAdhOARgnQAehHAkgjQgihEASi1QAMh6AeitQAShmACh/QABg6gFitIgBhRQACgqARgkQAEgJgFg3QgFg/AAgKQASkAAflKQhkihiTiwQhyiIioiuQhnhrhrhHQgJgGgWgtQgag0gWhEQhAi8gCivQgDjqB0idQCOjCE6g9QBbBSB4BvIDPDEQA4A2AYASQAnAdA4AVQBDAZAlAkQAlAkAYBAQAJAZAtAYQAyAbAMATIAyBLQAdAuAWAcQApA0BrBUQBrBTAqA2QAkAuAPBMQAOBFgJA+QAcB5gZCDQgNBGg6CsQgHAUgPAeQgLAaAEAZQAGAogBA2QgBAcgFAxQgGA2gBAWQgBAiAFBhQAICIAfGAQAhGWAgFRQAiFdAuGKg");
	this.shape_34.setTransform(99,-221.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TunnelFrontAnim, rect = new cjs.Rectangle(0,-447.4,223.1,447.4), [rect]);


(lib.TunnelBackAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AA4646").s().p("AgGArQgQgFgHgUIgIgPQgFgKAKgPQALgRATgEQAFgCAHABIABAAQALAAAIAJQAIAIABALIAAAbQgCAPgKAIQgNALgMAAQgDAAgFgCg");
	this.shape.setTransform(67.2,-280.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AA4646").s().p("AgoAKQgEgnAagCQAIgLALgEQAMgDAHAGIADADIADAEQAZAegQAZQgPAaglADIgBAAQgRAAgFgmg");
	this.shape_1.setTransform(58.7,-179.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AA4646").s().p("AAkB6Qg8gCgegVQgkgZADg2QABgYAQgmQATgqAHgTQAQgpAwAzQAZAaAcArQAXAcgKA6QgLA8gmAAIgBAAg");
	this.shape_2.setTransform(54.5,-202.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C3232").s().p("AgXAAQgBgeAYgBQAZABgBAeQAAAfgYAAQgXAAAAgfg");
	this.shape_3.setTransform(42,-240);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7C3232").s().p("AgvBLQgkAAAJgwQAOhFAPgRQAWgYA6APIAFABQAsANgJAjQgIAegrAhQgnAfgfAAIgBAAg");
	this.shape_4.setTransform(50.2,-253.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AA4646").s().p("AhCBAIgCgKIABABQgHgWAIghQAHggASgaQAqg/AyAlIABABIADADQAXATgKArQgJAlgdAlQgeAkgZAGIgIAAQgYAAgJgig");
	this.shape_5.setTransform(38.3,-274.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AA4646").s().p("AgpAYQgHgSADgUQADgVAMgIQAMgIASADQASAEAOAMQAhAegoAgQgXAUgPAAQgSAAgKgag");
	this.shape_6.setTransform(41.2,-34.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AA4646").s().p("AjNBwQgEgcACgdQACgoAMgOQAEggA/gmQA3ghBQgaQBPgaA5gDQA9gEACAZQAEA2gYAZQgLALhAAgQgjARgzAoQhDA2gPAKQg6AngcAJQgMAEgKAAQgkAAgGgvg");
	this.shape_7.setTransform(25.3,-40.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#702F2F").s().p("AgIAtQgbg2gBhFQAAgjAQAhQAIAQAIAVQAEAaAOAoIAUA9IACAFQACAIgDAAQgGAAglg0g");
	this.shape_8.setTransform(35.9,-249.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#702F2F").s().p("ABLGUQgjgkgYhYQgWhogOgwQgYhSgjgbQgHAfgJBDQgIBBgIAiQgGAbgsBCQgkA0AEAuQgFgyAHgnQAHgiAVg2QASgrANhIQAThgAFgTQgbgPgRgYQAEAFAXgFQAagGAEACQAjhcASh3IAThbQAMg5gDggQANBqgOBkQgNBbgmBuQA8AoAfB9QAJAiAPBDQAOA6ANAeQAKAWArAoQAvAsAUgGQgZAIgWAAQgsAAgegfg");
	this.shape_9.setTransform(76.5,-92.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AA4646").s().p("AgaCuQgCihAGhKQAGhWAGh9QABgQAPg0QARgzABAPIAAAJQAGBkgHEuQgIFZgRAAQgWAAgCjOg");
	this.shape_10.setTransform(32.9,-217.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AA4646").s().p("AgpBCQgfguAWg5QAYg8A8AQQAZAHABAkQABAggRAkQgRAlgXANQgIAFgIAAQgQAAgNgTg");
	this.shape_11.setTransform(31.7,-111.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AA4646").s().p("AhaDpQg5gZAGhXQAFhLAwhgQAthaA1g4QA6g7AfAWIACACQArAggBBWQgBBQgkBaQgkBdgzAyQgoAogmAAQgQAAgPgHg");
	this.shape_12.setTransform(35.4,-148.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7C3232").s().p("ADPMxQiTgIgeABQh/ADhVAAQglADgXAAQgrABgPgLQgJAEgngqQglgpgDgMQgOg1AHg2QAEgaAVhOQAOg0ADgsQADglgFg8QgFg5AdhAQAthgAFgUQAchhAYiOIAlj0IASh2QAMhCARgzQAXgxAPglQAdhIgKgOQA2BKB3CeICBCsIAhAoQAbAhgCAIQgIAhATBQQAZBlABATQAHBRAEBsIgHB4QgFBTAOAiQAQAmAjA+QAbA4gBA3QgBAegIBSQgEAtgHAcQgIAhgFAnQgTAVhrAAIghAAg");
	this.shape_13.setTransform(92.2,-81.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#933A3A").s().p("AoMXYQgogHgVgpQgPgggBgrQgChYAYhbQAbhlAwg8QAYgeARg9QARhEAKgeQAshyATg6QAihmgEhNQgGiIAPiiQAKhqAci/QAUiLgFjUQgOhNAIhhQgHivAEhxQAIimALhJQAWiLA5hUQAXghA3gkQA/goAvgCQBVgjB4AoIAdgLQARgFAMADQANAEAOALIAYATIAMAKQADADgIAFQAIgEAKgFIATgJQAogSAnAMQAcAIAfAqQAWAeATAmIAgA/QATAmAKAbIAIAHQivBciECoQA6CaA7CyIA+C7QAfBkAIBMIACANIAAAGQALDHmRX+Qg2AKkPADIhPAAQjNAAgogJg");
	this.shape_14.setTransform(60.2,-151.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TunnelBackAnim, rect = new cjs.Rectangle(0,-301.7,132.1,301.7), [rect]);


(lib.SpikeAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2DE49").s().p("AgsDpQgJgRgQg3QgJgigDjWQgCjZAOAmQAHATA9DDQA2CuASAqIABADIACAEIAAAAQARAigUAhQgUAgglADIgEAAQghAAgVgog");
	this.shape.setTransform(0,-27.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.SpikeAnim, rect = new cjs.Rectangle(-8.2,-54.5,16.5,54.5), [rect]);


(lib.Spike3Anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2DE49").s().p("Ag0FqQglgFgSgbQgVgdAKgtQAJglAqg/QAvhFALgeQAnhmAQhzQAUiZAUguQAIgUANBiQAMBUABAfIAAAYQAECbgEA3QgICFgqBfQgRAlglATQgXAMgaAAQgJAAgKgCg");
	this.shape.setTransform(0,-36.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Spike3Anim, rect = new cjs.Rectangle(-12.2,-72.7,24.4,72.7), [rect]);


(lib.Spike2Anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2DE49").s().p("AAbCwQglgLgUgjQgZgtgUhfQgYh2AbgxQABgCAuBOIA0BaIAAAAIABABQAjAwAKAXQAWAtgMAkQgLAkgdAAQgIAAgIgCg");
	this.shape.setTransform(0,-17.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Spike2Anim, rect = new cjs.Rectangle(-8.7,-35.6,17.5,35.6), [rect]);


(lib.LogAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Log
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFD659").s().p("AhyFnQjUglhmhsQhxh4AcjNQAOg9ApgwIABABQABAAACgFQAtgyBMgiIACgBIAngQQCbg5CiASQDRAWCJBZQAnAZAdAdQACAJACACQADADACgFQBdBlgcCLIgBAJQgoCyjPBSQh9AziDAAQg9AAg+gLgAj9hrQhVA+gPBBQgNA6ArA0QAnAvBKAcQBKAbBOgEQCjgIBUhCQA+gygThCQgThAhOgMQhCgJhHAOQhSAPgsAlQgzAuAKAYQAJAUAsACQApACAigNQAkgNgOgPQgJgLgjAOQgnAQgOgFQgSgaArgWQAmgUBCgHQBFgHAyAKQA6AMAHAfQAXBbjCAdQhHAKhOgCQhIgCgcgMQhPghgJgzQgIgrAtgzQAmgsBAglQA9gkAwgJQBGgODOA/IB5AlQAsANgPgMQgXgShCgbQhRgihTgTQhZgVhIAAQh7AAhPA6g");
	this.shape.setTransform(-1,-44);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B64444").s().p("AHCJLQgCgCgCgJQgKgugLjmQgPkTANAnQALAiAGA9QAFAtAAAnQABBIAKCOQADApABAlQAAApgEAJQgBABAAABQAAAAgBAAQAAABgBAAQAAAAAAAAIgDgBgAnCIsIAAgBQgJgDABg4QABguAFgtQAFgmANhMQAMhMAFgmIAOidQAKhrAQgcQATghgoFgQgkE4gNAjQgBAFgCAAIAAAAgAlGHTQgGgCAOhTQAOhZgDgTQAHAkgHBQQgIBEgIAIIgCABgAD9h6QAHjGAMjiQAMBPgDB1IgHDFIALDcQAJDBgHABIgBAAQguAAANl/gAgom2QALiAANgUQAKgPgFDBQgGC/gQAAQgUhMANiRgAiemnQgHgKADgxQACguAIgfIABgDIABgBIAAgBIAAgCQAHgYgEBZQgEBPgGAAIgBgBg");
	this.shape_1.setTransform(-1.7,-121.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#843A3A").s().p("AgiOHQingHiQg3QiLg1hIhmQhIhoAAiVQAAlDBHnSQAejEAnhTQA7h/CPhGQB4g8COgJQCJgJCEAnQC4A2BFCjQAbBBARBhQAIAxAPCGIApFmQAWDTACCWIAAALQgCCnhgB0QhaBrieA0Qh/ApiTAAIgsgBgAl7mlQgRAdgJBrIgOCeQgFAmgNBMQgMBKgFAmQgGAtAAAvQgBA3AIAEQgpAwgOA9QgcDNByB5QBlBsDUAkQDEAjC4hKQDOhTAoiyIABgJQAdiMhehkQAFgJAAgqQgBglgEgpQgKiOAAhGQgBgogEgsQgHg9gKgiQgNgnAPETQALDlAKAtQgdgcgmgZQiKhajRgWQiigRibA5IgmAPQAIgIAHhEQAIhPgHgjQADATgPBXQgOBUAHABIAAAAQhLAjguAyQANgjAjk3QAllEgNAAQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAAAABgAD7msQgOGGAwgGQAHgBgKjBIgKjdIAHjEQACh1gLhPQgNDhgGDGgAgSt7QgNATgMCAQgMCSAUBLQAPAAAGi+QAGizgJAAIgBABgAiYtnIAAABIAAABIgBACIgBADQgIAfgDAtQgDAxAIALQAGAKAEhYQAEhHgEAAQAAAAgCAGgAjNKjQhJgbgogwQgrgzANg7QAPhBBVg+QB/hcDtA3QBSATBRAhQBCAcAXASQAPAMgsgNIh5gmQjNg/hHAOQgwAKg9AjQhAAlgmAtQgsAzAHAsQAJAzBQAhQAbALBJADQBNACBHgLQDDgdgYhaQgHgfg6gMQgygLhEAHQhCAIgnATQgrAWASAaQAOAGAngQQAjgPAJALQAOAPgkAOQgiAMgpgBQgsgCgIgUQgLgZAzgtQAsgnBRgPQBIgNBCAJQBPALASBCQATBCg+AxQhTBCikAJIgUAAQhDAAhBgYg");
	this.shape_2.setTransform(-1.5,-91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.LogAnimation, rect = new cjs.Rectangle(-64.4,-181.4,125.9,180.8), [rect]);


(lib.MooseToothShine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbAAQAAgcAbAAQAcAAAAAcQAAAdgcAAQgbAAAAgdg");
	this.shape.setTransform(7.2,-3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAOQglgSgPgPQgLgMAUgCQAWgCAhANQApAQAcAVQABASgLABIgIABQgZAAgmgVg");
	this.shape_1.setTransform(-4,-4.3,0.866,1,0,0,0,0,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-6.9,20.1,6.9);
p.frameBounds = [rect];


(lib.MooseEye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#49473C").s().p("AmqFnQhegMg0hOQgwhHAAhiQgBhVAchRQAghcA4gxQApgjBIAHQBHAIAYArQAphgBTgqQBvg5BuAeQByAgA2BtQAihDBJgKQBLgLBKA2IgIgHIAbAVIgKgHQB6BnAQCJQASCdiOBbQg+AphIgCQhagDgzhPQhICDibAKQhDAEg+gWQg+gXglgsQAAAdglAcQgvAlhWAAIgVgBgAnfimQguAsgZBJQgXA/gBBIQgCBGAWA2QAbBCA5AWQCYA5BCh3QgYgfgQgnQgchBgGhOQgHhQAShJQgZg+g8gCIgEAAQgvAAgcAcgAg1k/QiKAHhDB9QghBHgDBTQgCBQAaBNQAYBIA7AxQA4AvBHAMQBGAMBAgcQBCgdAphDQgtBOAxhTIADgFQAlhEAChXQABhRgehRQgfhYgxgvQgXgWgugOQgqgNgsAAIgQAAgAFDj6Qg9AIggA/QAcAzAHBlQAJBugcBJQAgBHA9AOQA2ANA9giQA7ghAjg7QAmg/gIg/QgJhEgyhDQgug7hBgoQgegTgkAAIgTABg");
	this.shape.setTransform(0.8,-36);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#382F22").s().p("Ai7AkQgOgMBkgfQBegeAWgCQAogBBCATQBCATADAMQADALhUgJIhngKIhgAZQg2ANgZAAQgOAAgEgEg");
	this.shape_1.setTransform(-48.6,-65.4,0.802,0.875,0,-4,176);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#382F22").s().p("Ai7AkQgOgMBkgfQBegeAWgCQAogBBCATQBCATADAMQADALhUgJIhngKIhgAZQg2ANgZAAQgOAAgEgEg");
	this.shape_2.setTransform(44.8,-71.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgjAtQgOgTAAgaQAAgaAOgSQAQgTATAAQAVAAAOATQAPASAAAaQAAAagPATQgOATgVAAQgTAAgQgTg");
	this.shape_3.setTransform(-39.7,-14,0.741,1.012,-15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAAQgBghAfAAQAgAAAAAhQAAAjggAAQgfAAABgjg");
	this.shape_4.setTransform(51.9,-41.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgwAOQgQgWALgSQAJgRAYgFQAXgGAVAKQAYALAHAbQAOA2gvADIgFAAQgpAAgYglg");
	this.shape_5.setTransform(41.4,-49.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#382F22").s().p("AkFByQgwgOBOheQBFhTAigPQA+ggBkASQBRAPAoAbQA2AkAYAWQAxAugCAqQgBASg/g2QhCg8gIgGQg7glg9gMQhDgNg8AXQgXAJhCBUQg+BQgFAAIAAAAg");
	this.shape_6.setTransform(-5.3,-87.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgjAtQgOgTAAgaQAAgaAOgSQAQgTATAAQAVAAAOATQAPASAAAaQAAAagPATQgOATgVAAQgTAAgQgTg");
	this.shape_7.setTransform(-8.2,-20.9,1,1.098,-3.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgqAqQgOgRAAgZQAAgYAOgSQAQgTAaAAQAbAAAQATQAOASAAAYQAAAZgOARQgQAUgbAAQgaAAgQgUg");
	this.shape_8.setTransform(-40.2,-47.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AguA9QgkgRgFgbQgEgXAUgXQATgXAfgLQAggMAcAIIADAAIACABQAhALAJAcQAIAagRAcQgSAdggALQgOAFgOAAQgWAAgXgLg");
	this.shape_9.setTransform(1.8,-54.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgjAtQgOgTAAgaQAAgaAOgSQAQgTATAAQAVAAAOATQAPASAAAaQAAAagPATQgOATgVAAQgTAAgQgTg");
	this.shape_10.setTransform(47.7,-37.6,0.83,1.059,-10.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EADFC3").s().p("AnFFIQhEgXgnhCQgqhKANhmQATkCCFgVQAugHAyAXQAqATAQAWQAUhdBOgvQBDgpBdAFQBWAEBDAoQBGAqAIA8IAAAAQBJhXBSAAQCKAABcEUQAJA9gfBAQgfA/g3AkQg8AnhBgIQhJgJhAhGQgdA9hBApQg+AmhIAIQhMAJg8gdQhDgfgehEQgYBSg/AhQgiARglAAQgbAAgcgJgAB5hjQgLAMAAAQQAAAQALALQALAMAPAAQAPAAAKgMQALgLAAgQQAAgQgLgMQgKgLgPAAQgPAAgLALg");
	this.shape_11.setTransform(0.8,-35.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZAbQgLgLAAgQQAAgPALgMQALgLAOAAQAPAAAKALQAMAMgBAPQABAQgMALQgKAMgPAAQgOAAgLgMg");
	this.shape_12.setTransform(15.5,-43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.8,-99,127.6,99.1);
p.frameBounds = [rect];


(lib.MooseDeathTop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494729").s().p("Ao0AUIgHgDIhJgCIgHgDIgIgCIgIgCIgDgFIgCgDIAAgCIABgEIADgEIAEgCIAFgCIAKAAIAGADIBKACIAGACIAvAAIAHgCIAcgCIAHgDIAhgDIAHgBIAAgBIFyAAIAGACIFmADIAGADIE4AAIAHgDIAjAAIAHADIADADIACAFIABADIgCACIgCAFIgEACIgFABIgcACIgHADIlAAAIgHgDIllgCIgHgCIlvAAIgGACIgiACIgGADIgdACIgGADIgyAAg");
	this.shape.setTransform(-0.3,-2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFD659").s().p("ApEBbQBLiJCKhMQDpiBEKAxQEXA0CPDYQAtBDAiBOQp5ACp4AEQAWhHAeg3g");
	this.shape_1.setTransform(0.3,-22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#494729").s().p("AqKDpIgWAAQAtiXBdhiQBThYB4g3QBwg0CBgPQEwgkDgCvQCbB5BRDCIgOAAIgKAAIgQAAQgihOgthEQiPjYkWgzQkLgxjpCAQiKBNhLCIQgeA4gVBGIgUAAg");
	this.shape_2.setTransform(0.2,-24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MooseDeathTop, rect = new cjs.Rectangle(-67.5,-47.8,135.1,47.8), [rect]);


(lib.MooseChunk1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494729").s().p("AiZCSIAAABQgBAAAAABQgBAAAAAAQgBABgBAAQAAgBgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBAAAAQgEg8ALgzQAOg8AiglQAfgiAzggIBbg0QAMgGAKAIQAJAIgCALQAeAUAQBJQAIAjAFAyIAIBXQABAKgJAEQgIADgIgFQgtAwhxAQQgdAEgWAAQhIAAgLgngAgHhhQgvAdgZAfQgXAcgNAzQgRBBgIASIABABQAQAZAwgCQAXgBAxgLQA0gMAbgOQAJgEAQgMQAQgMAIgEIADgBIgFg+QgDgkgFgaQgFgcgFgNQgHgXgKgQIgMgQIhTAtg");
	this.shape.setTransform(0,-18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFD659").s().p("AhJClQgRABgWgCQgPgBgKgKQgMgKABgOQAIg2AKghQANguAZggQAqg4Bag/IADgBIAMgMQAKgKANAEQAMAEAGANQAeBLALAtQAUBMgNAwQgLAmgpAYQghASgvAHQgQACgOAAQgfAAgYgLg");
	this.shape_1.setTransform(0,-18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MooseChunk1, rect = new cjs.Rectangle(-16.3,-36.9,32.7,37), [rect]);


(lib.MooseBlood = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A82222").s().p("AFiB/Qg8gHhWglQg5gYhHAKQhSATgtAHQigAaiegnQiDghhPg8QgkgbgPgcQgUgnAogOQAtgPCBALIDEASQAtABBQgFQBYgGAkAAQA6AACtACQBRABCggDQAvAAAXAEQAoAGAYAUQAmAgg9BHQgwA5gtAYQg5Aeg9AAQgPAAgQgCgACIAsQAeADAiANIA8AaQBSAkBTgRQBWgRA4hDQBLhMg2gcQgagNg9AAQh3ADg8AAIjBgEQhzgChNADIhgAGQg4ADgngCIhWgIIhWgJQhDgJg4ADQglACgKAEQghANAiAlQAUAYAeATQBcA+CtAYQCkAWBkgbQA4gPATgEQAfgGAbAAIATABg");
	this.shape.setTransform(0.6,-14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D32424").s().p("ADBBAQg0gMhAAIQgjAFhOAUQhWAViGgNQjNgViKhvQgRgPgGgVQgEgOAJgMQAJgLAPgBQANgFArAAQBVAACaAYQAsABBjgGQBdgGAyACQBLACDSABQCzAABqAGQAsACARAZQAdArhvBZQhIAtgpAGQgSADgTAAQhTAAhvg3g");
	this.shape_1.setTransform(0.4,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MooseBlood, rect = new cjs.Rectangle(-62.7,-27.1,126.8,25.8), [rect]);


(lib.MooseAntler = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#382F22").s().p("Aj/E5QgEgDgEghQAvgHBxADQB1ACA2gGQDCgXALirQAGhagHg+QgKhXglg3Qgpg8guANQgtAOgJBHQgGAwALByQADBlgxAuQg1A0gjg0QgagpgBg/QAAgWgOgkQgPgngUgcQg2hKgpBLQgNAXAGArQAEAYAMAyQAIAqgHAVQgKAbgnACQgnAagOgZQgGgJAEgJQAEgKAMAAQAIgFAiABQAUABgGgfIgMg3QgHgggCgXQgFhCAtgpQAwgrA6ArQAtAiAQA4QAIAdAFBNQAEA9AkgGQAlgHAMg3QAIgngGhDQgIhQACgcQAFhFAjgqQArgzBAAgQBoA1ANDNQAJCFgZBMQglBthuAZQgxAKhFABIh2gCQhMAAgwAEIgdABQgLAAgCgBg");
	this.shape.setTransform(0,-31.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6B604A").s().p("AAABLIiVgKQhVgDgKgCQhDgMA4glQAagRAygCIBQACIBhADQA3ABApgGQAigFAugXQA6gdATgHQAngNgKAuQgJAogTASQgkAhhEAOQgyAKhCAAIgggBg");
	this.shape_1.setTransform(0.6,-10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7F7152").s().p("AkXEoQgkgrAAhJQABglAHgbQBGAAAegNQATgHgLg1QgGgegRg9QgHgpAUgeQAUgeAlgEQAigEAhA1QAdAuAHAtQALBJAEANQAQAxAmgBQAlgCAUhAQAKggADgfQgckFBagYQAwgNAyBDQA6BNAHB+QAHB6gdBFQgTAsg2AyQgkAhjrAKQhdAEhYAAIgvAAg");
	this.shape_2.setTransform(-1.8,-31.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MooseAntler, rect = new cjs.Rectangle(-33.3,-62.8,64.7,62.9), [rect]);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3399CC").s().p("AAJAeQgkgEgSgSQgEgEAEgDQAEgCAGABQAJAAAOAFIAVAHQAZADAVgEQgIgagugBQgpgBgdASQgDACgEgCQgBgBAAAAQAAAAgBAAQAAgBAAAAQABgBAAAAQAhggA3AFQA4AGALAlQACAGgHADQgXAIgZAAIgQgBg");
	this.shape.setTransform(-13,0.7,1,0.805);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399CC").s().p("AiPBPQg7gbAWgsQACgDAEAAQAEABAAADQAGAzBFASQA7APBSgNQBQgNAugeQAygggbgeQgZgdg+gNQgzgLg5ADQiJAIhJBQQgGAHgMgDQgMgDAEgIQAfg3BTgeQBQgcBbAHQBIAFA1AVQBGAcgGAqQgGAyhMAeQhCAahaABIgHAAQhWAAgygYg");
	this.shape_1.setTransform(0,0,1,0.805);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#40FBFF").s().p("AhFBVIgPgDIgNAAQgUgBgEgMQgLgBgFgHIgBAAQgWgCgRgFQgJgCAAgGIAAgMQAAgHAKgCIgBgDQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQACgCADAAQAOABAUALQAMAEALACQAJgMAWgCIAPgBQACgWgdgKIgDAAQgSgLgfAGIgEgEIgHAAQgVAKgJgBQgHAAgDgEQgCgEACgFQAAgCAEgDQAAgDAEgCIAIgCIAGgEIAYgLQADgDAGgCQABgJALgDQAfgKAdACQAHgHAMAAIAqACIAIAAQAGgCAMAAQAvgBAlANQAigJAdAUQANgBAKAFQALAFgBAKQgBAPgEANQAMARgWAOIgKAHQgTASgvAOQhMAdhSAAIgSAAg");
	this.shape_2.setTransform(0.8,0.5,1,0.805);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.8,-8.3,47.7,16.6);
p.frameBounds = [rect];


(lib.SlideLegs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3GLHQhSghgchDQgNgcABgfQABgjARgYQAaglAngDQAYgCA3AIQAzADA0gLQA1gMArgaQBmg9AOh6QAOh7hZhVQgygkhLg+Qg/gzgLgLQgtgpgli4QgbiFgDhCQEviVF4gMQEWgJDnA9QBnAcDjBNQD0BSANARQAFAHAFAXIAKAsQARA+ApAXQA1AdGiEMQGsETBCAyQArAgBoBLQBbBFAoA4QAhAwguA3QgxA6hPgJQgngEgogUQgRgIg3gjQhVg0hsg6Qg6gfiMhGQhVgrlBh/QlmiOhFgHQgvAeiWAYQhyAShnAGQgyADhjgHQiIgKg6gZQAJBegdBbQgbBYg7BLQhBBmivBKQiTA9iYAAQhJAAhKgOgA3/H/QgTAPgEAYQgFAaAOAZQAhA/B3ASQEmAFC3iFQChh1AUiwQA2k/kNiHQhQgohrgVQhVgNAEgDQDMgYCZBtQCQBnAcChQCLBHEBgUQDygUBzhKQAqgVA0gpQA1grAPgHQAHgDAGAFQAFAGgDAHQgOAdguAjQgjAbgrAZQBqAZEqB0QEYBtBpA0IDFBjQBwA5BRAwQAcARA7AoQA2AfAqgCQA1ADAWgeQAZgjgrg2Qg1hCn9lKQnLkoiFhIQg5gggkgwQglgzgGg+Qh5gyibg3Qk4hsi2gUQiggYj3AaQkvAfjQBeQgDAWAiCNQAkCaAbAfQAWAkBpBNQBsBOANATQAxBKgGBlQgHBig3BPQhYB7iUAGQgWABhPgFIgTgBQggAAgKAJg");
	this.shape.setTransform(0,-72.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiaIYQhogGgzhSQgMgTAUgMQAUgMAMATQAOAXAcAUQAdAVAaAEQAvAHBZgRQBxgWAugvQDGi/g9i2QgXhAgTgmQgdg3gmghQgQgOg/gtQgxgkgYgcQgeghgdhiQgfhmARgbQACgEAFACQAFACgBAFQgIAeAkBbQAhBWAWAaQAZAaBBAsQA/AqAZAfQBDBRAeBhQAjBwgeBYQghBjhDBNQhNBZhbAUQhyAZg8AAIgMAAg");
	this.shape_1.setTransform(-127.7,-63.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("ACpCzQhPgOiIheQibhohlgiIAsgDQA2gEAtgJQCQgeADhFQBaA0BvBaQBqBVAEAWQAJAwgOAdQgTAng9AAQgUAAgZgEg");
	this.shape_2.setTransform(125.8,-23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AlFB5Qg6geAGhTQACgiAQgUQARgXAZAGQBJAQBygTQCIgWAXg/IAXAcQAfAfAlAXQB3BGCMgxQgxAjhTA/QhHAzg9AXQhMAchqAAQhwAAiSgfg");
	this.shape_3.setTransform(-120.2,-18.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C4C4C").s().p("A2WKuQhGgRgpgsQgngoACgtQACgvAugaQCJASB5gmQCsg3AAiWQAAiVg+hFQgXgYg6gsQhOg8gnghQgvhzgfinQgPhTgHg8QAsgWBRgbQCjg1C9gTQJfg9KDEtQAECIDkB4QCuBcGnEiQHPFAAUBDQgeBJgqAOQg2AThog4Qjoicmki8QmvjBjKghQjKA7jKASQj5AVh+g6QARDNhUB8Qh7C1leBGQg0ANgvAAQgoAAgkgJg");
	this.shape_4.setTransform(-0.5,-71.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-145,320.2,145.1);
p.frameBounds = [rect];


(lib.ShotSparks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/AJQgDgCAAgDQAAgEADgBQASgLAegGIAxgHQAdgEAEAbQADAagdACIgYABQgyAAgegSg");
	this.shape.setTransform(0,-2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ShotSparks, rect = new cjs.Rectangle(-6.7,-5.4,13.5,5.4), [rect]);


(lib.ShotSpark2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQA5QgHgYAAghQAAghAHgXQAHgXAJAAQAKAAAHAXQAHAYAAAgQAAAhgHAYQgHAXgKAAQgJAAgHgXg");
	this.shape.setTransform(0,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ShotSpark2, rect = new cjs.Rectangle(-2.4,-16.1,4.8,16.1), [rect]);


(lib.Head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// headgraphic
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("As0YRQgQgWiij1QiJjSgkggQgyAYgpgQQgigOgkguQg5hLiDjGQiRjagCgZQgBgRAOhKQAMhFgDgPQhGivgGl6QgDjRAPjhQADgkALgyQAOg9ARgfQAZgOA4gWQBwgqCYghQgKACgmg6Qgng4ACgGQAIgSBBA/QAhAfAfAjQgIgfAQiWQAQibASAAQAJgBgBCIIgCCiQBFhdDZjbQDcjgBUg6QGFgBHVAUQOtAnGZBmIBLAQQA9AOAEAIQAOACghATIglATIjrCNIkWClQA0AdBfBTQBkBYgYAHQmaBwiJAvQgMA+h4EDQg8CCg5B1QAMA7AHCHIALDFQgCATgWAeQglAtgcAmIgCPAQglAdhfAxQiMBHicAvQj1BKjtAAQjZAAjRg/gAxCOTQgSA0gPAPIFVH1IBgAfQB7AfCNAFQG/APG6kDIADnIQAEnNADgdQACgTAngwQAmgvAAgVQgBiJgvleQgnkmgRhTQhiAmiCARQlKhBmjglIlggYQgDB6gUD6QgUD3gDB8QgULSgWAAQgXAAAcrMQAbrIAXhZQDNAFD0ASQHoAkDHBDQAQAGBkgdQByggAVgCQALAqAgDBQAgDDACApQAthWA2huQBrjcAnh2ID3hLQD4hJAGAHQgegog3gkQgegVhFglQgYgOgTgRQgegcAigDIIOkxQoHhjt/gmQm/gTlYABQgEABktE2QksE0gMACQjLAjh5AyQg8AZgUASQgaCEgMDDQgYGHBKE8QAah/AviRQA5i0AggIQArgKCGAyQCPA1ANAyQAgAkAfGUQAfGNgJABQgPACgolUQgumHgWhWQgNgihcgjQhWghhOgHQhHCvgzC5QgwCqgNBuQAYBFCGDBQCODKBEAwQAkAeA0hKQAvhQAFAAQAcAAgUA8g");
	this.shape.setTransform(-1.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAFD6QA8hFAhgSQgJhAghipQgki0gRg4QgXAAg0BAQgxA/gDgBQgNgFAeg5QAagxAOgQQAYgZAWgKQAngTANApQAXBGApDSQApDUgIAPIiZCiQgogRBGhSg");
	this.shape_1.setTransform(-135.7,37.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A322B").s().p("ABjLTIhntAQgKgJghgSQhCgkhzgsQAJgXDgj1QBwh7Bvh3QACAgggLJIghLEg");
	this.shape_2.setTransform(-114.5,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3BDA3").s().p("Ah3iOQgDgdAzgvQAvgqAigMQA3BQAhDTQARBqAFBaIhGA6g");
	this.shape_3.setTransform(-136.2,32.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghA/QgPgaAAglQAAgkAPgaQAOgbATAAQAVAAANAbQAOAaABAkQgBAlgOAaQgOAbgUAAQgTAAgOgbg");
	this.shape_4.setTransform(35.7,53);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgnBCQgRgcAAgmQAAgmARgbQAQgbAXAAQAXAAARAbQARAbAAAmQAAAmgRAcQgRAbgXAAQgXAAgQgbg");
	this.shape_5.setTransform(-38.2,52.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ai8AIQgRhSAagcQDLg3CggLQAXBsgXBCQgMAhgQAMQg9AWhLAlIhwA7QhNg/gThigAAEhrQhVAQhAAbIgDAMQgDAQADATQAIA+A3BJQCThFBVgfQAXgTgChAIgGg9QhdAHhBAMg");
	this.shape_6.setTransform(38.3,25.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#564A3D").s().p("AiMBGQgfhLgChDQC7g6CcgMQADAIABBCQABBGgGAZQgkAOhLAhIibBFQgQgGgbhDg");
	this.shape_7.setTransform(39.1,25.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ACvBlQhbgshLgVQjUg5ivBoQgGAEgJgCQgKgBgHgHQgFgcAVg2QAWg4AZgTQAIgMAXgPQAtgdBFgQQDbg0F7BnQAaAdgQBRQgUBihNBAQhUgtgygZgAEvB4QA2hKAJg9QACgUgCgQIgDgMQmuiAjCBgQhbAtgZBbIAxgXQA/gXBKgHQAegDAfAAQDQAADhCHg");
	this.shape_8.setTransform(-48,25.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#564A3D").s().p("ABDAjQhbgkhBAAQhPAAhmAWQhsAXgOAYIAuhtQAJgNAXgRQAughBGgTQDdg8FyBwQgCBDgfBLQgbBDgQAHQi9hVg9gZg");
	this.shape_9.setTransform(-49,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D3BDA3").s().p("AgHAuQjYAogYgHQgOgEgzgmIgwglQgHgeBYgcQBMgaCFgTQBjgPCxBbQBYAtBEAwIhGAog");
	this.shape_10.setTransform(-52.6,32.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3A322B").s().p("AAxBqIi8A5QiNgnjRgkQmihHlRAPQEhiEHIiVQONkrNDhOQigBRjVCCIi2ByIBvBOQBvBVADAnQn9B0gGAjQg3CIjXG3g");
	this.shape_11.setTransform(39.9,-76.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AADAiQhJgEhBgSQhDgSghgcQCBASBxAGQCrAHA6gcQg0BCiVAAIgggBg");
	this.shape_12.setTransform(7.2,98.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgSAWQhCg2AJgWQAGgPAEABQAJACA3A4QA2A2AUAEQAEABAAAJQAAAJgEABIgHABQgbAAg5gvg");
	this.shape_13.setTransform(-48.5,127.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAxA2Ih8hOQhBgqgXgFIg0gHQgYgDgTgJQgDgBAAgEQAAgFADgBQBEgeBXAmQA9AbBJA+QAdAZBRAmQBdAqAWgPQADgCACADQACADgCADQgRAWgiAAQg5AAhog9g");
	this.shape_14.setTransform(-38.4,116.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3A322B").s().p("AhBASIgBgBIAIgCQA1gOBIgYQgpAWgaAMQgcAOgRAAQgNAAgHgHg");
	this.shape_15.setTransform(-87,-72.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D3BDA3").s().p("AiPJ6QjeAAh5gxIlYoSQArhlANgeQAJgSAkhBIAjg8IIzDVIFNAWIA0ALQBAALA7AGQC8ASBCguQAOhIgYkDIgaj0QBmhaBNATQAnAKATAbIgLDnQgLE+gCG1Qn6Dxm5AAIgEAAg");
	this.shape_16.setTransform(-33.5,94.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EDDAC0").s().p("AkNRWQhCiDiSjVIiFi6IiHAFIloomIDYqXIHfCkIA8qyQCRgDDSAOQGnAcFLBRQB9gjB2gkIBwOkIhQCLIgFPJQi/BVkCBAQkeBIjlAAQi3AAiTgug");
	this.shape_17.setTransform(-55.1,42.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#564A3D").s().p("A54KHQgol9A4mrQBfhBB8grQCOgyA7AcQB3iUCKibQEWk2BkglQE9gDHcARQFNAMDVAOQDNANEQAnQFwA1BLA3QjSBtjBB3IiYBhIt4CqQt7CqgZAAIi+AAIgKCpIl3GLIiagnIi/HuQgfhpgUi/g");
	this.shape_18.setTransform(-3,-65.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-173.6,-161.6,344.6,323.2);
p.frameBounds = [rect];


(lib.HandFront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgsE3QgfgCg6g4QgggfhChLQgbg0AUjHQAUjDANAGQBSAHDsgYQAnB4A1B7QAnBbADAUQALAtiBBwQh+BugvAAIAAAAgAjMhVQgSCJAHAjQAFAbBOBOIBWBVQBuhDAkgcQBVhCAYhDQgkg6gghjQghhxgTg1QgZAMhlAEQhiAEgrgIIgaCxg");
	this.shape.setTransform(-13.8,-24.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ADtN6QgigigohKQiBABhOgYQhygjgqhbQgCAog8gWQgogPgjgaQhGgygthNQgohDAHhvIAIhcQADg1gFgmQg7hfAhk3QALhtAUhuQARheAKgZQgqhLgdhYQgsiJBCgCQAigKD5AMQEHAOATgCQAXgDAjAHQAvAJgUAWQAlAxgWBHQgGAUgxBhQBGBAA5B4QAgBEA8CKQApAMAsBSQAOAbAmBaIACAEQANAgAoBVQAbBPgjAqQgnAwhXgKQhBgJhCgjQAiBUBOCxQA+CdAHB0QAEBAgSAvQgXA5g0AWQgRAHgRAAQgpAAgogogAguERQAuBgBrDCQBwDMAfAqQAoA4AmgCQApgBAPhKQAOg/gchXIgziEIgEgLQglhugUg3Qglhggmg8QhcBBiJAigACGLUQhJiDgyhcQheivACgtQhVARhJgMQAFAPAfCeQAWBqAjA7IABADQAlA9BWAVQArAKBxAFIAAAAgAjSJgQgbhKgUhQQgYhlACg5QgzgSglgaQgmgagggpQgCByACAbQAFBSAaA3QAgBFBUAsQAqAWAmAKIAAAAgAnElhQgYCIgFBiQgFB8AsBWQAzBmB4A3QAGADBKgFQBPgFAagHQCOgqBthJQgFgggDgbQgFg3AOgBQAHgBAGAPIAIAVQASgbAohmIAwh+Qg2iDgfhCQg1hxg5hKQgGARgRgFQgRgFABgQQAAgdAWgsQAcg2AIgdQAPgzgOgmQg4AOhZABIiUgEQhlAAg2gEQhhgFg2gYQgEALAWBPQAdBmAzBMQARAWgIAIQgHAIgagPIgtDogAEMgTQgeA8geAzQAEABA+AxQBIAvA7gDQBDAAADgoQACgWgdhKQgUg0gkhHIg+h6QgCA2g8B6g");
	this.shape_1.setTransform(0.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D3BDA3").s().p("Ag4BGQhSgwAPghQANgbAmgxIAkgsIAsBzQA6B3A8AdQhkgMhSgyg");
	this.shape_2.setTransform(31.7,8.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AD9927").s().p("AirAuQg2g4gEhXQAfAWBKAIQCSAQDQhJQhFBnhKA9Qg5AvhPAmQhRgjgpgsg");
	this.shape_3.setTransform(-13.7,-7.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E0C924").s().p("AiKD5QgvgegWgtQg5h2BKlIQAtAQA6AFQByAKA+g3QAdBeA8CQQAeBHAYA2QggAxg0A1QhoBrhhAVQg6gfgbgRg");
	this.shape_4.setTransform(-13.3,-24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("Al2C5QANhpAXh7QAZh+ADgeQAJhFgJgyQgKg3glg9QA0AUBnAMQDNAYD8goQgVAmgMAmQgFAUgCALQCZELAHAeQgcBCgwBQQhSCJhXBNQhlBZhfAAQihAAiTj6g");
	this.shape_5.setTransform(-11.8,-32.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4C4C4C").s().p("AjiIzQiQg9gYj/QgYj2BflAQg/h9gNglQgdhMAWgdIJ4AbQATAHAFAhQAKBDhGCFQA0A7BUCfQBLCPAPAzQgcBtgiBRQgpBgglAcQAIAKARASQAMAPgRAKQhQAyh2AnQhvAmhYAAQhGAAg3gYg");
	this.shape_6.setTransform(-9.3,-31.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EDDAC0").s().p("AAQDcQgzgSg1gkQgygjgXggQAMipAghbQAnhwA5A7IAeAlQAlAuAeAvQBgCUgLBiQgIBJhCAAQgeAAgpgPg");
	this.shape_7.setTransform(34.5,-0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D3BDA3").s().p("AhiDzQhfgPhAhEQh3iAAmkSQBeBkCIARQCxAXDbiDIAcAnQAeArACASQhBAVg9AjQh7BFATBEQhCg8hdAAQgnAAgXALQgXANAFATIAhB7QARBNgYAAIgDAAg");
	this.shape_8.setTransform(-10.5,37.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EDDAC0").s().p("AFbGAQgogPgyg1QgqgsgTgjQh/AJhcgfQhQgbgvg2Qjrgogpj1QgNhNAIhYIALhJQCHC7DIgjQBGgMBdgrQA1gXBfgvQAhAVBXDwQArB3AlB0QAgEAhUAAQgMAAgPgGg");
	this.shape_9.setTransform(-2.3,50.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.9,-92.9,107.4,186);
p.frameBounds = [rect];


(lib.GunHand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gun
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACEVtQhdgmhdguQhQgmgKgIQgGAPg7AQQhGATg2gWQhOghgqhzQgbhJgCg3QgJgKgOgTIgWgeIgCACQgJAggVBgQgSBUgPAuQgEAGhkAZQhkAZgFgEQgOgJALoxQAIlpAFiCIACgxQACgYABgBQAXgUB0ggQBNgVA1gLIA2jFQAsidAAgEQABgHgegfIgggjQADgdB0mSQB0mUANgZQACgCDGgXQAAgGAUhYQAXhfAJgUQAbgHCYAqQCaAqAQAVIhdEmQBRA1gDAHQABAEiEGuQiLHCgMAyIgCAHQA1gYAuANIAFACIACAAIAGACIACABQBjAmAHCHQAEBZgmCLIgOA1QAEgCARAJQAVAKASATQA2A6AABjQAUgHAjALQAjAKATARQAmAiARBGICSgIQCHgDAIARQgUB3iHE6QiGE0gtApQgMAFgUAAQhXAAjghdgAixHLQATAUAPAdQAQAgALArQAdB0gpDUQgaCLgbA7QgKAXgLALIAXAsQBcA/DFBTQDlBhByAEQAugvB1kTQB2kTAThkQgXgHhfAGQg6AEgbAAQgRAAgFgBIAAAAQAMBngiClQgpDBhMAnQg0AcgyglQgtgggTg4QgEgRgEgTQgYAkgdAWQhAAxg9guQg4grgHhMQgDgqAChiQABhYADgUQg2gPgTh9QgNhTAEhzQACgkADgnQAMiZAfh/QAgiDAjgdQADgECKnaQCNncAHgOQgGgBhFgrIgGgEQg9glAAACIihIEQiYHigDAFQgZABgqgbQgUgNgmgfQgCAVgQA+IAAADQgQBIgLAaIABAAIAZgDQAZgCAHAFQgCANgaBeIhiFZQh1GdABAAQAIAGALANIARATQAIhHAxiYQAviMArg+QARgXAPgNQAggYAeAAQAfAAAcAcgAkxIeQg4BWgrCvQgvC/AhBuQAEAQAGAOQAtBlA4AMQAsAJAogHIADAAQAagFABgLQAAgGgHgIQgTgVgRglIgMgjQAQgYANgeQAohbAOiQQAPiWgRhlQgLhJgqgRQgJgEgKAAQghAAghAygAnYBqIhFAPQi/ArgHADIAAAAQgFBwgDHYIgDHFQAOgEAtgLIAFgCQAtgMAIgJQAKhOBhl8QgPADg8ADIgIAAQhDADgBgCQgNgvAPmfIACgkIAAgKQADgGB7gTIBEgKQBHgJAfABIAchVIAAAAQgFAAh2AbgAFKL4IgOBEIgWBaQgQA9gRAqQgJAuAVBFQAZBTAzgVQAygTAahNQAHgVAWhpIAJg2QANhbgHhMQgPiWhkgIQgFBJgTBagACoJmIgPAjQgnBQgzApQgYATgVAJQgDBfAAAvQgBBSASA3QAbBTA+gpQAvggAhhEQAihFAWhbIABgFQAQhGAMheQAcimgkhDQgNgaglgOQgeB+geBHgAAugTQgRASgXBHIgBADQgYBRgSBmQguELAtC3QASBJBDhDQA1g1AWgzQAag7AbhpIAVhXIALgtQAhiGADglQAKhrg4g1QgbgbgwABIgCAAQgvAAgbAagAqMJkIABBGICEgGIAThNgAqJH3IgBBXICdgTIAThNgAqGFmIABBzICzgKIAehygAqFDnIACBfIDagNIAjhygAmXiqIgRA8IgpCLQAMgCAqgIQAkgIAFAAQALgbAThJIAHgXQARhAABgYQgPgOgSgTIghgkQgEAZgWBKgAgGzIIgRABQijALgGAFQgFAHh2GKQh2GMABAMQADAQByBsIARAQQBkBeALgMQALgMAehkIAxigQAsiBBekrQBvlcgGgEQgCgCgTAAQgjAAhgAGgAB90BQAtABAVAEIAMADQACABgMAxQgLA0gKAZIBDAiIBQj6QgqgVg1gRQgigLgmgJIgggHQg3gMgCAEQgUBAgTBcQAYgDAfAAIAJAAIAlABg");
	this.shape.setTransform(0.4,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3BDA3").s().p("AlNKEQg4gMgthlQgGgOgFgQIACABQAkAJAhAEQBcAIAlg2QgNAegQAYIAMAjQARAlATAVQAHAHgBAHQgMAIgOAIIgDAAQgRADgSAAQgYAAgZgFgAFpEBIhIggIAPhEQAThaAFhIQBkAHAPCWQAHBLgNBcQgUgfg4gfgACyBpQgZgjgagZIAPgiQAehGAeh+QAlAOANAaQAkBDgcClQgMBdgQBGQgEhJgyhIgAA/msQgng/grgpQAWhJARgRQAbgaAxAAQAwgBAbAbQA4A2gKBrQgDAlghCGIgLAtQgVBLgdBgQAti9hmilg");
	this.shape_1.setTransform(3,62.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AD9927").s().p("AlILfQA8gDAPgDQhhF8gKBOQgIAJgtAMIgFACgAl7J5ICYgNIgTBNIiEAGgAl4IMICvgJIgTBNIidATgAl1F7IDSgJIgeByIizAKgAl0D8ID/ggIgjByIjaANgAmSDuIABAAIgBAkgAjHB/QB7gcAAABIgcBVQgfgBhHAJgAgZjtIEjvGQCSgJAHAFQAGAEhvFcQhfErgsCBIgxCgQgeBkgLAMQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAgBAAQgSAAhYhTg");
	this.shape_2.setTransform(-26.9,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDDAC0").s().p("AECH0QgVhFAJguQARgqAQg9IAVhaIBIAgQA4AfAUAfIgJA2QgWBpgHAVQgaBNgyATQgKAEgJAAQglAAgUhCgAARG5QgRg3AAhSQAAgvADhfQAVgJAYgTQAygpAohRQAaAZAZAjQAyBIAEBJIgBAGQgWBbgiBFQghBEgvAgQgVANgQAAQgiAAgSg3gAlrHiQghgEgkgJIgCgBQgghuAvi/QAriuA4hWQAqhAArASQAqARALBJQARBkgPCWQgOCPgoBcQggAvhKAAIgXgBgAg1BGQgti2AukLQAShmAZhRIABgDQArApAnA/QBmClgtC9QAdhgAVhLIgVBXQgbBpgaA7QgWAyg1A1QggAggVAAQgXAAgJgmg");
	this.shape_3.setTransform(1.9,65.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("ABESDQjehXhlhUQAag7AbiLQApjUgdh0QgLgrgRggIAnguQgFBzANBTQAUB9A1APQgCAUgCBYQgCBiAEAqQAGBMA5ArQA9AvBAgyQAcgWAZgkQADAUAFAQQATA4AsAgQAzAlA0gcQBMgnAojBQAjilgNhnIABAAQAEABASAAQApAKAdAbQAZAWARAqQAMAdheDYQhiDdg0AsQgKAEgSAAQhGAAi+hLgAo4MEQgLgNgJgGQgBAAB1mdIBilYIASgIQA2gUgFASQgGAShcFqQgrA+guCMQgyCYgIBHIgQgTgAkciUQgSgIhKg5QAPg+ACgVQAnAfATANQArAbAZgBQADgFCYniICgoEQABgBA8AkQkgNMghBtQgXBLgeATQgLAHgNAAQgNAAgQgIgAnhkmQAVhLAEgZIAhAkQASATAQAOQgCAYgRBAIhJg5g");
	this.shape_4.setTransform(7.8,14.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0C924").s().p("AlbL6QADnZAFhvIAAgBQAHgCC/grIBFgQIgHBDIhEAKQh7ASgDAHIgBAJIgBAAIAAAlQgQGfAOAuQABADBDgEIAIAAIhaHbQguALgNAEIADnEgAmIClIADgBIgDAxgABUkHQhxhtgDgQQgBgMB1mLQB2mLAFgGQAGgGCjgKIARgBIkkPFIgRgPg");
	this.shape_5.setTransform(-39.6,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4C4C4C").s().p("AggR/QjGhThcg/IgYgsQALgLALgYQBlBVDfBXQDtBdAygXQA1grBhjdQBfjYgNgdQgRgqgYgWQgdgbgqgKQAbAAA5gEQBfgGAYAHQgTBkh2ETQh2ETgtAvQhzgEjjhhgAlBEVQg2g2hCAyQgQANgQAXQBblpAGgTQAGgSg3AUIgSAIQAaheADgNQgHgFgZACIgZADIgCAAQAMgbAPhIIABgDQBKA5ASAIQAfAOAWgNQAegUAXhKQAhhtEgtMIAHAEQBFArAGABQgHAOiNHcQiJHagDAEQgkAdghCEQgeB+gMCZQgEAngBAkIgmAuQgPgdgUgUgAo3kkIARg8IBKA6IgHAXQgUBJgKAcQgGAAgjAIQgqAIgNACIAqiMg");
	this.shape_6.setTransform(14.7,20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DDDDDD").s().p("AgZBHIgugBIApiQIAfAHQAmAJAhALIghB6QgVgDgrgBg");
	this.shape_7.setTransform(15.5,-133.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BABABA").s().p("AAACAQAKgZAMg0QAMgxgDgBIgMgDIAhh8QA1ARArAWIhRD5gAhsigQACgFA3AMIgpCSQgfAAgYADQAUhcAThAg");
	this.shape_8.setTransform(17.6,-125.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.6,-146.4,161.9,296.4);
p.frameBounds = [rect];


(lib.Foot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjKChQgfgPgTgeQgIgNgHg7QgHg8APAHQASAJAJAtQAIAxASAOQAkAeA9gQQBlgZB+hfQAngcAVgUQAngmgBgYQgBgOgyABQgRAAgrAFQg3AGgzAKQhUAPgDAOQgGAagWgMQgWgMAIgYQAJgYAsgRQAfgMArgHIA9gJIAOgCIARgCQA7gHARAAQA6AAAcAZQAsAng6BGQghAng/AuQihB4h0AIIgKAAQgeAAgagNg");
	this.shape.setTransform(-0.4,-5.3,0.433,0.433,38);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AD9927").s().p("Ah/CFQgjgCgpgmQgsgpALgiQASAKAXgCIAQgCQBzgNBdgeQB/gqBLhHQAsA9i5BrQhCAmhHAfQg/AcgQAAIgBAAg");
	this.shape_1.setTransform(-1.3,-4.9,0.433,0.433,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0C924").s().p("AivCNQgpgsgQghQgQghADgfQAfgvBNgoQCZhRDnAhQgFAegrA0QgtA1g9AuQiBBjhjAAQgUAAgUgEg");
	this.shape_2.setTransform(-1.1,-5.2,0.433,0.433,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Foot, rect = new cjs.Rectangle(-12.1,-12.7,24.4,12.8), [rect]);


(lib.DeadEyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgNA5QgMgLADgXQAAgIAHgbIADgRQADgLAEgGQADgFAFgEIABAAQAEgEAGACQAGABABAGIACAIQACAFgBAEIgIAeIgGAfQgEAVgJAIQgCACgDAAQgDAAgCgCg");
	this.shape.setTransform(-1.4,-9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AACBUQgPghgCgxQgDgqAJgpQACgGAHAAQAFAAACAGQADARABAWIACAmIADAqQABAZgBASQgBAFgFABIgDABQgDAAgCgEg");
	this.shape_1.setTransform(4.8,-10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AAjBfQgWgDgSgaQgLgRgNgeQgTgsgCg9QgBgIAJgBQAIgBACAIIAQAzQAKAcAKAUQAFAIAVAaQAQAUAEAPQACAHgFAFQgEAEgGAAIgCgBg");
	this.shape_2.setTransform(9.9,-9.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3BDA3").s().p("AhZBAQgLgJgEgNQgYgZAIgnQAGgcAagOQAYgMAdADQAWADAkAHIA6AMQAWADAMAYQAMAWgGAVQgIAfggAIIAAABQgnAFgUABQgTANgTgIQgIgDgPADQgTAEgGAAQgNAAgMgKg");
	this.shape_3.setTransform(1.1,-8.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AAlB2Qg3gfgWhGQgTg+AOhDQABgHAIABQAIABgBAHQgBBCASAwQASA0ArAuQAGAGgFAHQgEAEgEAAIgFgBg");
	this.shape_4.setTransform(-7.5,-88.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AAxDMQgwhegchnQgdhogHhmQAAgIAIAAQAIgBACAHQAeBOAdB4IAxDJQACAGgHADIgDABQgEAAgCgEg");
	this.shape_5.setTransform(0.1,-90.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgBEaQgIgegDgtIgGhNQgKh4gBgZQgDheACgoQAFhOAZgyQAFgMAOAEQAOAEgBANQgCAYgIAwQgIAwgCAYQgEBJADBHQACAqAHBaQAEBPgNAzQgBAFgFAAQgFAAgBgFg");
	this.shape_6.setTransform(6.2,-95.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EDDAC0").s().p("AgQCCIgOgCIgIAAQgZgBgXgMQgWgNgNgWQgXgnASgvIgBgJQgCgYAKgZQAFgPAGgKQAagsA0AAQAzAAAZAsIANAaQAKAGAFAIQAOAJAUAPQAXATADAiQAEAhgQAbQgZArg4ADIgKAAQgWAAgZgEg");
	this.shape_7.setTransform(-1.5,-83.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.DeadEyes, rect = new cjs.Rectangle(-14.9,-123.9,29.9,124), [rect]);


(lib.DeadBlood = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A82222").s().p("Aj1DcQhMgKgLAAQhWAFhTgCQilgCg3ggQhAgKgpgsQgrgrAbhEQAYg7AigJQAsgUA+gVQB8gqB4gMICqgRQCQgPAogFQEsghCtgEQFPgHBKBOQAmAcAKAoQAKAogUAqQgWAvhLAkQhAAlitAdQiPAYgVgCQh6AtiPAHIiHgCQgyAFgxAAQgsAAgsgEgACDC/QArgGA1gQQAogMAqgJQBKgRAoACIB4gXQB/gbA8gdQBjg4gPhHQgHgjgbgYQgfgmhMgPQg2gLhWAAQh1gGixANQiXAKikAWQgpAGiPAOIirASQg7ACgxAKQhYARh7A5IgBAAQgyADgPA7QgOA4AaATQAPAQAqASQAVAIASAGQAfAYBaAIQBiAICdgMQBPAOBmgBQAzAAAqgEQBtAMBQgKg");
	this.shape.setTransform(-2.1,-19.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D32424").s().p("AhWDOQhpAIhTgOQglgGg1ACQg7AEgfABQgxABhggNQhlgMgSgMQh/glAKhUQADgdATgaQASgYAOgEQB2gtAwgQQAwgQG/guQHLgwCDAAQCFABAiAEQBvANAqAzQAhAYAKAhQAKAkgSAoQgVArhGAhQg5AcjBAkIjBAiQhJAXg8AKQhDAMhNAAQgwAAg0gFg");
	this.shape_1.setTransform(-1.9,-19.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.DeadBlood, rect = new cjs.Rectangle(-87.5,-41.6,170.7,44.9), [rect]);


(lib.Body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bodygraphic
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA+CDQkSg1iLg3QgMgkABhPQABhHAHgNQAAACFCBBQFXBHApAKQAMAYgBBOQgBA4gGAvQhDgCjjgsgAlPhFIADBKQB6AiCVAfQDSAuCuAWIADhFQACgpgHgcQgZgNkwg/IlBhDQgHAMABA+gAliiwIAAAAIAAAAg");
	this.shape.setTransform(-16.5,68);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAgF+QjJgUikhuQgfgUgBkLQAAj6AThkQCjAjDsAdQDLAZA8AAQAJASAaErQAaEzgTACQhqA4iOAAQgmAAgogEgAksDqQBYBBCJAgQCNAhB5gVQAbgFAsgOQA0gQATgFQgMhEgOj8QgMjpABgKQhZABjOgbQjUgbhmgcQgWFrAnDUg");
	this.shape_1.setTransform(-16.2,10.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIBxIgIgBQgugGAuAGQg4gIgZgqQgVgmAIgwQAJgvAdgZQAhgcAmASQAygJAhAkQAeAhABAwQABAzgfAfQgcAegwAAIgPgBgAgchNIgCAAQgZALgNAVQgPAZAGAdQAGAeAYATQAaAUAkgDQAkgDATgZQAUgZgMgiQgKgegigNQgngPgKgLQABABgOADg");
	this.shape_2.setTransform(-11.4,-46.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgpBmIgIgDQgWgKAPAGQgngTgPgpQgRgtAYgrQAXgoA0gLQAsgJAxAPQADABARAWQAQAXAEAIQAUAngLAlQgNAwg2ATQgZAJgXAAQgUAAgUgGgAg8g3QgxAvApAuQAnAvA7gQQAegIAOgaQAPgcgNgbQgGgOgdgSQgbgRgEgLQgyAFgUAUg");
	this.shape_3.setTransform(-42.1,-52);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AH9TSQkygQlxhmQmIhskaidQgbheA9q4QAkmKAIh2QATkDgIhaQhyAohLgGQhsgIgVhkQgPhIBBg2QBAg0CcguQFfiTHWAJQDuAEC4AjQAUACA9AAQA2AAAeAEQBgAMAZBFQAeBchDAxQgWAQgjAMIgvAQQCxGuCmKXQBFEVAnDRQAnDTgHA+QgJAviABxQh6Bsg6AWQgyAUhHABIh9gEgADor1QAJAfgHAEQB+FTCRKNQCRKPAADuQApAAACgCQADjuiIqHQiApgiEmpIgTgRQgKgKgCgOQgKAEgPABQgPABgKgDQAIAUAFASgAhRytQmDAFjJBcQBVA4gFBRQgFBPhZA1QAVCRg8LOQgeFpgICDQgNDqAOA7QD8CRG2BlQF+BZEqAKQg8mticq2QiLpsgziJQg3AZhogPIiggfQmth1AaguQgEAICpA6QCiA3AiAHIC0AoQB7AUA4ggQgHg+gXgZQgXAJhJgCQhYgChdgTQkMg4iaimIADgKQAIgMAXgJQAbgKBRgOQBogSBwgHQFHgUDqBXQASAMgBAWQgBALgEAIQgEAUgoBDQgoBDgUAVQgJAWALAaQAKAXANAEQAcAFAigvQAtg+AkiIQgHgTgKgmIgPg7QhHgfiOgRQh+gPiQAAIgjABgAJHCfQCkLHgLEMQA2gdBahHQBnhSAcgsQgDhCg3j4Qg5kBhNkoQjLsBiJkNQg1EEhZgRQBtE+CJJPgADKtLQAFAKAEAPQAdAHAdgOIgBgSQAAgMAFgLIA6haQAmg6ANgiQgHgJgbgIQgdgHgGgCQgRBWhxAeQhgAaiJgUQiAgShYgsQhdgvATgqQgtAFgXAFQgqAIggAOIArAlQA4AsBGAjQDfBxENgTIACAAQANAAAIASgArOwqQg5ANg+AWQh6AqgcApQgdAsAwAmQArAiAlgHQBdgSAQgEQA+gRAlgfQAwgpgNgzQgNgyg8gSgAINwrIAlBLIBQgWQAogTgRguQgOgpg5gLQhEgFgfgFQAFAXAZAzgAk6xSQgNAjBgAgQBZAeB9ALQCCALBRgVQBegXgPg7QiGgkieAAIgFgBQhyAAiwAVg");
	this.shape_4.setTransform(-1.3,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0C924").s().p("AhHBBQgegbAAgmQAAglAegbQAegbApAAQAqAAAeAbQAeAbAAAlQAAAmgeAbQgeAbgqAAQgpAAgegbg");
	this.shape_5.setTransform(-11.1,-46.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E0C924").s().p("AhGBDQgdgcAAgnQAAgnAdgbQAdgcApAAQAqAAAdAcQAdAbAAAnQAAAngdAcQgeAcgpAAQgpAAgdgcg");
	this.shape_6.setTransform(-41.9,-52.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AlQgZIgDgrQgCgsAFgBICuAxQDjA6ETAeIAABag");
	this.shape_7.setTransform(-17.3,71.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AABDiIgYgHQgBhdgFhkQgJjHgTglIAZAJQAdADATgdQATBMAPCcQARCygSAkQgOAJgSAAIgQgCg");
	this.shape_8.setTransform(63.9,95.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("Ai8AeQBIgOBTgXQCkguA5gtQAGA+gaAsQgcAwg5APQhlAcg3AAIgDAAQhjAAgNhFg");
	this.shape_9.setTransform(-83.2,-90.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AAkBYQiogShNgbQhogkAAhBIBCgLQBTgNBQgFQEBgPCMBAQALA3hKAoQg+AihcAAQgdAAgfgDg");
	this.shape_10.setTransform(-2.8,-105.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("Ahlg9QAUAHCmgUQAyBJhdAtQgeAOgnAKIgiAHQgKgygehWg");
	this.shape_11.setTransform(58.6,-101.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C4C4C").s().p("AhPCVQh4gHgPiZQA9gkBHgkQCNhGA0AGQBEAbAaAzQAkBKhdBXQiUA5hGAAIgJAAg");
	this.shape_12.setTransform(-84,-95.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AAqC7QiSgIjkh6QgKhiABhOQADg7gBgJIBAAWQBRAbBRATQECA8CngkQANA8ARCuQh9AfggAGQg/AMg3AAIgZgBg");
	this.shape_13.setTransform(-15.8,28.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4C4C4C").s().p("AhfFWQhhgaiJhQQgUgyAGkXIAJkOQAmATEvAkQCXASCRAOQAUEuAWEkQiIAuiBAAQhZAAhWgWg");
	this.shape_14.setTransform(-16.1,10.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4C4C4C").s().p("AggBgIk3hOIgBitIKoCRIAHAtQAGA6gMA8QgJADgUAAQhSAAkCg8g");
	this.shape_15.setTransform(-16.5,67.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4C4C4C").s().p("AIcSOQgCgFgJiBQgLiZgciVQgkjCirqnQitqsgbgxQi3gEi9guQkHhCg5h1QB3gqCtgTQFYglEKByQgNAtg1BUQgsBIAEANQBWElBYE6QCuJwAZC4QAbDNAPDbQANDJgIAFQgPAKgTADIgKABQgSAAgFgOg");
	this.shape_16.setTransform(8.8,3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#44757A").s().p("AgOE8QoQhilxjZQgXlWAXggICpBMQDVBWDZAyQK1CfHgkFQAdAsAUCrQAKBVADBNQhCBAhRBBQijCBhLACIgdAAQjSAAk5g6g");
	this.shape_17.setTransform(10.6,83.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#44757A").s().p("Aj2C9Qi9hLiPhUQgFgQgMhCQgNhLgQg7QD8iLGUARQEeAMDfBGQBbCagHCJQgLDHj2AnQgvAIg0AAQjUAAkvh6g");
	this.shape_18.setTransform(-9,-92.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4C4C4C").s().p("Ah0hSQAAgaBBgJQA+gIAgAQQAcAOAaA9QAZA5gGAbQgEAVhOAbIhNAWg");
	this.shape_19.setTransform(56.8,-106.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5596A5").s().p("AktQmQjIg/jGhNQijg/gxgbQgHgKgGhRQgHhbABh0QADlBA4kMQA2kDgQlSQgJipgTh2QgNh9CMhFQB4g7DdgPQC8gMDdAWQDGATCJAkQByCbDaMqQDFLgAzFfQgZBki6BsQhdA1hZAiQguAHg4AAQkFAAnciWg");
	this.shape_20.setTransform(10.6,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.5,-123.8,214.6,247.5);
p.frameBounds = [rect];


(lib.ArmShoot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ArYC8QhKgUguggIgegbQFOBkHKgPQDogHC6gfQgngogDheQgCg7ASgfQhzAZhnAQQkOAniJAEQk7ALjchYQgGgCgDgNQgEgNALAAICzAnQCLAYChgBQHRgELhjVQAXgGAPAZQAQAZgOAEQgzAOjOAuIkHA7QggAjAKBWQALBYAqASQGihkAwgdQARgJANARQAOAQgQANQgcAWgxAPIhUAUQhDAWhHAVQiJAmiWAWQi/AcjLAAQkoAAlCg6g");
	this.shape.setTransform(8.4,-48);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3BDA3").s().p("AjPAcQgGg9ALg7IB9gaQCSgdBzgTQAyB7gvBPQgOAYgXASIgTAMQhkAliFAoQhbgPgOh8g");
	this.shape_1.setTransform(83.3,-53.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#44757A").s().p("AgFBsQjDgfgsgeQhIgxgWg0QgehJBygWQB4ArCAAcQC3AmB9gQQgHAIgJALQgQAYgFAYQgSBOBiA9Qi2gOiogcg");
	this.shape_2.setTransform(-54.8,-41.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5596A5").s().p("ApHAqQhzhMAZhDQALgaAfgKQAggLAlAOQBRAdAiAJQBhAaB2AJQFWAcIGhsQgSAagCAvQgFBbBLBiQlNAWj4AAQoTAAiVhlg");
	this.shape_3.setTransform(-21.4,-42);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDDAC0").s().p("AkrB5QgshkAxhOIJKiTQAXA2AFA8QAJB4heAjQhdAjjKA4Ii4AxQgggigXgyg");
	this.shape_4.setTransform(70.9,-50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.3,-72.6,193.6,49.3);
p.frameBounds = [rect];


(lib.ArmFront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApWN5Qglg4AUhKQABiDAnibQAbhvA8ikQBnkaCLi6QBKhiBwh5QBBhGCFiKQBnhrA8guQBkhLBggMIABAAIACgBIABAAQBdgKAXBBQAWA+g4BEQgpAzhRBGQhpBdgXAWQk2ExhyECQg5CAgwDdQg9EYgYBMQgWBJgzAyQg4A4hHAJIgVABQg+AAgigzgAoJHzQg5DhAVB4QAMAhAtABQAmAAAggSQBAgmAfhfQALggAKgzIARhRIABgHIAmiqQAYhoAVhIQgkglg6gFQhFACglgEQhFC0gnCZgAknB9QA5AHAmAhQBLjuC+jvQCEimDUjBIAogkQA+g3ASgUQA5hAgZgYQg6g3iSBuQhOA6hgBlQjpD0hjB9QioDVhVDTQAogNAoAAIAbABg");
	this.shape.setTransform(-0.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#44757A").s().p("AkNEYIhzAJQADgvDPjMQCuirCMh1QBlhUBCABQA5ABAVA+QAPAtjYDZIi4C0QhqBqgwA4QAAg1hzgBg");
	this.shape_1.setTransform(19.2,-57.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5596A5").s().p("AmTHtQg8gBg1AQQAQhPBeiYQBYiNCBijQCBijB7iBQCFiJBXg3QCkhmA1A3QAVAXgGArQgFAqgbAsQloE0iKDFQhFBig2B4QgoBYg/CtQgohUh6gBg");
	this.shape_2.setTransform(6.4,-34.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3BDA3").s().p("AhXBEQgsAIgaAaIA8jRQBwg1BTAdQApAOASAZIgOA6QgSBMgXBkQhjhahaAQg");
	this.shape_3.setTransform(-35.5,28.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDDAC0").s().p("AjCE+QARiZAbikQA2lFAvgvQBQgZBPAPQBYASgDA+QgFBXguDVQgzDsghAhQgNANghAnQggAkgaAQQgaAQgYAAQg0AAgwhGg");
	this.shape_4.setTransform(-40.3,53.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.9,-94,124.6,188.1);
p.frameBounds = [rect];


(lib.ArmBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApcDkIhuh8QhAhNgeg5Qg1hnAAgDQgDgWAWASQALAJAKAMQAfA4BHBVQAaAgBMBWQBNBXBIA4QBWBEBdAhQC9BFDZg0QDLgxCjiIQhMgKg4g7Qg5g7gGhNQiTC0jqAQQjsAQiniiQiIiEh3jjQhTiqAhABQAOAAAlBFIArBWQCJDmB3BmQCrCUDUgXQBqgMBYg5QBQg0BFhcQA1hICFjeQAehdBqgUQBegRBMAuIAKAGIAIAFQA/AuALBTQALBLghBUIACACQiBEMjnCqQj1C1kbAHIgUAAQk0AAjjj9gAIgl1QgPARhaCQQhgCagjAsQACBXBeBAQAlAaAmAKQAkAKARgKQBKhHBChcQA9hVAvheQAWgsgOg8QgNg5gmgrQgpgtgwgEIgIAAQgyAAguAxg");
	this.shape.setTransform(0.9,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3BDA3").s().p("AiaCUQgagrgQg5IgLgwQAohMBgiMQBfg1BXA0QBHApAUBDQAQA1gYBGQgcBShYCCQgtASgmAAQhbAAg6hgg");
	this.shape_1.setTransform(62.7,-19.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDDAC0").s().p("AkIBhQA+hjBBhlQCCjJAMgCQBUgOA8ANQB+AbgKCNQgLCUhzCgQgtA+gtApQgrAogUABIgWABQi3AAgtjZg");
	this.shape_2.setTransform(55.7,-12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#44757A").s().p("AgUFRQjqiDiwlOQgZiyABg6QACh5BIAyIBLCeQA4BsA8BPQCsDgEDA8IgGAaQgEAgAMAhQAkBnCvA/QkqgPixhjg");
	this.shape_3.setTransform(-41,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5596A5").s().p("AqwiEQgLgRgLg/QgMhFAAg7QABioBfA6QAbBBAzBZQBmCyB3BzQCnCgCxAPQDeASDjjWIANBDQAKApAUAcQA3BMCfAfIhyBJQhLAvg7AfQirBYiaAHIgZABQmkAAmJpWg");
	this.shape_4.setTransform(-16.4,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.6,-48.1,175.7,96.2);
p.frameBounds = [rect];


(lib.GreenChunk3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3526").s().p("AgmCSQgxgXglgyQgog2ARg6QAQg1A5gqQAbgdAaAHQANADAnAcQAKAHAsASQAjAPANASIADAEQAfAugYBBQgXA/gzAgQgaAQgdAAQgYAAgcgNgAgph1QgaABgiA1QgdAuAUAwQASAtAuAZQAuAZArgOQAtgPATg4IAEgPIABgDQAJgogXgXQgDgEg/gnQg1gigTAAIgBAAg");
	this.shape.setTransform(0,-15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E9140").s().p("AgtB1Qg2gTgVg+QgMgkASguQARguAhgXQAfgVA4AgQAtAZAeAjIADADQAlAtgRAuQgQAqgzAVQgdALgaAAQgWAAgWgHg");
	this.shape_1.setTransform(0.1,-16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.GreenChunk3, rect = new cjs.Rectangle(-15.3,-31.7,30.7,31.8), [rect]);


(lib.GreenChunk2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3526").s().p("AgfEZQgjgLgogrQgsgwgWgfQgng3gCgmQgCgXAkgqQATgYAhgjQAqg1ASgeQAegxAIgtQAOhVBfBqQBMBUAgBEQAdA+gDAvQgEAzgoA0QgjAvgSAVQghAkgfAVQgeAVgcAAQgNAAgNgEgAgviGQgcAvguA4QgZAfgMATQgVAjAIAUQAIATASAXIAfAnQAtA7AWAQQAsAfArghQAbgUAbggQAQgTAWgfIAHgKQAng2gFg1QgEgrgnhAQgggzgYgfQglgwgigVQgPA5gjA6g");
	this.shape.setTransform(0,-28.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E9140").s().p("AgQgMQAAgDAYAUIAJAIIghgZg");
	this.shape_1.setTransform(10.6,-45.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7E9140").s().p("AgqD9QglgUglgvQghgpgTgtQgJgUACgYQACgcAPgNQALghAggqIA/hOQAEgEAehFQAUgzAcAAQARgBAXAgQAVAeADATQBZBFgHB/QgGB3hKBGIgKALQgcAfgfAMQgQAGgPAAQgUAAgSgKg");
	this.shape_2.setTransform(-0.4,-28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.GreenChunk2, rect = new cjs.Rectangle(-21.4,-56.9,42.8,57), [rect]);


(lib.GreenChunk1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3526").s().p("AhqDZQgIgBgUhBQgXhKgDgGQgdg6gKggQgOg1ANguQAMgtApgjQAugnArAPQAQAFAZASQAbAUANAGQALAFAdAKQAaAJAOAIQAfARATA7QAdBWACAEQAwBbgyA3QgsAyhoAFIgdABQgzAAg8gKgAh1ivQgdASgRAmQgOAfAJAqQAFAVATAxQAfA9AHAQQATAtAEAlQAxAHAiAAQAtAAAlgLQAmgKAQgJQAggPAHgYQAHgYgVgoQgagrgHgRQgLgrgHgVQgMgmgdgKQhIgZgxgiQgQgLgRAAQgQAAgQAKg");
	this.shape.setTransform(0,-22.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E9140").s().p("AhtCkQgPgvgIgRQgohOgGhPQgJhtBKgaQAPgGASADQASADAMAKQAOALAMACQAZAEAGACQAgAKAdAYQAbAWASAeIAGAKQAPAcAMAjQAaAPAEA2IAAABQAFAQgCASQgCARgJAOIgGAKQgUAlgrAPQgIADgHgFIgFABQgXAGgsgCQgwgCgTADIgHAAQgfAAgQghg");
	this.shape_1.setTransform(0.8,-22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.GreenChunk1, rect = new cjs.Rectangle(-20.7,-45.4,41.5,45.5), [rect]);


(lib.EnemyBeaverFace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgqBIQgRgeAAgqQAAgpARgdQASgeAYAAQAZAAASAeQARAdAAApQAAAqgRAeQgSAdgZAAQgYAAgSgdg");
	this.shape.setTransform(-8.8,-131.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AADBMQhMgFgzgWQg4gYAQgcQAwhVCdAPQAhADAoASQAyAWgBAZIABACQASAsg0AVQgkAPg6AAIghgBg");
	this.shape_1.setTransform(-3.4,-90.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3526").s().p("Ai9GAQhqgVhPgwQjAh3A2jTQApijCFhpQCHhrCxgFQC2gGCjBQQDGBgAHCoQAHCwi1CHQicB0i9AWQghAEgjAAQg+AAhAgMgAgNloQi8ADiCBzQh0BogbCNQgdCfBxBmQB7BvDJgIQC0gHCQhdIAEgDQBMgyA0hFQA2hHAQhJQAkisiwhkQichZioAAIgJAAg");
	this.shape_2.setTransform(0,-76.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C4C4C").s().p("AhDEMQhbgDgohFQggg4gDhUQgCg1ALhbQAEgjAMAIIAIAHQADADAAgEIACBcQACBBADAZQAFAtAFAVQAKAlAUAVQAqAtBdgRQBNgOA5gpQA3goAOhJQALg6gRhNQgMg5gdhNQgKgbARgUQARgUAMAfIAEAKIAFAOQCFFvjoBdQhSAghBAAIgHAAg");
	this.shape_3.setTransform(17.5,-26.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C4C4C").s().p("AhkCkQhMgngChfQgCg8AhhmQAUhAAOADQAOAEgMAzQgRBKgEAXQgKA/AGAiQASBfBvAFQAlACCHgYQAlAIg6AaQg1AZgWAAIgRABQheAAg6geg");
	this.shape_4.setTransform(-18.4,-23.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4C").s().p("ADdFdQgFgDALgeQAUg1AIgqQAVhtgIhnQgSh3gSgsQgkhZhDgnQhNgshdAVQhaAVg8BEQhFBPgOB5QgMBjAbB2QALAvAWBIQgXAHgJgNQgCgBgPgkQgjhPgDhqQgDhZAdhbQAehhA3hFQCHimDABZQCiBLAYDwQAKBigSBpQgQBkgjBMQgagLgFgDg");
	this.shape_5.setTransform(5.2,-143.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguAOQgjgJAHgQQAIgQAkAFIAwAEQAdABARAFIACABIAAAAIABAAQAfALhFAYIgMAAQgbAAgkgKg");
	this.shape_6.setTransform(-17.1,-12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAAQAAgXAWAAQAXAAAAAXQAAAYgXAAQgWAAAAgYg");
	this.shape_7.setTransform(-28,-17.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNAXQgMgFAAgSQAAgPARgGQAOgFAMAJQALAIgEALQgEAKgNAHQgIAFgHAAIgGgBg");
	this.shape_8.setTransform(3.5,-13.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhQAzQgPgEgOgMQgSgPAHgOQAGgJAgABIAqAAIBLgjQAwgWAYAKIABABIABAAIACABQApAZhkApQhPAigmAAQgJAAgGgCg");
	this.shape_9.setTransform(19,-12);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EADFC3").s().p("ABsDkQhhgCgghMQgyBDhwgJQhvgIgrhEQgXgjALhKQAEgXAWhZQANg0AIgEQAPgLBFAVQBUAYBfgFQBZgGBXgfQAGgCApgYQAsgZAcgLQBeglgIBQIgBADIAAADQgCAjAGA6QAJBKAAAYQABBxhZAxQhKAphNAAIgHAAg");
	this.shape_10.setTransform(1.4,-26.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9FA355").s().p("AhXC+QiTgCh1g6Qhvg3gPhEIgUg9QgNguAHggQAkAAA3AeIBIAqQA+AcBLAPQA8ALBQAEQCSAHCIg8ICahSQCXhMgTAjQhrDEirBeQiNBOilAAIgIAAg");
	this.shape_11.setTransform(0.3,-58.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B0BA5F").s().p("Al3EwQh6hOACiTQACiuCHiJQCQiSDLAAQDRAACVBqQCVBqAACWQAACVikB7QimB7jRAAQjXAAh1hLg");
	this.shape_12.setTransform(0.3,-76.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AguAAQAAgSAMgOQANgPAVgBQAWABANAPQAMAOAAASQAAAxgvgBQguABAAgxg");
	this.shape_13.setTransform(20.3,-153);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgtAxQgbgSgBgaQgBgXASgVQASgVAZgHQAcgIAYAOQAfATADAfQADAagTAZQgTAZgcAFIgKABQgYAAgVgWg");
	this.shape_14.setTransform(9,-164);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EADFC3").s().p("AjQEqQhXh7AAivQAAitBXh8QBXh7B5AAQB/AABTBwQBWB1AAC/QAACvhWB7QhXB7h7AAQh5AAhXh7g");
	this.shape_15.setTransform(5,-135.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.EnemyBeaverFace, rect = new cjs.Rectangle(-52.5,-179.4,105,179.4), [rect]);


(lib.EnemyBeaverBody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3526").s().p("AhaAJQgogPAPgKQAOgJAiAHQAsAKAvgDQAigCAvgKIALgDQAOgDgiAYQgiAYgMACQgZAGgYAAQgsAAgvgSg");
	this.shape.setTransform(-20.9,-14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3526").s().p("AANAFQgNgKgdAKQgdALgDgEQgIgJANgKQANgLAWgFQA4gNAWAlIABACQANAYgMAAQgMAAgigWg");
	this.shape_1.setTransform(-64.8,-190.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3526").s().p("Ag/AiQgKgOAPgUQAOgSAagNQAagOAXABQAaACAJAXIABAAQAGAQgegCQghgFgEABQgXAHgUAhQgHAMgEABIgCABQgFAAgIgLg");
	this.shape_2.setTransform(33.9,-192.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3526").s().p("AhyIGQgNgPAJgQQAOgdAYgeQBChaAdg7QBNiYAXiqQAcjVhAhzQgTgggcgYQgegbgggJQgTgFgzAJQgsAHgVgNQgjgVBHgWQA9gTAaABQAhABAjATQAiASAXAaQBVBgAJCuIAAAOQAGC2g9C+QhJDiiFBmQgHAFgHAAQgIAAgIgJg");
	this.shape_3.setTransform(68.3,-79);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3526").s().p("AihREQhygJhjgjQgXgJguAbQgtAbghgMQi1g9ggk5QgLhsAGiWIAMjUQANklAsjgQAZiAAihqQg+gkgVhTQgVhQAQhgQAPhaAqhOQAzheBPgGQBAgFBlA1QAiASA9gdQBXgrAOgDQBmgXBpAcQAKACBRApQBCAhASgIQAdgLA3gaQAygVAlgIQBVgSBIA2QBAAxAnBdQAkBZgDBcQgDBhgwA7QghAogzATQAYBCAPAzQAkB0AaB7QAVBnAQCFIAXDRIADAZIAAADIADAkIACAMQAKBoACA5QAFCIgUBnQgaCDhEBWQhLBehKgGQgogDgdgeQgUgUgKAAIgnAOQi5A7jIAAQg8AAg9gFgAlbP2IBEAYQBRAOBjAAQBNgBBlgKQDPgWCPhJQAkgXAcgPQA3gegHAXQgRA+haApQBVBTBWiOQAfgzAZhGQAUg7AFgkIACgMIABgIIAAgEQAPiFgRiwQgFg4glkUQgslDhkkBQhrkQisiXQjfjFjvCCQhyA/hVCNQg/Bpg0CfQhcEagcFcQgPCygDCDQgECqAOCMQAIBYAPA7QAWBSAqAyQAfAkAvARQA6AVAWgrQiChZAigVQACgBA4ApQA7AsAIADIAEgBQAMAAAtARgAFjwDIgDACIg1AXQgfAOgYAAQBkBOBQB7QBCBnA3CLQBQgfAVhbQAQhKgZhbQgih2hBg1Qgugmg7AAQglAAgpAOgApiu/IgEAHQg0BfgHBuQgKCLBWA2QAviJA3hhQBEh7BZhOQgggFgxgSQgxgTgUgDQgJgCgJAAQg8AAgsBNg");
	this.shape_4.setTransform(-11.8,-109.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9FA355").s().p("AAcBSQgXgCgXgYQgXgFgfg/Qgfg/AZAJQAlANAuAAQA9AAAZgcIghB7QgCAogaAAIgCAAg");
	this.shape_5.setTransform(-72.6,-172.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9FA355").s().p("AhCAGIgwhwQBJA8A+ABQAxAAAtgjIgWBUQgfBZgvANIgGABQgaAAgxhlg");
	this.shape_6.setTransform(44.2,-174.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B0BA5F").s().p("ABQEQQgegMgWhQQgdhqgCgFQgXgrgfgpQgRgYgtg3Qg2ghgagXQgwgtBUgSICIg9QCrAjA2CnQAVBAgCBGQgBBAgTAsQgOAjghAjQggAjgZAAQgHAAgGgDg");
	this.shape_7.setTransform(33.5,-189.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B0BA5F").s().p("AiBDrQgQgigKgKQgxgxAZiOQAWh8AqhEQBSiEDeCDQg6Ach0DWQg4BsgvBlIgGABQgUAAgPgYg");
	this.shape_8.setTransform(-62.4,-189.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#727D3D").s().p("AhVFTQiKgFhlgXQgngTgVgHQgmgMgPAaQgkA6hVgxQhJgrgcg0QgSg3gRhPQghifAJh8QCRBxDGArQC4AoDNgaQDGgYC3hQQC5hRCFh5QAcEzhKC1QglBagrAeQgOAhgyAKQgwAJgfgUQgSgMgIgfQgEgOgkARQipBRjwAAIg2gCg");
	this.shape_9.setTransform(-11.3,-36.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7E9140").s().p("Am5PjQiMhKg9iXQg2iDgCjUQgBicAfkSQA4npCGkGQCik7EYAAQB0AAB2BWQByBTBhCWQDPE/AtG1QAiFNADBNQAIDSgxB9Qg7CXibBNQiqBVkzAGIgcAAQjsAAiPhLg");
	this.shape_10.setTransform(-12.3,-109.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4B4F29").s().p("AikFJQhBiJAAjAQAAi/BBiJQBCiIBcAAQBzAABBBeQBTB7goD3QgkDbgtBtQg6CJhUAAQhcAAhCiIg");
	this.shape_11.setTransform(59.5,-81.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.EnemyBeaverBody, rect = new cjs.Rectangle(-86,-219.5,172.1,219.5), [rect]);


(lib.EarChunk1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3526").s().p("AAKCiQgQgKgbgZQg0gugPgmQgRgtAeg2QAeg4AnghQA2gxArAjQAQAOADAgQAAALgCApQgBAXAFAmQAHAuAAAOQABArgFAYQgKAngeAHIgMACQgTAAgWgNgAgKhqQgQASghAuQgeAqAfA3QAaAuAwAgIABABIADABQAkAXAPghQAKgYgDgtQAAg9gCgoQgEhNgRgOQgGgFgHAAQgUAAggAjg");
	this.shape.setTransform(0,-17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B0BA5F").s().p("AAACMQgpgdgdgrQgjg3AWglQASgfAmgmIBBg9QAcgaAZDHIABADIAAANQAFB7gyAAQgTAAgcgSg");
	this.shape_1.setTransform(-0.2,-17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.EarChunk1, rect = new cjs.Rectangle(-10.7,-34.9,21.4,34.9), [rect]);


(lib.BloodSplat1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E54A4A").s().p("AgoAcQgSgLAAgQQgIgdArgEQAWgCAkAEQAZAAAAAYQgBAYgYADQgDgJgSAHQgSAJgFABQgGAFgHAAQgIAAgKgGg");
	this.shape.setTransform(-10.6,-28.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E54A4A").s().p("AhSBDIg6gJQgngGgOgNQgngmBMgiQAwgXA5gLQA+gLA7AGQA+AHAvAaIAEACIACACIABAAIABAAQA0AfhTAmQg/AegxAHQgbAEgaAAQgmAAgjgIg");
	this.shape_1.setTransform(-38.8,-19.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A82222").s().p("AiPDBQiIgDhsgOQhwgPhLgZQiEgrgHhEQgYgzB/g4QBEgeBlgbQDPg4D6ADQC9ABD+AlIAFABIANABQBNALAtAPQBHAYAeAsQAsA+hDBEQg1A2hLAWQheAeiBAIQgtADi1ADIisACIhHgBgAhbiQQjkAHi5A9QhNAZgRAHQg9AagQAfQgKAVA1AfQAlAVAgAKQBmAhCAANQBhAKCKABID0AAQCOgBBngNQBugOAygRQBdggAdhCIAAgBQAjhQiigkQg6gMiggLQjsgPiCAAIg1ABg");
	this.shape_2.setTransform(0,-19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D32424").s().p("Ak9CdQh2gSg+gNQhsgWg8goQhNgzBphCQBJgvBcgZQDIg0C4gFQBXgCB0AJIDLATQCTAPArAHQBmATBFAoIAIAEQAZAQgdA3QgQAhgfAmQgWAcg6ANQhDAKgbAFQjKAmjJACQg7AQhQAAQhmAAiHgag");
	this.shape_3.setTransform(0.1,-19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BloodSplat1, rect = new cjs.Rectangle(-71.7,-38.7,143.6,38.7), [rect]);


(lib.BloodDrop1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D32424").s().p("AACAxQgrgDg1gfQgPgGgLgKQAAgHAxgHQAlgGATgBQBZgGAcA1QgtAYgsAAIgLAAgAATAEQgGANAKAGQAQAJAIgUQAHgTgSAAQgLAAgGALgAgngTQgbAFAIATQAJAVAhgKQAggKgRgSIgBAAQgIgIgPAAIgOABgAAvgwQA8AKAOAjQgZghgxgMg");
	this.shape.setTransform(0.7,-8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E54A4A").s().p("AAdAUQgKgGAGgMQAGgLALAAQASAAgHATQgFANgJAAQgFAAgFgDgAg0ACQgIgSAbgFQAagFAKALIABABQASASggAJQgLAEgIAAQgRAAgGgPg");
	this.shape_1.setTransform(0.1,-8.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A82222").s().p("AgqAwQgwgRgdgUQgxghAtgXQBGgiBRAKQAOACANADQAwAMAZAhQAKANAHAQIAAACQAFAOgbAQQgZAOgmAJQgjAIgXAAQgoAAgEgZgAgIglQgSABgmAFQgxAIABAGQALALAPAGQA0AeAsADQAwAEA0gcQgagvhLAAIgRABg");
	this.shape_2.setTransform(0,-7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BloodDrop1, rect = new cjs.Rectangle(-14.6,-14.5,29.2,14.5), [rect]);


(lib.BeaverTooth2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C4C4C").s().p("AiGDFQhMgmgDhfQgBg+AghlQARg1AOgGQAOgdBcgdQAugOBFAGQBDAFAzAVQALAAAFAIQAIAGgDAJQAGAXgBAjQAAATgCAmQgCBFgJAxIgKA8QgJAmgPAQQgOAOgiALQgUAKgeALQgbAIgHABIgTAAQheAAg4gegAgci6QgrAKgQAFQgjAMgTARQABAOgGAYIgUBhQgLA+AGAjQARBZBiAJQA1AGBvgWIAKgHQAAgBAAAAQgBAAABAAQAAAAAAAAQAAAAABAAQARgNAEgMQAUg7AGg8QAFg8AAg0QgDgtABgWQgWgBhMgUQgogJgdAAQgRAAgNADg");
	this.shape.setTransform(0,-22.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguAPQgjgKAHgQQAIgQAkAFQAJACAnACQAfABARAGIABAAQAfALhGAYIgKAAQgdAAgjgJg");
	this.shape_1.setTransform(-1.2,-9.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAAQAAgXAWAAQAXAAAAAXQAAAYgXAAQgWAAAAgYg");
	this.shape_2.setTransform(-12.1,-14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EADFC3").s().p("AhZC7QhZghgIhbQgBgJAFgLQAAhMADgZQAGg6AYgkQAMgSATgBIABgCQANgNAVgGQAWgIASAEQAhgHA4AGIBUAJQAZAAANAUQAMARgEAWQAWAmgVBFQgEA5gUA1QgTA2gaAWQgQAOgSAAQgtAXgtAAQgkAAglgOg");
	this.shape_3.setTransform(0.6,-22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BeaverTooth2, rect = new cjs.Rectangle(-21.4,-45.4,42.8,45.4), [rect]);


(lib.BeaverTooth1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C4C4C").s().p("AhDENQhbgDgohFQggg3gDhUQgCg2ALhbQADggALAEQAcg0B1g4QB8g8BfAUQAPgHAJAYIADAHIgCgFQCSGBjuBgQhQAghBAAIgJAAgAhIixQgyAagoAfQgaAVgIAFQADCIADAgQAFAtAFAVQAKAlAUAVQAqAuBdgRQBNgPA5goQA4goANhKQALg6gQhNQgMg1gdhRIgDgMQgVgFgVAAQhNAAhcAzg");
	this.shape.setTransform(0,-26.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAWQgMgEAAgSQAAgPARgGQAOgFAMAIQALAIgEALQgEALgNAHQgIAFgGAAIgHgCg");
	this.shape_1.setTransform(-14,-13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhRAzQgPgEgOgMQgSgQAIgNQAGgJAfABIArAAQATgFA4geQA0gYAYAOQApAYhlAqQhQAiglAAQgIAAgHgCg");
	this.shape_2.setTransform(1.5,-11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EADFC3").s().p("AgrDvQhhgDghhLIgGAIIgOhdQgHg3gBgmQAAghAFg3IAEgBQAFgUAkgXIA0gcQBDgkA5gOQBFgRBCALQASADAAAVQAQANgEAjIAAAHQgDAjAHA5QAIBKAAAYQACBxhaAxQhKAphMAAIgHAAg");
	this.shape_3.setTransform(-0.9,-27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BeaverTooth1, rect = new cjs.Rectangle(-23.5,-53.8,47,53.8), [rect]);


(lib.BeaverNose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AADBMQhMgFgzgWQg4gYAQgcQAxhVCcAPQAiAEAnARQAyAXgBAZQAAgBAAgBQAAAAABABQAAAAAAABQABABAAACQACAEgDgFQASArg0AVQgkAPg6AAIghgBg");
	this.shape.setTransform(-3.4,-53.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3526").s().p("Ai9GAQhqgVhPgxQjAh2A2jTQApijCFhpQCHhrCxgFQC2gGCjBQQDGBgAHCoQAHCwi1CHQicB0i8AWQghAEgkAAQg+AAhAgMgAgNloQi8ACiCB0Qh0BogaCNQgdCeBwBnQB7BvDJgIQC0gHCQhdIAFgDQBLgyA1hFQA1hHAQhKQAkiriwhkQichZioAAIgJAAg");
	this.shape_1.setTransform(0,-39.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9FA355").s().p("AhXC+QiTgCh1g6Qhvg3gPhEIgUg9QgNguAHggQAkAAA3AeIBIAqQA+AcBLAPQA8ALBQAEQCTAHCHg9ICahSQCXhLgTAjQhrDDirBfQiNBOilAAIgIAAg");
	this.shape_2.setTransform(0.3,-21.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B0BA5F").s().p("Al3EwQh6hOACiTQACiuCHiJQCQiSDLAAQDSAACUBqQCVBqAACVQAACWikB6QinB8jQAAQjXAAh1hLg");
	this.shape_3.setTransform(0.3,-39.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BeaverNose, rect = new cjs.Rectangle(-52.5,-79.3,105,79.3), [rect]);


(lib.BeaverEyePop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgqBIQgRgeAAgqQAAgpARgeQASgdAYAAQAZAAASAdQARAeAAApQAAAqgRAeQgSAdgZAAQgYAAgSgdg");
	this.shape.setTransform(-14.1,-39.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4C").s().p("AhPGoQhXgkhDhdQgkg0gFgkIgCgFQgihPgEhqQgDhYAdhcQAehhA4hFQCGilDABYQCfBJAaDpQAXDHhKCwIgFAKIgBADQgRAggkAfQgeAZgkATQhRAqhAAAQgkAAgfgNgAgql8QhaAVg8BEQhFBPgOB5QgLBjAaB2QAKAqAPAyQAUAtAbAfQAlAsAVATQAlAgAlAIQBRARBng9QA4ggAYgnIALgTIAIgWQAVg7AGgkQAVhsgIhmQgTjfh4hGQg0geg7AAQgcAAgfAHg");
	this.shape_1.setTransform(0,-43.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguAAQAAgTAMgNQANgQAVABQAWgBANAQQAMANAAATQAAAwgvABQgugBAAgwg");
	this.shape_2.setTransform(15.1,-61.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgtAxQgagSgCgaQgBgXASgVQASgVAagHQAbgIAYAOIAEADQAcASACAdQADAagTAZQgTAZgcAFIgKABQgXAAgWgWg");
	this.shape_3.setTransform(3.7,-72.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EADFC3").s().p("AjREqQhWh8AAiuQAAiuBWh7QBXh7B6AAQB+AABTBvQBXB2AAC/QAACuhXB8QhXB7h6AAQh6AAhXh7g");
	this.shape_4.setTransform(-0.2,-43.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BeaverEyePop, rect = new cjs.Rectangle(-31.5,-87.5,63,87.5), [rect]);


(lib.BeaverEye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgqBIQgRgeAAgqQAAgpARgeQASgdAYAAQAZAAASAdQARAeAAApQAAAqgRAeQgSAdgZAAQgYAAgSgdg");
	this.shape.setTransform(-14.1,-39.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4C").s().p("AhPGoQhXgkhDhdQgkg0gFgkIgCgFQgihPgEhqQgDhYAdhcQAehhA4hFQCGilDABYQCfBJAaDpQAXDHhKCwIgFAKIgBADQgRAggkAfQgeAZgkATQhRAqhAAAQgkAAgfgNgAgql8QhaAVg8BEQhFBPgOB5QgLBjAaB2QAKAqAPAyQAUAtAbAfQAlAsAVATQAlAgAlAIQBRARBng9QA4ggAYgnIALgTIAIgWQAVg7AGgkQAVhsgIhmQgTjfh4hGQg0geg7AAQgcAAgfAHg");
	this.shape_1.setTransform(0,-43.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguAAQAAgTAMgNQANgQAVABQAWgBANAQQAMANAAATQAAAwgvABQgugBAAgwg");
	this.shape_2.setTransform(15.1,-61.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgtAxQgagSgCgaQgBgXASgVQASgVAagHQAbgIAYAOIAEADQAcASACAdQADAagTAZQgTAZgcAFIgKABQgXAAgWgWg");
	this.shape_3.setTransform(3.7,-72.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EADFC3").s().p("AjREqQhWh8AAiuQAAiuBWh7QBXh7B6AAQB+AABTBvQBXB2AAC/QAACuhXB8QhXB7h6AAQh6AAhXh7g");
	this.shape_4.setTransform(-0.2,-43.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BeaverEye, rect = new cjs.Rectangle(-31.5,-87.5,63,87.5), [rect]);


(lib.BeaverBody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3526").s().p("AgOIQQiUgnhshsQhyhxgUiRQgNheAXhuQANiGBFiBQAxhaBEgyQBNg4BeABQCaACBzCLQBgBzApCpQAdB2gCBsQgCB7grBkQgyB0hmA2QhCAjhKAAQgqAAgsgMgAh5nZQhCAbg1BJQgrA6gfBRQg5CYADCRQAAAGgFACQACBBAUA5QAwCDCLBeQCRBiCFgXQB0gVBBhtQA3hdAGiCQAFh7gchzQgeh8hAhhQhAhihbgtQg5gdg5AAQgtAAguASg");
	this.shape.setTransform(-21.1,-147);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#752C44").s().p("ABrIBQg+gpgrg/Qgjg2gdhPQg7ilgLidQgMikAnh5QA1ilCKgUQAHgBADAHQAEAHgHADQh7A2gtCOQgiBuANCgQAiGEC9B/QAPAKgKARQgGAJgIAAQgFAAgGgEg");
	this.shape_1.setTransform(-20.7,-145.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E54875").s().p("ADNINQgmgLgjgXQiQgGhtiTQhfiAgVidQgLhSAYhgQAVhWAshSQAwhXA8g5QBKhIBRgJIACgCQAMgIANAFQAMAEAHAMIAMgCQAPAAACAPQACAPgOADIgRAHQgHALgMADIgCAAQgeAbgTA6QgJAbgPBCQgTBXACB4QACCmAUBhQAfCaBTBNQAJAJADAMQATAQAVALQAVANgKAXQgIASgPAAIgKgBg");
	this.shape_2.setTransform(-35.7,-146);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3526").s().p("AhaAJQgogPAPgKQAOgJAiAIQAtAKAugEQAjgCAugKIALgDQAOgDghAZQgiAXgNADQgYAFgZAAQgtAAgugSg");
	this.shape_3.setTransform(-20.9,-14.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3526").s().p("AAvAYQgWgIgMgKQgNgLgdALQgcAKgEgEQgHgIANgKQANgLAWgFQA4gNAWAmIABABQAMAWgOAAQgEAAgGgCg");
	this.shape_4.setTransform(-64.8,-190.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3526").s().p("Ag/AiQgKgOAPgUQANgSAbgNQAagOAXACQAaACAJAVIABACQAGAPgegCQghgFgEABQgXAIgUAgQgHAMgFABIgBABQgFAAgIgLgABAgaIACAGIgCgGg");
	this.shape_5.setTransform(33.9,-192.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3526").s().p("AhxIGQgNgQAIgPQAQgfAWgcQBDhaAcg7QBNiZAXipQAdjVhBhzQgTghgcgYQgegaghgJQgSgFgyAJQgsAHgWgNQgigVBGgWQA9gTAaABQAiABAjATQAhARAYAbQBQBbALChIABANIAAAEIABAWQAFC0g8C5QhJDhiFBmQgHAGgHAAQgIAAgHgJg");
	this.shape_6.setTransform(68.3,-78.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3526").s().p("AigRFQhzgKhigjQgYgJgtAbQguAbghgLQi1g+ggk5QgLhsAGiVIAMjVQAOknAsjeQAZiAAihqQg+gkgWhSQgVhRAQhgQAPhaAqhOQAzheBPgGQBAgFBmA1QAiASA8gdQBXgrAPgDQBlgXBpAcQAKACBRApQBCAhATgHQAcgMA4gZQAxgWAmgIQBUgSBIA3QBBAwAmBdQAlBZgDBcQgEBhgwA7QggAog0ATQAYBCAQAzQAlB2AYB6QAVBlARCGIAZDtIACASQAMB3ADBIQAGCJgUBmQgaCDhFBXQhJBdhMgGQgngDgegeQgUgUgKABQgSAHgUAGQi6A7jKAAQg7AAg7gEgAlbP2QA+AXAHABQBRAOBiAAQBOgBBlgKQDMgVCRhKQAkgXAcgPQA3gdgGAWQgSA+hZAqQBVBTBWiPQAegzAZhGQAUg7AFgkIACgMQAQiJgQi4QgFg3gmkVQgslGhkj+QhqkQisiXQjgjFjvCDQhyA+hVCNQg/Bpg0CfQhbEbgdFbQgOCygDCEQgECqANCLQAIBZAQA6QAWBTAqAyQAeAkAvARQA6AVAXgsQiDhZAigUQACgBA4AoQA7AsAIADIADgBQAMAAAuARgAEsvqQggAOgYABQBkBNBQB7QBCBnA3CLQBQgfAVhaQARhLgahbQghh2hBg1QhJg7hmAhIAAAAIgFACIgLADIAEgBQgEABgCABQgCABgBAAQAAAAABAAQABgBADgBIgwAWgAphu/IgFAIQg0BegHBuQgJCLBVA2QAviIA3hiQBFh7BYhNQgggGgxgSQgxgSgTgEQgKgCgIAAQg8AAgsBNgAFcwAIAAAAg");
	this.shape_7.setTransform(-11.8,-109.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9FA355").s().p("AAcBSQgXgBgXgZQgXgFgfg+QgghAAaAJQAlANAuAAQA9AAAZgcIghB7QgCAogaAAIgCAAg");
	this.shape_8.setTransform(-72.5,-172.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9FA355").s().p("AhCAGIgwhwQBJA8A+ABQAxAAAtgjIgWBVQggBYguANIgGABQgaAAgxhlg");
	this.shape_9.setTransform(44.3,-174.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B0BA5F").s().p("ABQEQQgegMgWhQQgdhqgCgFQgXgrgfgpQgQgXgug4Qg2ghgagXQgxgtBVgSICIg9QCrAjA2CmQAVBBgCBGQgBBAgTAsQgOAjghAjQggAjgZAAQgHAAgGgDg");
	this.shape_10.setTransform(33.6,-189.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B0BA5F").s().p("AiBDrQgQghgKgLQgxgwAZiPQAWh7AqhFQBRiEDfCDQg6Ach0DWQg4BsgvBmIgGAAQgUAAgPgYg");
	this.shape_11.setTransform(-62.3,-189.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#727D3D").s().p("AhVFTQiKgFhlgWQgngUgVgHQgmgLgPAZQgkA7hVgyQhKgqgbg0QgSg3gRhQQghifAJh8QCRBxDFArQC4AoDNgaQDGgYC4hQQC4hRCGh4QAcEzhKC0QglBbgrAdQgOAigyAJQgwAJgfgUQgSgMgIgfQgEgOgkASQipBPjvAAIg3gBg");
	this.shape_12.setTransform(-11.3,-36.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7E9140").s().p("Am6PjQiLhJg9iXQg2iEgCjTQgBidAfkRQA3nqCHkGQCik7EYAAQB0AAB2BWQByBTBhCWQDPFAAtG1QAiFMADBOQAIDRgxB9Qg7CXibBNQirBVkzAGIgeAAQjqAAiPhLgAgiByQA/AsBLgVQBFgUAvhBQBWh0AHjTQAEhbgVhNQgXhYg0g/QgyiKiCh1QgVgSgZAFIgNgDQgZgFgbAGQgNgLgOgBQgQgCgPALQhWA9gYCSQgNBRAFCkQAGCxAUBcQAhCdBYBLQAWATAZgFIASAOg");
	this.shape_13.setTransform(-12.2,-109.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4B4F29").s().p("AijFJQhCiJAAjAQAAi/BCiJQBBiIBdAAQBzAABABeQBTB7goD3QgkDagtBuQg5CJhUAAQhdAAhBiIg");
	this.shape_14.setTransform(59.5,-81.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BeaverBody, rect = new cjs.Rectangle(-86,-219.5,172.1,219.5), [rect]);


(lib.Tips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{tipShoot:0,tipSlide:8,tipJump:18});

	// timeline functions:
	this.frame_7 = function() {
		this.gotoAndPlay("tipShoot");
	}
	this.frame_17 = function() {
		this.gotoAndPlay("tipSlide");
	}
	this.frame_26 = function() {
		this.gotoAndPlay("tipJump");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(10).call(this.frame_17).wait(9).call(this.frame_26).wait(1));

	// Shoot
	this.instance = new lib.Shoot();
	this.instance.parent = this;
	this.instance.setTransform(0.2,-55.4,0.921,1.08,0,0,0,0,-56.2);
	this.instance.cache(-52,-114,105,117);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.98,scaleY:1,y:-70.9},4).to({scaleX:0.92,scaleY:1.08,y:-55.4},3).to({_off:true},1).wait(19));

	// Slide
	this.instance_1 = new lib.Slide();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.9,-52.2,0.901,1.071,0,0,0,0,-56.2);
	this.instance_1._off = true;
	this.instance_1.cache(-52,-114,105,116);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({scaleX:1.06,scaleY:0.88,y:-67.2},5).to({scaleX:0.9,scaleY:1.07,y:-52.2},4).to({_off:true},1).wait(9));

	// Jump
	this.instance_2 = new lib.Jump();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-3.2,-63.9,1,1,0,0,0,-0.1,-57.5);
	this.instance_2._off = true;
	this.instance_2.cache(-52,-117,105,119);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({scaleX:0.88,scaleY:1.05,y:-78.9},3).to({scaleX:1,scaleY:1,y:-63.9},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.4,-116.1,93.1,121.5);
p.frameBounds = [rect, new cjs.Rectangle(-47,-118.8,94.6,119.2), new cjs.Rectangle(-47.8,-121.5,96.1,117), new cjs.Rectangle(-48.6,-124.3,97.6,114.7), new cjs.Rectangle(-49.4,-127.1,99.1,112.5), new cjs.Rectangle(-48.4,-123.5,97.1,115.5), new cjs.Rectangle(-47.3,-119.8,95.1,118.5), new cjs.Rectangle(-46.4,-116.1,93.1,121.5), new cjs.Rectangle(-42.6,-112.4,91.1,120.4), new cjs.Rectangle(-44.1,-113.2,94.3,116), new cjs.Rectangle(-45.8,-113.9,97.4,111.6), new cjs.Rectangle(-47.3,-114.7,100.7,107.2), new cjs.Rectangle(-49,-115.6,103.9,102.8), new cjs.Rectangle(-50.6,-116.4,107.1,98.4), new cjs.Rectangle(-48.7,-115.4,103.1,103.9), new cjs.Rectangle(-46.6,-114.3,99.1,109.4), new cjs.Rectangle(-44.6,-113.4,95.1,114.9), new cjs.Rectangle(-42.6,-112.4,91.1,120.4), new cjs.Rectangle(-53.4,-121.3,100.4,115), new cjs.Rectangle(-51.3,-127.3,96.5,117), new cjs.Rectangle(-49.3,-133.3,92.5,119), new cjs.Rectangle(-47.4,-139.4,88.4,121), new cjs.Rectangle(-48.5,-135.7,90.9,119.8), new cjs.Rectangle(-49.7,-132.1,93.3,118.6), new cjs.Rectangle(-50.9,-128.5,95.7,117.4), new cjs.Rectangle(-52.1,-125,98.1,116.2), new cjs.Rectangle(-53.4,-121.3,100.4,115)];


(lib.MenuBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BGMidDeco("single",3);
	this.instance.parent = this;
	this.instance.setTransform(22.9,270.4,1,1,0,0,0,0,-18.4);

	this.instance_1 = new lib.BGFrontDeco("single",1);
	this.instance_1.parent = this;
	this.instance_1.setTransform(696.8,514.9,1.166,1.166,0,0,0,0,-17.4);

	this.instance_2 = new lib.BGCloud("single",2);
	this.instance_2.parent = this;
	this.instance_2.setTransform(475.9,8.9,1,1,0,0,0,0,-38.2);

	this.instance_3 = new lib.BGMidDeco("single",1);
	this.instance_3.parent = this;
	this.instance_3.setTransform(754.8,262.4,1,1,0,0,0,0,-18.4);

	this.instance_4 = new lib.BGMidDeco("single",2);
	this.instance_4.parent = this;
	this.instance_4.setTransform(191.9,250.4,1,1,0,0,0,0,-18.4);

	this.instance_5 = new lib.BGFrontDeco("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(305.9,473.9,1.166,1.166,0,0,0,0,-17.4);

	this.instance_6 = new lib.BGMidDeco("single",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(529.8,319.4,1,1,0,0,0,0,-18.4);

	this.instance_7 = new lib.BGMid("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,303.9,1,1,0,0,0,0,-80.7);

	this.instance_8 = new lib.BGBuilding("single",2);
	this.instance_8.parent = this;
	this.instance_8.setTransform(670.4,140.8,1,1,0,0,0,-6.3,-126.5);

	this.instance_9 = new lib.BGCloud("single",1);
	this.instance_9.parent = this;
	this.instance_9.setTransform(642.9,151.9,1,1,0,0,0,0,-38.2);

	this.bgGround = new lib.BGFront();
	this.bgGround.name = "bgGround";
	this.bgGround.parent = this;
	this.bgGround.setTransform(403.2,466.2,1,1,0,0,0,0,-86.4);

	this.instance_10 = new lib.BGCloud("single",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(155,127.9,1,1,0,0,0,0,-38.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.bgGround},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MenuBG, rect = new cjs.Rectangle(-12.1,0,821.8,552.6), [rect]);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
		var bounds = this.frameBounds[this.currentFrame];
		this.cache(bounds.x, bounds.y, bounds.width, bounds.height);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// logowords
	this.instance = new lib.logowords();
	this.instance.parent = this;
	this.instance.setTransform(141.9,298.9,0.072,0.072,0,0,0,142.3,-83.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-83.2,scaleX:1,scaleY:1,x:142.9,y:231.9},9,cjs.Ease.get(1)).wait(21));

	// logohand
	this.instance_1 = new lib.logohand();
	this.instance_1.parent = this;
	this.instance_1.setTransform(117.5,214,1,1,-84.2,0,0,49.5,-10.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(6).to({regX:49.4,rotation:0,x:72.6,y:120.5},14,cjs.Ease.get(1)).wait(1));

	// logohead
	this.instance_2 = new lib.logohead();
	this.instance_2.parent = this;
	this.instance_2.setTransform(180.4,230.3,1,1,-52.7,0,0,87.5,-6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({rotation:0,x:183.5,y:126.3},15,cjs.Ease.get(1)).wait(6));

	// logobody
	this.instance_3 = new lib.logobody();
	this.instance_3.parent = this;
	this.instance_3.setTransform(163.5,214.2,1,1,-49.2,0,0,46.1,-34.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({regX:46.2,regY:-34.4,rotation:0,x:181.5,y:147.1},15,cjs.Ease.get(1)).wait(6));

	// logoarm
	this.instance_4 = new lib.logoarm();
	this.instance_4.parent = this;
	this.instance_4.setTransform(144.8,144.4,1,1,-84.2,0,0,92.6,-15.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(6).to({regX:92.7,regY:-15.2,rotation:0,x:144.7,y:140.7},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(131.6,292.9,20.6,12);
p.frameBounds = [rect, new cjs.Rectangle(104.1,262.7,76,44.5), new cjs.Rectangle(79.9,236,124.9,73.1), new cjs.Rectangle(58.8,213,167.3,97.8), new cjs.Rectangle(41,193.4,203.2,118.7), new cjs.Rectangle(26.5,177.4,232.5,135.9), new cjs.Rectangle(15.2,165,255.3,149.3), new cjs.Rectangle(7.1,156.1,271.6,158.8), new cjs.Rectangle(2.2,150.8,281.4,164.5), new cjs.Rectangle(0.6,92.2,284.7,222.9), new cjs.Rectangle(0.6,96.3,284.7,218.8), new cjs.Rectangle(0.6,80.9,284.7,234.2), new cjs.Rectangle(0.6,66.7,284.7,248.4), new cjs.Rectangle(0.6,54.6,284.7,260.5), new cjs.Rectangle(0.6,44.2,284.7,270.9), new cjs.Rectangle(0.6,35.6,284.7,279.5), new cjs.Rectangle(0.6,28.2,284.7,286.9), new cjs.Rectangle(0.6,21.6,284.7,293.5), new cjs.Rectangle(0.6,16,284.7,299.1), new cjs.Rectangle(0.6,11.3,284.7,303.8), new cjs.Rectangle(0.6,7.4,284.7,307.7), new cjs.Rectangle(0.6,4.3,284.7,310.8), new cjs.Rectangle(0.6,2,284.7,313.1), new cjs.Rectangle(0.6,0.7,284.7,314.4), rect=new cjs.Rectangle(0.6,0.2,284.7,314.9), rect, rect, rect, rect, rect];


(lib.EnemyBeaver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{enemy0Idle:0,enemy0Death:24});

	// timeline functions:
	this.frame_23 = function() {
		this.gotoAndPlay("enemy0Idle");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(15));

	// beavernose
	this.instance = new lib.BeaverNose();
	this.instance.parent = this;
	this.instance.setTransform(-23.8,-76.1,1,1,0,0,0,-0.1,-15.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({regY:-15.6,rotation:21,x:-20,y:-89.3},2).to({regX:-0.2,rotation:137.2,x:75.9,y:-50.3},5).to({rotation:148.2,x:96.8,y:-46.2},4).wait(3));

	// tooth1
	this.instance_1 = new lib.BeaverTooth1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8.6,-69.2,1,1,0,0,0,-2,-45.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({rotation:18.9,x:-7.7,y:-79.3},2).to({rotation:74.4,x:58.3,y:8.7},5).to({rotation:78.4,x:73.3,y:9.7},4).wait(3));

	// tooth2
	this.instance_2 = new lib.BeaverTooth2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-39.3,-65,1,1,0,0,0,-1,-37.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({regY:-37.6,rotation:14,x:-39.9,y:-85.8},2).to({regY:-37.7,rotation:84.6,x:11.1,y:-2.8},5).to({regY:-37.8,rotation:91.6,x:22.2,y:-1.8},4).wait(3));

	// beavereye
	this.instance_3 = new lib.BeaverEyePop();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-18.8,-159.9,1,1,0,0,0,0,-43.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).wait(1).to({regX:-0.1,regY:-43.7,rotation:8.5,x:-6.8,y:-156.8},0).to({_off:true},1).wait(12));

	// beaverbody
	this.instance_4 = new lib.BeaverBody();
	this.instance_4.parent = this;
	this.instance_4.setTransform(38.5,-7,1,1,0,0,0,37,-5.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({_off:false},0).to({regX:36.9,regY:-5.8,scaleY:1.05,skewX:14.7,skewY:8.7,x:42.4,y:-11.1},3).to({regX:37.9,regY:-5.7,scaleY:0.94,skewX:-4,skewY:0,x:39.4,y:-7},4).to({regX:37,scaleY:0.94,skewX:0,x:38.5},4).to({scaleX:1.02,scaleY:0.93,skewX:0.3,y:-6.9},2).wait(1));

	// beavereye
	this.instance_5 = new lib.BeaverEye();
	this.instance_5.parent = this;
	this.instance_5.setTransform(5.8,-145.7,1,1,25.6,0,0,0.1,-21.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(26).to({_off:false},0).to({regX:0,regY:-21.7,rotation:90.1,x:132.7,y:-15.6},5).to({rotation:92.4,x:149.7},4).wait(3));

	// blooddrop1 copy
	this.instance_6 = new lib.BloodDrop1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(43.5,-142,1.274,1.801,0,0,0,0,-7.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).to({x:146.5,y:-119},5).to({_off:true},1).wait(8));

	// blooddrop1 copy 2
	this.instance_7 = new lib.BloodDrop1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(43.5,-166.1,1,1.414,0,0,0,0,-7.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({_off:false},0).to({x:117.5,y:-155.2},5).to({_off:true},1).wait(8));

	// blooddrop1
	this.instance_8 = new lib.BloodDrop1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(53.5,-186.1,1,1.414,0,0,0,0,-7.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({_off:false},0).to({regX:0.1,rotation:-28.5,x:136.6,y:-208.2},5).to({_off:true},1).wait(8));

	// greenchunk3
	this.instance_9 = new lib.GreenChunk3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(19,-143.7,1,1,21,0,0,0,-15.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24).to({_off:false},0).to({regY:-16,rotation:24,x:151.3,y:-127.5},5).to({regX:0.1,rotation:-12.2,x:235.4,y:-7.5},3).to({rotation:-12.2,x:249.4,y:-6.5},3).wait(3));

	// greenchunk2
	this.instance_10 = new lib.GreenChunk2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(6.8,-186.6,1,1,-38.5,0,0,0,-28.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(24).to({_off:false},0).to({regY:-28.7,rotation:24,x:157.6,y:-212.9},5).to({regY:-28.6,rotation:63,x:271.6,y:-27.9},3).to({rotation:73.9,x:282.6},3).wait(3));

	// greenchunk1
	this.instance_11 = new lib.GreenChunk1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-35.5,-141.8,1,1,-132.6,0,0,0,-22.7);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(24).to({_off:false},0).to({rotation:24,x:217.9,y:-129},5).to({regX:0.1,rotation:99.4,x:342.9,y:-5.9},3).to({x:355.9,y:-2.9},3).wait(3));

	// earchunk
	this.instance_12 = new lib.EarChunk1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-44.8,-149.9,1,1,21,0,0,0,-17.4);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(24).to({_off:false},0).to({rotation:24,x:208.3,y:-196.8},5).to({regX:-0.1,rotation:104,x:372.4,y:-27.8},3).to({x:387.4},3).wait(3));

	// pinkchunk3
	this.instance_13 = new lib.PinkChunk3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-30,-196.5,1,1,21,0,0,0,-24.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(24).to({_off:false},0).to({regX:0.1,regY:-24.2,rotation:24,x:103.4,y:-184.9},5).to({rotation:77,x:211.4,y:-27.8},3).to({x:238.4},3).wait(3));

	// pinkchunk2
	this.instance_14 = new lib.PinkChunk();
	this.instance_14.parent = this;
	this.instance_14.setTransform(17.9,-157.9,1,1,21,0,0,0,-10.7);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(24).to({_off:false},0).to({regX:-0.1,rotation:24,x:142.4,y:-75.9},5).to({x:180.4,y:-19.9},3).to({x:191.4},3).wait(3));

	// pinkchunk1
	this.instance_15 = new lib.PinkChunk1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-22.1,-168.9,1,1,21,0,0,0,-16.4);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(24).to({_off:false},0).to({regX:-0.1,rotation:24,x:192.6,y:-171.5},5).to({rotation:59.9,x:309.6,y:-16.5},3).to({x:320.6},3).wait(3));

	// bloodsplat1
	this.instance_16 = new lib.BloodSplat1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(52.8,-176.6,0.213,0.483,0,0,0,0,-19.4);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(24).to({_off:false},0).to({scaleX:1.19,scaleY:1.16,x:146.7,y:-160.7},2).to({scaleX:1.75,scaleY:1.26,x:257.7,y:-25.6},3).to({scaleX:1.81,scaleY:1.41,y:-23.6},1).to({regY:-19.3,scaleX:1.98,scaleY:1.84,x:257.6,y:-17.6},3).to({regY:-19.4,scaleX:2.1,scaleY:2.14,x:257.7,y:-13.7},2).wait(3));

	// EnemyBeaverFace
	this.instance_17 = new lib.EnemyBeaverFace();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-27.6,-98.4,1,1,0,0,0,-4,-76.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({scaleX:1.21,scaleY:0.82,x:-31.3,y:-90.5},4).to({regY:-76.1,scaleX:1.06,scaleY:0.96,rotation:-7.7,x:-44.8,y:-103.2},4).to({regY:-76.2,scaleX:1.21,scaleY:0.82,rotation:0,x:-32.3,y:-88.5},4).to({regX:-3.9,scaleX:1.04,scaleY:1.05,rotation:4.2,x:-10.1,y:-115.6},4).to({regX:-4,scaleX:1.21,scaleY:0.82,rotation:0,x:-32.3,y:-85.5},4).to({scaleX:1,scaleY:1,x:-27.6,y:-98.4},3).to({_off:true},1).wait(14));

	// EnemyBeaverBody
	this.instance_18 = new lib.EnemyBeaverBody();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-14,-3.8,1,1,0,0,0,-14,-3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({scaleX:1.17,scaleY:0.86,x:-16.3,y:-3.2},4).to({regY:-3.7,scaleX:1.02,scaleY:1,skewX:-5.4,skewY:-7.7,x:-14.8,y:-8.8},4).to({regY:-3.8,scaleX:1.17,scaleY:0.86,skewX:0,skewY:0,x:-16.3,y:-3.2},4).to({scaleX:1.01,scaleY:1.1,skewX:5.5,skewY:7.2,x:-16,y:-6.9},4).to({scaleX:1.17,scaleY:0.86,skewX:0,skewY:0,x:-16.3,y:-3.2},4).to({scaleX:1,scaleY:1,x:-14,y:-3.8},3).to({_off:true},1).wait(14));

	// Shadow
	this.instance_19 = new lib.Shadow();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-11.4,-7,1.09,1,0,0,0,78,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(24).to({scaleX:0.93,x:1.1},3).to({scaleX:1.09,x:-11.4},4).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.4,-219.5,182.5,230);
p.frameBounds = [rect, new cjs.Rectangle(-96.4,-211.7,186.1,222.2), new cjs.Rectangle(-96.4,-203.9,189.8,214.4), new cjs.Rectangle(-96.9,-196.2,193.9,206.7), new cjs.Rectangle(-100.5,-188.4,201.1,198.9), new cjs.Rectangle(-98.5,-197.9,193.9,208.4), new cjs.Rectangle(-97.6,-208.6,187.6,219.1), new cjs.Rectangle(-99.3,-218.9,183.2,229.4), new cjs.Rectangle(-107.7,-234.2,191.7,244.7), new cjs.Rectangle(-99.3,-219,183.2,229.5), new cjs.Rectangle(-97.7,-208.6,187.6,219.1), new cjs.Rectangle(-98.5,-198,193.9,208.5), new cjs.Rectangle(-100.5,-188.4,201.1,198.9), new cjs.Rectangle(-96.5,-202.3,194.9,212.8), new cjs.Rectangle(-96.4,-217,192.9,227.5), new cjs.Rectangle(-96.4,-231.8,191.4,242.3), new cjs.Rectangle(-96.4,-251.3,193.6,261.8), new cjs.Rectangle(-96.4,-231.8,191.4,242.3), new cjs.Rectangle(-96.4,-217,192.8,227.5), new cjs.Rectangle(-96.4,-202.3,194.9,212.8), new cjs.Rectangle(-100.5,-188.4,201.1,198.9), new cjs.Rectangle(-96.4,-198.8,192.2,209.3), new cjs.Rectangle(-96.4,-209.1,187.3,219.6), new cjs.Rectangle(-96.4,-219.5,182.5,230), new cjs.Rectangle(-96.4,-225,184,235.5), new cjs.Rectangle(-88.1,-227.6,238.2,238.1), new cjs.Rectangle(-79.7,-235.1,311.7,245.6), new cjs.Rectangle(-80.6,-246.4,363,256.9), new cjs.Rectangle(-77.6,-235.5,410.3,246), new cjs.Rectangle(-83.9,-247.5,467,259), new cjs.Rectangle(-90.1,-216.1,477.4,242), new cjs.Rectangle(-98.6,-206.8,490,252.5), new cjs.Rectangle(-96.4,-207.4,492,247.1), new cjs.Rectangle(-96.4,-207.9,496.2,247.3), new cjs.Rectangle(-96.4,-208.4,500.4,247.8), new cjs.Rectangle(-96.4,-208.8,504.7,252.7), new cjs.Rectangle(-96.4,-206.8,504.7,250.7), new cjs.Rectangle(-96.4,-204.7,504.7,248.6)];


(lib.Spike3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Spike3Anim();
	this.instance.parent = this;
	this.instance.setTransform(-6.5,-1.9,1,1,0,0,0,-6.5,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.91,rotation:2,y:-1.8},4).to({scaleY:1,rotation:0,y:-1.9},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.2,-72.7,24.4,72.7);
p.frameBounds = [rect, new cjs.Rectangle(-12.1,-71,24.6,71), new cjs.Rectangle(-12.1,-69.2,24.9,69.2), new cjs.Rectangle(-12,-67.5,25.2,67.4), new cjs.Rectangle(-12.2,-66.3,26.7,66.8), new cjs.Rectangle(-12,-67,25.3,67), new cjs.Rectangle(-12,-68.5,25,68.5), new cjs.Rectangle(-12,-69.9,24.9,69.9), new cjs.Rectangle(-12.1,-71.2,24.6,71.3), new cjs.Rectangle(-12.2,-72.7,24.4,72.7)];


(lib.Spike2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Spike2Anim();
	this.instance.parent = this;
	this.instance.setTransform(5.5,-0.8,1,1,4,0,0,5.5,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.89,scaleY:0.88,rotation:-2.2},5).to({scaleX:1,scaleY:1,rotation:4},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.8,-36.5,19.9,36.7);
p.frameBounds = [rect, new cjs.Rectangle(-7.2,-35.2,16.2,35.2), new cjs.Rectangle(-7.5,-34.2,16.2,34.2), new cjs.Rectangle(-7.6,-33.1,16.2,33.1), new cjs.Rectangle(-7.8,-32,16.2,32), new cjs.Rectangle(-8.4,-31.5,16.8,31.9), new cjs.Rectangle(-7.8,-31.9,16.2,31.9), new cjs.Rectangle(-7.7,-32.7,16.3,32.7), new cjs.Rectangle(-7.6,-33.7,16.2,33.7), new cjs.Rectangle(-7.4,-34.6,16.1,34.5), new cjs.Rectangle(-7.2,-35.5,16.1,35.4), new cjs.Rectangle(-8.8,-36.5,19.9,36.7)];


(lib.Spike1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SpikeAnim();
	this.instance.parent = this;
	this.instance.setTransform(3.5,-0.8,1,1,0,0,0,3.5,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.96,scaleY:0.89,rotation:-2.5},4).to({scaleX:1,scaleY:1,rotation:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.2,-54.5,16.5,54.5);
p.frameBounds = [rect, new cjs.Rectangle(-8.4,-52.9,16.6,52.9), new cjs.Rectangle(-8.6,-51.3,16.7,51.4), new cjs.Rectangle(-9,-49.7,16.9,49.7), new cjs.Rectangle(-9.8,-48.6,17.9,49.1), new cjs.Rectangle(-9,-49.6,17,49.7), new cjs.Rectangle(-8.7,-51.3,16.8,51.4), new cjs.Rectangle(-8.4,-52.8,16.6,52.9), new cjs.Rectangle(-8.2,-54.5,16.5,54.5)];


(lib.MooseTween = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Moose
	this.instance = new lib.MooseToothShine("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(30.9,24.8,1,1,0,0,0,0,-3.5);

	this.instance_1 = new lib.MooseToothShine("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7.1,23.7,1,1,0,0,0,0,-3.5);

	this.instance_2 = new lib.MooseToothShine("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-41.1,22.4,1,1,0,0,0,0,-3.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#49473C").s().p("AGFCDQgwAAg6geQhAgggbgsIgIAVQgIASgQANQgxAoh7gEQhDgFgugnQgcgYgKgYQgUAjgtAXQgrAWgrACQgyACgqgPQgvgSgagmQgGgIgLgnQgNgsAAgXQhMgHAAgIQAAgMD5AJIEdALQBMgEDlgWQCigPBrgCIAOAAIARAAIAHAAQAIACAKAqQAMAxgHArQgUB9icAAIgTAAgAGohZQiNAEhPAOQACBeBTAuQA/AiA+gHQBmgLAig/QAagxgVhBIiDADgAiWgcQAFAbAMASQAjA9BiAGQBuAGAphAQAPgZAKhGQhRAHhKADQh4AGg5gGQACAGAEAZgAnaglQAIAgAOAUQAsBBB8gKQAngHAbgTQAigYACgiQgDgZABgVQi7gIhvgJQADAJAFAfg");
	this.shape.setTransform(-6.8,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#494729").s().p("AguAMQhpgUACgPQgBACCOACQCNACALgCIAAAAQAWgEg/AnQgSAIggAAQgoAAg7gMg");
	this.shape_1.setTransform(-2.8,45.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#494729").s().p("AHyPEQhZgJglh9QgTg+gKiJQhjAYjpgSQj1gUh8AVIAFBXQACBNgGAaQgQA8g3AbQg1Aag8gSQh2glg3iLQgphogDiUQgDjWABh5QADi4AMiWQARjDAehuQAtilBjhoQBThZB4g3QBwgzCAgPQExglDgCvQCEBYBhDmQAvBwAQBLQAwDgADEJQADEDgpEJQgRBvgvBHQg5BVhWAAIgSgBgAI5IkQADANg0ASIhFAUQguAIgMAFQgRAJAEAnQAJBYAGAfQAOBHAdAoQArA8BFgcQA9gYAjg+QAmhBAWkXQAXkjgRkNQgYlfiZjmQiPjZkXg0QkKgxjpCBQiKBMhLCKQg/BzgZCxQg4GHAXF4IAHCAQAGBOAOA1QAnCRB3AtQCBAcAViBQAHgqgHgzQgGgrgGgFQhJAEhCgNQBYgOBygLQDkgWCWASQCaASDMgpIB4gcQAegGALAAQAGAAAAABg");
	this.shape_2.setTransform(0,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1B84E").s().p("AGDCfQgHghgEhNQgFhLgIgiQiMAckRgOQkVgOgxAKQAKCJgNA5QgaBvhogQQjvgmATm5QCxAgEOAMQIdAYHYhnIgUDoQgLBwgRA8QgUBKgkAjQgmAlhCABIgCAAQhuAAgYh1g");
	this.shape_3.setTransform(-0.1,67);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EADFC3").s().p("ACHBqQhkgYgnhcQgPAvgqAiQg5AthOgQQhdgUgdgbQgkghgXhmILZgfQAgAsgHA6QgMBbiKAfQgPADgPAAQgeAAgggIg");
	this.shape_4.setTransform(13.1,21.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EADFC3").s().p("AAABfQh1gDgghVQgRgrAEg6IFDAQQAJBCgSAmQggBFhvAAIgJAAg");
	this.shape_5.setTransform(-40.3,21.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D1B84E").s().p("ADwA7QhCgWgWgiQg/BJh1ABQh3ACg+hKQgYAagvAPQgvAPgxgEQh6gHgRhdQAAADA2gJQBUgPBbgHQFKgaHUA5QAQA7gsAhQgmAbhKABIgDAAQhCAAg/gVg");
	this.shape_6.setTransform(-1.2,30.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFD659").s().p("AHdOqQg3gagZh2QgSiGgIgpQhkAQkjgRQkQgQhYAYQABAOAHA5QAFA7gGApQgUB+iCgOQhugegzh8QglhbgFiKQgJkSACilQAEl7AwiQQAsjuCuiHQCXh3DZgSQDHgRCwBIQCyBJA+CAQCyC9AeGtQAVEpg0H1QgVBjgvBAQgtA9g3AAQgZAAgbgMg");
	this.shape_7.setTransform(-0.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.1,-96.7,152.3,193.1);
p.frameBounds = [rect];


(lib.MooseEyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MooseEyes
	this.instance = new lib.MooseEye("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.4,-59.5,1,1,0,0,0,0,-49.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// MooseEyeShadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1B84E").s().p("AjFA3QkcCFhDjOQDehjHFACQCmABCEAPQB8ANAAAOQAAAngDAOQgHAegXAPQgwAgg+AJQheAOg/g7QgOAgg7AZQg5AYhKAIQglAFgfAAQh6AAg0g9g");
	this.shape.setTransform(-0.5,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.MooseEyes, rect = new cjs.Rectangle(-63.4,-108.9,127.6,104), [rect]);


(lib.MooseDeathEyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.MooseEye("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.8,-59.2,1,1,0,0,0,0,-49.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.MooseDeathEyes, rect = new cjs.Rectangle(-63,-108.7,127.6,99.1), [rect]);


(lib.MooseDeathEyeBlood = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DeadBlood();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-20.8,0.909,1.024,-176.1,0,0,-1.9,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.MooseDeathEyeBlood, rect = new cjs.Rectangle(-79.2,-48.7,157.9,56.5), [rect]);


(lib.MooseBottomDeath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.MooseToothShine("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(30.8,-71,1,1,0,0,0,0,-3.5);

	this.instance_1 = new lib.MooseToothShine("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7.2,-72.2,1,1,0,0,0,0,-3.5);

	this.instance_2 = new lib.MooseToothShine("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-41.2,-73.4,1,1,0,0,0,0,-3.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#49473C").s().p("AGFCDQgwAAg6geQhAgggbgsIgIAVQgIASgQANQgxAoh7gEQhDgFgugnQgcgYgKgYQgUAjgtAXQgrAWgrACQgyACgqgPQgvgSgagmQgGgIgLgnQgNgsAAgXQhMgHAAgIQAAgMD5AJIEdALQBMgEDlgWQCigPBrgCIAOAAIARAAIAHAAQAIACAKAqQAMAxgHArQgUB9icAAIgTAAgAGohZQiNAEhPAOQACBeBTAuQA/AiA+gHQBmgLAig/QAagxgVhBIiDADgAiWgcQAFAbAMASQAjA9BiAGQBuAGAphAQAPgZAKhGQhRAHhKADQh4AGg5gGQACAGAEAZgAnaglQAIAgAOAUQAsBBB8gKQAngHAbgTQAigYACgiQgDgZABgVQi7gIhvgJQADAJAFAfg");
	this.shape.setTransform(-6.9,-74.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#494729").s().p("AguAMQhpgUACgPQgBACCOACQCNACALgCIAAAAQAWgEg/AnQgSAIggAAQgoAAg7gMg");
	this.shape_1.setTransform(-2.9,-50.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#494729").s().p("AHyI1QhZgJglh9QgTg+gKiJQhjAYjpgSQj1gUh8AVIAFBXQACBNgGAaQgQA8g3AbQg1Aag8gSQh2glg3iLQgphogDiUQgDjVABh5QAChqAOjZQFYgDFlgBQLIgCBBAIIACADIACACQAWDeABBsQADECgpEJQgRBvgvBHQg5BVhWAAIgSgBgAI5CVQADANg0ASIhFAUQguAIgMAFQgRAJAEAnQAJBYAGAfQAOBHAdAoQArA8BFgcQA9gYAjg+QAmhBAWkXQAXkigRkOIgFhAIqogBQpZABiJAFQgaEeAREUIAHCAQAGBOAOA1QAnCRB3AtQCBAcAViBQAHgqgHgzQgGgrgGgFQhJAEhCgNQBYgOBygLQDkgWCWASQCaASDMgpIB4gcQAegGALAAQAGAAAAABg");
	this.shape_2.setTransform(-0.1,-56.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1B84E").s().p("AGDCfQgHghgEhNQgFhLgIgiQiMAckRgOQkVgOgxAKQAKCJgNA5QgaBvhogQQjvgmATm5QCxAgEOAMQIdAYHYhnIgUDoQgLBwgRA8QgUBKgkAjQgmAlhCABIgCAAQhuAAgYh1g");
	this.shape_3.setTransform(-0.2,-28.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EADFC3").s().p("ACHBqQhkgYgnhcQgPAvgqAiQg5AthOgQQhdgUgdgbQgkghgXhmILZgfQAgAsgHA6QgMBbiKAfQgPADgPAAQgeAAgggIg");
	this.shape_4.setTransform(13,-74.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EADFC3").s().p("AAABfQh1gDgghVQgRgrAEg6IFDAQQAJBCgSAmQggBFhvAAIgJAAg");
	this.shape_5.setTransform(-40.4,-74.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D1B84E").s().p("ADwA7QhCgWgWgiQg/BJh1ABQh3ACg+hKQgYAagvAPQgvAPgxgEQh6gHgRhdQAAADA2gJQBUgPBbgHQFKgaHUA5QAQA7gsAhQgmAbhKABIgDAAQhCAAg/gVg");
	this.shape_6.setTransform(-1.3,-65.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFD659").s().p("AHdIdQg3gagZh2QgSiFgIgqQhkAQkjgRQkQgPhYAYQABAOAHA5QAFA7gGAoQgUB+iCgNQhugegzh9QglhbgFiJQgJkRACimQABiJAIhrIWlABQAEAoADArQAVEqg0H0QgVBkgvBAQgtA9g3AAQgZAAgbgNg");
	this.shape_7.setTransform(-0.5,-56.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MooseBottomDeath, rect = new cjs.Rectangle(-76.2,-112.7,152.3,113.3), [rect]);


(lib.LegsJump = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// jumplegs
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AIILKQgTg2Afg/QAdg4BRhwQBMhqAeg/IAXgyQANghgBgUQgBgjg7gzQhKhCh1gfQgRARgtAZQhIAqhdAdQkcBYl5g4IADAjQABAngJAqQgdCCh0B2QhJBFhRAxQhZA2hZAXQhWAXhNACQhiADg/giQg7gfgGhNQgHhPA4gmQAPgJAbABIArAFQA8AEBAgNQBogWArg/QAiglAMgnQAQgvgUgnQgPgdgZgfQgRgUghghQhthehbkDQg+ixgPhpQgVgiBZgfQAOgFBigYQAegIB2goQBbgeA7gKQCngbDDARQCtAPC4AxQDKA1CVAyIBnAkQBAAXAnALQANgBALAIIAJADIgBAGIABACIAEAGQAQAgAJBJQAAAEC8BtQDPB+BSBVQAjAfATAcQAYAiAEAlQAHBHg4BaQhfCbibCoQiTCginArQgSAFgOAAQgvAAgQgugAJdjbQAKAEAAALQAEA+grA+IBkAwQBmA3AjAxQAYAjAGAfQAGAhgPAnQgOAmhPB9Qg/BmgoA4QgnA4gJARQgbAyAKAiQAJAdCuhZQCKhnCFi2QBsiUARg/QANgwgXgtQgNgYgugzQhHhRjOh8QithogfgHQgIgCAAgKQAAgJAIgCIgGgmQgDgWgEgPIgBgBQgUgNh3gsQiZg4ihgrQnqiDlEA5QhhARjDBCQACAEAAADQgCCUA6CsQAqB+AhAtQAZAjA+AsQBDAuAXAcQAyA5AABcQAABfhCBaQg+BUhcAwQhTAkiBACQhiACgXgIQgBAkAUAUQATASApAHQBYAOBRgOQBYgPBXgrQBUgqBHg9QBMhCArhLQAxhXgBhZQgBhYg2hIQgrg6hVg6QgKgHACgOQADgOAOACQArAGAdAUQB8BaAfBqQK4B0DLkpQAIgMARgpQAOgiAPgPQAGgFAFAAQAEAAADACgAxrHtQgbAEgFASQANAEAYADQAZADAMADQAtACBigTQBwgWAjgcQBjhKAqhpQAzh+hShVQgWgYg4gjQg2gigXgYQgbgeg2h/Qg3h/gHg1QgSh5ABhTQhNAcgCADQAIA1AOA6QAOA9ARAuQA0CNAaA5QBACJA9AjQA6A5AYAhQApA6gBA2QgCBCgrA+QgnA3g+AlQhTAlh/AAQg3AAgPACg");
	this.shape.setTransform(132.9,75.8,1.002,1.002);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AABEFQpchAjGh9QhQgzAEgzQAEgwBFgkQC+hkCWgjQD5g8EUA5QBpAWDPApQCtAkBjAgQEIBTgjB9QACARgNAYQgYAvhCAiQiMBIkeAAQiZAAjBgUg");
	this.shape_1.setTransform(107.9,30.4,1.002,1.002);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AkbBuQg0gkgFgkQgGghAfgaQAcgZAwgMQAxgMAvAIQBRANBCgnQAdgRArgsIAXAeQAeAkAfAYQBiBJBUg6QioB7imAwQhQAXhBAAQhWAAg8gog");
	this.shape_2.setTransform(43.6,128.4,1.002,1.002);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AjnDHQgngbA6h1QA3htB4iXIASAVQAYAZAeAQQBhA0B0g2QihC4iPBiQhkBFgxAAQgQAAgKgHg");
	this.shape_3.setTransform(212.8,128,1.002,1.002);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C4C4C").s().p("AIaLKQgegZBIhpQBmiWA7hpQBTiXgSgoQgYg3huhBQh3hGg5AiQiTBXi1AwQk3BRkFhgQgCDNhmCKQilDfmRAOQg8gEghggQgdgbgCgoQgCgmAWgbQAXgeAkAAQCCAABcgmQCTg9AFiTQAChIgqgqQg+gvgngmQikiag+mxQBSggCVhGQCLg5CQgMQGLggMjEUQAGA8AOBDIBbAxQBuA9BbA8QEjC8gEBlQgEB1jIDhQhVBghUBFQhZBIg2APQhHASglAAQgbAAgKgJg");
	this.shape_4.setTransform(133.4,74.2,1.002,1.002);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// jumpfeet
	this.instance = new lib.Foot();
	this.instance.parent = this;
	this.instance.setTransform(193.2,139.6,2.224,2.654,22.3,0,0,-6,-11.5);

	this.instance_1 = new lib.Foot();
	this.instance_1.parent = this;
	this.instance_1.setTransform(14.3,129.7,2.654,2.654,49.7,0,0,-6,-11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.5,-0.4,275.6,186.7);
p.frameBounds = [rect];


(lib.HeroLegs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AsOPSQgSABgBhkQgBg+AIi1QARmlgTiXQgHhng1lhIhCmoQgVgiBZgfQAOgFBjgZQAcgHB3goQBbgeA7gKQCogcDDARQCsAPC4AxQDKA2CVAxIB2AqQBIAZAvAMQAtAMAJBGQAFAmgCBLQAGB5gBC7IAAAcQAEC4gFCJQgHC8gbChQgIAygNBqQgNBegVA6IgoCAQgmBggfghQghAbgrAFQgtAFgjgVQgiAegPgxQgKghACgrQACg9AQhlQASh5AEgoQAMiAAAjTQAAkAADhTQiCAilugEQl/gFhcgyQgDBigSDbQgQDPgDBvQgECggnCIIgYBbQgTA6ggARQgvA9g7AUQgUAGgSAAQgtAAgggmgArQr/QAdAJAKBBQAGAjAEA9IAPBvQAIA/ACAxQAFCXAbE8QAEAygLC1IgQDfQgEA/gFCTQgJCBghBKQB0gvAli7QANg/AGhfIAIiLQAPi8AGikQAFhvAAhRQgDgrABgcQACg1AXgKQC1A7DkAOQCuALD1gOQBbgGBcgjQApgQB6g9QA5gcARgFQAngLgvA1QgnAshaAmQADCkgJDVQgRGrg5EDQAFBAA6gGQA2gGAbgvQAyhUAXiMQAWiFAcloQAbljgChmQgChMgMiWQgKiHgDgLQnqj1oegHQjigDiwArQipAqhIBIQAXBPAOCKQARCyAHArQAPBcAMCFIATDgQALBmgCCIQgBBPgGCeQgBAZgSCxQgLCnAjAGQARglAQifQALhuAEhiIAPjlQALizgFgtQgUi1gPkjQgGhogZiVQgOgwgHgjQgKg6AXAAIAJABg");
	this.shape.setTransform(72.8,37.3,0.359,0.359);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Ag5EKQgdAAgagOQgXgMgFgLQgHgRAFiNQAEhfAOjyQBFBbBqgaQA2gNAoggIgLCLQgUCfgsBqQgtBthPAAIgDgBg");
	this.shape_1.setTransform(50.2,62.9,0.359,0.359);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("Ag5D3QhCgLgSgkQgPgeANhCIAliTQAahtAGhfIASAOQAXAQAZAJQBQAbBOg4QgcDLgtB+Qg3CchEAAIgLgBg");
	this.shape_2.setTransform(98.2,62.2,0.359,0.359);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C4C4C").s().p("AruPYQgjgDgRgKQBIjOhKssQglmWgzltQD0hzDfgjQDIgfDXAdQCoAWD1BJQCPAqFBBkQA0D6g0JzQgUDpgcDQQgaDBgQAwQgcBThhAYQgmAJgfgGQgfgGgFgTQgFgRAVlWQAbmogDlBQjnBbmjgsQiEgOiGgZIhsgXQgQDPgVDmQgpHOgWB9QgXCChtAfQgdAIgfAAIgVgBg");
	this.shape_3.setTransform(73.1,37.4,0.359,0.359);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[]},1).wait(10));

	// Layer 9
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AT2MKQg1gHgbgqQgagpAMgxQgDgFAAgHQgCgOAKgXIAQgkQAQgzALhFQATh1g/ikQgohqiPgvQgvgPgzgHQgngFgNACIgEABQh7A9jPArQmdBVmshVQgkBJh7CNQhoB2gpAiQjfC6jQBIQh9ArhrgEQiIgFhLhTQg8hJA5g4QATgTAcgMQAZgKAJAEQAKAEBBgRQBHgUBPgeQDZhWBMhdQBjhwARjSQAFhDgDhGIgFg7QgIgzgWhoQgWhmgHg0QgVgiBYgfQAOgFBjgYQAdgIB3goQBageA8gKQCngbDDARQCsAPC4AxQDJA1CXAyIB1ApQBHAZAwANQAWAFANAUQAHADAQAMQARAOAdAQIAwAbQBeA6BDA3QCoCJBRCzQBFCagfD1QgOBugcBVQgUA+gUAaQgNAhgkAdQgaAVgiAJQgWAGgWAAQgLAAgMgCgAPBhKQBUAXBYBCQBvBUAVBjQAcCmggCZQgTBdgWAjQAFAvAIAOQAPAbArgCQAhgCAngaQAbgSAHgJQA7iVAJilQAEg/gNhnQgPiAgeg8QgghiiJiEQhHhGhTg/QgrgThFgpQgQgKhOglQhNgkgdgMQgwgUg+gTQgjgLhMgWQiQgshIgUQh+glhdgOQkhgqjcAmQhLANhsAqIi0BGIgCAEIgEACIgPAYQASA/AYDWQAXDWgGA1QhEFIlbCOQhvAuh8AUQhdAPgRgFQgEACgJARQgJATADAGQAwBGBPAVQCsAtEfikQCaheCRiLQAbgaAjgmIA7hDQA0g4AihNQASgmAJgbQDDA+DIAMQDDALDRglQB6gVD/hgQAFgCBDgCIAvgBQAfAAAJACg");
	this.shape_4.setTransform(70.6,28.8,0.359,0.359);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AEBEHQnhg0lPhrQixg5g9g3QhEg/BYg3QBag5C0gpQDBgrDagEQIkgMFtDjIALA7QAEBIghA4QhTCOkkAAQhMAAhbgKg");
	this.shape_5.setTransform(70,11.9,0.359,0.359);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AnFI3QgHgBAAgIQAAgIAHgBQAQgCAZABIAqAAQAZgBBHgKQBdgMBJgkQB3g6CGhnQBGg1AtguQA8g6Aig8QAfg1APhFQAIgnAJhZIgEgCIgCgsQgGhkgYiYQgPgxgHgjQgMhDAiALQAdAJALBBQAGAjADA9IAPBvQAIA/ACAwIAAAGQAGAdgBAoQAAAXgEAtQgDAWgEANQgMBNgpBBQhMB5iNBmQhWA/g0AhQhPAzhEAcQhRAihaAJQgeADgdAAQg8AAg5gMg");
	this.shape_6.setTransform(33.3,30.5,0.359,0.359);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AhjDiQgYgXgPguIgLgpQANgjAMg/QAZh9AAiNQAQAsB1AhQA8AQA4AHIgHBPQgKBigUBfQhgB9hBAAQgcAAgXgXg");
	this.shape_7.setTransform(118.9,46.9,0.359,0.359);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AlwgEQgNgwAygKQAJgCBeAAQAtAABugfQBSgYAlgPIAiARQAqATAqANQCEArBLggQkICvijAcQghAGgfAAQibAAhdiLg");
	this.shape_8.setTransform(29.1,49.9,0.359,0.359);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C4C4C").s().p("AUDLxQgvgIgUgoQgXgtAThKQA/jxgkiMQg9jkk3goQlSCAjPAYQknAjlxhnQhGCgiNCWQiBCKiiBmQidBiiMAjQiSAkhVgsQibhRAJg9QAEgYAegNQAcgNAnACQBEAEBvggQChgvBzhiQFckniyqGIAcgQQAlgTAugSQCTg5C1gWQJDhGLCE4QCZBeBOA7QCOBtBUB3QDkFEiqHBQgZAzgxAbQglAUgjAAIgSgBg");
	this.shape_9.setTransform(70.2,29.2,0.359,0.359);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).to({state:[]},1).to({state:[]},1).wait(8));

	// Layer 4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhxJqQgwgCgkgZQgfgVgUgaQgagggCgeQgBgMAMgCQANgCADAMQAlByCGgPQBLgIBfgwQBaguAohhQAkhYgMhsQgLheguh5Qg6iKgbhFQgZhAgjh+QgpiQAEgmQAAgEAEgBQAFgBAAAEQAQBEArCEQA8C7A4B7QA4CGASBdQAaCAgeBtQgNAygaAoQgcAsgoAaQgnAagwAXQgwAYgrANQgoAMgkAAIgNAAg");
	this.shape_10.setTransform(44.9,31.3,0.359,0.359);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("APZOhQAClui9mzQg8iIhHh/Ig8hlQjNBfmGgCQh7gBh/gLQhYgHgVgEQAWBngLBeQgPCMhdCFQhcCEh/BDQh2A/iEADQiZAChUhZQgngqgFgxQgFgyAggvQAKgPAjgJQAggIAGAEQA0AmBLgTQBAgRA0gvQBBg7AShJQAShFgYhXQgHgYh3laQhpkugNhcQgWgjDRhGQCxg6BygTQHOggHVCDQDrBBCPBJIANBJQANBKADAWQBeB7BbCoQCNEEAMCxQAYCGAKBOQAOB1AABhIABB3QABBHgBAvQgFB0giAzQgqA/g7AGIgGAAQgxAAgPhbgAKxlJQAIAHgGAJQgSAcgcAXQAYAYCIEZQCMEjAZBZQAZBUAQB0QAHA2APCVIAMBfQAEAfAQACQAPADASgYQAaggAHg5IAFhhQAIiXgRjDQgYkPhDi6Qgjh8g5hzQhMiahtiAQgMgagHgtQgIg6gEgPIgBgBQgSgMgigLIgzgQQgwgUg+gTQgjgLhMgWQiQgshIgUQh+glhcgOQkigqjcAmQhSAOilBAQiYA7gEAIIAZBhQAPA/ANAmQAVA6ApBgQAvBwAQAoQBECwAHAWQAkB3gWBYQgUBUhGBHQhEBFhVAZQhQAXhAgaQghgNgNgSIgNASQgIALgBAEQgHAaADANQAIAhAdAYQAfAaAoAPQAoAQAoABQDiAICni2QBShYAphjQAshugMhuQgMhlgohVQgrhYhJhBQgLgKAIgOQAJgOANAFQBCAbAxA9QAsA3AaBPQD/A1FSgiQB3gMBogUQBXgRAWgLQASgIAmgYQAjgWAVgJIAHgCQAFAAAEAEg");
	this.shape_11.setTransform(76,37.9,0.359,0.359);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("Ak8DYQlBg5jTheQgTgmgFgiQgGgpAHhCQHEjsKkCSQDUAuDRBOQBoAnA+AeIAOA5QAPBBADAmQlSBwlzAAQjqAAj5gtg");
	this.shape_12.setTransform(72.8,11.5,0.359,0.359);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AizCLQhLgUgrgnQhFg/Ang2QAOgUAXgNQAWgMALADQAsAJBAgJQBqgOBsg8QAbBSCAgBQBAgBA6gQQiCDVjdAbQgcADgbAAQg7AAg4gPg");
	this.shape_13.setTransform(46.1,51.6,0.359,0.359);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AhJA+Qgaj/gPhGQA8BLBQghQAogRAdgfQAlDoggCaQgdCLhCAOIgEAAQgtAAgdjQg");
	this.shape_14.setTransform(114.3,63.4,0.359,0.359);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4C4C4C").s().p("AP0MgQgFhKgIhMQgQiTggiNQhjm4julaQiCAvg6ASQhgAehZALQjSAamvg9QAvFAhuC7QhaCbi2AwQiWAniTgpQg/gSglgcQgmgdAAgeQgCgwAigkIAjgaQDjA3Bbh4QChjSlDrAQEABELOAQQEXAHDfgGQDcgFAegOQCzEPBWDxQClHLgyIXQgdBEg2AdQgTAKgNAAQgbAAgFgog");
	this.shape_15.setTransform(76.1,43.4,0.359,0.359);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},4).to({state:[]},1).to({state:[]},1).wait(6));

	// Layer 5
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AiwIFQgKgSASgLQASgKAKASQALAVA6gNQARgEA5gTQBFgYBQgvQB7hJAOhcQAKg9gehDQgchBgygqQg1grh6hBQh5hBg1gtQhPhBgrhWQguhaAChhQAAgFAFAAQAGAAAAAFQAHBDApBPQAoBLAzAxQApAnA6AmQAoAbBCAlQCGBLA3AyQBeBVAKBtQAJBqhRBXQg6A+h2A8QhBAihCAOQgbAFgVAAQg3AAgSgjg");
	this.shape_16.setTransform(57.2,30.8,0.359,0.359);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhKPaQgkgCgegOQgbgMgJgRQgWgtAvhvQAWg2A1hcQAohGCtkWQCgkJAWhkQiZALgdABQAdBHg2BiQhxDRi+BzQjUCAjZgxQg6ggAQg9QANgxAvgsQAcgaA+gQQBFgSAYgQQA1giAkgqQAsgyAKg0QAJgyg6g6QhBhEhvgWQiSgmhWhTQgrgpgxhVQgRgegjiiQgeiLgMhOQgGgLAdgYQAggZA7gbQCahHDXgcQEWgkE0AyQF7A+GIC7QgJBAgUBfQgoC+g1CjQhcDwijDwIhJBuQgrA/giAsQhYBwhNBrQhhCGgvA7QhABIhWAAIgJAAgALQk6QADAEgBAEQgOAzg1AxQguArg4AaQhsA1hRACQgCA6gbBFQgPAmgoBSQhKCYhrClQhkCahVCpQgVApgFAMQgOAnANARQASAiAxgUQAngPAXgcQAXgbC1j5QAog2BjiLQBsiWAggvQCRjYBdjqQATgyA0i0QAuijAFgbQhOgyixhAQjchRjhgqQp9h3lvDtQABBiAqCOQApCMAmApQAtA1AlAeQAzApAyAMQDZAzBLBhQA2BFgSBUQgRBMhEBCQgoAnglAXQgrAagvAMIg5AQQggAMgRASQgaAcgFApQCuBHDLh5QC1hsBmi7QAdg2ABhPQABghhShCQhdhGgXgUQgYgVh5hPQh2hPgSgQQgEgEADgEQADgEAEABQBYAaC8B+QCjBuAkAmIBDAGQBTAEBQgKQEBgeCFieIADgBQADAAACADg");
	this.shape_17.setTransform(73,35.5,0.359,0.359);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AjPCnQgFg2A0h2QAvhsA8hbQgdBKCOARQBHAJBOgGQkrE7hVAAQgdAAgDgmg");
	this.shape_18.setTransform(75.2,62.8,0.359,0.359);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("Aj7CpQhCg8Aog8QAigxA/gKQA2gIBJgtQBQgzAgg4IATAaQAYAeAbAWQBXBGBOgmQixCPhcArQhiAth+AAQgZAAgbgCg");
	this.shape_19.setTransform(60.6,47,0.359,0.359);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AnYCyQiLgriGg3IhqgvQgEgMgEgYQgJgygDg/QEKidFKgUQENgQEkBKQDiA6DABhQCkBSAEAeQAJBNhYA9QiKBhlbAaQgzAEg1AAQkqAAl6h3g");
	this.shape_20.setTransform(73.2,11.3,0.359,0.359);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4C4C4C").s().p("Ah9OyQg9gUAqhUQAOgdBciXQBui2A+hsQDjmOgfhWIijAOQg0AFgeAGQASAqgXBdQgbBuhEBeQjCEJmJggQhRgvBLhBQAtgnBZglQChhDA0hgQBeirmSiRQhJgLhMhUQiWiogGlqIAdgQQAngUAwgSQCbg7C6gUQJThDK5FPQgoEsizFyQjeHKmMHWQhKAagxAAQgXAAgRgGg");
	this.shape_21.setTransform(73,35.4,0.359,0.359);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},6).to({state:[]},1).to({state:[]},1).wait(4));

	// Layer 7
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AKvLFQgWgkgihVQgghQgZgnQhbiLhkhaIhpheQg9g1gzgfQgugdhCgkIhyg/QgugZhQglQhegsgggQQhog2hthTQhhhJgyhgQg0hlAEh2QAAgBAAgBQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQABAAAAAAQABABAAAAQAAABAAABQAJBNAfBKQAhBOAxA0QAlAnAzAmQAmAdA8AlQAuAeA/AgIBxA5QBOAmCYBXQD4CMCiCpQBtBxAwBXQATAiAgBQQAeBKAXAmQAJAPgPAJQgGADgFAAQgIAAgGgIg");
	this.shape_22.setTransform(71.2,33.7,0.359,0.359);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AJnNCQgOgCh1i2Qh4i6gogSQgXAHgnAWQgqAXgUAIQgxAShUAQQiVAdh2gWQiegfhgg/Ig2gjQgggXgQgVQgbgWACgkQABgbAKgLQA4g7BpAjQCqAxCUghQBbgTAigeQh7hMiRg+Qicg+hLgiQiAg7hVhJQgigeg/hOQg2hEgGgOQhNjgAIhYQHSkVKjCCQDTApDgBQQBxApBgAnQAOADALALIgHAsIABABQgwFFh1DdQgpBNg2BLIhOBmQBSByAsBqQAkBVALAwQASBSgRBKQgRAhgiAQQgYAMgaAAQgKAAgKgCgAs+p5QgWCvBqCYQBaCCCQBEQBJAjCeBCQCGA3BPApQDoB4CeCWQBpBkAzBVIBGB4QA1BZANANQALAOASACQATABAQgMQApgfgQhOQghighfiYQinkNlOjbQgxgYgYgOQgpgagNgfQgEgLAKgGQAKgHAJAFIBzA8QBuBCB7BvQBJABAxgGQBCgHA0gTQAGgCADAFQAEAFgDAFQgWAfhWAVQg4AOgkADIBDBMQBHBRAeAoQADgFAzhDQA8hUAvhWQCYkXgGkBQhHgqiig4QjUhJjYgmQjJgjixAAQl1AAkHCcgAn9EdQgSAHgMAKQgNANABAOQAvA+BYAuQBcAxBuARQEIAqDeiUIhLhCQhCg2gngTQgtAghaAUQiiAhjKgwIg0gMQgMgCgLAAQgPAAgMAEg");
	this.shape_23.setTransform(71.9,30.5,0.359,0.359);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("ABaDpQgKgBhfiTQhyithKhRQBvAnBXgvQArgYAWggQAbA4AlBSQA7CHARBGQARBGg1AiQghAUgeAAIgLgBg");
	this.shape_24.setTransform(90.6,50.8,0.359,0.359);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AiMCIQhegchXg3QgcgShGg0QgxgmAygkQAUgOAagEQAbgFAUAKQEbBFCag4QBNgcAVgqQAXgCBEA/QAnAkBoBqQjPB4jFAAQhaAAhagag");
	this.shape_25.setTransform(67.2,43.9,0.359,0.359);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("ABfEcQlhgNlPiyQhog4hbhBIhFg2QFykZJ6BuQFfA9FECWQA2AZgbA4QgcA5hgA5QhrA/iWAjQiUAiimAAIg7gBg");
	this.shape_26.setTransform(71.9,11.3,0.359,0.359);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4C4C4C").s().p("AI+MGIh+jbQhbibghgGQhuBQioAfQlQA9kjj2QAFgqAegSQAggUA1ARQBxAkCXADQDaAFA1hlQhQg5jFhQQjhhbhagzQiphghSh+QhliaAMjcIAbgPQAkgRAugRQCRg0C0gUQI+hBLHEeQg1FQg/CvQhPDbiHBmQBcCmAbA4QBOCdgGAyQgKBDgvAnQgVARgTAAQgcAAgXgjg");
	this.shape_27.setTransform(72.1,30.9,0.359,0.359);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},8).to({state:[]},1).to({state:[]},1).wait(2));

	// Layer 11
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AB6QTQgXgDgQgRQgNgNgOgcQgOgegfiIIgmizQgpi1h0jBQh5jGiViJQh9hohlhcQjFixgkhPIgjioQgVhoAIgwQGOkvLqCdQF2BQEtCVQAZAqAmC4QAjCnAGBPQAUEDiKC3QiHCzjBBVQgsATh0ARQhrAQghgEQAiDZAKBtQAQClgXAhQgnA3hEAAQgMAAgMgBgAt3s0QADBIAJBIQALBTARA7QATBDC+CbQBhBPB+BgQCnCbBpC0QBtC6AtC5IArDSQAgCjAKAPQAGAKAhAKQAhALAJgFQArgbACg7QACgxgojPQgqjWgehXQgninh7i+QhkiYhOhEQgJgHAGgMQAHgLALADQA9ARA1A4QGXATDmiDQBOgsA5g+QAUgVAqg7QAIgLANAFQANAFgFANQgjBhhaBKQAVAoACBaQADBvgkBbQhqEMl0geQAoBmANAvIB0gHQB+gPA+glQDDhzBgiTQA8hcAThsQARhdgMh8QgIhJgzkbQkMiElYhRQkWhCjqAAQlWAAj1CMgAAvAqQBBB/AWA0IACAAQBfAUBjggQBggfBIhGQBKhKAZhdQAchngnhrQhEArhwAmQjfBNjlgPQAaAlBDCDg");
	this.shape_28.setTransform(73.8,36.9,0.359,0.359);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AG5N2QgCg+gQhSIgeiNIgbiFQgQhNgQg3Qhak9imivQhEhIh9hyIhghUQg6gzgjglQhEhEg8h7QgZgzgLgpQgNgzAGgtQABgIAIgBQAHgCACAIQAsDsDVCzQB3BlBRBNQBpBnBJBfQBDBWAxB6IAyB/QAbBIAOA6QANA0ARBQIAbCFQATBYAGAqQAMBIgBA7QAAASgSAAQgSgBgBgRg");
	this.shape_29.setTransform(62.4,40.9,0.359,0.359);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgQEmQgWgEgpjPQgxkDgZhtQA/AoBRgXQAogLAcgTQANATAkDZQAYCMAVCPQAIA8hKAOQgXAEgZAAQgbAAgcgFg");
	this.shape_30.setTransform(77.5,62.5,0.359,0.359);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AkLB0QgRgrgSg+IgPg0IApACQAzABAzgGQCigSBhhPIAWAQQAcAUAcANQBbAtBAgbQihCEiOA1QhUAfhKAAQhDAAg5gag");
	this.shape_31.setTransform(89.4,47.2,0.359,0.359);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4C4C4C").s().p("ABjPkQgXgJAAgSQAAglgah/Qgkisg3iiQisntkei1QkcizhljtQgghKgKhHIgDg4QFSjnIIA/QFRAoJBDQQDbKJlIEyQh2BviwAzQiJAoh4gIQATAvAYDTQAZDagNA1QgNA2hKAJIgRABQgUAAgPgGgAgXg9QBGCPBJCQQFlAcBzjpQAshWAAhuQABhdgbhIQjlCEj+AdQhPAJhHgCIg4gEg");
	this.shape_32.setTransform(73.7,37.5,0.359,0.359);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},10).to({state:[]},1).wait(1));

	// feet
	this.instance = new lib.Foot();
	this.instance.parent = this;
	this.instance.setTransform(94.2,70.2,0.945,0.956,0,0,0,-6,-11.5);

	this.instance_1 = new lib.Foot();
	this.instance_1.parent = this;
	this.instance_1.setTransform(48.2,72.7,1,1,0,0,0,-6,-11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{rotation:0,x:48.2,y:72.7,regY:-11.5}},{t:this.instance,p:{rotation:0,x:94.2,y:70.2,regY:-11.5}}]}).to({state:[]},1).to({state:[{t:this.instance_1,p:{rotation:91.5,x:17.8,y:49.7,regY:-11.5}},{t:this.instance,p:{rotation:-22.2,x:115.2,y:54.7,regY:-11.5}}]},1).to({state:[]},1).to({state:[{t:this.instance_1,p:{rotation:138,x:36.8,y:48.8,regY:-11.5}},{t:this.instance,p:{rotation:-34.9,x:114.2,y:73.7,regY:-11.5}}]},1).to({state:[]},1).to({state:[{t:this.instance_1,p:{rotation:114.3,x:52.3,y:48.8,regY:-11.5}},{t:this.instance,p:{rotation:-1.5,x:69.2,y:69.7,regY:-11.5}}]},1).to({state:[]},1).to({state:[{t:this.instance_1,p:{rotation:-54.2,x:96.1,y:58.7,regY:-11.5}},{t:this.instance,p:{rotation:65.6,x:53.7,y:41.2,regY:-11.6}}]},1).to({state:[]},1).to({state:[{t:this.instance_1,p:{rotation:-8.3,x:78.2,y:72.3,regY:-11.4}},{t:this.instance,p:{rotation:125.8,x:70.2,y:47.8,regY:-11.6}}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(39.5,0.8,71.9,83.4);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(5.8,0.8,129.6,67.2), rect, rect=new cjs.Rectangle(15.6,1.2,119.1,84.8), rect, rect=new cjs.Rectangle(34.3,0.1,71.8,80.8), rect, rect=new cjs.Rectangle(39.4,0.5,76.7,70), rect, rect=new cjs.Rectangle(39.2,-0.6,69.3,85.1), rect];


(lib.HeroBulletAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbAcIgFgDIgDgDIgBgBIgJgCIgEgEIgBgDIgCgEIgFgDIAAgEIAAgDIAAgDIABgDIAEgEIAEgEIAJgHIAIgGIAGAAIABgBIAWAAIAFAAIAdAAIAHADIAFACIAGACIAFAEIACADIAAAEIAAADIAAAEIAAADIAAADIgBADIgCAEIgDAEIgCADIgEAEIgJADIgFACIgHADIgEACIgGABIghABIgIgDg");
	this.shape.setTransform(16.4,-8.5);

	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.HeroBulletAnim, rect = new cjs.Rectangle(-23.8,-16.5,47.7,16.6), [rect]);


(lib.GunShoot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GunHand("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(11.6,45.8,0.373,0.373,67.4,0,0,4.2,127.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.7,0.5,108.2,64.6);
p.frameBounds = [rect];


(lib.DeadLegs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ak/FUQhsgVg5hSQhfiIgRhcQgfikB+i+QATgCAIAMQADAHAAAGQgOATgQAbQgiA1gMAmQgWBCALBiQAQCEBRBgQBYBoBqgHQBFgFAzgqQAsgkA9giQBWgxA9gEQBbgHCmAPQDAARAsAgQAKARgLAFQgMAFgegHQhRgVhhgNQingWhmATQhhAShPA7QhHA+gcAOQgmATgyAAQgeAAgigGg");
	this.shape.setTransform(42.6,-167.5,0.949,0.949);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("ABjEhQiihzhDgdQgSDrhJBaQgyA+hpAKQgqADgUgSQgUgRgFgrQgFgnAPjsQAMi8AkhaQAihTBfhiQAYiJAohKQARghAtgxQAZgbAkAJQAhAIADAQQABAFgoBfQgtBvgQBJQAuhGAegUQAUgOAiAAQAXAAgIApQgFATghBXQCZBTCvCkQBXBTA5BCQgCAFAAAXQgBAWgKAGQhniMkTi/QgUAZgjAlQgtAsgNABQhzANgegdQgbgchNhkQg+B0gVD5QgMCeACAlQAFBFAtADQAxACAxgtQAvgtAMg4IAWiLQATh5AMgkQAOgpAPAfQAPAfgEAdQAmgTEADEQCABiB5BlIAXAqQAWAugCATQiqibjFiKgAk1itIA7BJQAxA7AKADQARAFAiACQAnACAKgGQAQgLBQhRIgVgPQg4AkhFgBQhfgDg2hWQgJAKgKANgAhClHQgfAYhFCPIgEAFQAaAIAbACIAYgxQAvhsgDgZQAAgGgFAAQgEAAgIAGgAhPiSQAWgCAXgGIghgWgAiCoWQgiAMgjBhQgjBdgMBsQgLAEgLAHQAXAYAjASQARhyAxh0QAwhkAGgQQAJgVgYAAg");
	this.shape_1.setTransform(-44.5,-85.7,0.949,0.949);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2DDC0").s().p("AgrBuQgigDAAgRQAOgwAUgwQAphhAkgEQAdgFAIADQALADgIATIhSDFIgRABIgSgBg");
	this.shape_2.setTransform(-53.7,-109.3,0.949,0.949);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2DDC0").s().p("Ag6CrQgogEAAgaQAQhKAZhKQAziXAvgIQAlgIAMAEQAQAFgMAcQgXA3hZD8QgMACgMAAIgQgBg");
	this.shape_3.setTransform(-60.5,-122.9,0.949,0.949);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("Ah8DHQghh2AylKIAYAaQAfAfAfAXQBhBIA+gqQgQDAgWA/QgxCKiEgEIgGAAQgWAAgPgzg");
	this.shape_4.setTransform(-73.2,-59.9,0.949,0.949);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AkIP0QhghEg5hmQhBh2gJibQgJiUBFjJQA5ijBChhQjGhPhoiaQhWiBgNiqQgLiMAmiIQAih4AvguQBJhHBRA7QAfAXARAgQASAggHATQgYAvgLAnQgVBHANBxQAOB+BxAZQBnAWBkhDQBRg2BxgSQBFgLC6gHQB9gEB6AYQA8ALAkANQAoAsgiAHQgLACgRgBIgOgCQj3g2jpAdQi+AYhCA2QhIA6hmADQiBAEhAhzQg9hvAQh4QAGgxAkhdQAIgUgKgUQgIgTgUgMQgvgbgoAsQgoAugOA2QgLAqgVCoQgUCZBzCxQBvCrB/AkQBnAeBoguQAhgPAlgYIAtggQAbgQAGANQADAHgCAKQgzBNh5AvQgmAPgoAKIghAHIgLAPQgPAVgSAkQg5B0g+DXQhADcBXDDQAyBxBaBVQA0AwAFASQACAGgFAAQgMAAg6gqg");
	this.shape_5.setTransform(39.7,-106,0.949,0.949);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EDDAC0").s().p("AggBiQhAgWhTiJIArgpIAQAVQAWAYAbAQQBXAwBzg3QARAGARAXQAJAMAFAJIg5AsQg/AtgUACIgdAIQgIACgIAAQgNAAgNgFg");
	this.shape_6.setTransform(-58.2,-96.1,0.949,0.949);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0351").s().p("AgFAoQg3gIgkgRQgmgRADgQQADgRAogGQAogGA1AIQA3AIAmASQAkAQgCARQgCAQgpAGQgRADgUAAQgbAAgegFg");
	this.shape_7.setTransform(-58.7,-104,0.949,0.949);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("Ah3A3QAXiPAjhxQAahUBTAdQAeAKAcAWQAZAUAEANQADAIgUB0QgXCGADByQgZgfhmA2IhiA8QgSguAaijg");
	this.shape_8.setTransform(-12.5,-178,0.949,0.949);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C4C4C").s().p("ACFQRQgtgLhahyQhahxgThDQlhkZishfQg1gegdgIIgSgBIgLBdQgPBtgTBOQgLAsgnAdQgjAbgtAEQgsAEgfgVQghgXgCgsQgFhsAbipQAdjBAxhuQAuhqB7ATQBWANB4BKQBLAvCnCmQBUBTBFBKQB9ljA7iGQlnisgklLQgNh3Afh8QAYhhAng+QA2hYBBAwQAZATANAeQAMAegJAVQgkBPgCBdQgECQBhBUQBcBRCLgxQAngNBPgnQBNgmAmgMQBegfETAZQCJAMB3ATQgEASiDD+QiKENiZEdQmkMPgrAAIgBAAg");
	this.shape_9.setTransform(10.3,-104.9,0.949,0.949);

	this.instance = new lib.Foot();
	this.instance.parent = this;
	this.instance.setTransform(-76.2,-40.9,2.394,2.422,163.5,0,0,-6,-11.5);

	this.instance_1 = new lib.Foot();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2.5,-204.2,2.533,2.533,-5.5,0,0,-6,-11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.DeadLegs, rect = new cjs.Rectangle(-125.8,-211.7,233.3,205.8), [rect]);


(lib.Trap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{trap0:0,trap1:1,trap2:2,trap2f:3});

	// LogAnim
	this.instance = new lib.LogAnimation();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,9.6,1,1,0,0,0,-0.5,-0.4);

	this.instance_1 = new lib.Shadow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.5,-18.7,0.782,2.286,0,0,0,78,17.5);

	this.instance_2 = new lib.Spike2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(44.4,-0.4,1.102,0.991,0,19.5,-160.5,6,-0.8);

	this.instance_3 = new lib.Spike2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(49,-109.5,1.102,1.392,0,13.2,-166.8,6,-0.8);

	this.instance_4 = new lib.Spike3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(5.1,-127.1,0.877,1,-3,0,0,0,-36.4);

	this.instance_5 = new lib.Spike3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(12.1,-19.6,1,1,7,0,0,-5.5,-2.4);

	this.instance_6 = new lib.Spike1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(54.4,-50.4,1,0.823,0,9.7,-170.3,3,-0.8);

	this.instance_7 = new lib.Spike1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-35.1,-8.9,1.163,1,-22.7,0,0,3,-0.8);

	this.instance_8 = new lib.Spike2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-41.9,-121,1,1,0,0,0,6,-0.8);

	this.instance_9 = new lib.Spike1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-24.5,-51.4,1,1,0,0,0,3,-0.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#933A3A").s().p("AsJMpQgNg+AOiTQARiUAAggQADhqgPlRQgMkUARioQADhvAMhBQAVh2BDgPQBSgRBlgHQBFgFB3gBQDigEEKADQBMABChgBQCMADBfAVQA+ANAZBTQAHAYAOB0QAKBMgMCLQgPCfACA5QAFB7ACEbQACEGAHCQQAAAGgDAsQgFAwgEAPg");
	this.shape.setTransform(1.5,-73);

	this.instance_10 = new lib.TunnelBackAnim();
	this.instance_10.parent = this;
	this.instance_10.setTransform(3.5,-256,1,1,0,0,0,66,-150.8);

	this.instance_11 = new lib.TunnelFrontAnim();
	this.instance_11.parent = this;
	this.instance_11.setTransform(81.5,-215.1,1,1,0,0,0,111.5,-223.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.4,-171.4,126.9,192.9);
p.frameBounds = [rect, new cjs.Rectangle(-76.9,-163.9,156.9,171.9), new cjs.Rectangle(-62.5,-406.9,132.1,301.7), new cjs.Rectangle(-30,-438.8,223.1,447.4)];


(lib.HeroBullet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{bulletIdle:0,bulletHit:7});

	// timeline functions:
	this.frame_6 = function() {
		this.gotoAndStop("idle");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(5));

	// flash0.ai
	this.instance = new lib.ShotSpark2();
	this.instance.parent = this;
	this.instance.setTransform(-1.7,0.1,0.667,0.667,0,0,0,0,-8);

	this.instance_1 = new lib.ShotSparks();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.1,15.4,0.603,0.513,0,101.5,95.2,-0.1,-2.8);

	this.instance_2 = new lib.ShotSparks();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-9.8,10.4,0.307,0.539,0,147.9,141.6,-0.1,-2.8);

	this.instance_3 = new lib.ShotSparks();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-9.9,-2.2,0.307,0.541,0,-155.1,-146.9,-0.2,-2.6);

	this.instance_4 = new lib.ShotSparks();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-16.2,-17.2,0.7,1,0,-147.4,-142.9,0.1,-2.7);

	this.instance_5 = new lib.ShotSparks();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-1.3,-18.7,1,1,-90,0,0,0,-2.7);

	this.instance_6 = new lib.ShotSpark2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-5.6,4.3,0.246,0.072,0,0,0,0,-7.6);

	this.instance_7 = new lib.ShotSpark2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-3.9,2.8,0.246,0.072,0,0,0,0,-7.6);

	this.instance_8 = new lib.ShotSpark2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-1.3,-2.2,0.246,0.072,0,0,0,0,-7.6);

	this.instance_9 = new lib.ShotSpark2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0.2,-4.2,0.327,0.103,51.2,0,0,0.1,-8);

	this.instance_10 = new lib.ShotSpark2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-5.9,-5.9,0.35,0.103,0,0,0,0,-7.8);

	this.instance_11 = new lib.ShotSpark2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-19.8,18.9,0.492,0.12,-157,0,0,-0.1,-8.1);

	this.instance_12 = new lib.ShotSpark2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-25.8,13.4,0.492,0.249,154.5,0,0,0.1,-7.9);

	this.instance_13 = new lib.ShotSpark2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-23.5,1.7,0.492,0.156,-145,0,0,0.1,-8);

	this.instance_14 = new lib.ShotSpark2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-19.8,-6,0.492,0.156,0,0,0,0,-8);

	this.instance_15 = new lib.ShotSpark2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-26,-16.6,0.553,0.175,0,0,0,0,-8);

	this.instance_16 = new lib.ShotSpark2();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-21.9,-20.5,0.778,0.3,0,0,0,0,-8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTASIgEgCIgCgCIAAgCIAAgCIAAgBIAAgCIAAgEIAAgCIABgBIACgBIACgCIABgBIACAAIAIAAIADABIACACIACABIABABIAAACIABADIAAACIAAABIgBACIgBACIgCACIgBABIgCABIgCABIgKAAgAAQgDIgCgCIAAgCIAAgBIAAgCIAAgDIABgBIABgCIABAAIADgBIADABIACACIABADIAAABIAAACIgBACIAAABIgBACIgCABIgCABIgEgCg");
	this.shape.setTransform(-10.5,29.7);

	this.instance_17 = new lib.ShotSpark2();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-27.3,-27.6,0.261,0.078,-99.8,0,0,0,-7.9);

	this.instance_18 = new lib.ShotSpark2();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-3.3,-35.4,0.353,0.112,-99.8,0,0,0,-8.2);

	this.instance_19 = new lib.ShotSpark2();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-1,-39.6,0.353,0.112,0,0,0,0,-8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{scaleX:0.667,scaleY:0.667,x:-1.7,y:0.1,regY:-8,regX:0,rotation:0}}]},7).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2,p:{regX:-0.1,regY:-2.8,scaleX:0.307,scaleY:0.539,rotation:0,skewX:147.9,skewY:141.6,x:-9.8,y:10.4}},{t:this.instance_1,p:{regX:-0.1,regY:-2.8,scaleX:0.603,scaleY:0.513,skewX:101.5,skewY:95.2,x:-1.1,y:15.4}},{t:this.instance,p:{scaleX:1,scaleY:1,x:-1.3,y:-0.6,regY:-8,regX:0,rotation:0}}]},1).to({state:[{t:this.shape},{t:this.instance_2,p:{regX:0,regY:-2.7,scaleX:0.481,scaleY:0.481,rotation:-90,skewX:0,skewY:0,x:-2.7,y:-26.5}},{t:this.instance_16,p:{regY:-8,scaleX:0.778,scaleY:0.3,rotation:0,x:-21.9,y:-20.5}},{t:this.instance_15,p:{regX:0,regY:-8,scaleX:0.553,scaleY:0.175,rotation:0,x:-26,y:-16.6}},{t:this.instance_14,p:{regX:0,regY:-8,scaleX:0.492,scaleY:0.156,rotation:0,x:-19.8,y:-6}},{t:this.instance_13,p:{regX:0.1,regY:-8,scaleX:0.492,scaleY:0.156,rotation:-145,x:-23.5}},{t:this.instance_12,p:{regX:0.1,regY:-7.9,scaleX:0.492,scaleY:0.249,rotation:154.5,x:-25.8,y:13.4}},{t:this.instance_11,p:{regX:-0.1,regY:-8.1,scaleX:0.492,scaleY:0.12,rotation:-157,x:-19.8,y:18.9}},{t:this.instance_10,p:{regX:0,regY:-7.8,scaleX:0.35,scaleY:0.103,rotation:0,x:-5.9,y:-5.9}},{t:this.instance_9,p:{regX:0.1,regY:-8,scaleX:0.327,scaleY:0.103,rotation:51.2,x:0.2,y:-4.2}},{t:this.instance_8,p:{regX:0,regY:-7.6,scaleX:0.246,rotation:0,x:-1.3,y:-2.2}},{t:this.instance_7,p:{regX:0,regY:-7.6,scaleX:0.246,scaleY:0.072,rotation:0,x:-3.9,y:2.8}},{t:this.instance_6,p:{regX:0,regY:-7.6,scaleX:0.246,scaleY:0.072,rotation:0,x:-5.6,y:4.3}},{t:this.instance,p:{scaleX:0.246,scaleY:0.072,x:-1.6,y:6,regY:-7.6,regX:0,rotation:0}},{t:this.instance_1,p:{regX:0,regY:-2.7,scaleX:0.585,scaleY:0.481,skewX:-90,skewY:90,x:-1.7,y:29.1}}]},1).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16,p:{regY:-7.9,scaleX:0.261,scaleY:0.078,rotation:-99.8,x:-31.3,y:-26.5}},{t:this.instance_15,p:{regX:0.1,regY:-8.1,scaleX:0.261,scaleY:0.078,rotation:-31.3,x:-30.3,y:-16.4}},{t:this.instance_14,p:{regX:0.1,regY:-8.1,scaleX:0.261,scaleY:0.078,rotation:-31.3,x:-37.4,y:-13.9}},{t:this.instance_13,p:{regX:0.2,regY:-8.3,scaleX:0.331,scaleY:0.078,rotation:-7.5,x:-32.3}},{t:this.instance_12,p:{regX:0.4,regY:-8.2,scaleX:0.331,scaleY:0.078,rotation:-33.2,x:-32.1,y:4}},{t:this.instance_11,p:{regX:0.2,regY:-9,scaleX:0.331,scaleY:0.1,rotation:-5.3,x:-31.5,y:14.4}},{t:this.instance_10,p:{regX:0.1,regY:-8.4,scaleX:0.331,scaleY:0.072,rotation:-14.2,x:-32,y:18}},{t:this.instance_9,p:{regX:0.2,regY:-9,scaleX:0.331,scaleY:0.1,rotation:-5.3,x:-26,y:22.8}},{t:this.instance_8,p:{regX:0.3,regY:-8.4,scaleX:0.331,rotation:-44.3,x:-16.6,y:34.5}},{t:this.instance_7,p:{regX:0.1,regY:-9.9,scaleX:0.331,scaleY:0.071,rotation:40.7,x:-18.7,y:39.6}},{t:this.instance_6,p:{regX:0.2,regY:-8.9,scaleX:0.258,scaleY:0.078,rotation:-5.3,x:-7.1,y:42}},{t:this.instance,p:{scaleX:0.258,scaleY:0.092,x:-4.3,y:41.9,regY:-8.7,regX:0.1,rotation:-86}}]},1).wait(1));

	// bulletanim
	this.instance_20 = new lib.HeroBulletAnim();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-2.2,0.6,1.277,0.608,0,0,0,21.5,-7.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({regX:21.6,scaleX:0.87,scaleY:1.06,x:-2.1},2).to({scaleX:0.64,scaleY:1.87,x:-1.6},2).to({regX:21.5,scaleX:1.16,scaleY:0.61,x:-2.2},2).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.1,-4.7,60.9,10.1);
p.frameBounds = [rect, new cjs.Rectangle(-50.8,-6.6,51.2,13.8), new cjs.Rectangle(-41.6,-8.6,41.4,17.5), new cjs.Rectangle(-36.1,-12,36,24.2), new cjs.Rectangle(-30.6,-15.5,30.4,31), new cjs.Rectangle(-42.7,-10,42.8,20.5), new cjs.Rectangle(-54.7,-4.7,55.2,10.1), new cjs.Rectangle(-3.3,-5.3,3.2,10.7), new cjs.Rectangle(-21.4,-25.4,22.8,45.2), new cjs.Rectangle(-27.6,-29.8,29,62.8), new cjs.Rectangle(-38.2,-40.5,38.1,83.2)];


(lib.Hero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stand:0,run:1,shoot:13,jump:25,death:39,slide:61,tunneldeath:77});

	// eyesdead
	this.instance = new lib.DeadEyes();
	this.instance.parent = this;
	this.instance.setTransform(400.8,-6.1,0.382,0.382,-5.2,0,0,-0.1,-62);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48).to({_off:false},0).wait(1).to({regX:0,x:436.2,y:-5.9},0).wait(1).to({x:465.1,y:-5.7},0).wait(1).to({x:487.6,y:-5.6},0).wait(1).to({x:503.7,y:-5.5},0).wait(1).to({x:513.3,y:-5.4},0).wait(1).to({regX:-0.1,x:516.5},0).to({_off:true},7).wait(26).to({_off:false,regY:-61.9,rotation:-168.7,x:-3.3,y:-53.5},0).to({regY:-62,rotation:-161.2,x:-2.4,y:-51.5},3).wait(1));

	// head
	this.instance_1 = new lib.Head("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.3,-144.9,0.373,0.373,0,0,0,-40.3,151.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).to({regX:-40.1,regY:151.6,scaleY:0.38,rotation:-1.4,x:12.3,y:-151.6},5).to({regX:-40.3,regY:151.5,scaleY:0.37,rotation:0,x:13.3,y:-144.9},6).to({regX:-40.1,regY:151.6,scaleY:0.38,rotation:-1.4,x:12.3,y:-151.6},1).to({startPosition:0},2).to({regX:-39.9,regY:151.5,rotation:2.1,x:9.7,y:-151.5},2).to({regX:-40.1,regY:151.6,rotation:-1.4,x:12.3,y:-151.6},7).to({regX:-40.3,regY:151.5,scaleY:0.37,rotation:0,x:13.3,y:-145.9},1).to({regY:151.6,rotation:0.7,x:9.7,y:-256.4},2).to({regX:-40,regY:151.4,rotation:-69,x:1.4,y:-277.5},2).to({regY:151.5,rotation:-149.9,x:4.7,y:-298.1},2).to({regY:151.3,rotation:-219.8,x:5.2,y:-286.2},2).to({regY:151.2,rotation:-284.8,x:25.2,y:-258.1},2).to({regX:-40.3,regY:151.5,rotation:-360,x:13.3,y:-144.9},3).to({startPosition:0},1).to({regY:151.6,rotation:-277,x:363.7,y:-9.6},9).wait(1).to({regX:-1.4,regY:0,rotation:-276.7,x:457.1,y:-1.5},0).wait(1).to({rotation:-276.5,x:486.1,y:-1},0).wait(1).to({rotation:-276.3,x:508.6,y:-0.6},0).wait(1).to({rotation:-276.2,x:524.7,y:-0.4},0).wait(1).to({rotation:-276.1,x:534.4,y:-0.3},0).wait(1).to({regX:-40.5,regY:151.7,x:479.8,y:-8.7},0).to({startPosition:0},6).to({regX:-40.3,regY:151.5,rotation:-360,x:13.3,y:-144.9},1).to({regX:-40.4,regY:151.4,rotation:-403.4,x:-10.8,y:-76.9},5).to({startPosition:0},1).to({regX:-40.6,regY:151.5,rotation:-409.9,x:-13.8,y:-73.9},3).to({regX:-40.4,regY:151.4,rotation:-403.4,x:-10.8,y:-76.9},3).to({regX:-40.3,regY:151.5,rotation:-360,x:13.3,y:-144.9},3).to({startPosition:0},1).to({regX:-40.4,regY:151.2,rotation:-445.9,x:29.4,y:-133.7},4).to({regY:151.3,rotation:-442.2,y:-41.7},5).to({regX:-40.3,rotation:-436.9,x:29.3,y:-36.8},2).to({regY:151.2,rotation:-431.5,y:-31.8},2).wait(1));

	// body
	this.instance_2 = new lib.Body("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(24.5,-66.6,0.373,0.373,0,0,0,28.2,101.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).to({regX:27.9,scaleX:0.36,scaleY:0.39,rotation:-1.4,x:24.4,y:-69.6},5).to({regX:28.2,scaleX:0.37,scaleY:0.37,rotation:0,x:24.5,y:-66.6},6).to({regX:27.9,scaleX:0.36,scaleY:0.39,rotation:-1.4,x:24.4,y:-69.6},1).to({startPosition:0},2).to({regX:28,rotation:-2,x:21.5},2).to({regX:27.9,rotation:-1.4,x:24.4},7).to({regX:28.2,scaleX:0.37,scaleY:0.37,rotation:0,x:24.5,y:-67.6},1).to({regX:28.1,regY:102,rotation:-7.2,x:29.5,y:-190.1},2).to({regY:101.9,rotation:-65.5,x:72.5,y:-256.8},2).to({rotation:-129,x:54.9,y:-352.4},2).to({regY:101.8,rotation:-193.7,x:-22.4,y:-354.8},2).to({regX:27.9,regY:101.9,rotation:-258.7,x:-48.8,y:-262.2},2).to({regX:28.2,regY:101.8,rotation:-360,x:24.5,y:-66.6},3).to({startPosition:0},1).to({regX:28,regY:101.9,rotation:-265.6,x:284.8,y:-4.6},9).wait(1).to({regX:-1.3,regY:-0.1,rotation:-263.5,x:359.3,y:-11.2},0).wait(1).to({rotation:-261.9,x:388.5,y:-10},0).wait(1).to({rotation:-260.6,x:411.2,y:-9.1},0).wait(1).to({rotation:-259.6,x:427.4,y:-8.5},0).wait(1).to({rotation:-259.1,x:437.1,y:-8.1},0).wait(1).to({regX:28.1,regY:101.8,rotation:-258.9,x:400.9,y:-4.6},0).to({startPosition:0},6).to({regX:28.2,rotation:-360,x:24.5,y:-66.6},1).to({regX:27.9,regY:101.9,rotation:-398.4,x:52.5,y:-34.7},5).to({startPosition:0},1).to({regX:28.2,regY:101.6,rotation:-401.9},3).to({regX:27.9,regY:101.9,rotation:-398.4},3).to({regX:28.2,regY:101.8,rotation:-360,x:24.5,y:-66.6},3).to({startPosition:0},1).to({regX:28.1,regY:101.7,rotation:-408,x:92,y:-86.7},4).to({regX:28.2,regY:101.8,rotation:-475.4,x:92.8,y:-85.7},5).to({regX:27.9,regY:101.9,rotation:-459,x:101.1,y:-63.5},2).to({regX:28.2,rotation:-442.7,x:109.4,y:-41.3},2).wait(1));

	// handfront
	this.instance_3 = new lib.HandFront("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-45.9,-79.3,0.373,0.373,0,0,0,-18.8,-81.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({startPosition:0},0).to({regY:-81.8,scaleY:0.35,rotation:14,x:-52.8,y:-84.1},5).to({regY:-81.7,scaleY:0.37,rotation:0,x:-45.9,y:-79.3},6).to({regX:-18.9,regY:-81.8,scaleY:0.35,rotation:8.5,x:-47.3,y:-80.1},1).to({regX:-18.8,rotation:14,x:-52.8,y:-84.2},2).to({regX:-18.9,regY:-81.7,rotation:8.3,x:-52.5,y:-81},2).to({regX:-18.8,regY:-81.8,rotation:14,x:-52.8,y:-84.1},7).to({regY:-81.7,scaleY:0.37,rotation:0,x:-45.9,y:-80.3},1).to({regX:-18.7,regY:-81.8,rotation:-18.9,x:-28.6,y:-189.3},2).to({regX:-18.5,regY:-81.7,rotation:-64.5,x:33,y:-198.6},2).to({regX:-18.6,rotation:-128.2,x:88.4,y:-289.5},2).to({regX:-18.5,rotation:-211.6,x:27.9,y:-363.3},2).to({regY:-81.6,rotation:-252.9,x:-17.9,y:-331.5},2).to({regX:-18.8,regY:-81.7,rotation:-360,x:-45.9,y:-79.3},3).to({startPosition:0},1).to({regX:-18.7,regY:-81.4,rotation:-255.6,x:292.6,y:-55.5},9).wait(1).to({regX:0.7,regY:0,rotation:-258.4,x:296.1,y:-51.2},0).wait(1).to({rotation:-260.7,x:324.7,y:-47.2},0).wait(1).to({rotation:-262.5,x:346.9,y:-44.2},0).wait(1).to({rotation:-263.8,x:362.8,y:-42},0).wait(1).to({rotation:-264.5,x:372.4,y:-40.6},0).wait(1).to({regX:-18.9,regY:-81.8,rotation:-264.8,x:406.5,y:-44.7},0).to({regY:-81.4,rotation:-263.3},6).to({regX:-18.8,regY:-81.7,rotation:-360,x:-45.9,y:-79.3},1).to({regX:-18.9,regY:-81.8,rotation:-297.5,x:-60.4,y:-10.9},5).to({startPosition:0},1).to({regX:-19,regY:-82,rotation:-292.4,x:-62.8,y:-13},3).to({regX:-18.9,regY:-81.8,rotation:-297.5,x:-60.4,y:-10.9},3).to({regX:-18.8,regY:-81.7,rotation:-360,x:-45.9,y:-79.3},3).to({startPosition:0},1).to({regX:-18.9,rotation:-421.9,x:49.5,y:-48.9},4).to({regX:-18.7,regY:-81.8,rotation:-496.4,x:109.5,y:-39},5).to({regY:-81.9,rotation:-451.9,x:93.5,y:18.6},4).wait(1));

	// armfront
	this.instance_4 = new lib.ArmFront("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-8.5,-137.1,0.373,0.373,0,0,0,50.9,-81.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({startPosition:0},0).to({regX:51,regY:-81.9,rotation:5.8,x:-9.7,y:-138},5).to({regX:50.9,regY:-81.7,rotation:0,x:-8.5,y:-137.1},6).to({regX:51,regY:-81.9,rotation:0.3,x:-9.4,y:-137.8},1).to({regX:50.9,regY:-82,rotation:5.8,x:-9.7,y:-138},2).to({regX:50.6,regY:-81.8,rotation:1.4,x:-13.7},2).to({regX:51,regY:-81.9,rotation:5.8,x:-9.7},7).to({regX:50.9,regY:-81.7,rotation:0,x:-8.5,y:-138.1},1).to({regX:50.8,rotation:-18.9,x:-12,y:-256.1},2).to({regX:51,rotation:-64.5,x:-3.2,y:-257.3},2).to({regX:51.1,rotation:-128.2,x:19.8,y:-283.1},2).to({regY:-81.8,rotation:-211.6,x:26.4,y:-294.4},2).to({regX:51.2,regY:-81.9,rotation:-252.9,x:26.6,y:-278.7},2).to({regX:50.9,regY:-81.7,rotation:-360,x:-8.5,y:-137.1},3).to({startPosition:0},1).to({regX:51.1,regY:-81.8,rotation:-283.8,x:357.6,y:-32.8},9).wait(1).to({regX:-0.6,regY:0,rotation:-287,x:358.2,y:-42.1},0).wait(1).to({rotation:-289.7,x:386.8,y:-40.4},0).wait(1).to({rotation:-291.7,x:409.1,y:-39.1},0).wait(1).to({rotation:-293.2,x:425.1,y:-38.1},0).wait(1).to({rotation:-294,x:434.6,y:-37.5},0).wait(1).to({regX:51,regY:-81.8,rotation:-294.3,x:473.6,y:-32.4},0).to({startPosition:0},6).to({regX:50.9,regY:-81.7,rotation:-360,x:-8.5,y:-137.1},1).to({regX:51.1,regY:-81.9,rotation:-353.3,x:-16.5,y:-63.9},5).to({startPosition:0},1).to({regX:50.9,regY:-81.8,rotation:-350.3,x:-16.3,y:-63.7},3).to({regX:51.1,regY:-81.9,rotation:-353.3,x:-16.5,y:-63.9},3).to({regX:50.9,regY:-81.7,rotation:-360,x:-8.5,y:-137.1},3).to({startPosition:0},1).to({regX:51,rotation:-421.9,x:16.1,y:-109.2},4).to({regX:51.1,rotation:-496.4,x:42.4,y:-22.9},5).to({regX:50.9,rotation:-451.9,x:34.3,y:-16.9},4).wait(1));

	// gunhand
	this.instance_5 = new lib.GunHand("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(82.5,-134.2,0.373,0.373,0,0,0,4,127.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({startPosition:0},0).to({regY:127.2,rotation:9.5,x:83.5,y:-132.8},5).to({regY:127.4,rotation:0,x:82.5,y:-134.2},6).to({regY:127.2,rotation:9.5,x:83.5,y:-132.8},1).wait(1).to({regX:3.9,regY:127.1,rotation:17.9,x:86.1,y:-132.3},0).to({_off:true},1).wait(10).to({_off:false,regX:4,regY:127.4,rotation:0,x:82.5,y:-135.2},0).to({regX:4.1,regY:127.5,rotation:30,x:70,y:-230.8},2).to({regX:4.2,regY:127.6,rotation:-28.3,x:59.3,y:-312.6},2).to({regY:127.8,rotation:-91.8,x:-0.9,y:-365.4},2).to({regY:127.7,rotation:-180.7,x:-61,y:-286.9},2).to({regY:127.8,rotation:-245.7,x:-3.4,y:-198.4},2).to({regX:4,regY:127.4,rotation:-360,x:82.5,y:-134.2},3).to({startPosition:0},1).to({regY:127.3,rotation:-294.3,x:396.7,y:32.4},9).wait(1).to({regX:0.4,regY:1.8,rotation:-298.7,x:474.5,y:5.7},0).wait(1).to({rotation:-302.3,x:503.6,y:0.8},0).wait(1).to({rotation:-305.1,x:526,y:-3},0).wait(1).to({rotation:-307.1,x:542,y:-5.7},0).wait(1).to({rotation:-308.3,x:551.6,y:-7.3},0).wait(1).to({regX:3.9,regY:127.2,rotation:-308.7,x:519.1,y:22.5},0).to({startPosition:0},6).to({regX:4,regY:127.4,rotation:-360,x:82.5,y:-134.2},1).to({regY:127.3,rotation:-419.9,x:34.4,y:-135.2},5).to({startPosition:0},1).to({regX:4.2,regY:127.2,rotation:-426.4,x:27.9,y:-137.4},3).to({regX:4,regY:127.3,rotation:-419.9,x:34.4,y:-135.2},3).to({regY:127.4,rotation:-360,x:82.5,y:-134.2},3).to({startPosition:0},1).to({regX:4.2,rotation:-439.2,x:52.6,y:-168.2},4).to({regY:127.6,rotation:-472,x:15.2,y:-105.4},5).to({regY:127.5,rotation:-490.3,x:-2.9,y:-81.1},4).wait(1));

	// gunhandshoot
	this.instance_6 = new lib.GunShoot();
	this.instance_6.parent = this;
	this.instance_6.setTransform(131.2,-148.4,1,1,4.5,0,0,54.2,33.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({_off:false},0).wait(2).to({regX:54.1,rotation:3.7,x:121.5},0).to({scaleX:0.94,scaleY:0.99,rotation:0,skewX:-59.9,skewY:-62.1,x:78.8,y:-217.7},3).wait(1).to({skewX:-67.6,skewY:-69.8},0).to({skewX:-59.9,skewY:-62.1,x:96.3,y:-176.2},3).to({_off:true},1).wait(66));

	// armback
	this.instance_7 = new lib.ArmBack("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(26.4,-135.8,0.373,0.373,0,0,0,-81.7,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({startPosition:0},0).to({regY:-33.6,rotation:8,x:28.1,y:-142.3},5).to({regY:-33.5,rotation:0,x:26.4,y:-135.8},6).to({regY:-33.6,rotation:8,x:28.1,y:-142.3},1).wait(1).to({regY:-33.5,scaleX:0.42,rotation:6,x:26.4,y:-143.8},0).to({_off:true},1).wait(6).to({_off:false,regY:-33.4,rotation:-42.2},0).to({regY:-33.5,rotation:6},3).wait(1).to({scaleX:0.37,rotation:0,y:-136.8},0).to({regX:-81.5,regY:-33.4,rotation:30,x:22.3,y:-260.2},2).to({rotation:-28.3,x:9.1,y:-287.5},2).to({rotation:-91.8,x:-0.9,y:-309.4},2).to({regX:-81.4,regY:-33.2,rotation:-180.7,x:-4.8,y:-285.9},2).to({rotation:-245.7,x:21.2,y:-248.9},2).to({regX:-81.7,regY:-33.5,rotation:-360,x:26.4,y:-135.8},3).to({startPosition:0},1).to({regX:-82,regY:-33.2,rotation:-294.3,x:374.9,y:-19.3},9).wait(1).to({regX:-0.8,regY:-0.1,rotation:-298.7,x:412.3,y:12.3},0).wait(1).to({rotation:-302.3,x:441.9,y:11.3},0).wait(1).to({rotation:-305.1,x:464.9,y:10.4},0).wait(1).to({rotation:-307.1,x:481.3,y:9.7},0).wait(1).to({rotation:-308.3,x:491.2,y:9.3},0).wait(1).to({regX:-82,regY:-33.2,rotation:-308.7,x:485.1,y:-22.2},0).to({startPosition:0},6).to({regX:-81.7,regY:-33.5,rotation:-360,x:26.4,y:-135.8},1).to({regX:-81.9,rotation:-419.9,x:4.8,y:-87.4},5).to({startPosition:0},1).to({regX:-81.5,regY:-33.3,rotation:-426.4,x:4,y:-86.5},3).to({regX:-81.9,regY:-33.5,rotation:-419.9,x:4.8,y:-87.4},3).to({regX:-81.7,rotation:-360,x:26.4,y:-135.8},4).to({regX:-81.6,rotation:-439.2,x:40.4,y:-113.4},4).to({regX:-81.5,rotation:-472,x:34.6,y:-52.7},5).to({regX:-81.7,rotation:-490.3,x:32,y:-37.1},4).wait(1));

	// armbackshoot
	this.armshoot = new lib.ArmShoot();
	this.armshoot.name = "armshoot";
	this.armshoot.parent = this;
	this.armshoot.setTransform(64.1,-141.1,0.377,0.455,0,0,0,11,-51.4);
	this.armshoot._off = true;

	this.timeline.addTween(cjs.Tween.get(this.armshoot).wait(15).to({_off:false},0).wait(2).to({x:54.4},0).to({regY:-51.5,scaleX:0.35,rotation:-43.7,x:47.5,y:-160.3},3).to({_off:true},1).wait(70));

	// legsbroken
	this.instance_8 = new lib.DeadLegs();
	this.instance_8.parent = this;
	this.instance_8.setTransform(16.1,-43.7,0.4,0.4,-114.3,0,0,0,-114.7);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(39).to({_off:false},0).to({regX:-0.1,regY:-114.9,rotation:-19.8,x:262.2,y:-14.8},9).wait(1).to({regX:-13.3,regY:-116.2,rotation:-18.6,x:292.4,y:-13.9},0).wait(1).to({rotation:-17.6,x:321.4,y:-14.2},0).wait(1).to({rotation:-16.8,x:344,y:-14.5},0).wait(1).to({rotation:-16.3,x:360.1,y:-14.7},0).wait(1).to({rotation:-15.9,x:369.8,y:-14.8},0).wait(1).to({regX:-0.2,regY:-114.8,rotation:-15.8,x:378.2,y:-15.8},0).to({_off:true},7).wait(28).to({_off:false,regX:-0.4,rotation:150.2,x:133.2,y:-45.7},0).wait(1).to({regX:-0.3,rotation:156.7,y:-33.7},0).wait(1));

	// legsjump
	this.instance_9 = new lib.LegsJump();
	this.instance_9.parent = this;
	this.instance_9.setTransform(26.9,-68.3,0.382,0.382,0,0,0,130.8,25.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(25).to({_off:false},0).to({regX:130.9,regY:25.7,rotation:-19.7,x:32.3,y:-197},2).to({regX:131.1,regY:25.8,rotation:-77.9,x:68.2,y:-262.9},2).to({regX:130.9,rotation:-127.9,x:47.5,y:-351.2},2).to({regX:131,regY:25.7,rotation:-188.6,x:-24.5,y:-347.7},2).to({regX:130.9,regY:25.8,rotation:-266.4,x:-42.1,y:-256.1},2).to({regX:130.8,regY:25.9,rotation:-360,x:26.9,y:-67.3},3).to({_off:true},1).wait(52));

	// legslide
	this.instance_10 = new lib.SlideLegs("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(35,-49.5,0.325,0.689,0,0,0,0,-72.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(62).to({_off:false},0).to({scaleX:0.4,scaleY:0.42,x:64.5,y:-30},4).wait(1).to({startPosition:0},0).to({scaleX:0.41,scaleY:0.41,x:67,y:-29},3).to({scaleX:0.4,scaleY:0.42,x:64.5,y:-30},3).to({scaleX:0.33,scaleY:0.69,x:35,y:-49.5},3).to({_off:true},1).wait(14));

	// Foot
	this.instance_11 = new lib.Foot();
	this.instance_11.parent = this;
	this.instance_11.setTransform(83,-5.9,0.945,0.956,-16.7,0,0,-6,-11.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(62).to({_off:false},0).to({rotation:-12.2,x:123,y:-6.4},4).wait(1).to({x:126},3).to({x:123},3).to({rotation:-16.7,x:83,y:-5.9},3).to({_off:true},1).wait(14));

	// Foot2
	this.instance_12 = new lib.Foot();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-16.9,-9.4,1,1,8.7,0,0,-6,-11.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(62).to({_off:false},0).to({rotation:114.5,x:3},4).wait(1).to({rotation:117.5,x:3.9,y:-9.3},3).to({rotation:114.5,x:3,y:-9.4},3).to({rotation:8.7,x:-16.9},3).to({_off:true},1).wait(14));

	// legs
	this.instance_13 = new lib.HeroLegs("single",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(17.1,-37.8,1,1,0,0,0,70.5,42.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(3).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:6},0).wait(2).to({startPosition:8},0).wait(2).to({startPosition:10},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:6},0).wait(2).to({startPosition:8},0).wait(2).to({startPosition:10},0).to({_off:true},2).wait(36).to({_off:false,startPosition:0},0).to({_off:true},1).wait(15).to({_off:false},0).to({rotation:-41.2,x:104.1,y:-58.8},4).to({rotation:-126.5,x:127.1,y:-100.7},4).to({regY:42.8,rotation:-98.6,x:131.1,y:-59.8},3).to({_off:true},1).wait(2));

	// shadow
	this.instance_14 = new lib.Shadow();
	this.instance_14.parent = this;
	this.instance_14.setTransform(23.5,-0.1,0.601,0.601,0,0,0,78,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(25).to({regX:77.9,scaleX:0.35,scaleY:0.35},7).wait(2).to({regX:78,scaleX:0.6,scaleY:0.6},4).wait(1).to({regX:77.9,scaleX:1.83,scaleY:0.72,x:364,y:23.9},9).to({x:468},6,cjs.Ease.get(1)).wait(7).to({regX:78,scaleX:0.6,scaleY:0.6,x:23.5,y:-0.1},0).to({scaleX:1.08,x:61},5).wait(11).to({scaleX:0.6,x:23.5},0).to({regX:77.9,scaleX:1.2,x:46.4},6).wait(8));

	// deadblood
	this.instance_15 = new lib.DeadBlood();
	this.instance_15.parent = this;
	this.instance_15.setTransform(320.6,25,1,1,0,0,0,0,-19.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(48).to({_off:false},0).to({scaleX:2.13,x:414.1},6).to({scaleX:2.24,scaleY:1.22,x:422.5,y:27.7},6).to({_off:true},1).wait(28).to({_off:false,scaleX:1,scaleY:1,rotation:-0.5,x:49.5,y:-3},0).wait(1).to({scaleX:1.09},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.6,-261.7,170,272.2);
p.frameBounds = [rect, rect, new cjs.Rectangle(-60.7,-263.3,173,273.7), new cjs.Rectangle(-63.6,-264.8,176.7,275.2), new cjs.Rectangle(-67,-266.4,181,276.8), new cjs.Rectangle(-70.2,-267.9,184.9,278.3), new cjs.Rectangle(-73.6,-269.6,189,280), new cjs.Rectangle(-70.8,-268.3,185.6,278.8), new cjs.Rectangle(-68.2,-267,182.4,277.4), new cjs.Rectangle(-65.4,-265.7,178.9,276.1), new cjs.Rectangle(-62.5,-264.4,175.4,274.8), new cjs.Rectangle(-60.2,-263.1,172.4,273.5), new cjs.Rectangle(-58.6,-261.7,170,272.2), new cjs.Rectangle(-64.2,-269.6,179.6,280), new cjs.Rectangle(-68.8,-269.6,197,280), new cjs.Rectangle(-73.6,-269.6,267.5,280), new cjs.Rectangle(-71.4,-269.7,265.3,280.2), new cjs.Rectangle(-69.3,-269.8,253.6,280.3), new cjs.Rectangle(-69.8,-269.7,222.4,280.2), new cjs.Rectangle(-70.4,-269.7,193.4,280.2), new cjs.Rectangle(-71.1,-278.8,177,289.3), new cjs.Rectangle(-71.7,-274.1,176.3,284.5), new cjs.Rectangle(-72.3,-269.6,180.1,280), new cjs.Rectangle(-72.8,-269.6,185.3,280), new cjs.Rectangle(-73.6,-269.6,197,280), new cjs.Rectangle(-58.6,-262.7,170,273.2), new cjs.Rectangle(-50.3,-318.1,163.8,327.9), new cjs.Rectangle(-41.5,-373.4,171.5,382.6), new cjs.Rectangle(-83.5,-401.5,199.9,410.1), new cjs.Rectangle(-110.9,-405.3,244.9,413.3), new cjs.Rectangle(-126.1,-398.7,251.2,406), new cjs.Rectangle(-118.3,-418.6,251.9,425.2), new cjs.Rectangle(-107.9,-416.1,185,422.1), new cjs.Rectangle(-89.5,-414.5,188.2,420.6), new cjs.Rectangle(-99.1,-385,228.3,391), new cjs.Rectangle(-104.3,-355.2,255.5,362.4), new cjs.Rectangle(-91,-313.7,246.3,322), new cjs.Rectangle(-72.7,-292.1,207.4,301.4), rect=new cjs.Rectangle(-58.6,-261.7,170,272.2), rect, new cjs.Rectangle(-27.9,-246.6,176.6,259.9), new cjs.Rectangle(1.3,-228.4,199,244.7), new cjs.Rectangle(31.2,-207.8,219.2,227), new cjs.Rectangle(62.1,-188,235.4,212.4), new cjs.Rectangle(94.1,-165.4,247.2,194), new cjs.Rectangle(125.1,-144.2,256.4,175.3), new cjs.Rectangle(155.8,-120.6,262.5,152.5), new cjs.Rectangle(188.9,-95.4,269.2,128.9), new cjs.Rectangle(217.5,-77.2,289,132.4), new cjs.Rectangle(232.1,-71.8,306.2,128.3), new cjs.Rectangle(231.2,-67.3,333.1,124.3), new cjs.Rectangle(230.2,-66.8,354.3,124.4), new cjs.Rectangle(229.3,-66.4,369.6,124.6), new cjs.Rectangle(228.4,-66.3,379.2,124.6), new cjs.Rectangle(227.4,-66.3,383.1,124.6), new cjs.Rectangle(227.3,-66.2,383.2,124.6), new cjs.Rectangle(227.2,-66.2,383.3,124.6), new cjs.Rectangle(227.2,-66.2,383.4,124.6), new cjs.Rectangle(227,-66.2,383.5,124.6), new cjs.Rectangle(227,-66.2,383.6,124.6), new cjs.Rectangle(226.9,-66.3,383.6,124.6), new cjs.Rectangle(-58.6,-261.7,170,272.2), new cjs.Rectangle(-68.9,-252.2,171.6,262.7), new cjs.Rectangle(-80.8,-245.5,192.5,261.1), new cjs.Rectangle(-91.7,-236.9,213.5,262.7), new cjs.Rectangle(-101.6,-225.1,233.3,258.3), rect=new cjs.Rectangle(-110.3,-210.5,255.6,249), rect, new cjs.Rectangle(-111.9,-208.5,257.2,244.8), new cjs.Rectangle(-114,-206.6,259.3,240.7), new cjs.Rectangle(-116.1,-204.7,261.5,236.9), new cjs.Rectangle(-114,-206.6,259.4,240.8), new cjs.Rectangle(-111.9,-208.6,257.3,244.9), new cjs.Rectangle(-110.3,-210.5,255.6,249), new cjs.Rectangle(-95.2,-233.2,240.6,261.8), new cjs.Rectangle(-77.1,-247.8,222.4,259.2), new cjs.Rectangle(-58.6,-261.7,204,272.2), new cjs.Rectangle(-58.6,-261.7,170,272.2), new cjs.Rectangle(-59.3,-272.6,154.9,283.1), new cjs.Rectangle(-73.8,-272.9,185.2,283.3), new cjs.Rectangle(-83.8,-254.6,219.5,265.1), new cjs.Rectangle(-87.7,-220.2,246.4,230.7), new cjs.Rectangle(-87.5,-203.1,248.7,213.6), new cjs.Rectangle(-87.6,-186,245.1,196.4), new cjs.Rectangle(-87.5,-168.9,253.3,179.3), new cjs.Rectangle(-87.4,-155.1,260.8,165.5), new cjs.Rectangle(-87.5,-139.7,262.1,150.1), new cjs.Rectangle(-86.9,-136.2,261.7,146.7), new cjs.Rectangle(-86.4,-138.2,260.7,148.6), new cjs.Rectangle(-85.6,-139.7,266.5,159.6), new cjs.Rectangle(-86.1,-141.2,265.1,172.5)];


(lib.EnemyMoose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{enemy1Idle:0,enemy1Death:16});

	// MooseDeathEyes
	this.instance = new lib.MooseDeathEyes();
	this.instance.parent = this;
	this.instance.setTransform(-8.2,-157,1,1,0,0,0,0,-54.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({regX:0.1,regY:-54.7,rotation:6.2,x:-4.2,y:-170.6},4).to({regX:0,rotation:5,x:-0.7,y:-174.6},2).to({regX:0.1,regY:-54.6,rotation:1.5,x:12.3,y:-27},5).to({regX:0,scaleX:1.25,scaleY:0.58,rotation:1.7,x:11.6,y:-11.8},2).to({regX:0.1,scaleX:1.06,scaleY:0.89,rotation:1.5,x:12.2,y:-24.5},3).wait(5));

	// MooseEyes
	this.instance_1 = new lib.MooseEyes();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8.2,-157,1,1,0,0,0,0,-54.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.08,scaleY:0.93,y:-147.5},2).to({scaleX:0.91,scaleY:1.13,y:-206},3).to({scaleY:1.09,y:-212.5},2).to({scaleX:1.08,scaleY:0.93,y:-147.5},3).to({regY:-54.7,scaleX:1.12,scaleY:0.88,y:-140.9},2).to({regY:-54.6,scaleX:1,scaleY:1,y:-157},3).to({_off:true},1).wait(21));

	// MooseDeathTop
	this.instance_2 = new lib.MooseDeathTop();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-4.7,-157.1,1,1,0,0,0,1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).to({rotation:-3.2,x:4.3,y:-213.1},5).to({rotation:-0.3,x:11.3,y:-119.6},6).to({scaleX:1.1,scaleY:0.83,rotation:-0.3,y:-118.6},3).to({scaleX:1.04,scaleY:0.89,y:-119.6},2).wait(5));

	// mooseDeathBlood
	this.instance_3 = new lib.MooseBlood();
	this.instance_3.parent = this;
	this.instance_3.setTransform(8.8,-124.8,0.951,0.284,0,0,0,0.6,-26.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).to({regX:0.5,scaleX:0.97,scaleY:0.64,y:-124.9},3).to({scaleX:0.98,scaleY:1},3).wait(4));

	// mooseBottomDeath
	this.instance_4 = new lib.MooseBottomDeath();
	this.instance_4.parent = this;
	this.instance_4.setTransform(48.5,-13.3,1,1,0,0,0,52,-1.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({_off:false},0).to({regX:51.9,regY:-1.5,rotation:7.7,y:-13.4},3).to({regX:52,regY:-1.4,rotation:0,y:-13.3},4).wait(4).to({regY:-1.5,scaleX:1.02,scaleY:0.98,x:48.9},3).to({regY:-1.4,scaleX:1,scaleY:1,x:48.5},2).wait(5));

	// MooseBody
	this.instance_5 = new lib.MooseTween("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-3.8,-18.5,1,1,0,0,0,-0.5,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.03,scaleY:0.95},2).to({scaleX:0.89,scaleY:1.14,y:-42},3).to({regX:-0.6,scaleY:1.07,x:-3.9,y:-59},2).to({regX:-0.5,scaleX:1.03,scaleY:0.95,x:-3.8,y:-18.5},3).to({regX:-0.6,regY:90.1,scaleX:1.08,scaleY:0.9,x:-4,y:-18.4},2).to({regX:-0.5,regY:90,scaleX:1,scaleY:1,x:-3.8,y:-18.5},3).to({_off:true},1).wait(21));

	// mooseChunk2
	this.instance_6 = new lib.MooseChunk1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(50.5,-156,0.817,0.817,-63.9,0,0,0.1,-18.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({_off:false},0).to({regY:-18.4,scaleX:0.75,scaleY:0.75,rotation:-52.6,x:222.5,y:-107},5).to({_off:true},1).wait(15));

	// flash0.ai
	this.instance_7 = new lib.MooseChunk1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(70.5,-146,1,1,0,0,0,0,-18.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(16).to({_off:false},0).to({regY:-18.4,rotation:77,x:200.5,y:-70},5).to({_off:true},1).wait(15));

	// pinkchunk
	this.instance_8 = new lib.PinkChunk1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(58,-131.7,1,1,0,0,0,0,-16.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(16).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:54.7,x:128,y:-118.7},3).to({scaleX:1,scaleY:1,rotation:91,x:178,y:-111.7},2).to({_off:true},1).wait(15));

	// blooddrop3
	this.instance_9 = new lib.BloodDrop1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(63.2,-127.4,1.153,1.153,11.7,0,0,0.1,-7.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(16).to({_off:false},0).to({rotation:32.7,x:124.2,y:-86.4},3).to({_off:true},1).wait(17));

	// blooddrop2
	this.instance_10 = new lib.BloodDrop1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(62.2,-149.4,1.153,1.153,-28.8,0,0,0.1,-7.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(16).to({_off:false},0).to({scaleX:1.41,scaleY:1.41,rotation:-21.3,x:119.4,y:-177.9},3).to({_off:true},1).wait(17));

	// blooddrop1
	this.instance_11 = new lib.BloodDrop1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(58.8,-137.8,1.153,1.153,-4.5,0,0,0,-7.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(16).to({_off:false},0).to({regX:-0.1,scaleX:1.41,scaleY:1.41,rotation:-2.2,x:147.2,y:-138},3).to({_off:true},1).wait(17));

	// MooseAntler
	this.instance_12 = new lib.MooseAntler();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-99.6,-163.8,1,1,0,0,180,0,-31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({skewX:6.7,skewY:186.7,x:-100.1,y:-157.3},2).to({regX:0.1,skewX:-4.2,skewY:175.8,x:-93.6,y:-202.8},3).to({skewX:2,skewY:182,x:-93.7,y:-211.3},2).to({regX:0,skewX:6.7,skewY:186.7,x:-100.1,y:-157.3},3).to({regX:0.1,skewX:5.5,skewY:185.5,x:-105.6,y:-149.3},2).to({regX:0,skewX:0,skewY:180,x:-99.6,y:-163.8},3).wait(1).to({regX:-0.1,skewX:-60.6,skewY:119.4,x:-95.4,y:-72.4},5).to({skewX:-5.6,skewY:174.4,x:-83.4,y:-69.7},5).to({skewX:-8.1,skewY:171.9,x:-85.4},6).wait(5));

	// MooseAntler
	this.instance_13 = new lib.MooseAntler();
	this.instance_13.parent = this;
	this.instance_13.setTransform(92,-163.8,1,1,0,0,0,0,-31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({rotation:-6.7,x:89.5,y:-160.3},2).to({rotation:7.7,x:85,y:-204.8},3).to({regY:-31.5,rotation:-4.3,x:84.5,y:-213.3},2).to({regY:-31.4,rotation:-6.7,x:89.5,y:-160.3},3).to({rotation:-5,x:97,y:-150.3},2).to({rotation:0,x:92,y:-163.8},3).wait(1).to({regX:0.1,regY:-31.5,rotation:-31,x:98.5,y:-66.8},5).to({rotation:20.7,x:109,y:-61.7},5).to({regX:0,rotation:6.5,x:108.4},6).wait(5));

	// MooseShadow
	this.instance_14 = new lib.Shadow();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-4.1,-17.7,1,1,0,0,0,78,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({scaleX:1.05,scaleY:1.05},2).to({scaleX:0.86,scaleY:0.86},3).wait(2).to({scaleX:1.05,scaleY:1.05},3).wait(2).to({scaleX:1,scaleY:1},3).wait(22));

	// MooseDeathEyeSplat
	this.instance_15 = new lib.MooseDeathEyeBlood();
	this.instance_15.parent = this;
	this.instance_15.setTransform(9.5,13.5,0.665,0.522,0,0,0,0,-20.9);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(27).to({_off:false},0).to({regY:-21,scaleX:1.23,scaleY:0.72,y:12.4},3).to({scaleX:1.26,scaleY:0.84},4).to({regY:-20.9,scaleX:1.27,scaleY:0.91,y:12.5},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130.9,-211.3,254.2,211.1);
p.frameBounds = [rect, new cjs.Rectangle(-131.3,-204.5,253.6,204.7), new cjs.Rectangle(-134.9,-197.8,259.1,198.4), new cjs.Rectangle(-129.4,-220.9,248.8,220.5), new cjs.Rectangle(-127,-244.1,244.8,242.5), new cjs.Rectangle(-127.1,-267.3,247.3,264.6), new cjs.Rectangle(-124.8,-269.5,240.8,266.8), new cjs.Rectangle(-125.9,-271.8,244,269.1), new cjs.Rectangle(-127.2,-247.1,245.1,245.5), new cjs.Rectangle(-129.5,-222.5,249.2,222), new cjs.Rectangle(-134.9,-197.8,259.1,198.4), new cjs.Rectangle(-134.6,-193.3,259.5,193.9), new cjs.Rectangle(-139.7,-188.9,270.7,189.5), new cjs.Rectangle(-135.1,-196.2,262,196.6), new cjs.Rectangle(-132.9,-203.7,258,203.7), new cjs.Rectangle(-130.9,-211.3,254.2,211.1), new cjs.Rectangle(-130.9,-211.1,254.2,210.9), new cjs.Rectangle(-130.7,-216.2,255.7,216), new cjs.Rectangle(-131.5,-227.5,271.1,227.3), new cjs.Rectangle(-132.2,-238.6,300.6,238.4), new cjs.Rectangle(-132.2,-249.8,334.5,249.6), new cjs.Rectangle(-138.2,-264.7,379.2,264.5), new cjs.Rectangle(-128.9,-245.5,262.9,245.3), new cjs.Rectangle(-125.9,-229.9,260.7,229.7), new cjs.Rectangle(-122.4,-214.3,258.4,214.1), new cjs.Rectangle(-118.4,-198.7,257,198.5), new cjs.Rectangle(-117.7,-183.1,267,182.9), new cjs.Rectangle(-115.3,-167.8,257,196.2), new cjs.Rectangle(-115.7,-164.5,257.1,189.9), new cjs.Rectangle(-116,-161.5,256.9,187.9), new cjs.Rectangle(-116.4,-158.9,256.9,191.8), new cjs.Rectangle(-116.8,-160.3,257,188.5), new cjs.Rectangle(-121,-162.3,264.1,191.2), new cjs.Rectangle(-117.2,-162.3,257.2,191.9), new cjs.Rectangle(-117.2,-162.3,257.2,199), new cjs.Rectangle(-117.2,-162.3,257.2,193.2), new cjs.Rectangle(-121,-162.3,264.1,200.8)];


(lib.Menu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:1});

	// timeline functions:
	this.frame_4 = function() {
		playSound("LaserGunShot");
	}
	this.frame_10 = function() {
		playSound("EnemyHit");
	}
	this.frame_43 = function() {
		this.dispatchEvent("start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(6).call(this.frame_10).wait(33).call(this.frame_43).wait(1));

	// hero
	this.instance = new lib.Hero("single",0);
	this.instance.parent = this;
	this.instance.setTransform(118.2,406.8,0.8,0.8,0,0,0,21.2,-125.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({mode:"synched",startPosition:12,loop:false},0).to({x:348,startPosition:1},12).to({x:588},12).to({x:838,startPosition:13},12).to({_off:true},1).wait(6));

	// shot
	this.instance_1 = new lib.HeroBullet();
	this.instance_1.parent = this;
	this.instance_1.setTransform(344.5,366.2,1,1,0,0,0,0,-8.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({x:611.4,mode:"synched",startPosition:7,loop:false},5).to({_off:true},4).wait(30));

	// beaver
	this.enemyBeaver = new lib.EnemyBeaver();
	this.enemyBeaver.name = "enemyBeaver";
	this.enemyBeaver.parent = this;
	this.enemyBeaver.setTransform(664.5,409.1,0.64,0.64,0,0,0,0,-109.7);

	this.instance_2 = new lib.EnemyBeaver("synched",24,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(664.5,410.2,0.64,0.64,0,0,0,0,-109.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.enemyBeaver}]}).to({state:[{t:this.instance_2}]},10).to({state:[]},33).wait(1));

	// logo
	this.instance_3 = new lib.logo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(250.3,69.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(44));

	// bg
	this.startBtn = new lib.StartBtn();
	this.startBtn.name = "startBtn";
	this.startBtn.parent = this;
	this.startBtn.setTransform(396.1,447.1);
	new cjs.ButtonHelper(this.startBtn, 0, 1, 2, false, new lib.StartBtn(), 3);

	this.instance_4 = new lib.MenuBG();
	this.instance_4.parent = this;
	this.instance_4.setTransform(420.4,334.4,1,1,0,0,0,423.8,276.2);
	this.instance_4.cache(-14,-2,826,557);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.startBtn}]}).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15.5,58.2,821.8,552.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-15.5,58.2,828.5,552.6), new cjs.Rectangle(-15.5,58.2,860.7,552.6), new cjs.Rectangle(-15.5,58.2,893,552.6), new cjs.Rectangle(-15.5,58.2,925.1,552.6), new cjs.Rectangle(-15.5,58.2,927.8,552.6), new cjs.Rectangle(-15.5,58.2,930.5,552.6), new cjs.Rectangle(-15.5,58.2,933.2,552.6), new cjs.Rectangle(-15.5,58.2,935.9,552.6), new cjs.Rectangle(-15.5,58.2,938.6,552.6), rect=new cjs.Rectangle(-15.5,58.2,941.2,552.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-15.5,58.2,821.8,552.6)];


// stage content:
(lib.PlanetaryGary_art = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Numbers
	this.instance = new lib.ScoreboardNumbers();
	this.instance.parent = this;
	this.instance.setTransform(268,10);

	this.instance_1 = new lib.ScoreboardNumbers();
	this.instance_1.parent = this;
	this.instance_1.setTransform(242,10);

	this.instance_2 = new lib.ScoreboardNumbers();
	this.instance_2.parent = this;
	this.instance_2.setTransform(215.5,10);

	this.instance_3 = new lib.ScoreboardNumbers();
	this.instance_3.parent = this;
	this.instance_3.setTransform(189.5,10);

	this.instance_4 = new lib.ScoreboardNumbers();
	this.instance_4.parent = this;
	this.instance_4.setTransform(163.5,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Scoreboard
	this.instance_5 = new lib.Scoreboard();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Tips
	this.instance_6 = new lib.Tips();
	this.instance_6.parent = this;
	this.instance_6.setTransform(374.5,186,1,1,0,0,0,0,-60.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// HeroBullet
	this.instance_7 = new lib.HeroBullet("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(273.5,355.2,1,1,0,0,0,0,-8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Hero
	this.instance_8 = new lib.Hero();
	this.instance_8.parent = this;
	this.instance_8.setTransform(97.2,377.8,1,1,0,0,0,21.2,-125.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// EnemyBeaver
	this.instance_9 = new lib.EnemyBeaver("single",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(726.5,380.1,1,1,0,0,0,0,-109.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// EnemyMoose
	this.instance_10 = new lib.EnemyMoose("single",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(381.5,394.5,1,1,0,0,0,0,-105.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Obstacle
	this.instance_11 = new lib.Trap("single",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(229.9,501.9,1,1,0,0,0,0,-90.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// bgGroundDeco1
	this.instance_12 = new lib.BGFrontDeco("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(368.5,561.1,1.166,1.166,0,0,0,0,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// bgGround
	this.bgGround = new lib.BGFront();
	this.bgGround.name = "bgGround";
	this.bgGround.parent = this;
	this.bgGround.setTransform(399.8,514.4,1,1,0,0,0,0,-86.4);

	this.timeline.addTween(cjs.Tween.get(this.bgGround).wait(1));

	// bgMidGroundDeco4
	this.instance_13 = new lib.BGMidDeco("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(504.4,338.6,1,1,0,0,0,0,-18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// bgMidGround
	this.instance_14 = new lib.BGMid("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-0.4,351.1,1,1,0,0,0,0,-80.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// bgBuilding1
	this.instance_15 = new lib.BGBuilding("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(131.6,214.1,1,1,0,0,0,0,-129.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// bgCloud1
	this.instance_16 = new lib.BGCloud("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(151.6,186.1,1,1,0,0,0,0,-38.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(399.5,300,813.1,613.8);
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: '66509341DAAA44439E6E47782F0AE206',
	width: 800,
	height: 600,
	fps: 20,
	color: "#C7F0C1",
	opacity: 1.00,
	manifest: [
		{src:"sounds/EnemyHit.mp3?1522718340265", id:"EnemyHit"},
		{src:"sounds/LaserGunShot.mp3?1522718340265", id:"LaserGunShot"}
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
an.compositions['66509341DAAA44439E6E47782F0AE206'] = {
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