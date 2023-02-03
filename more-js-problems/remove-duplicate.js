function uniqName(names) {
  const uniqNames = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (!uniqNames.includes(name)) {
      uniqNames.push(name);
    }
  }
}
const names = [
  "abul",
  "Kabul",
  "abul",
  "Kabul",
  "abul",
  "Kabul",
  "anisul",
  "jhankar vai",
];
console.log(names);
console.log(uniqName(names));
