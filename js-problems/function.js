//  ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।
function get_multiplication_table(number) {
  let count = 1;
  while (count <= 10) {
    console.log(number, "x", count, "=", number * count);
    count++;
  }
}
get_multiplication_table(1);

// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
function nameLowerCase(name) {
  return name.toLowerCase();
}
console.log(nameLowerCase("Rahim UDdin"));
// ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে।

function get_full_name(firstName, lastName) {
  return firstName + " " + lastName;
}
const firstName = "Nasir";
const lastName = "Uddin";
console.log(get_full_name(firstName, lastName));

// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে। অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।
function get_squire(number) {
  return number * number;
}
console.log(get_squire(100));

/* ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :

const pizza = {

 toppings: ['cheese', 'sauce', 'pepperoni'],

 crust: 'deep dish',

 serves: 2

}

এবং pepperoni প্রিন্ট করবা। */
const pizza = {
  toppings: ["cheese", "sauce", "pepperoni"],

  crust: "deep dish",

  serves: 2,
};
console.log(pizza.toppings[2]);
