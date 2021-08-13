const assertArraysEqual = require("./assertArraysEqual")

const takeUntil = function(array, callback) {
  const results = [];
  for (item of array) {
    if (callback(item)) { // if callback is true
      return results;
    } else {
      results.push(item);
    }
  } 
  return results;
};

module.exports = takeUntil

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// // takes in takeUntil and passes data1's array in.
// // if data 1's array index contains any number < 0, stop loop and return array


// console.log(results1);


// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]));

// Expected Output
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]