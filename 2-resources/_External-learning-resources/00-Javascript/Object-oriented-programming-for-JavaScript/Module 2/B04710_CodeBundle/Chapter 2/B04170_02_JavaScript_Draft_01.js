function calculateArea(width, height) { return width * height; }
typeof(calculateArea)



var rectangleArea = calculateArea(300, 200);
console.log(rectangleArea);



console.log(calculateArea.name);



var myObject = {};
typeof(myObject);
myObject



var myRectangle = { width: 300, height: 200 };
typeof(myRectangle);
myRectangle



var myRectangle2 = { width: 500, height: 150 };



var myRectangle2 = { widh: 500, hight: 150 };



function Rectangle(width, height) {
    console.log("I'm creating a new Rectangle");
    this.width = width;
    this.height = height;
}



var rectangle1 = new Rectangle(293, 117);
var rectangle2 = new Rectangle(293, 137);



rectangle1;
rectangle2;



Rectangle {width: 293, height: 117}
Rectangle {width: 293, height: 137}



rectangle1 instanceof Rectangle



function Rectangle(width, height) {
    console.log("I'm creating a new Rectangle");
    this.width = width;
    this.height = height;

    this.calculateArea = function() {
        return this.width * this.height;
    }
}



var rectangle3 = new Rectangle(143, 187);
rectangle3.calculateArea();



var rectangle4 = new rectangle3.constructor(300, 200);



function calculateArea(width, height) {
    return new Rectangle(width, height).calculateArea();
}

calculateArea(143, 187);
