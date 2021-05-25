Animal = function () {};
Animal.prototype.name = "";
Animal.prototype.danceCharacters = "";
Animal.prototype.spelledSound1 = "";
Animal.prototype.spelledSound2 = "";
Animal.prototype.spelledSound3 = "";

Animal.prototype.dance = function () {
  console.log(this.name + " dances " + this.danceCharacters);
};

Animal.prototype.say = function (message) {
  console.log(this.name + " says: " + message);
};

Animal.prototype.sayGoodbye = function (destination) {
  console.log(
    this.name +
      " says goodbye to " +
      destination.name +
      ": " +
      this.spelledSound1 +
      " " +
      this.spelledSound2 +
      " " +
      this.spelledSound3 +
      " "
  );
};

Animal.prototype.sayWelcome = function (destination) {
  console.log(
    this.name + " welcomes " + destination.name + ": " + this.spelledSound2
  );
};

Animal.prototype.sing = function () {
  var spelledSingSound = this.spelledSound1 + " ";
  var message =
    this.name +
    " sings: " +
    Array(4).join(spelledSingSound) +
    ". " +
    Array(3).join(spelledSingSound) +
    ". " +
    spelledSingSound +
    ". ";

  console.log(message);
};

Dog = function (name) {
  this.name = name;
};
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;
Dog.prototype.danceCharacters = "/-\\ \\-\\ /-/";
Dog.prototype.spelledSound1 = "Woof";
Dog.prototype.spelledSound2 = "Wooooof";
Dog.prototype.spelledSound3 = "Grr";

Frog = function (name) {
  this.name = name;
};
Frog.prototype = new Animal();
Frog.prototype.constructor = Frog;
Frog.prototype.danceCharacters = "/|\\ \\|/ ^ ^ ";
Frog.prototype.spelledSound1 = "Ribbit";
Frog.prototype.spelledSound2 = "Croak";
Frog.prototype.spelledSound3 = "Croooaaak";

Party = function (leader) {
  this.leader = leader;
  this.members = [leader];
};

Party.prototype.addMember = function (member) {
  this.members.push(member);
  this.leader.sayWelcome(member);
};

Party.prototype.removeMember = function (member) {
  if (member == this.leader) {
    throw "You cannot remove the leader from the party";
  }
  var index = this.members.indexOf(member);
  if (index > -1) {
    this.members.splice(index, 1);
    member.sayGoodbye(this.leader);
    return true;
  } else {
    return false;
  }
};

Party.prototype.dance = function () {
  this.members.forEach(function (member) {
    member.dance();
  });
};

Party.prototype.sing = function () {
  this.members.forEach(function (member) {
    member.sing();
  });
};

Party.prototype.voteLeader = function () {
  if (this.members.length == 1) {
    throw "You need at least two members to vote a new Leader.";
  }
  var newLeader = this.leader;
  while (newLeader == this.leader) {
    var randomLeader =
      Math.floor(Math.random() * (this.members.length - 1)) + 1;
    newLeader = this.members[randomLeader];
  }
  this.leader.say(newLeader.name + " has been voted as our new party leader.");
  newLeader.dance();
  this.leader = newLeader;
};

var jake = new Dog("Jake");
var duke = new Dog("Duke");
var lady = new Dog("Lady");
var dakota = new Dog("Dakota");

var dogsParty = new Party(jake);

dogsParty.addMember(duke);
dogsParty.addMember(lady);
dogsParty.addMember(dakota);

dogsParty.dance();
dogsParty.removeMember(duke);
dogsParty.voteLeader();
dogsParty.sing();

var frog1 = new Frog("Frog #1");
var frog2 = new Frog("Frog #2");
var frog3 = new Frog("Frog #3");
var frog4 = new Frog("Frog #4");

var frogsParty = new Party(frog1);

frogsParty.addMember(frog2);
frogsParty.addMember(frog3);
frogsParty.addMember(frog4);

frogsParty.dance();
frogsParty.removeMember(frog3);
frogsParty.voteLeader();
frogsParty.sing();

HorseDeeJay = function (name) {
  this.name = name;
};
HorseDeeJay.prototype.playMusicToDance = function () {
  console.log("My name is " + this.name + ". Let's Dance.");
};
HorseDeeJay.prototype.playMusicToSing = function () {
  console.log("Time to sing!");
};

Party = function (leader, deeJay) {
  this.leader = leader;
  this.deeJay = deeJay;
  this.members = [leader];
};

Party.prototype.dance = function () {
  this.deeJay.playMusicToDance();
  this.members.forEach(function (member) {
    member.dance();
  });
};

Party.prototype.sing = function () {
  this.deeJay.playMusicToSing();
  this.members.forEach(function (member) {
    member.sing();
  });
};

var silver = new HorseDeeJay("Silver");
var silverParty = new Party(jake, silver);

silverParty.addMember(duke);
silverParty.addMember(lady);
silverParty.addMember(dakota);

silverParty.dance();
silverParty.removeMember(duke);
silverParty.voteLeader();
silverParty.sing();
