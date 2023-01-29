/* 
১. জাভাস্ক্রিপ্ট কি জিনিস এইটা কি জানো?
JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.

২. জাভাস্ক্রিপ্ট কিভাবে কাজ করে সেটা কি জানো?

In contrast, JavaScript has no compilation step. Instead, an interpreter in the browser reads over the JavaScript code, interprets each line, and runs it. More modern browsers use a technology known as Just-In-Time (JIT) compilation, which compiles JavaScript to executable bytecode just as it is about to run.

৩. ভেরিয়েবল কি জিনিস?
A JavaScript variable is simply a name of storage location. There are two types of variables in JavaScript : local variable and global variable.

৪. ভেরিয়েবল কিভাবে ডিক্লেয়ার করে 
let a= 52;
const myName=Rahim;
var studentName='karim'

৫. ভেরিয়েবল এর মান কিভাবে চেইঞ্জ করে বা আপডেট করে। 
studentName='Abdul Kairim'

৬. কি কি ধরণের ভেরিয়েবল হয়। সেগুলা কি কি (হিন্টস: Numeric, String, Boolean)
local variable
global variable

৭. জাভাস্ক্রিপ এ primitive and non primitive data types কি কি ? উদাহরণ হিসেবে বলো।

Preemptive data types are
    * string
    * number
    * boolean
    * undefined
    * null

Non-primitive data types are

    * Object
    * Array
    * RegEx


৮. ভেরিয়েবল এর নাম কিভাবে কিভাবে ডিক্লেয়ার করতে হয়। কোন কোন জিনিস নাম এ লেখা যাবে না। অর্থাৎ Variable এর naming convention সম্পর্কে বলো।

Naming Convention of Javascript Variables
    * variable names are case-sensitive.
    * The first character must be a letter or an underscore (_). You can't use a number as the first character.
    * The rest of the variable name can include any letter, any number, or the underscore. You can't use any other characters, including spaces, symbols, and punctuation marks.
    * There's no limit to the length of the variable name
    * You can't use one of JavaScript's reserved words as a variable name
   

৯. দুইটা ভেরিয়েবল এর মধ্যে =, -, *, /, % কিভাবে করে? 
a=11    for assign a variable value 
a==b    for checking equality 
c= a-b use for subtraction
c=a*b  for multiplication
c=a/b  for gatling divide
d=a%^b use for get the remainder

১০. শর্টহ্যান্ড গুলো জানতে হবে। বিশেষ করে +=, -=, *=, /= জানতে হবে।
a+=10  added 10 with the value of a
a-=10  substrate 10 from the value of a
a *=10   multiply the valur of a with 10
a /=10     divide the value of a by 10


১১.. ++ এবং -- এর কাজ কি ? এইটা কি জানো। 
a ++  add 1 with the value of a
a --  substrate 1 fro the value of a

১২ parseInt, parseFloat, toFixed এইগুলা কি করে? 

parseInt  use for convert the value to Integer
parseFloat use for convert the value to Float
toFixed =>  it's use for fixed the number after flooting type data


--------------

১৩. Array কি জিনিস। এইটা কিভাবে কাজ করে? কিভাবে Array ডিক্লেয়ার করতে হয় 

An array is a special variable, which can hold more than one value:
array declaration 
const numbers=[1,2,3,4,5,4,6] 

১৪. array এর মধ্যে কয়টা উপাদান (element) আছে সেটা কিভাবে বের করে 

array.length

১৫. array এর উপাদান গুলা এর পজিশন ( index) কিভাবে কাজ করে। কত দিয়ে শুরু হয়। এবং মান কিভাবে চেইঞ্জ হয়। 

JavaScript arrays are zero-indexed: the first element of an array is at index 0 , the second is at index 1 , and so on — and the last element is at the value of the array's length property minus 1 
 
 change a value using index
array[index_number]='New_value'

১৬. কোন একটা উপাদানের index এর মান -১ বলতে কি বুঝায় 
it means the element is not in this array.

১৭. কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো 
array[0]
array[5]
array[9]

১৮. কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে 
 change a value using index
array[index_number]='New_value'

১৯. একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন সেটার index তুমি কিভাবে খুঁজে বের করতে পারো?

array.indexOf('theValueGivenToMe')

২০. ধরো, কোন একটা ইনডেক্স দিয়ে উপাদান খুঁজতে গেছো। কিন্তু সেটার মান না দিয়ে তোমাকে undefined দেখাচ্ছে। সেটা দেখে তুমি কি বুঝবে? (একটু গুগলে সার্চ দাও। আমরা কোর্স এ এইটা আলোচনা করিনি। তারপরেও চেষ্টা করে দেখো)
if the index was not in that array then the result was undefined 


২১. কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে

arr.push('elenent') for add in last
arr.pop() for remove frkm last

২২. কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে
arr.unshift('element')  for ad in first item
arr.shift() for remove first item


২৩. তুলনা কিভাবে করতে হয়। এইগুলার মানে কি: >, <, ==, !=, <=, >=, ===, !==, &&, ।। 

a>b a is begier then b 
a<b a is less then b
 a==b is equal 
a!=g  is not aqual 
a<=b  a is less then of equal b
a>=b  a is bigger or equal b
a===b   is equal it's also data types
a!==b is not equal it's also data types
a>b&& a>c if tow conditions are true or not
 a>b।।b>c  in thes tow condition is minimum 1 is true then result is true   

 */
// ২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে।
var money = 39000;
if (money >= 80000) {
  console.log("Buy a Mac");
} else if (money >= 60000) {
  console.log("Buy a Gaming Laptop");
} else if (money >= 40000) {
  console.log("Buy a lenovo yoga Desktop");
} else if (money >= 20000) {
  console.log("Buy a Recondition Laptop");
} else {
  console.log("Buy a mobile Phone");
}

// ২৫. আসকে আমার মন ভালো নেই এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও।
var i = 1;
while (i <= 39) {
  //   console.log(i, " আসকে আমার মন ভালো নেই");
  i++;
}
// ২৬. while লুপ কিভাবে কাজ করে
// there was a initial variable whith that variable we have to throw a condition if the condition was true then enter the loop and follow the statment and we hate to do that variable value intremant or decrement
/* 
from googl

The while loop checks the condition first, and if it returns true, the code within it runs. The loop continues until the condition provided returns false, then stops. Alternatively, the do while loop runs its code once before checking the condition and runs again only if the condition is true. */

// ২৭. for লুপ কিভাবে কাজ করে
/* a header specifying the iteration, and a body which is executed once per iteration. The header often declares an explicit loop counter or loop variable, which allows the body to know which iteration is being executed. */


// ২৮. while লুপ এর মধ্যে লুপ ভেরিয়েবল চেইঞ্জ না করলে কি সমস্যা হয়।
// thats will be a infinite loop

// ২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও
var number = 58;
while (number <= 98) {
  //   console.log(number);
  number++;
}

// ৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও
var initialValue = 412;
while (initialValue <= 456) {
  //   console.log(initialValue);
  initialValue += 2;
}
// ৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও
for (let index = 581; index <= 623; index += 2) {
  //   console.log(index);
}
// ৩২.while আর for loop এর মধ্যে পার্থক্য কি

// ৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।
var itemsLearn = ["HTML", "CSS", "BOOTSTRAP", "TAILWIND CSS", "BASIC JS"];
for (let index = 0; index < itemsLearn.length; index++) {
  const element = itemsLearn[index];
  //   console.log(element);
}

// ৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও
var usedMobile = ["Itel", "Samsung", "Oppo", "Vibo"];
var usedMobileIndex = 0;
while (usedMobileIndex < usedMobile.length) {
  var element = usedMobile[usedMobileIndex];
  //   console.log(element);
  usedMobileIndex++;
}

// ৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও
for (let i = 30; i <= 86; i++) {
  //   console.log(i);
  if (i == 44) {
    break;
  }
}

// ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।

var books = [200, 250, 150, 63, 650, 400, 180];
for (let index = 0; index < books.length; index++) {
  const element = books[index];
  if (element > 200) {
    continue;
  }
  console.log(element);
}
