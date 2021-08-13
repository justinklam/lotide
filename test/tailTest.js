const assert = require('chai').assert;
const tail = require("../tail");
const assertArraysEqual = require("../assertArraysEqual");

// TEST CODE

// describe("#tail", () => {

//   it("returns '[6, 7]' for [5, 6, 7]", () => {
//     assert.strictEqual(assertArraysEqual(tail([5, 6, 7]), [6, 7]), true);
//   });

//   it("returns '5' for ['5']", () => {
//     assert.strictEqual(assertArraysEqual(tail(['5']), '5'), false); 
//   });

// });

describe("#tail", () => {

  it("returns [6, 7] for [5, 6, 7]", () => {
    assert.deepEqual(tail([5, 6, 7]), [6, 7]);
  });

  it("returns 5 for ['5']", () => {
    assert.deepEqual(tail(['5']), 5); 
  });

});