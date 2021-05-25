function renderSphere(
  x,
  y,
  z,
  radius,
  cameraX,
  cameraY,
  cameraZ,
  cameraDirectionX,
  cameraDirectionY,
  cameraDirectionZ,
  cameraVectorX,
  cameraVectorY,
  cameraVvectorZ,
  cameraPerspectiveFieldOfView,
  cameraNearClippingPlane,
  cameraFarClippingPlane,
  directionalLightX,
  directionalLightY,
  directionalLightZ,
  directionalLightColor
) {}

function renderCube(
  x,
  y,
  z,
  edgeLength,
  cameraX,
  cameraY,
  cameraZ,
  cameraDirectionX,
  cameraDirectionY,
  cameraDirectionZ,
  cameraVectorX,
  cameraVectorY,
  cameraVvectorZ,
  cameraPerspectiveFieldOfView,
  cameraNearClippingPlane,
  cameraFarClippingPlane,
  directionalLightX,
  directionalLightY,
  directionalLightZ,
  directionalLightColor
) {}

var APP = APP || {};
APP.Math = APP.Math || {};
APP.Math.Vector3D = function (x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
};

var APP = APP || {};
APP.Scene = APP.Scene || {};
APP.Scene.DirectionalLight = function (location, color) {
  this.location = location;
  this.color = color;
};

var APP = APP || {};
APP.Scene = APP.Scene || {};
APP.Scene.PerspectiveCamera = function (
  location,
  direction,
  vector,
  fieldOfView,
  nearClippingPlane,
  farClippingPlane
) {
  this.location = location;
  this.direction = direction;
  this.vector = vector;
  this.fieldOfView = fieldOfView;
  this.nearClippingPlane = nearClippingPlane;
  this.farClippingPlane = farClippingPlane;
};

var APP = APP || {};
APP.Shape = APP.Shape || {};
APP.Shape.Sphere = function (location, radius) {
  this.location = location;
  this.radius = radius;
};
APP.Shape.Sphere.prototype.render = function (camera, lights) {
  console.log("Rendering a sphere");
};

var APP = APP || {};
APP.Shape = APP.Shape || {};
APP.Shape.Cube = function (location, edgeLength) {
  this.location = location;
  this.edgeLength = edgeLength;
};
APP.Shape.Cube.prototype.render = function (camera, lights) {
  console.log("Rendering a cube");
};

var APP = APP || {};
APP.Scene = APP.Scene || {};
APP.Scene.Scene = function (initialCamera) {
  this.activeCamera = initialCamera;
  this.shapes = [];
  this.lights = [];
};
APP.Scene.Scene.prototype.addLight = function (light) {
  this.lights.push(light);
};
APP.Scene.Scene.prototype.addShape = function (shape) {
  this.shapes.push(shape);
};
APP.Scene.Scene.prototype.render = function () {
  this.shapes.forEach(function (shape) {
    shape.render(this.activeCamera, this.lights);
  });
};

var camera = new APP.Scene.PerspectiveCamera(
  new APP.Math.Vector3D(30, 30, 30),
  new APP.Math.Vector3D(50, 0, 0),
  new APP.Math.Vector3D(4, 5, 2),
  90,
  20,
  40
);
var sphere = new APP.Shape.Sphere(new APP.Math.Vector3D(20, 20, 20), 8);
var cube = new APP.Shape.Cube(new APP.Math.Vector3D(10, 10, 10), 5);
var light = new APP.Scene.DirectionalLight(new APP.Math.Vector3D(2, 2, 5), 235);
var scene = new APP.Scene.Scene(camera);
scene.addShape(sphere);
scene.addShape(cube);
scene.addLight(light);
scene.render();

renderSphere(
  20,
  20,
  20,
  8,
  30,
  30,
  30,
  50,
  0,
  0,
  4,
  5,
  2,
  90,
  20,
  40,
  2,
  2,
  5,
  235
);
renderCube(
  10,
  10,
  10,
  5,
  30,
  30,
  30,
  50,
  0,
  0,
  4,
  5,
  2,
  90,
  20,
  40,
  2,
  2,
  5,
  235
);
