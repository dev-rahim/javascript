/* ১-৫০ এর  মধ্যে  ৩ এবং ৫ দিয়ে  বিভাজ্য  সংখ্যা  গুলা  বের  করো */
let number = 1;
while (number <= 50) {
  if (number % 3 == 0 && number % 5 == 0) {
    console.log(number);
  }
  number++;
}
