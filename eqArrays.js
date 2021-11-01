const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  
  // if(array1.toString() === array2.toString()) { // [1,2,3] => '123'
  //   return true;
  // }
  //  let identicalElm = 0;
  //  for (let i = 0; i < array1.length; i++) {
  //    if (array1[i] === array2[i]) {
  //      identicalElm += 1;
  //    }
  //  }
  //  if (identicalElm === array1.length) {
  //    return true;
  //  } else {
  //    return false;
  //  }
  }
};


module.exports = eqArrays;