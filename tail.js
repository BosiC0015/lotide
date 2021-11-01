const tail = function(array) {
  let tail = [];
  if (array) {
    tail = array.slice(1);
    return tail;
  } else {
    return undefined;
  }
};


module.exports = tail;