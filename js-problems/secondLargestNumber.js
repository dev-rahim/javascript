// You will be given an array as input containing 5 integer numbers. Your task is very simple. You have to find out the second largest element from the numbers.

function secondLargest(numbers) {
  //Write your code here
  //Don't forget to return
  const numberReverseSort = numbers.sort((a, b) => a - b)[0];
  return numberReverseSort;
}

console.log(secondLargest([10, 33, 2, 100, 5, 99, 6]));
