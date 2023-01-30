// 1
function foo() {
  console.log("foo");
  bar();
}
function bar() {
  console.log("bar");
}

foo();
// 2

// make a function for 3 integer number that return average
function make_avg(firstNumber, secondNumber, thirdNumber) {
  const average = (firstNumber + secondNumber + thirdNumber) / 3;
  return average;
}
console.log(make_avg(0, 5, 10));

// 3
// make a function for number array and return average of array elements
function make_avg_array(arr) {
  let sumOfArrayElement = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    sumOfArrayElement += element;
  }
  const average = sumOfArrayElement / arr.length;
  return average;
}

console.log(make_avg_array([10, 5, 5, 10]));
// 4
// write a function to check a number even or odd

// No return Has perimeter
function even_odd(number) {
  if (number % 2 == 0) {
    console.log(number, "is even");
  } else {
    console.log(number, "is Odd");
  }
}
even_odd(200);

// 5

// Has return  Has perimeter
function evenOrOdd(number) {
  if (number % 2 == 0) {
    return number + " is Even";
  } else {
    return number + " is Odd";
  }
}

console.log(evenOrOdd(51));

// 6
// traffic signal conditions apply with a function and if-else
function isCrossingRoadSafe(trafficLightColor) {
  if (trafficLightColor.toLowerCase() == "red") {
    console.log("You Must Stop for light Green");
  } else if (trafficLightColor.toLowerCase() == "yellow") {
    console.log("You Have to Stop");
  } else if (trafficLightColor.toLowerCase() == "green") {
    console.log("It's totally safe you can cross the road");
  } else {
    console.log("Please Enter a valid traffic light color");
  }
}
isCrossingRoadSafe("green");

// 7
// traffic signal conditions apply with a function and switch case

function isRoadSafe(trafficLightColor) {
  switch (trafficLightColor.toLowerCase()) {
    case "red":
      console.log("You Must Stop for light Green");
      break;
    case "yellow":
      console.log("You Have to Stop");
      break;
    case "green":
      console.log("It's totally safe you can cross the road");
      break;
    default:
      console.log("Please Enter a valid traffic light color");
      break;
  }
}
isRoadSafe("green");
