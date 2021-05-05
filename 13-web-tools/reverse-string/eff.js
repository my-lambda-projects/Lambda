(function(window, document) {

	var textarea = document.getElementsByTagName('textarea')[0];
	var characters = document.getElementById('characters');
	var pre = document.getElementsByTagName('pre')[0];
	var output = document.getElementById('output');
	var permalink = document.getElementById('permalink');
	// https://web-dev-resource-hub.netlify.app/notes/localstorage-pattern
	var storage = (function() {
		var uid = new Date;
		var storage;
		var result;
		try {
			(storage = window.localStorage).setItem(uid, uid);
			result = storage.getItem(uid) == uid;
			storage.removeItem(uid);
			return result && storage;
		} catch (exception) {}
	}());
	var characterReferences;

	function encode(string) {
		// URL-encode some more characters to avoid issues when using permalink URLs in Markdown
		return encodeURIComponent(string).replace(/['()_*]/g, function(character) {
			return '%' + character.charCodeAt().toString(16);
		});
	}

	function text(el, str) {
		if (str == null) {
			return el.innerText || el.textContent;
		}
		el.innerText != null && (el.innerText = str);
		el.textContent != null && (el.textContent = str);
	}

	function update() {
		try {
			var value = textarea.value,
			    result = esrever.reverse(value);
			text(output, result || '[no output]');
			pre.className = result ? '' : 'fail';
			storage && (storage.reverse = value);
		} catch (exception) {
			pre.className = 'fail';
			text(output, error);
		}
		permalink.hash = encode(value);
	};

	// https://web-dev-resource-hub.netlify.app/notes/oninput
	textarea.onkeyup = update;
	textarea.oninput = function() {
		textarea.onkeyup = null;
		update();
	};

	if (storage) {
		storage.reverse && (textarea.value = storage.reverse);
		update();
	}

	window.onhashchange = function() {
		textarea.value = decodeURIComponent(location.hash.slice(1));
		update();
	};

	if (location.hash) {
		window.onhashchange();
	}

}(this, document));

// Google Analytics

