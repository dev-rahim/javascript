/* Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
Bangla of a student.
Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.
Output:
Print the result in 2 decimal places. */

const markInMathematics = 95;
const markInBiology = 82;
const markInChemistry = 88;
const markInPhysics = 88;
const markInBangla = 75;
let totalSubjects = 5;
const totalMarks =
  markInPhysics +
  markInBangla +
  markInBiology +
  markInChemistry +
  markInMathematics;
const averageMarks = totalMarks / totalSubjects;

console.log("Average marks is =", averageMarks.toFixed(2));
