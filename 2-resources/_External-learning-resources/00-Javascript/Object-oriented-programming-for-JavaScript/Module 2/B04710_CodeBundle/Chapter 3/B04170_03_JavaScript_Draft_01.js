function ScottishFold(name, favoriteToy, energy) {
  this.name = name;
  this.favoriteToy = favoriteToy;
  this.energy = energy;
}

ScottishFold.generalHealth = 3;
ScottishFold.affectionateWithFamily = 5;
ScottishFold.intelligence = 4;
ScottishFold.kidFriendly = 5;
ScottishFold.petFriendly = 4;

console.log(ScottishFold.generalHealth);

ScottishFold.generalHealth = 4;

var lucifer = new ScottishFold("Lucifer", "Tennis ball", 4);
console.log(lucifer.constructor.generalHealth);

function ScottishFold(name, favoriteToy, energy) {
  var _name = name;
  var _favoriteToy = favoriteToy;
  var _energy = energy;
}

var lucifer = new ScottishFold("Lucifer", "Tennis ball", 4);
console.log(lucifer._name);
console.log(lucifer._favoriteToy);
console.log(lucifer._energy);

function ScottishFold(name, favoriteToy, energy) {
  var _name = name;
  var _favoriteToy = favoriteToy;
  var _energy = energy;

  Object.defineProperty(this, "name", {
    get: function () {
      return _name;
    },
  });
}

var lucifer = new ScottishFold("Lucifer", "Tennis ball", 4);
console.log(lucifer.name);
lucifer.name = "Jerry";
console.log(lucifer.name);

function ScottishFold(name, favoriteToy, energy) {
  var _name = name;
  var _favoriteToy = favoriteToy;
  var _energy = energy;

  Object.defineProperty(this, "name", {
    get: function () {
      return _name;
    },
  });
  Object.defineProperty(this, "favoriteToy", {
    get: function () {
      return _favoriteToy;
    },
    set: function (val) {
      _favoriteToy = val;
    },
  });
}

function ScottishFold(name, favoriteToy, energy) {
  var _name = name;
  var _favoriteToy = favoriteToy;
  var _energy = energy;

  Object.defineProperty(this, "name", {
    get: function () {
      return _name;
    },
  });
  Object.defineProperty(this, "favoriteToy", {
    get: function () {
      return _favoriteToy;
    },
    set: function (val) {
      _favoriteToy = val;
    },
  });
  Object.defineProperty(this, "energy", {
    get: function () {
      return _energy;
    },
    set: function (val) {
      if (val < 0) {
        _energy = 0;
      } else if (val > 5) {
        _energy = 5;
      } else {
        _energy = val;
      }
    },
  });
}

var garfield = new ScottishFold("Garfield", "Pillow", 1);
garfield.energy = -7;
console.log(Garfield.energy);
garfield.energy = 35;
console.log(Garfield.energy);
garfield.energy = 3;
console.log(Garfield.energy);

function MutableVector3D(x, y, z) {
  var _x = x;
  var _y = y;
  var _z = z;

  Object.defineProperty(this, "x", {
    get: function () {
      return _x;
    },
    set: function (val) {
      _x = val;
    },
  });

  Object.defineProperty(this, "y", {
    get: function () {
      return _y;
    },
    set: function (val) {
      _y = val;
    },
  });

  Object.defineProperty(this, "z", {
    get: function () {
      return _z;
    },
    set: function (val) {
      _z = val;
    },
  });

  this.sum = function (deltaX, deltaY, deltaZ) {
    _x += deltaX;
    _y += deltaY;
    _z += deltaZ;
  };
}

MutableVector3D.originVector = function () {
  return new MutableVector3D(0, 0, 0);
};

var mutableVector3D = MutableVector3D.originVector();
mutableVector3D.sum(5, 10, 15);
console.log(mutableVector3D.x, mutableVector3D.y, mutableVector3D.z);

function ImmutableVector3D(x, y, z) {
  var _x = x;
  var _y = y;
  var _z = z;

  Object.defineProperty(this, "x", {
    get: function () {
      return _x;
    },
  });

  Object.defineProperty(this, "y", {
    get: function () {
      return _y;
    },
  });

  Object.defineProperty(this, "z", {
    get: function () {
      return _z;
    },
  });
}

ImmutableVector3D.prototype.sum = function (deltaX, deltaY, deltaZ) {
  return new ImmutableVector3D(
    this.x + deltaX,
    this.y + deltaY,
    this.z + deltaZ
  );
};

ImmutableVector3D.equalElementsVector = function (initialValue) {
  return new ImmutableVector3D(initialValue, initialValue, initialValue);
};

ImmutableVector3D.originVector = function () {
  return ImmutableVector3D.equalElementsVector(0);
};

var vector0 = ImmutableVector3D.originVector();
var vector1 = vector0.sum(5, 10, 15);
console.log(vector1.x, vector1.y, vector1.z);
