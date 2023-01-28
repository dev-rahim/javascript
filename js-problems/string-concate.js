/* John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to
combine these two strings and print them in one line. Help John write the program.
Input:
The first and the second lines of the input contain the strings.
Output:
Print the result in one line. */

const welcomeText = "welcome ";
const userName = "Rahim Uddin";

// const textAfterConcat = welcomeText + userName;

const textAfterConcat = welcomeText.concat(userName);
console.log(textAfterConcat);
