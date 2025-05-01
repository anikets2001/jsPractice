/*
 * Function Declaration:
 * - Starts with the `function` keyword.
 * - Hoisted completely (can be called before declaration).
 * - Creates a named function.

 * Function Expression:
 * - Assigns a function (can be named or anonymous) to a variable.
 * - Not hoisted (cannot be called before initialization).
 */

// ✅ Function Declaration
sayHello(); // Works because it's hoisted
function sayHello() {
  console.log("Hello");
}

// ❌ Function Expression
// greet(); // TypeError: greet is not a function
const greet = function () {
  console.log("Hi");
};

/*--
 * ✅ Function Declarations vs Function Expressions (All Differences)
   
Feature	                        Function Declaration	                                    Function Expression
Syntax	                        function name() {}	                                        const name = function() {}
Hoisting	                    ✅ Fully hoisted (can call before it's defined)	          ❌ Not hoisted (throws error if called before init)
Function Name	                Must have a name	                                        Can be named or anonymous
When Defined	                Defined at parse time	                                    Defined at runtime
Usage Before Definition     	✅ Allowed	                                              ❌ ReferenceError or TypeError
Part of Which Construct?	    Standalone declaration	                                    Expression assigned to a variable or property
Can Be Used as Callback?	    ✅ Yes	                                                  ✅ Yes
Good For?	                    Utility/helper functions	                                Closures, conditionally defined functions

--*/

// function declaration (hoisted)
sayHi(); // ✅ Works

function sayHi() {
  console.log("Hello!");
}

// function expression (not hoisted)

// greet(); // ❌ TypeError: greet is not a function

const greetMsg = function () {
  console.log("Hi!");
};
greetMsg(); // ✅ Works

// ✅ Interview Tip:
// Q: Can you call both function declaration and expression before they're defined?

// A:

// Function declarations are hoisted (both name and body), so you can call them before they are defined.

// Function expressions are not hoisted (only the variable is hoisted with undefined), so calling them early throws a TypeError.

/*
 * Arrow Functions:
 * - Shorter syntax using `=>`
 * - Do NOT have their own `this`, `arguments`, or `super`
 * - Cannot be used as constructors (no `new`)
 * - Lexically bind `this` from the surrounding scope

 * Regular Functions:
 * - Have their own `this` and `arguments`
 * - Can be constructors
 */

// Arrow Function
const add = (a, b) => a + b;

// Regular Function
function multiply(a, b) {
  return a * b;
}

// Key Difference in `this`
const obj = {
  name: "Alice",
  arrow: () => console.log(this.name), // ❌ undefined (this is lexical)
  regular() {
    console.log(this.name); // ✅ Alice
  },
};
obj.arrow();
obj.regular();

/*
 * Closure:
 * - A function that "remembers" and has access to variables
 *   from its outer (lexical) scope even after the outer function has returned.
 *
 * Use cases:
 * - Data hiding / encapsulation
 * - Function factories
 * - Maintaining state in async operations
 */

// Example:
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log("Count:", count);
  };
}

const counter = outer();
counter(); // Count: 1
counter(); // Count: 2
counter(); // Count: 3
// `inner` remembers `count` from `outer`, even though `outer` has finished executing.

/*
 * IIFE:
 * - Function that is declared and executed immediately.
 * - Used to create a private scope.
 * - Commonly used in module patterns or to avoid polluting the global scope.
 */

// Syntax:
(function () {
  console.log("IIFE runs immediately!");
})();

// With parameters
(function (name) {
  console.log("Hello", name);
})("John");

// With arrow function
(() => {
  console.log("Arrow IIFE");
})();
