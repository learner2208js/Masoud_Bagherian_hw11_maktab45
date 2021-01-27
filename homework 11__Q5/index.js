const { sum, subtract, multiply, divide } = require('./modules/calculator');

const num1 = 10,
  num2 = 5;

console.log(`${num1} + ${num2} = ${sum(num1, num2)}`);
console.log(`${num1} - ${num2} = ${subtract(num1, num2)}`);
console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);
console.log(`${num1} / ${num2} = ${divide(num1, num2)}`);
