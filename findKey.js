const assertEqual = require("./assertEqual");

const findKey = function(object, callback) {
  for (key in object) { // loop through object's keys - I.E Blue HIll, etc
    if (object.hasOwnProperty(key)) { // if the object has that key
      if (callback(object[key])) { // call back is the instructions, if the object's key's star object contains the callback function's conditions, returns true
        return key;  // if true, return the key
      }
    } else {
      return undefined;
    }
  }
};

module.exports = findKey