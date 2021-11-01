const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const without = require('./without');
const countOnly = require('./countOnly');
const countLetters = require('./countletters');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const map = require('./map');
const takeUntil = require('./takeUntil');
const findKey = require('./findKey');

module.exports = {
  assertEqual,
  assertArraysEqual,
  assertObjectsEqual,
  eqArrays,
  eqObjects,
  head,
  tail,
  middle,
  without,
  countOnly,
  countLetters,
  letterPositions,
  findKeyByValue,
  map,
  takeUntil,
  findKey
};