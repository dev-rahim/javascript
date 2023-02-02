const str = "My name is Rahim Uddin. I want to be a web developer";

// // const strToArray = str.split(" ");
// console.log(strToArray);

// const strToArray = str.split(".");
// console.log(strToArray);

const strToArray = str.split("");
console.log(strToArray);

// slice
console.log(str.slice(0, 10));

console.log(str.substring(0, 10));

console.log(str.at(11));

console.log(strToArray.join(""));
console.log(str.split(".").join(","));
