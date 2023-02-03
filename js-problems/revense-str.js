const str = "Amina";
let reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
  const element = str[i];
  //   console.log(element);
  reverse += element;
}

console.log(str.split("").reverse().join(""));

console.log(reverse);

// word reverse

const str2 = "My Name is rahim Uddin";

console.log(str2.split(" ").reverse().join(" "));
