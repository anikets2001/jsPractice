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
 * 
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
// console.log(a); // undefined (hoisted var)
// var a = 10;

// console.log(b); // ReferenceError (TDZ)
// let b = 20;

// console.log(c); // ReferenceError (TDZ)
// const c = 30;

// sayHi(); // ✅ works (function hoisted fully)
// function sayHi() {
//   console.log("Hello!");
// }

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

var i is not block-scoped, so all the functions created inside the loop share the same i variable.
When the setTimeout callbacks run after 100ms, the loop has already finished and i has been incremented to 3.
So, all three callbacks log 3.


let j is block-scoped, so a new j is created for each iteration of the loop.
Each callback closes over its own copy of j.
So, the values 0, 1, and 2 are logged as expected.

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




/*-------------------------------------------- Interview Questions --------------------------------------*/

/*----

1. What are variables in JavaScript, and why do we need them?
ans: Variables are named containers used to store data in memory so that we can reference, reuse, and manipulate values like numbers, strings, and booleans throughout a program.



2. What are the different ways to declare variables in JavaScript? Explain each one briefly? 
ans: JavaScript variables can be declared using var, let, and const.
var is function-scoped, hoisted, and initialized with undefined, and it can be re-declared and re-initialized.
let and const are block-scoped, hoisted but not initialized, so accessing them before declaration throws a ReferenceError.
let allows re-initialization but not re-declaration, while const allows neither.
Variables declared with var in the global scope become properties of the window object.



3. What is scope in JavaScript? Explain the different types of scope?
ans:  Scope in JavaScript defines the region of the code where a variable can be accessed.
There are three main types of scope:
Global scope – Variables declared outside any function or block are globally scoped and can be accessed anywhere in the program.
Function scope – Variables declared inside a function using var, let, or const are accessible only within that function.
Block scope – Variables declared using let and const inside a block like {}, if, or for are accessible only within that block.
var does not have block scope, which is why it can leak outside blocks.



4. Why does var not support block scope, and what problems can it cause in real applications?
ans: var does not support block scope because it was designed before block scope existed in JavaScript. It is only function-scoped, so when a var variable is declared inside a block like if or for, it gets hoisted to the nearest function or global scope.

This can cause problems such as:
Variable leakage outside the block
Unexpected overwriting of variables
Bugs in loops, especially when using var in for loops with asynchronous code
Because of these issues, let and const were introduced to provide proper block scoping and safer variable handling.



5. What is variable shadowing in JavaScript? Is it allowed with var, let, and const?
ans: Variable shadowing occurs when a variable declared in an inner scope has the same name as a variable in an outer scope.
The inner variable shadows (hides) the outer one within that scope.



6. What is lexical scope in JavaScript?
ans: Lexical scope means that the scope of a variable is determined by its position in the source code. JavaScript uses lexical scoping, so scope chaining is decided at the time of writing the code, not at runtime based on where a function is called.


7. What is scope chaining in JavaScript, and how does JavaScript resolve a variable when it is not found in the current scope?
ans: Scope chaining is the process by which JavaScript resolves variables. When a variable is accessed, JavaScript first looks in the current scope. If it is not found, it searches in the outer lexical scope, then continues moving outward until it reaches the global scope. If the variable is not found anywhere in the scope chain, a ReferenceError is thrown.



8. What is the Temporal Dead Zone (TDZ) in JavaScript?
ans: The Temporal Dead Zone is the phase during execution where a let or const variable exists in the scope but cannot be accessed before its declaration is evaluated. Accessing the variable during this phase results in a ReferenceError.



9.Why was the Temporal Dead Zone introduced in JavaScript? What problem does it solve?
ans: The Temporal Dead Zone was introduced to prevent bugs caused by accessing variables before they are declared.
Even though let and const are hoisted, they are not initialized until their declaration is executed. TDZ ensures that accessing them before initialization throws a ReferenceError, instead of silently returning undefined like var.



10.If let and const are hoisted, why do we still get a ReferenceError when accessing them before declaration?
ans: let and const are hoisted, but they are not initialized during the hoisting phase. They remain in the Temporal Dead Zone until the execution reaches their declaration. If we try to access them before initialization, JavaScript throws a ReferenceError to prevent unsafe access.



11. Does the Temporal Dead Zone exist only in block scope, or also in function and global scope? Explain.
ans: The Temporal Dead Zone exists for let and const variables in all scopes—block, function, and global—starting from the beginning of the scope until the variable is initialized. TDZ does not apply to var.



12. Can JavaScript access variables from inner scopes to outer scopes, or only from outer to inner? Why?
ans: JavaScript can access variables from outer scopes but not from inner scopes. This is because JavaScript uses lexical scoping, and scope chaining only works from the current scope outward. The JavaScript engine never searches inner scopes for variables.



13. How does the global scope fit into the scope chain, and what happens if a variable is not found anywhere?
ans: The scope chain starts from the current scope and moves outward through its lexical scopes until it reaches the global scope, which is the final level. If the variable is not found in any scope, JavaScript throws a ReferenceError.



14. In real-world JavaScript development, when should you use var, let, and const? Why?
ans: In real-world development, const should be the default choice because it prevents reassignment and makes code more predictable. let should be used when a variable needs to be reassigned later, such as in loops or conditional logic.
var is generally avoided in modern JavaScript because it is function-scoped, allows re-declaration, and can cause bugs due to hoisting and scope leakage.



15.Explain how hoisting, TDZ, scope, and scope chaining work together when JavaScript executes code.
ans: When JavaScript executes code, it first enters the creation phase, where memory is allocated. During this phase, variables and functions are hoisted to the top of their respective scopes.
var variables are hoisted and initialized with undefined, while let and const are hoisted but not initialized, which creates the Temporal Dead Zone. Accessing them before declaration results in a ReferenceError.
In the execution phase, code runs line by line. When a variable is accessed, JavaScript resolves it using scope chaining, searching from the current scope to outer lexical scopes and finally the global scope.
Scope, hoisting, TDZ, and scope chaining together ensure predictable variable access and help prevent bugs related to premature variable usage.


---*/