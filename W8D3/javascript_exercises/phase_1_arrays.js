Array.prototype.uniq = function() {
  let output = [];

  for (let i = 0; i < this.length; i++) {
    if (output.includes(this[i])) {
      continue;
    } else {
      output.push(this[i]);
    }
  }
  return output;
};

// console.log([1, 2, 2, 3, 3, 3].uniq());

Array.prototype.twosum = function() {
  let pairs = [];
  let hash = {}

  for (let i = 0; i < this.length; i++) {
    let comp = 0 - this[i]
    if (hash[comp] !== undefined) {
      pairs.push([hash[comp], i]);
    } else {
      hash[this[i]] = i;
    }
  }

  return pairs;
};

// console.log([1, 0, -1, 2, 3, -2].twosum()); // [[0, 2], [3, 5]]

Array.prototype.transpose = function() {
    let transposed = [];
    for (let i = 0; i < this[0].length; i++) {
        let transposedRow = [];
        for (let j = 0; j < this.length; j++) {
            transposedRow.push(this[j][i]);
        }
        transposed.push(transposedRow);
    }
    return transposed;
}

console.log([[1, 2, 3], [4, 5, 6]].transpose());