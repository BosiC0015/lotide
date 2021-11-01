const middle = function(array) {
  let output = [];
  // one or two elements
  if (array.length <= 2) {
    return [];
  }
  // even number of elm
  if (array.length % 2 === 1) {
    let n = (array.length - 1) / 2;
    output.push(array[n]);
  }
  // odd number of elm
  if (array.length % 2 === 0) {
    let n = (array.length / 2);
    output.push(array[n - 1]);
    output.push(array[n]);
  }
  return output;
};


module.exports = middle;