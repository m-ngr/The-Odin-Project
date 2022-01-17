const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (arr) => arr.reduce((sum, num) => sum + num, 0);

const multiply = (arr) => arr.reduce((mul, num) => mul * num, 1);

const power = (n, p) => n ** p;

const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
