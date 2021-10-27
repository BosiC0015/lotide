const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  if(array1.length !== array2.length) {
    return false
  } else {
    // [1,2,3] => '123'
    // if(array1.toString() === array2.toString()) {
    //   return true
    // }
    //for (let i = 0; i < array1.length; i++) {
    //  if (array1[i] !== array2[i]) {
    //    return false
    //  }
    //}

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);