(function (window, document) {
  const textareas = document.getElementsByTagName("textarea");
  const decoded = textareas[0];
  const encoded = textareas[1];
  const radios = document.getElementsByTagName("input");
  const use24 = radios[0];
  const use26 = radios[1];
  const permalink = document.getElementById("permalink");
  // https://web-dev-resource-hub.netlify.app/notes/localstorage-pattern
  const storage = (function () {
    const uid = new Date();
    let storage;
    let result;
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

  function update() {
    const shouldDecode = this == encoded;
    let value;
    const options = use24.checked
      ? null
      : {
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        };
    if (shouldDecode) {
      value = bacon.decode(encoded.value, options);
      decoded.value = value;
    } else {
      value = bacon.encode(decoded.value, options);
      encoded.value = value;
    }
    value = decoded.value;
    permalink.hash = encode(value);
    storage && (storage.bacon = value);
  }

  // https://web-dev-resource-hub.netlify.app/notes/oninput
  decoded.onkeyup = encoded.onkeyup = use24.onchange = use26.onchange = update;
  decoded.oninput =
    encoded.oninput =
    use24.onchange =
    use26.onchange =
      function () {
        decoded.onkeyup = encoded.onkeyup = null;
        update.call(this);
      };

  if (storage) {
    storage.bacon && (decoded.value = storage.bacon);
    update();
  }

  window.onhashchange = function () {
    decoded.value = decodeURIComponent(location.hash.slice(1));
    update();
  };

  if (location.hash) {
    window.onhashchange();
  }
})(this, document);
