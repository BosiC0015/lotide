const eqArrays = function (array1, array2) {
  if(array1.length !== array2.length) {
    return false
  } else {
   let identicalElm = 0;
   for (let i = 0; i < array1.length; i++) {
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
}

const assertArraysEqual = function(arrayOne, arrayTwo) {
  const result = eqArrays(arrayOne, arrayTwo);
  if (result) {
    console.log(`✅✅✅Assertion Passed: Your arrays maches perfectly!`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: Your arrays does not match.`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  console.log(results);
  return results;
};

assertArraysEqual(letterPositions('hello world').l, [2, 3, 9])