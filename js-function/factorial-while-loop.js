function getFactorial(number) {
  let factorial = 1;
  let i = number;
  while (i >= 1) {
    factorial *= i;
    i--;
  }
  return factorial;
}

console.log(getFactorial(4));
