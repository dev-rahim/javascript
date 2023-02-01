/* In this challenge, we learn about switch statements.



Task

Complete the getLetter(s) function in the editor. It has one parameter: a string, 

, consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

If the first character in string s is in the set {a , e, i, o, u} then return A.
If the first character in string s is in the set {b , c, d, f, g} then return B.
If the first character in string s is in the set {h , j , k, l, m} then return C.
If the first character in string s is in the set {n , p , q , r , s , t , v , w , x , y , z} then return D.
Hint: You can get the letter at some index i in s using the syntax s[i] or s.charAt(i).

Function Description

Complete the getLetter function in the editor .

getLetter has the following parameters:

string s: a string
Returns

string: a single letter determined as described above
Input Format

A single string denoting s . */

function getLetter(s) {
  let letter;
  // Write your code here
  switch (s[0]) {
    case "a":
      letter = "A";
      break;
    case "e":
      letter = "A";
      break;
    case "i":
      letter = "A";
      break;
    case "o":
      letter = "A";
      break;
    case "u":
      letter = "A";
      break;
    case "b":
      letter = "B";
      break;
    case "c":
      letter = "B";
      break;
    case "d":
      letter = "B";
      break;
    case "f":
      letter = "B";
      break;
    case "g":
      letter = "B";
      break;
    case "h":
      letter = "C";
      break;
    case "j":
      letter = "C";
      break;
    case "k":
      letter = "C";
      break;
    case "l":
      letter = "C";
      break;
    case "m":
      letter = "C";
      break;
    case "n":
      letter = "D";
      break;
    case "p":
      letter = "D";
      break;
    case "q":
      letter = "D";
      break;
    case "r":
      letter = "D";
      break;
    case "s":
      letter = "D";
      break;
    case "t":
      letter = "D";
      break;
    case "v":
      letter = "D";
      break;
    case "w":
      letter = "D";
      break;
    case "x":
      letter = "D";
      break;
    case "y":
      letter = "D";
      break;
    case "z":
      letter = "D";
      break;

    default:
      break;
  }

  return letter;
}

console.log(getLetter("adfgt"));
