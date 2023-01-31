const arrObj = [
  {
    fname: "John",
  },
  "fname",
];
const arrObj1 = [
  {
    name: "Mithila",
  },
  "name",
];

// console.log(typeof arrObj[0] == "object");
delete Object.keys(arrObj[0]);

// console.log(arrObj);
// console.log("deleted");

const deleteProperty = (arr) => {
  // Write your code here.
  if (typeof arr[0] == "object" && Object.keys(arr[0]) == arr[1]) {
    delete Object.keys(arr[0]);
    return "YES";
  } else {
    return "NO";
  }
};

console.log(deleteProperty(arrObj1));
