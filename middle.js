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
  result = eqArrays(arrayOne, arrayTwo);
  if (result) {
    console.log(`✅✅✅Assertion Passed: Your arrays maches perfectly!`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: Your arrays does not match.`);
  }
};

const middle = function (array) {
  let output = []
  // one or two elements
  if (array.length <= 2) {
    return [];
  }
  // even number of elm
  else if (array.length % 2 === 1) {
    let n = (array.length - 1) / 2;
    output.push(array[n]);
  }
  // odd number of elm
  else if (array.length % 2 === 0) {
    let n = (array.length / 2);
    output.push(array[n-1]);
    output.push(array[n]);
  }
  return output;
}

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]