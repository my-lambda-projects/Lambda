module.exports = function(objA, objB) {
  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  for (var i = 0; i < aKeys.length; i++) {
    var key = aKeys[i];
    if (objA[key] !== objB[key]) {
      return false;
    }
  }
  return true;
};
