const numbersToConsole = process.argv.slice(2);

const firstValue = numbersToConsole[0];
const secondValue = numbersToConsole[1];

const sum = +firstValue + +secondValue;
const rest = +firstValue - +secondValue;
const multiply = firstValue * secondValue;
const division = firstValue / secondValue;
console.log(numbersToConsole);

console.log(sum);
console.log(rest);
console.log(multiply);
console.log(division);
