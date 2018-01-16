'use strict';
let total = 0;
function average(numbers) {
  numbers.forEach(function(numbers) {
    total +=numbers;
  });
  return total/numbers.length;
}

const numbers = [3, 5, 12];

console.log(average(numbers));