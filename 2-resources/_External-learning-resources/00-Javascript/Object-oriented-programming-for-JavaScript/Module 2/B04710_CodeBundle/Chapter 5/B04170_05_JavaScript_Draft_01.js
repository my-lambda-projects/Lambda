function ComicCharacter(nickName) {
  this.nickName = nickName;
}

function GameCharacter(fullName, initialScore, x, y) {
  this.fullName = fullName;
  this.initialScore = initialScore;
  this.x = x;
  this.y = y;
}

function Alien(numberOfEyes) {
  this.numberOfEyes = numberOfEyes;
}

function Wizard(spellPower) {
  this.spellPower = spellPower;
}

function Knight(swordPower, swordHeight) {
  this.swordPower = swordPower;
  this.swordHeight = swordHeight;
}

function AngryDog(nickName) {
  this.comicCharacter = new ComicCharacter(nickName);

  Object.defineProperty(this, "nickName", {
    get: function () {
      return this.comicCharacter.nickName;
    },
  });

  this.drawSpeechBalloon = function (message, destination) {
    var composedMessage = "";
    if (destination) {
      composedMessage = destination.nickName + ", " + message;
    } else {
      composedMessage = message;
    }
    console.log(this.nickName + ' -> "' + composedMessage + '"');
  };

  this.drawThoughtBalloon = function (message) {
    console.log(this.nickName + " ***" + message + "***");
  };
}

function AngryCat(nickName, age) {
  this.comicCharacter = new ComicCharacter(nickName);
  this.age = age;

  Object.defineProperty(this, "nickName", {
    get: function () {
      return this.comicCharacter.nickName;
    },
  });

  this.drawSpeechBalloon = function (message, destination) {
    var composedMessage = "";
    if (destination) {
      composedMessage =
        destination.nickName +
        " === " +
        this.nickName +
        ' ---> "' +
        message +
        '"';
    } else {
      composedMessage = this.nickName + ' -> "';
      if (this.age > 5) {
        composedMessage += "Meow";
      } else {
        composedMessage += "Meeeooow Meeeooow";
      }
      composedMessage += " " + message + '"';
    }
    console.log(composedMessage);
  };

  this.drawThoughtBalloon = function (message) {
    console.log(this.comicCharacter.nickName + " ***" + message + "***");
  };
}

function AngryCat(nickName, age, fullName, initialScore, x, y) {
  this.comicCharacter = new ComicCharacter(nickName);
  this.gameCharacter = new GameCharacter(fullName, initialScore, x, y);
  this.age = age;
  Object.defineProperty(this, "nickName", {
    get: function () {
      return this.comicCharacter.nickName;
    },
  });

  Object.defineProperty(this, "fullName", {
    get: function () {
      return this.gameCharacter.fullName;
    },
  });

  Object.defineProperty(this, "score", {
    get: function () {
      return this.gameCharacter.score;
    },
    set: function (val) {
      this.gameCharacter.score = val;
    },
  });

  Object.defineProperty(this, "x", {
    get: function () {
      return this.gameCharacter.x;
    },
    set: function (val) {
      this.gameCharacter.x = val;
    },
  });

  Object.defineProperty(this, "y", {
    get: function () {
      return this.gameCharacter.y;
    },
    set: function (val) {
      this.gameCharacter.y = val;
    },
  });
  this.drawSpeechBalloon = function (message, destination) {
    var composedMessage = "";
    if (destination) {
      composedMessage =
        destination.nickName +
        " === " +
        this.nickName +
        ' ---> "' +
        message +
        '"';
    } else {
      composedMessage = this.nickName + ' -> "';
      if (this.age > 5) {
        composedMessage += "Meow";
      } else {
        composedMessage += "Meeeooow Meeeooow";
      }
      composedMessage += " " + message + '"';
    }
    console.log(composedMessage);
  };

  this.drawThoughtBalloon = function (message) {
    console.log(this.nickName + " ***" + message + "***");
  };
  this.draw = function (x, y) {
    this.x = x;
    this.y = y;
    console.log(
      "Drawing AngryCat " +
        this.fullName +
        " at x: " +
        this.x +
        ", y: " +
        this.y
    );
  };

  this.move = function (x, y) {
    this.x = x;
    this.y = y;
    console.log(
      "Drawing AngryCat " +
        this.fullName +
        " at x: " +
        this.x +
        ", y: " +
        this.y
    );
  };

  this.isIntersectingWith = function (otherCharacter) {
    return this.x == otherCharacter.x && this.y == otherCharacter.y;
  };
  this.createAlien = function (numberOfEyes) {
    this.alien = new Alien(numberOfEyes);

    Object.defineProperty(this, "numberOfEyes", {
      get: function () {
        return this.alien.numberOfEyes;
      },
      set: function (val) {
        this.alien.numberOfEyes = val;
      },
    });

    this.appear = function () {
      console.log(
        "I'm " +
          this.fullName +
          " and you can see my " +
          this.numberOfEyes +
          " eyes."
      );
    };

    this.disappear = function () {
      console.log(this.fullName + " disappears.");
    };
  };
  this.createWizard = function (spellPower) {
    this.wizard = new Wizard(spellPower);

    Object.defineProperty(this, "spellPower", {
      get: function () {
        return this.wizard.spellPower;
      },
      set: function (val) {
        this.wizard.spellPower = val;
      },
    });

    this.disappearAlien = function (alien) {
      console.log(
        this.fullName +
          " uses his " +
          this.spellPower +
          " to make the alien with " +
          alien.numberOfEyes +
          " eyes disappear."
      );
    };
  };
  this.createKnight = function (swordPower, swordHeight) {
    this.knight = new Knight(swordPower, swordHeight);

    Object.defineProperty(this, "swordPower", {
      get: function () {
        return this.knight.swordPower;
      },
      set: function (val) {
        this.knight.swordPower = val;
      },
    });

    Object.defineProperty(this, "swordHeight", {
      get: function () {
        return this.knight.swordHeight;
      },
      set: function (val) {
        this.knight.swordHeight = val;
      },
    });

    this.writeLinesAboutTheSword = function () {
      console.log(this.fullName + " unsheaths his sword.");
      console.log(
        "Sword Power: " +
          this.swordPower +
          ". Sword Weight: " +
          this.swordWeight
      );
    };

    this.unsheathSword = function (target) {
      this.writeLinesAboutTheSword();
      if (target) {
        console.log(
          "The sword targets an alien with " + target.numberOfEyes + " eyes."
        );
      }
    };
  };
}

var AngryCatAlien = function (
  nickName,
  age,
  fullName,
  initialScore,
  x,
  y,
  numberOfEyes
) {
  var alien = new AngryCat(nickName, age, fullName, initialScore, x, y);
  alien.createAlien(numberOfEyes);
  return alien;
};

var AngryCatWizard = function (
  nickName,
  age,
  fullName,
  initialScore,
  x,
  y,
  spellPower
) {
  var wizard = new AngryCat(nickName, age, fullName, initialScore, x, y);
  wizard.createWizard(spellPower);
  return wizard;
};

var AngryCatKnight = function (
  nickName,
  age,
  fullName,
  initialScore,
  x,
  y,
  swordPower,
  swordHeight
) {
  var knight = new AngryCat(nickName, age, fullName, initialScore, x, y);
  knight.createKnight(swordPower, swordHeight);
  return knight;
};

var angryDog1 = new AngryDog("Brian");
var angryDog2 = new AngryDog("Merlin");

angryDog1.drawSpeechBalloon("Hello, my name is " + angryDog1.nickName);
angryDog1.drawSpeechBalloon("How do you do?", angryDog2);
angryDog2.drawThoughtBalloon("Who are you? I think.");

var angryCat1 = new AngryCat("Garfield", 10, "Mr. Garfield", 0, 10, 20);
angryCat1.drawSpeechBalloon("Hello, my name is " + angryCat1.nickName);
angryDog1.drawSpeechBalloon("Hello " + angryCat1.NickName, angryCat1);

var alien1 = AngryCatAlien("Alien", 120, "Mr. Alien", 0, 10, 20, 3);
if (alien1.isIntersectingWith(angryCat1)) {
  alien1.move(angryCat1.x + 20, angryCat1.y + 20);
}
alien1.appear();

var wizard1 = new AngryCatWizard(
  "Gandalf",
  75,
  "Mr. Gandalf",
  10000,
  30,
  40,
  100
);
wizard1.draw(wizard1.x, wizard1.y);
wizard1.disappearAlien(alien1);
alien1.appear();

var knight1 = new AngryCatKnight(
  "Camelot",
  35,
  "Sir Camelot",
  5000,
  50,
  50,
  100,
  30
);
knight1.draw(knight1.x, knight1.y);
knight1.unsheathSword(alien1);

alien1.drawThoughtBalloon("I must be friendly or I'm dead...");
alien1.drawSpeechBalloon("Pleased to meet you, Sir.", knight1);
