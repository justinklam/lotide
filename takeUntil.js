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