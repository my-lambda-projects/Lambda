var strNumber = "two+one";
var strValue;

switch (strNumber) {
  case "one":
    strValue = 1;
    break;
  case "two":
    strValue = 2;
    break;

  case "two+one":
  case "three":
    strValue = 3;
    break;
  case "four":
    strValue = 4;
    break;
  default:
    strValue = "";
}

console.log(strValue);

if (typeof strValue !== "number") {
  console.log("Was not able to convert " + strNumber + " to a digit");
}
