function checkEven(number) {
  if (number % 2 === 0) {
    return true;
  } else if (number % 2 !== 0) {
    return false;
  } else {
    return "Please Enter a valid number";
  }
}

const givenNumber = 526;

const result = checkEven(givenNumber);

console.log(result);
