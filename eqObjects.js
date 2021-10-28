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
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
}
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (const key1 of keys1) {
      if (keys2.includes(key1)) {
        if (Array.isArray(object1[key1]) || Array.isArray(object2[key1])) {
          if (!eqArrays(object1[key1], object2[key1])) {
            return false;
          }
        } else{
          if (object1[key1] !== object2[key1]) {
            return false;
          }
        }
      } 
      // not all keys are same
      else {
        return false;
      }
    }
    return true;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
const xy = {x: 1, y: 2}
const wz = {w: 3, z: 4}
assertEqual(eqObjects(xy, wz), false);