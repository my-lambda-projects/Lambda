(function (window, document) {
  var input = document.getElementById("input");
  var result = document.getElementById("result");
  var example = document.getElementById("example");
  var permalink = document.getElementById("permalink");
  // https://web-dev-resource-hub.netlify.app/notes/localstorage-pattern
  var storage = (function () {
    var uid = new Date();
    var storage;
    var result;
    try {
      (storage = window.localStorage).setItem(uid, uid);
      result = storage.getItem(uid) == uid;
      storage.removeItem(uid);
      return result && storage;
    } catch (exception) {}
  })();

  function encode(string) {
    // URL-encode some more characters to avoid issues when using permalink URLs in Markdown
    return encodeURIComponent(string).replace(/['()_*]/g, function (character) {
      return "%" + character.charCodeAt().toString(16);
    });
  }

  function htmlEscape(string) {
    return string
      .replace(/"/g, "&quot;")
      .replace(/&/, "&amp;")
      .replace(/`/g, "&#x60;"); // IE ಠ_ಠ
  }

  function update() {
    var value = input.textContent;
    var html = '<body bgcolor="' + htmlEscape(value) + '">';
    result.srcdoc = html;
    example.href = "data:text/html;charset=utf-8," + html;
    permalink.hash = encode(value);
    storage && (storage.bgColor = value);
  }

  // https://web-dev-resource-hub.netlify.app/notes/oninput
  input.onkeyup = update;
  input.oninput = function () {
    input.onkeyup = null;
    update();
  };

  input.onpaste = function (event) {
    event.preventDefault();
    var text = event.clipboardData.getData("text/plain").trim();
    document.execCommand("insertText", false, text);
  };

  if (storage) {
    storage.bgColor && (input.textContent = storage.bgColor);
    update();
  }

  window.onhashchange = function () {
    input.textContent = decodeURIComponent(location.hash.slice(1));
    update();
  };

  if (location.hash) {
    window.onhashchange();
  }

  setTimeout(function () {
    result.srcdoc = result.srcdoc;
  }, 0);

  input.focus();
})(this, document);
