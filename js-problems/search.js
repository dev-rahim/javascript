const str = "Ami tore vulte parinai. Vulbo kmne";

const doseExist = str.toLocaleLowerCase().includes("Vulbo".toLowerCase());

console.log(doseExist);

const searchIndex = str.indexOf("tore");
console.log(searchIndex);

searchIndex == -1 ? console.log("Can no find it") : console.log("Exits");

// startsWith
str.startsWith("ami") ? console.log("Exist") : console.log("Not Exist");

// endsWith
str.endsWith("kmne") ? console.log("Exist") : console.log("Not Exist");
