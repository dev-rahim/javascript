/* Write a function solution that takes a string parameter and returns the word in reverse order.

In this task, you are given an input string and the task is to reverse the input string. */

const name = "Rahim";
// let name = name.split("");
let newName = "";
// console.log(nameArray);

for (let index = name.length - 1; index >= 0; index--) {
  const element = name[index];
  newName += element;
  //   console.log(element);
}

console.log(newName);
