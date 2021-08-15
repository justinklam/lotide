const eqArrays = require("./eqArrays")
//
const assertArraysEqual = require("./assertArraysEqual")

const without = function(orgArray, rmvArray) {
  let newArray = orgArray;
  for (let i = 0; i < rmvArray.length; i++) {
    while (newArray.includes(rmvArray[i])) {
      let itemsToRemove = newArray.indexOf(rmvArray[i]);
      newArray.splice(itemsToRemove, 1);
    }
  };
  return newArray;
};

module.exports = without