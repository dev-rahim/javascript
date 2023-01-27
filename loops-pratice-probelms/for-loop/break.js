/* for (let i = 1; i < 50; i++) {
  console.log(i);
  if (i >= 25) {
    break;
  }
} */

const fruits = ["apple", "banana", "orange"];

for (let index = 0; index < fruits.length; index++) {
  const element = fruits[index];
  console.log(element);
  if (element == "banana") {
    break;
  }
}

for (let i = 1; i < 50; i++) {
  if (i <= 40 && i > 25) {
    continue;
  }
  console.log(i);
}
