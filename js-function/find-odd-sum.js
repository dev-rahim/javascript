function getSumOfArrayOddElement(numbers) {
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 !== 0) {
      sum += element;
    }
  }
  return sum;
}

const numbers = [12, 5, 86, 5, 25, 0, 66];
console.log(getSumOfArrayOddElement(numbers));
