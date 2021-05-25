var APP = APP || {};
APP.General = APP.General || {};
APP.General.FloorPlanElement = function () {};
APP.General.FloorPlanElement.prototype.category = "Undefined";
APP.General.FloorPlanElement.prototype.description = "Undefined";
APP.General.FloorPlanElement.prototype.x = 0;
APP.General.FloorPlanElement.prototype.y = 0;
APP.General.FloorPlanElement.prototype.width = 0;
APP.General.FloorPlanElement.prototype.height = 0;
APP.General.FloorPlanElement.prototype.parent = null;

APP.General.FloorPlanElement.prototype.initialize = function (
  x,
  y,
  width,
  height,
  parent
) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.parent = parent;
};

APP.General.FloorPlanElement.prototype.moveTo = function (x, y) {
  this.x = x;
  this.y = y;
};

APP.General.FloorPlanElement.prototype.printCategory = function () {
  console.log(this.category);
};

APP.General.FloorPlanElement.prototype.printDescription = function () {
  console.log(this.description);
};

APP.General.FloorPlanElement.prototype.draw = function () {
  this.printCategory();
  this.printDescription();
  console.log(
    "X: " +
      this.x +
      ", Y: " +
      this.y +
      ". Width: " +
      this.width +
      ", Height: " +
      this.height +
      "."
  );
};

var APP = APP || {};
APP.Build = APP.Build || {};
APP.Build.Rooms = APP.Build.Rooms || {};
APP.Build.Rooms.Room = function () {};
APP.Build.Rooms.Room.prototype = new APP.General.FloorPlanElement();
APP.Build.Rooms.Room.prototype.constructor = APP.Build.Rooms.Room;
APP.Build.Rooms.Room.prototype.category = "Room";

APP.Build.Rooms.SquareRoom = function (x, y, width, parent) {
  this.initialize(x, y, width, width, parent);
};
APP.Build.Rooms.SquareRoom.prototype = new APP.Build.Rooms.Room();
APP.Build.Rooms.SquareRoom.prototype.constructor = APP.Build.Rooms.SquareRoom;
APP.Build.Rooms.SquareRoom.prototype.description = "Square room";

APP.Build.Rooms.LShapedRoom = function (x, y, width, height, parent) {
  this.initialize(x, y, width, height, parent);
};
APP.Build.Rooms.LShapedRoom.prototype = new APP.Build.Rooms.Room();
APP.Build.Rooms.LShapedRoom.prototype.constructor = APP.Build.Rooms.LShapedRoom;
APP.Build.Rooms.LShapedRoom.prototype.description = "L-Shaped room";

APP.Build.Rooms.SmallRoom = function (x, y, width, height, parent) {
  this.initialize(x, y, width, height, parent);
};
APP.Build.Rooms.SmallRoom.prototype = new APP.Build.Rooms.Room();
APP.Build.Rooms.SmallRoom.prototype.constructor = APP.Build.Rooms.SmallRoom;
APP.Build.Rooms.SmallRoom.prototype.description = "Small room";

APP.Build.Rooms.Closet = function (x, y, width, height, parent) {
  this.initialize(x, y, width, height, parent);
};
APP.Build.Rooms.Closet.prototype = new APP.Build.Rooms.Room();
APP.Build.Rooms.Closet.prototype.constructor = APP.Build.Rooms.Closet;
APP.Build.Rooms.Closet.prototype.description = "Closet";

var APP = APP || {};
APP.Build = APP.Build || {};
APP.Build.Doors = APP.Build.Doors || {};
APP.Build.Doors.Door = function () {};
APP.Build.Doors.Door.prototype = new APP.General.FloorPlanElement();
APP.Build.Doors.Door.prototype.constructor = APP.Build.Doors.Door;
APP.Build.Doors.Door.prototype.category = "Door";

APP.Build.Doors.EntryDoor = function (x, y, width, height, parent) {
  this.initialize(x, y, width, height, parent);
};
APP.Build.Doors.EntryDoor.prototype = new APP.Build.Doors.Door();
APP.Build.Doors.EntryDoor.prototype.constructor = APP.Build.Doors.EntryDoor;
APP.Build.Doors.EntryDoor.prototype.description = "Entry Door";

var APP = APP || {};
APP.Furnish = APP.Furnish || {};
APP.Furnish.Bedroom = APP.Furnish.Bedroom || {};
APP.Furnish.Bedroom.Beds = APP.Furnish.Bedroom.Beds || {};
APP.Furnish.Bedroom.Beds.Bed = function () {};
APP.Furnish.Bedroom.Beds.Bed.prototype = new APP.General.FloorPlanElement();
APP.Furnish.Bedroom.Beds.Bed.prototype.constructor =
  APP.Furnish.Bedroom.Beds.Bed;
APP.Furnish.Bedroom.Beds.Bed.prototype.category = "Bed";
APP.Furnish.Bedroom.Beds.Bed.prototype.description = "Generic Bed";

APP.Furnish.Bedroom.Beds.FabricBed = function (x, y, width, height, parent) {
  this.initialize(x, y, width, height, parent);
};
APP.Furnish.Bedroom.Beds.FabricBed.prototype =
  new APP.Furnish.Bedroom.Beds.Bed();
APP.Furnish.Bedroom.Beds.FabricBed.prototype.constructor =
  APP.Furnish.Bedroom.Beds.FabricBed;
APP.Furnish.Bedroom.Beds.FabricBed.prototype.description = "Fabric Bed";

if (!APP.Build.Rooms) {
  throw "Rooms objects not available.";
}
if (!APP.Build.Doors) {
  throw "Doors objects not available.";
}
if (!APP.Furnish.Bedroom.Beds) {
  throw "Beds objects not available.";
}

var room1 = new APP.Build.Rooms.SquareRoom(0, 0, 200, null);
var door1 = new APP.Build.Doors.EntryDoor(100, 1, 50, 5, room1);
var bedroom1 = new APP.Build.Rooms.SquareRoom(100, 200, 180, null);
var bed1 = new APP.Furnish.Bedroom.Beds.FabricBed(130, 230, 120, 110, bedroom1);

room1.draw();
door1.draw();
bedroom1.draw();
bed1.draw();
