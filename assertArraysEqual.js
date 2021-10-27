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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // fail