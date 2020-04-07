// function sum() {
//   return Array.from(arguments).reduce((a, b) => a + b);
// }

// function sum(...args) {
//   return args.reduce((a, b) => a + b);
// }

// console.log(sum(1,2,3,4));


//myBind

// Function.prototype.myBind = function (context) {
//     // console.log(arguments);
//     let argArray = Array.from(arguments);
//     argArray = argArray.slice(1);
//     let func = this;
//     return function () {
//     //   console.log(arguments);
//       let callArgs = Array.from(arguments);
//       let combinedArgs = argArray.concat(callArgs);
//       return func.apply(context, combinedArgs);
//     };
// }

Function.prototype.myBind = function (context, ...args) {
  // console.log(arguments);
  let func = this;
  return function (...args2) {
    //   console.log(arguments);
    let combinedArgs = args.concat(args2);
    return func.apply(context, combinedArgs);
  };
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // markov.says.myBind(pavlov);

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// // debugger
// markov.says.myBind(pavlov)("meow", "a tree");
// // // Pavlov says meow to a tree!
// // // true

// // // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // // Pavlov says meow to Markov!
// // // true

// // // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true


//CURRY
function curriedSum(numArgs) {
    let numbers = [];
  return function _curriedSum(number) {
    // debugger
    numbers.push(number);
    if (numbers.length === numArgs) {
      return numbers.reduce((a, b) => a + b);
    } else {
      return _curriedSum;
    }
  }
}

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56


// sumThree(4, 20, 6); // == 30

// // you'll write `Function#curry`!
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

// // or more briefly:

// Function.prototype.curry = function(num){
//     let numbers = [];
//     let func = this;
//     return function curry2(number) {
//         numbers.push(number);
//         if (numbers.length === num){
//             return func.apply(this, numbers);
//             // return this.call(...numbers);
//         } else {
//             return curry2;
//         }
//     }
// }

Function.prototype.curry = function (num) {
  let numbers = [];
  let func = this;
  return function curry2(number) {
    numbers.push(number);
    if (numbers.length === num) {
      // return func.call(this, ...numbers);
      return func(...numbers);
      // return this.call(...numbers);
    } else {
      return curry2;
    }
  }
}


function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
}


console.log(sumThree.curry(3)(4)(20)(6)); // == 30