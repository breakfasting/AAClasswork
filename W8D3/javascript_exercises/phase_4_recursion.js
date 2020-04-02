function range(start, end) {
    if (start === end) {
        return [end];
    }
    return [start].concat(range(start + 1, end));
};

// console.log(range(1,5));

function sumRec(arr) {
    if (arr.length === 0) return 0;

    return sumRec(arr.slice(1)) + arr[0];
}

// console.log(sumRec([1, 2, 3, 4, 5]));

function exponent1(base, exp) {
    if (exp === 0) return 1;
    return exponent1(base, exp - 1) * base;
}

function exponent2(base, exp) {
    if (exp === 0) return 1;
    if (exp === 1) return base;

    if (exp % 2 === 0) return exponent2(base, exp / 2) ** 2; 
    if (exp % 2 === 1) return base * (exponent2(base, (exp - 1) / 2) ** 2);
}

// console.log(exponent2(3, 3));

function fibonacci(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let fibs = fibonacci(n - 1);
  let num = fibs[fibs.length - 1] + fibs[fibs.length - 2];
  fibs.push(num);
  return fibs;
}

console.log(fibonacci(10));