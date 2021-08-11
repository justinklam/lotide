const assertEqual = require("./assertEqual");

// FUNCTION IMPLEMENTATION
const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;

// assertEqual(tail([5,6,7]), [6,7]);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Labs");