'use strict';
function max(numbers) {
  let currentMax = numbers[0];
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] > currentMax) {
      currentMax = numbers[i];
    }
    i++;
  }
  return currentMax;
}

const numbers = [4, 7, 22, 3];

console.log(max(numbers));

function min(numbers) {
    let currentMin = numbers[0];
    let i = 0;
    while (i < numbers.length) {
      if (numbers[i] < currentMin) {
        currentMin = numbers[i];
      }
      i++;
    }
    return currentMin;
  }
  
  const numbers2 = [4, 7, 22, 3];
  
  console.log(min(numbers2));