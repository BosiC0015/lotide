const assertArraysEqual = function(arrayOne, arrayTwo) {
  result = eqArrays(arrayOne, arrayTwo);
  if (result) {
    console.log(`✅✅✅Assertion Passed: Your arrays maches perfectly!`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: Your arrays does not match.`);
  }
};

const eqArrays = function (array1, array2) {
  let identicalElm = 0;
  for (let i = 0; i < (array1.length); i++) {
    if (array1[i] === array2[i]) {
      identicalElm += 1;
    }
  }
  if (identicalElm === array1.length) {
    return true;
  } else {
    return false;
  }
}

const without = function (source, itemsToRemove) {
  let newArray = source;
  for (let i = 0; i < newArray.length; i++) {
    for (item of itemsToRemove) {
      if (newArray[i] === item) {
        newArray.splice(i, 1);
      }
    }
  }
  return newArray;
}

assertArraysEqual(without([1, 2, 3], [1]), [2, 3])
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);