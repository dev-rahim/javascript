/* Jerry loves playing TomatoBall online. He always starts with TomatoBall from the first round. Sometimes he reaches the 3rd round, sometimes the 4th round, and so on. Eventually, he becomes bored and stops playing. So, what is Jerry’s final score when he stops a game?
[ 
Note:
Input format: an array will be accepted as input
Output format: A single number
] */

function finalScore(scores) {
  //Write your code here
  //Don't forget to return
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    const element = scores[i];
    sum += element;
  }
  return sum;
}

console.log(finalScore([20, 13, 37]));
