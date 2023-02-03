let first = 5;
let second = 7;
// first approach
/* let temp = first;
first = second;
second = temp;
 */
// second approach
[first, second] = [second, first];

console.log(first);
console.log(second);
