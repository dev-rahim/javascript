/* এমন  একটা  প্রোগ্রাম  লিখো  যেখানে   নম্বর  ইনপুট  করলে  বলে  এইটা  লিপ ইয়ার  কি  না ? */
const yearGiven = 2016;
if (yearGiven % 4 == 0) {
  console.log(yearGiven, " This is a leap Year");
} else if (yearGiven % 4 !== 0) {
  console.log(yearGiven, " This is not a leap Year");
} else {
  console.log("Please  Enter a Valid Year in number");
}
