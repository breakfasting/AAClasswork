Array.prototype.bubbleSort = function() {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i+1]) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        sorted = false;
      }
    }
  }

  return this;
};

// console.log([5, 4, 3, 2, 1].bubbleSort());

String.prototype.substrings = function() {
  const subs = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j <= this.length; j++) {
      subs.push(this.slice(i, j));
    }
  }

  return subs;
};

console.log('abcde'.substrings());