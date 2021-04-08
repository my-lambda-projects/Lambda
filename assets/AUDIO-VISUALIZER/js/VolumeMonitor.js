/*
* VolumeMonitor
* Visit http://github.com/gskinner/ for documentation, updates and examples.
*
* Copyright (c) 2011 gskinner.com, inc.
* 
* Distributed under the terms of the MIT license.
* http://www.opensource.org/licenses/mit-license.html
*
* This notice shall be included in all copies or substantial portions of the Software.
*/

(function() {


var VolumeMonitor = function(webAudioContext, averageTime, deltaTime, mode, tickInterval) {
  this.initialize(webAudioContext, averageTime, deltaTime, mode, tickInterval);
}
var p = VolumeMonitor.prototype;
	
// constants:
	VolumeMonitor.PEAK = 0;
	VolumeMonitor.RMS = 1;
	VolumeMonitor.AVERAGE = 2;
	
// public properties:
	p.mode = 0;
	p.gain = 1;


// private properties:
	p._ctx = null;
	p._analyserNode = null;
	p._waveForm = null;
	p._deltaT = 0;
	p._avgT = 0;
	p._maxT = 0;
	p._lastT = 0;
	p._vals;
	p._intervalID = 0;
	p._data = null;

	
// constructor:
	/** 
	 * Initialization method.
	 * @method initialize
	 * @protected
	*/
	p.initialize = function(plugin, averageTime, deltaTime, mode, tickInterval) {
		var ctx = this._ctx = plugin.context;
		this._deltaT = deltaTime||100;
		this._avgT = averageTime||200;
		this._maxT = Math.max(this._deltaT, this._avgT);
		this.mode = mode||0;
		this._data = [];
		
		// create an analyser node
		this._analyserNode = ctx.createAnalyser();
		this._analyserNode.fftSize = 256;  //The size of the FFT used for frequency-domain analysis. This must be a power of two
		this._analyserNode.smoothingTimeConstant = 0;  //A value from 0 -> 1 where 0 represents no time averaging with the last analysis frame

		// attach visualizer node to our existing dynamicsCompressorNode
		var dynamicsNode = plugin.dynamicsCompressorNode;
		dynamicsNode.connect(this._analyserNode);

		// set up the array that we use to retrieve the analyserNode data
		this._waveForm = new Uint8Array(this._analyserNode.fftSize); // we're using waveform, not FFT, so we don't want to use frequencyBinCount
		
		if (tickInterval > 0) {
			var _this = this;
			this._intervalID = setInterval(function() { _this.tick(); }, tickInterval);
		}
	}
	
// public methods:
	p.tick = function() {
		var waveForm = this._waveForm;
		var mode = this.mode;
		var t = (new Date()).getTime();
		this._analyserNode.getByteTimeDomainData(waveForm);
		
		var valR = 0;
		for (var i=0, l=waveForm.length; i<l; i++) {
			var r = waveForm[i]/128-1; // analyser data seems to be monaural.
			if (r < 0) { r *= -1; }
			
			if (mode==1) { valR += r*r; } // RMS
			else if (mode == 2) { valR += r; } // average
			else if (r > valR) { valR = r; } // peak
		}
		if (mode == 1) { valR = Math.sqrt(valR/l); }
		else if (mode == 2) { valR /= l; }
		valR = Math.min(1,this.gain*valR);
		
		var data = this._data;
		var o = {vol:valR, t:t};
		data.unshift(o);
		
		var sumR = 0;
		var deltaO;
		var count = 0;
		for (var i=data.length-1; i>=0; i--) {
			var o2 = data[i];
			if (o2.t < t-this._maxT) { data.pop(); continue; }
			if (o2.t >= t-this._avgT) { sumR += o2.vol; count++; }
			if (!deltaO && o2.t >= t-this._deltaT) { deltaO = o2; }
		}
		o.avg = sumR/count;
		o.delta = valR-deltaO.vol;
		o.avgDelta = o.avg-deltaO.avg;
		this._lastT = t;
		return o;
	}
	
	p.stop = function() {
		clearInterval(this._intervalID);
	}

	p.getData = function() {
		return this._data[0]||{vol:0,avg:0,delta:0,t:0};
	}

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[VolumeMonitor]";
	}
	
// private methods:
	
window.VolumeMonitor = VolumeMonitor;
}());