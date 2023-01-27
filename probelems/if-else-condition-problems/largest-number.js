/* You are given three numbers 13, 79, and 45. Write a program that will print the
largest number using if-else. */

const firstNumber = 45;
const secondNumber = 79;
const thirdNumber = 13;

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
  console.log("Largest number is First Number =", firstNumber);
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
  console.log("Largest number is Second Number =", secondNumber);
} else {
  console.log("Largest number is Third Number =", secondNumber);
}
