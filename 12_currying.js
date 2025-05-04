/*---
🔸 Currying in JavaScript
📘 Definition:
Currying is a transformation of a function with multiple arguments into a series of functions that each take one argument.

---*/

// ✅ Example:
// Normal function
function add(a, b, c) {
  return a + b + c;
}

// Curried version
function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curryAdd(1)(2)(3)); // 👉 6

//   🔨 Generic Curry Implementation:

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

// Example usage
function multiply(a, b, c) {
  return a * b * c;
}

const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4)); // 👉 24

/*---

  💡 Practical Uses of Currying
Use Case	                                              Description

Event Handling	                                        Pre-set arguments for event handler
Reusable Function                                       Templates	Create functions with pre-filled behavior (e.g., logging levels)
Functional Composition	                                Works well with .map, .filter, .reduce
Redux Middleware / Higher Order Components	            Pass configuration gradually
---*/

/*---
🔸 Partial Application
📘 Definition:
Partial application means fixing a few arguments of a function and producing a new function with fewer arguments.

---*/

// ✅ Example:
function multiply(a, b, c) {
  return a * b * c;
}

function partial(fn, ...fixedArgs) {
  return function (...restArgs) {
    return fn(...fixedArgs, ...restArgs);
  };
}

const multiplyBy2 = partial(multiply, 2); // fixes 'a' as 2
console.log(multiplyBy2(3, 4)); // 👉 24

/*---
✅ Difference: Currying vs Partial Application
Feature	                    Currying	                              Partial Application
Input structure	            1 argument at a time	                  Some arguments fixed, rest provided later
Returns	                    Series of nested functions	            One function with fixed and remaining arguments
Goal	                      Transform function for flexibility      Customize function with pre-defined values

---*/


/*---
🎯 Interview Soundbite
"Currying breaks a function into a series of unary functions, useful for functional pipelines. 
Partial application pre-fixes some arguments, allowing reuse of logic in a cleaner way. 
Both help in writing modular, composable, and testable code."
---*/