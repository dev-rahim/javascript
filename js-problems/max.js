const jim = 52;
const bela = 96;
const hena = 10;

jim > bela && jim > hena
  ? console.log("Jim is big")
  : bela > jim && bela > hena
  ? console.log("Bela is big")
  : console.log("Hena is big");

console.log(Math.max(hena, bela, jim));

// Max in array

const hights = [50, 53, 200,265, 65, 100, 82];
const sorted = hights.sort((a, b) => a - b);
console.log(sorted[sorted.length - 1]);
