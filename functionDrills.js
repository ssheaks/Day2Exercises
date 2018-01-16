function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}

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

const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
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

const missileWarning = hazardWarningCreator('Don\'t let that guy push the button!')
console.log(missileWarning('Control Room'));

