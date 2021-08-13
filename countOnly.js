const assertEqual = require("./assertEqual")

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (results[item]) { // if it exists
      results[item]++; // increment each time it encounters the name, adding number value to it
    } else {
      if (itemsToCount[item]) { // pulling from object in 2nd parameter, check to see if its there and returning the value from the object - true/false
        results[item] = 1; // give value of 1 if it did not exist, it'll hit a different condition on the next run
      }
    }
  }
  console.log(results);
  return results;
};

module.exports = countOnly


// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// console.log(assertEqual(result1["Jason"], 1));
// console.log(assertEqual(result1["Karima"], undefined));
// console.log(assertEqual(result1["Fang"], 2));
// console.log(assertEqual(result1["Agouhanna"], undefined));