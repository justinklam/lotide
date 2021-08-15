# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @justinl/lotide`

**Require it:**

`const _ = require('@justinl/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: asserts if two arrays are identical
* `assertEqual(actual, expected)`: asserts if two values are identical
* `assertObjectsEqual(actual, expected)`: asserts if two objects are identical
* `countLetters(stringInp)`: takes in string, outputs an object containing number count value of each letter that appears
* `countOnly(allItems, itemsToCount)`: takes in an array and an object, returns new object that contains the count of all array elements present in object
* `eqArrays(arr1, arr2)`: checks to see if two arrays are equal
* `eqObjects(object1, object2)`: checks to see if two objects are equal
* `findKey(object, callback)`: takes in object, and callback condition. if object contains callback condition, return key
* `findKeyByValue(obj, val)`: takes in an object and a key, loops through object looking for the key
* `flatten(arr)`: takes in an array of nested arrays, return new array containing all elements contained in nested arrays
* `head(array)`: takes in array, returns first value in the array
* `letterPositions(sentence)`: takes in a string, returns object with letter positions
* `map(array, callback)`: takes in array and callback function, returns array after modification of callback function
* `middle(firstArray)`: takes in array, counts array length for even or odd and then returns middle value or the averaged value of the middle 2
* `tail(arr)`: takes in array, removes arr[0] and returns the rest
* `takeUntil(array, callback)`: takes in array and callback function, return array contents until callback function's requirements are satsified
* `without(orgArray, rmvArray)`: takes in 2 arrays, returns a new array without the items in rmvArray
