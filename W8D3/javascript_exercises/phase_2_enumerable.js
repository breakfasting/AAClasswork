Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

// [1, 2, 3, 4, 5].myEach(function(ele) {
//   console.log(ele);
// });

Array.prototype.myMap = function(callback) {
  let mapped = [];

  this.myEach(function(ele) {
    mapped.push(callback(ele))
  });

  return mapped;
};

// console.log(
//   [1, 2, 3, 4, 5].myMap(function(ele) {
//     return ele * 2;
//   })
// );

Array.prototype.myReduce = function(callback, initialValue = null) {
    let acc = initialValue
    if (acc === null) {
        acc = this.shift();
    }

    this.myEach(function(ele) {
        acc = callback(acc, ele);
    });
    return acc;
};

console.log(
    [1, 2, 3].myReduce(function (acc, el) {
        return acc + el;
    }, 25)
)

// In the top - level code in a Node module, this is equivalent to module.exports.That's the empty object you see.