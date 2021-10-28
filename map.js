// Our map function will take in two arguments:
// 1. An array to map
// 2. A callback function
// The map function will return a new array based on the results 
// of the callback function.
const eqArrays = function (array1, array2) {
  if(array1.length !== array2.length) {
    return false
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
}
const assertArraysEqual = function(arrayOne, arrayTwo) {
  const result = eqArrays(arrayOne, arrayTwo);
  if (result) {
    console.log(`✅✅✅Assertion Passed: Your arrays maches perfectly!`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: Your arrays does not match.`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(array, item => item[0]);

assertArraysEqual(map(["ground", "control", "to", "major", "tom"], item => item[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(['another', 'example', 'case', 'provided'], item => item.length.toString()), ['7', '7', '4', '8']);
assertArraysEqual(map(['one', 'more', 'array', 'here'], item => item.lastIndexOf('e')), [2, 3, -1, 3]);