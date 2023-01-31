/* Detect vowel and consonent

Write a function solution that takes an alphabet as a function parameter and print whether it is VOWEL or CONSONANT.

Vowels and consonants

Words are built from vowels (a, e, i, o, u) and consonants (the rest of the alphabet).

The letter 'y' is a bit different because sometimes it acts as a consonant and sometimes it acts as a vowel.

Knowing how vowels and consonants work together to make words and sounds will help you with your spelling. */

// const a = String.fromCharCode(97) == "a";

// console.log(a);
/* let i = 97;
const alphabet = "1";
while (i <= 122) {
  let element = String.fromCharCode(i);
  if (element !== alphabet.toLowerCase()) {
    // console.log("invalid alphabet");
  }
  i++;
} */

const solution = (letter) => {
  //Write Your solution Here
  let i = 97;
  while (i <= 122) {
    let element = String.fromCharCode(i).toLowerCase();
    if (element == letter) {
      if (
        letter == "a" ||
        letter == "A" ||
        letter == "e" ||
        letter == "E" ||
        letter == "i" ||
        letter == "I" ||
        letter == "o" ||
        letter == "O" ||
        letter == "u" ||
        letter == "U"
      ) {
        console.log("VOWEL");
      } else {
        console.log("CONSONANT");
      }
    }
    i++;
  }
};

solution("a");
