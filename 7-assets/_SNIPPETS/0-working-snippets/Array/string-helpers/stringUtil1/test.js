function reverse(value) {
  return value.split("").reverse().join("");
}

function camel(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

function camelToKebab(value) {
  return value.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
