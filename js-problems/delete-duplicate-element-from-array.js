// 6. উবের  পরের  এরে  থেকে  ডুপ্লিকেট  নম্বর  গুলা  বাদ  দিয়ে  উনিক  নম্বর  গুলা বের  করতে    হবে
var numbers = [1, 2, 3, 3, 4, 4, 5, 1, 5, 6, 7, 8, 9, 10];

var number = [];
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (number.indexOf(element) == -1) {
    number.push(element);
  } else {
    // console.log("deleted ", element);
  }
}
console.log(number);
