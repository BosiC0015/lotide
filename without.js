const assertArraysEqual = function(arrayOne, arrayTwo) {
  result = eqArrays(arrayOne, arrayTwo);
  if (result) {
    console.log(`✅✅✅Assertion Passed: Your arrays maches perfectly!`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: Your arrays does not match.`);
  }
};

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

const without = function (source, itemsToRemove) {
  const newArray = source.filter(item => !itemsToRemove.includes(item));
  return newArray;
  
  // let newArray = [];
  // for (let elm of source) {
  //   newArray.push(elm);
  // }
  // for (let i = 0; i < newArray.length; i++) {
  //   for (let item of itemsToRemove) {
  //     if (newArray[i] === item) {
  //       newArray.splice(i, 1);
  //     }
  //   }
  // }
  // return newArray;
}

assertArraysEqual(without([1, 2, 3], [1]), [2, 3])
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
