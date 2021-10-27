const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (object, value) {
  let result;
  const keys = Object.keys(object);
  const values = Object.values(object);
  for (let i = 0; i < values.length; i++) {
    if(values[i] === value) {
      result = keys[i];
    }
  }
  return result;
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const givenObject = {a:1, b:2, c:3, d:4};
assertEqual(findKeyByValue(givenObject, 3), "c");
assertEqual(findKeyByValue(givenObject, 1), 'a');
assertEqual(findKeyByValue(givenObject, 8), undefined);