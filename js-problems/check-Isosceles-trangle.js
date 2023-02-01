/* You are given a triangle with three sides as input. Write a function checkTriangle to check whether a triangle is Isosceles or not using if-else.

Isosceles means two sides are equal */

function checkTriangle(side1, side2, side3) {
  //write your code here
  //don't forget to write return
  if (side1 === side2 && side2 === side3) {
    return "No";
  } else if (side1 === side2 || side1 === side3) {
    return "Yes";
  } else if (side2 === side1 || side2 === side3) {
    return "Yes";
  } else {
    return "No";
  }
}
console.log(checkTriangle(8, 7, 9));
