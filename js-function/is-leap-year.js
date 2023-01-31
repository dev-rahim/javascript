function isLeapYear(year) {
  if (year % 4 == 0) {
    return true;
  } else if (year % 4 != 0) {
    return false;
  } else {
    return "please enter a valid year";
  }
}

const isMyYearLeapYear = 2015;
console.log(isLeapYear(isMyYearLeapYear));
