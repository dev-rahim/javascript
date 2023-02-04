/* ১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো।  */

const name = "Rahim Uddin"; //String
const isMan = true; // boolean
let age = 22; //Number

/* ২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে।
 */

const myFullName = "Rahim Uddin";
let myDesignation = "Junior Web Developer";
console.log(myDesignation);
myDesignation = "Senior Web Developer";
console.log(myDesignation);

/* 
৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো।  */

const num1 = 50;
const num2 = 5;

const add = num1 + num2;
const sub = num1 - num2;
const multiplication = num1 - num2;
const div = num1 / num2;
const modul = num1 % num2;
console.log(add, sub, multiplication, div, modul);
/* ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো।  */
const number1 = 500;
const number2 = 100;

if (num1 < num2) {
  console.log("num1 is smaller then num2");
}
if (num1 <= num2) {
  console.log("num1 is smaller then num2");
}
if (num1 >= num2) {
  console.log("num1 is bigger then or equal num2");
}
if (num1 > num2) {
  console.log("num1 is bigger then num2");
}
if (num1 === num2) {
  console.log("num1 and num2 are equal");
}
if (num1 !== num2) {
  console.log("num1 and num2 are not equal equal");
}

/* ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো।  */

const firstNumber = 5000;
const secondNumber = 6000;
const thirdNumber = 4000;
if (firstNumber < secondNumber && thirdNumber < secondNumber) {
  console.log("Second number is big");
} else if (thirdNumber < firstNumber || thirdNumber > secondNumber) {
  console.log("third number is big");
}

/* ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো  */
if (firstNumber === 5000) {
  console.log("first number is 5000");
} else {
  console.log("first number is not equal to 5000");
}

/* ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো।  */
let i = 7;
while (i <= 19) {
  console.log(i);
  i += 2;
}

/* ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।  */
const firends = ["sakil", "toybur", "Emon", "abdullah", "siam", "Taibur"];
console.log(firends);
firends[3] = "Obaidullah";
console.log(firends);
console.log(firends.length); //for array element number
console.log(firends);
firends.push("Borson", "Plabon");
console.log(firends);
firends.pop();
console.log(firends);

/* ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো।  */
for (const friend of firends) {
  console.log(friend);
}

/* ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো  */
const numbers = [50, 60100, 190, 45, 70, 80, 84, 85, 90];
for (const number of numbers) {
  if (number > 80) {
    console.log(number);
  }
}

/* ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো।  */
function getMultiplication(num1, num2, num3) {
  const result = num1 * num2 * num3;
  return result;
}
console.log(getMultiplication(5, 50, 100));

/* ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।  */

const myDetails = {
  name: "Rahim Uddin",
  roll: 127219,
  number: "01834672015",
};
console.log(myDetails);
myDetails.roll = "181775";
console.log(myDetails);
