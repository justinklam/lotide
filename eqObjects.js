const assertEqual = require("./assertEqual");
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let sortObj1 = Object.keys(object1);
  let sortObj2 = Object.keys(object2);

  let lastResult = false;

  if (sortObj1.length !== sortObj2.length) {
    return false;
  }
  for (let keys of sortObj1) { // keys = key value of sortObj1
    if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
      lastResult = eqArrays(object1[keys], object2[keys]);
    } else {
      lastResult = object1[keys] === object2[keys];
    }
    if (!lastResult) return false;
  }
  return lastResult;
};

module.exports = eqObjects