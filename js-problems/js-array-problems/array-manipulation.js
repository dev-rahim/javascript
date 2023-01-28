/* You are given an array:

var fruits = ['Apple', 'Banana', 'Orange'];

a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’. */

const fruits = ["Apple", "Banana", "Orange"];

const indexOfBanana = fruits.indexOf("Banana");

console.log("index of ‘Banana’ is= ", indexOfBanana);

fruits[indexOfBanana] = "Mango";
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.push("Watermelon");
console.log(fruits);
