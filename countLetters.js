const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (input) {
  const output = {};
  let letters = '';
  for (char of input) {
    if (char !== ' ') {
      letters += char;
    }
  }
  console.log(letters);
  for (const letter of letters) {
    // take the spaces out
    if (output[letter]) {
      output[letter] += 1;
    } else {
      output[letter] = 1;
    }
  }
  return output;
}