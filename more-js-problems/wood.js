/* fixed per item wood requirement
1. chair --> 3cft
2. table --> 10cft
3. bed --> 50cft


vary: quantity
 */

function woodCalculation(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairWood = chairQuantity * perChairWood;
  const tableWood = tableQuantity * perTableWood;
  const bedWood = bedQuantity * perBedWood;

  const totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}

console.log(woodCalculation(1, 1, 1));
console.log(woodCalculation(2, 3, 1));
