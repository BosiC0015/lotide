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
  assertEqual : assertEqual,
  assertArraysEqual : assertArraysEqual,
  assertObjectsEqual : assertObjectsEqual,
  eqArrays : eqArrays,
  eqObjects : eqObjects,
  head: head,
  tail: tail,
  middle: middle,
  without: without,
  countOnly : countOnly,
  countLetters : countLetters,
  letterPositions : letterPositions,
  findKeyByValue : findKeyByValue,
  map : map,
  takeUntil : takeUntil,
  findKey : findKey
};