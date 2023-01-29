/* একটা  এরে  থাকবে  এরে  এর  মধ্যে  ১-২০ পর্যন্ত  নম্বর গুলা  এলোমেলো   থাকবে  আপনার  কাজ  হবে ক্রোম অনুসারে সাজানো  */

const numbers = [
  10, 8, 9, 7, 5, 6, 2, 3, 4, 1, 12, 13, 15, 19, 18, 17, 14, 11, 16, 20,
];

// sort in ascending order
console.log(numbers.sort((a, b) => a - b));

// sort in descending order
console.log(numbers.sort((a, b) => b - a));
