/* Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student. 

Input:
The input parameter will be an array of integers, where each integer represents the mark of a subject given above.

Output:
Print the result in 2 decimal places. If you get a fraction rounded up to 2 decimal places. The output must have to be in number format.

Hints: First check if your output is in number format or string format by  typeof  operator. */

const marks = [75.25, 65, 80, 35.45, 99.5];
const anotherMarks = [100, 100, 100, 100, 100];
function average(arrOfMarks) {
  //write your code here
  // don't forget to write return
  let sum = 0;
  for (let i = 0; i < arrOfMarks.length; i++) {
    const element = arrOfMarks[i];
    sum += element;
  }
  const average = sum / arrOfMarks.length;
  if (average - average.toFixed(1) !== 0) {
    return parseFloat(average.toFixed(2));
  } else {
    return average;
  }
}
console.log(average(marks));
console.log(average(anotherMarks));
