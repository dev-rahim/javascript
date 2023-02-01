// Write a function findLeapYear() that will take an array as the input parameter and will check if each year is a leap year. If a year is a leap year, insert that year in a new array. Return the new array and print the result. There is no need to return anything if there is no leap year found.

const years = [2023, 2024, 2025, 2028, 2030];
function findLeapYear(arrOfYears) {
  //write your code here
  //don't forget to write return
  result = [];
  for (let i = 0; i < arrOfYears.length; i++) {
    const year = arrOfYears[i];
    if (year % 4 == 0) {
      result.push(year);
    }
  }
  return result;
}
console.log(findLeapYear(years));
