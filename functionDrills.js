'use strict';

//Functions as arguments drill (1)
function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}

//Functions as arguments (2)
function hello() {
  console.log('Hello world');
}

function goodbye() {
  console.log('Goodbye world');
}
console.log(repeat(hello, 5));
console.log(repeat(goodbye, 5));

// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function (name) {
  // This is a "predicate function" - it's a function that only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// TASK: DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newArray.push(arr[i]);
    }

  }
  return newArray;
}

//Functions as return values
// rocksWarning('Main St and Pacific Ave');
// // => DANGER There is a Rocks on the Road hazard at Main St and Pacific Ave
// // => The Rocks on the Road hazard has triggered 1 time(s) today!

// rocksWarning('Centinela Ave and Olympic Blvd');
// // => DANGER There is a Rocks on the Road hazard at Centinela Ave and Olympic Blvd
// // => The Rocks on the Road hazard has triggered 2 time(s) today!

// Invoke the other hazard creators you instantiated, too
function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return function (location) {
    warningCounter++;
    return `DANGER! There is a ${typeOfWarning} hazard at ${location}!`;
    // console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);

  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
console.log(rocksWarning('Street'));

const surfWarning = hazardWarningCreator('Tidal wave warning!');
console.log(surfWarning('La Jolla'));

const missileWarning = hazardWarningCreator('Don\'t let that guy push the button!');
console.log(missileWarning('Control Room'));

//forEach, filter and map

let steps = [
  [0, 0],
  [0, 5],
  [-1, -3],
  [-3, 1],
  [2, -4],
  [3, 2]
];
const filteredArr = steps.filter(pair => pair[0] >= 0 && pair[1] >= 0);
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
const sumMovement = filteredArr.map(pair => pair[0] + pair[1]);
// const totalSteps = sumMovement.reduce(reducer);

console.log(filteredArr);
console.log(sumMovement);
// console.log(totalSteps);

const totalSteps = sumMovement.forEach(movement => {
  console.log(`Movement: ${movement}`);
});
console.log(totalSteps);

// REDUCE
const msg = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
const ans = 'NO NEED TO SHOUT'
let decodeMsg = [];

const msgSplit = msg.split(' ');
// console.log(msgSplit[2]);

// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(msgSplit);
// console.log(msgSplit[2].slice(-1));


// console.log(msgSplit[msgSplit.length-1]);

let sum = msgSplit.reduce(function (myMsg, word) {
  if (word.length === 3) {
    myMsg += ' ';
  } else {
    myMsg += word[word.length - 1].toUpperCase();
  }
  return myMsg;
}, ' ');
// sum is 6
console.log(sum);