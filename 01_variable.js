// Here we will learn everything about variables in JavaScript

/*
 * Variable:
 * A variable is a named memory location used to store data.
 * We can declare variables using var, let, and const in JavaScript.
 */

/*
 * Difference between var, let, and const:
 *
 * 1. Scope:
 *    - var → function scope
 *    - let and const → block scope (within {}, like in if, for, etc.)
 *
 * 2. Hoisting:
 *    - var is hoisted and initialized with undefined
 *    - let and const are hoisted but not initialized → accessing them before declaration gives a ReferenceError (TDZ: Temporal Dead Zone)
 *
 * 3. Re-declaration:
 *    - var → allowed
 *    - let and const → not allowed in the same scope
 *
 * 4. Re-initialization (Re-assignment):
 *    - var and let → allowed
 *    - const → not allowed (value must be assigned only once)
 *
 * 5. Global Scope Behavior:
 *    - a var variable also becomes a property of the global object (window in browsers)
 *    - let and const do not attach themselves to the global object
 */

/* 
 * Scope in JavaScript
 * JavaScript has three types of scopes:

 * 1. Global Scope:
 *    - Variables declared outside any function or block.
 *    - Accessible throughout the entire program.
 *    - In browsers, global variables declared with var also become properties of the window object.

 * 2. Function Scope:
 *    - Variables declared with var inside a function.
 *    - Accessible only within that function.
 *    - let and const also follow function scope when declared inside a function.

 * 3. Block Scope:
 *    - Variables declared with let and const inside a block (e.g., if, for, while, etc.)
 *    - Accessible only within that specific block.
 *    - var does NOT have block scope—it leaks outside the block.

 */

/*
 * Hoisting in JavaScript:
 *
 * Hoisting is JavaScript's default behavior of moving declarations
 * (not initializations) to the top of their scope (global or function).
 *
 * Both var, let, const, and functions are hoisted.
 *
 * Key Points:
 * - var is hoisted and initialized with undefined.
 * - let and const are hoisted but not initialized — accessing them before declaration causes ReferenceError (TDZ).
 * - Function declarations are fully hoisted (both name and body).
 * - Function expressions and arrow functions behave like variables.
 */

// Example:
console.log(a); // undefined (hoisted var)
var a = 10;

// console.log(b); // ReferenceError (TDZ)
// let b = 20;

// console.log(c); // ReferenceError (TDZ)
// const c = 30;

sayHi(); // ✅ works (function hoisted fully)
function sayHi() {
  console.log("Hello!");
}

// greet(); ❌ TypeError
const greet = function () {
  console.log("Hi there");
};

/*
 * Temporal Dead Zone (TDZ):
 *
 * TDZ is the time between entering the scope and the actual declaration
 * of a variable (with let or const), during which the variable cannot be accessed.
 *
 * Accessing the variable in this "zone" results in a ReferenceError.
 *
 * TDZ exists only for let and const, not for var.
 *
 * Why TDZ Exists:
 * - It helps catch programming errors early.
 * - Prevents access to variables before their intended initialization.
 */

// Example:
{
  // TDZ starts here for 'x'
  // console.log(x); // ❌ ReferenceError
  let x = 5; // TDZ ends here

  // ✅ Now safe to access x
  console.log(x); // 5
}

{
  // TDZ for const 'y'
  // console.log(y); // ❌ ReferenceError
  const y = 10;
  console.log(y); // ✅ 10
}

//   Example 1: var vs let in a loop

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 3 3 3

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}
// Output: 0 1 2

/*---
📌 Why?

var is function-scoped, so all callbacks share the same i.

let is block-scoped, so each iteration gets a new j

---*/

// Example 2: Hoisting with var
console.log(x); // undefined
var x = 5;

// Example 3: Hoisting with let
// console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
// let y = 10;

/*---

✅ Common Interview Questions
1. What is the difference between var, let, and const?

2. What is hoisting in JavaScript?

3. What is the Temporal Dead Zone?

4. Why does var behave differently in loops?

5. Is const completely immutable? 

---*/

/*
 * Scope Chaining in JavaScript:
 *
 * Scope chaining is the process by which JavaScript resolves variable names
 * in nested functions or blocks by looking outward from the current scope
 * to the outer (parent) scopes until it finds the variable.
 *
 * This chain of lexical environments forms the "scope chain".
 *
 * If a variable is not found in the current scope,
 * JavaScript looks into its parent scope, then grandparent, and so on,
 * up to the global scope. If not found, it throws a ReferenceError.
 *
 * Important:
 * - JavaScript uses **lexical scoping**, meaning the scope chain is determined by
 *   where functions are written in the code, not where they are called.
 */

// Example:

let globalVar = "global";

function outer() {
  let functionVar = "outer";

  function inner() {
    let InnerVar = "inner";
    console.log(globalVar); // ✅ looks in inner → outer → global → found "global"
    console.log(functionVar); // ✅ looks in inner → outer → found "outer"
    console.log(InnerVar); // ✅ found in inner scope
  }

  inner();
}

outer();

// Trying to access b or c outside their scope:
// console.log(b); ❌ ReferenceError
// console.log(c); ❌ ReferenceError

/*---
🔗 How the Scope Chain Works:
When console.log(a) is executed inside inner():

JS looks for a in inner() → not found

Then checks outer() → not found

Then checks global scope → ✅ found
---*/
