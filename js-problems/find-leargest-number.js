// উপরের  আরে  থেকে  সব  থেকে  বড়ো  নম্বর  কোনটা  বের  করো
const numbers = [
  10, 8, 9, 7, 5, 6, 2, 3, 4, 1, 80, 12, 13, 15, 19, 18, 17, 14, 11, 16, 20,
];

let biggestNumber = 0;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element > biggestNumber) {
    biggestNumber = element;
  }
}
console.log(biggestNumber);
