function temperatureConverter(valNum) {
  const celsius = (valNum - 32) / 1.8;
  if (celsius - celsius.toFixed(1) != 0) {
    return parseFloat(celsius.toFixed(2));
  } else {
    return celsius;
  }
}

console.log(temperatureConverter(50));
console.log(temperatureConverter(103));
