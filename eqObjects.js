const assertEqual = require("./assertEqual");
//
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
//

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false