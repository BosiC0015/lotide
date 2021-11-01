# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bosic0015/lotide`

**Require it:**

`const _ = require('@bosic0015/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual`: a function that can tell us when the code passes assertion
* `assertArraysEqual`: compare two arrays
* `assertObjectsEqual`: compare two objects
* `eqArrays`: compare two arrays
* `eqObjects`: compare two objects
* `head`: retrieve the first element from an array
* `tail`: retrieve from the second element to the end from the array
* `middle`: retrieve the middle element from the array
* `without`: pick the elements mentioned in the second array out of the first array
* `countOnly`: count for specific items
* `countLetters`: count letters
* `letterPositions`: count the position of a letter in a sentence
* `findKeyByValue`: find key by it's value
* `map`: practice with map
* `takeUntil`: a slice of the array with elements taken from the beginning untill the callback returns true
* `findKey`; use callback to find the key