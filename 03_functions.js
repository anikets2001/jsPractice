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
   
Feature	                      Function Declaration	                                    Function Expression

Syntax	                      function name() {}	                                      const name = function() {}
Hoisting	                    ✅ Fully hoisted (can call before it's defined)	        ❌ Not hoisted (throws error if called before init)
Function Name	                Must have a name	                                        Can be named or anonymous
When Defined	                Defined at parse time	                                    Defined at runtime
Usage Before Definition     	✅ Allowed	                                              ❌ ReferenceError or TypeError
Part of Which Construct?	    Standalone declaration	                                  Expression assigned to a variable or property
Can Be Used as Callback?	    ✅ Yes	                                                  ✅ Yes
Good For?	                    Utility/helper functions	                                Closures, conditionally defined functions

--*/

// function declaration (hoisted)
sayHi(); // ✅ Works

function sayHi() {
  console.log("Hello!");
}

// function expression (not hoisted)

// greetMsg(); // ❌ TypeError: greet is not a function

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

/*---
INTERVIEW QUESTIONS:


Q1.
What is hoisting in JavaScript, and how does hoisting differ for:
function declarations
function expressions (with var, let, const)?
ans: Function declarations are fully hoisted.
Function expressions are not callable before initialization.
If declared with var, they throw a TypeError.
If declared with let or const, they throw a ReferenceError due to TDZ.


Q2.
What is the difference between function declaration and function expression in terms of:
execution context creation
memory allocation
when they become available for execution?
ans: Function Declaration:
During the memory creation phase of execution context:
The entire function (name + body) is allocated memory
It becomes available before code execution start
That’s why function declarations can be called before their definition
They are created at parse time

Function Expression:
During the memory creation phase:
Only the variable is hoisted
The function body is NOT assigned yet
The function is created only during the execution phase
That’s why it cannot be used before initialization
Availability depends on whether it’s declared with:
var → initialized as undefined
let / const → stays in TDZ

🔑 Key Difference Line (Interviewer Loves This)
Function declarations are created during the memory phase,
while function expressions are created during the execution phase.


Q3.
What is an IIFE, and why was it heavily used before ES6?
ans: An IIFE (Immediately Invoked Function Expression) is a function that is executed immediately after its creation.
It was mainly used before ES6 to create a private scope and avoid polluting the global namespace.
Variables declared inside an IIFE are not accessible from the outside, which helps in data hiding and encapsulation.
Before ES6 modules and let/const, IIFE was the most common way to achieve block-like scoping in JavaScript.

🔑 Key One-Line Explanation (Very Important)
IIFE was used to prevent global scope pollution before ES6 introduced block scope and modules.


Q4.
What is the difference between arrow functions and regular functions with respect to this?
ans: Arrow functions do not have their own this.
They lexically inherit this from the surrounding scope where they are defined.
Regular functions have their own this, and its value is determined at runtime based on how the function is called (object method, function call, constructor, etc.).

🔑 One-Liner Interview Tip
Arrow functions bind this at definition time, regular functions bind this at call time.


Q5.
Why can’t arrow functions be used as constructors with the new keyword?
ans: Arrow functions cannot be used as constructors because:
They do not have their own this
Constructors rely on this to create and initialize new objects
Arrow functions inherit this from their lexical scope, so they cannot bind a new this
They do not have a [[Construct]] internal method
Only functions with [[Construct]] can be called using new
Arrow functions lack this internal mechanism
They do not have a prototype property
Constructors need a prototype to attach methods for created instances
Arrow functions don’t have prototype


🔑 One-line interview answer:
Arrow functions cannot be used as constructors because they do not have their own this, prototype, or [[Construct]] method.


Q6. What is a closure, and how does JavaScript make closures possible internally?
A closure is a function that remembers and has access to variables from its outer (lexical) scope, even after the outer function has finished executing.
How JavaScript makes closures possible internally:
JavaScript uses lexical scoping, meaning scope is determined by where the function is written, not where it is called.
When a function is created, it stores a reference to its lexical environment.
If an inner function uses variables from an outer function, those variables are preserved in memory.
Even after the outer function is removed from the call stack, its variables remain accessible through the scope chain.


🔑 One-line interview answer:
Closures exist because functions in JavaScript carry their lexical environment with them.


Q7. Practical real-world use cases of closures
ans: Closures are commonly used when we need to preserve state or hide data.

Major use cases:
Data encapsulation / data hiding
Variables inside a function can’t be accessed directly from outside
Helps prevent accidental modification of data
Maintaining state
Useful for counters, caches, or tracking values across function calls
Example: click counters, retry counts
Function factories
Functions that return other functions with pre-configured values
Helps create reusable and customizable logic
Callbacks and asynchronous code
Closures allow async callbacks (setTimeout, fetch, event handlers) to access variables from outer scope even after execution
Memoization
Storing previously computed results to improve performance
Module pattern (before ES6)
Used to create private variables and public APIs before modules existed


🔑 One-line interview answer:
Closures are used for data hiding, state management, function factories, async callbacks, and performance optimization.


Q8. Difference between IIFE and regular function (scope & lifetime)
IIFE (Immediately Invoked Function Expression):
Creates a new private scope immediately
Variables declared inside it are not accessible outside
Executes only once at the moment it is defined
Lifetime of variables exists only for that execution
Commonly used to avoid global scope pollution

Regular Function:
Creates a new scope only when it is called
Can be called multiple times
Variables exist for the duration of each function call
Can expose or return values to the outer scope

🔑 One-line interview answer:
An IIFE creates a one-time private scope and runs immediately, while a regular function creates scope only when invoked and can run multiple times.


Q9. What is the arguments object, and why is it not available in arrow functions?
The arguments object is an array-like object available inside regular functions that contains all arguments passed to that function, even if they are not explicitly defined as parameters.

Why arrow functions don’t have arguments:
Arrow functions do not have their own execution context
They do not create their own arguments object
Instead, they lexically inherit arguments from the nearest regular function scope (if any)

Design reason:
Arrow functions are meant to be lightweight and predictable
They rely on rest parameters (...args) instead of arguments


🔑 One-line interview answer:
Arrow functions don’t have an arguments object because they don’t create their own execution context; they inherit it lexically.


Q10. Lexical scope and its relation to closures
Lexical scope means that the scope of a variable is determined by where it is written in the source code, not where the function is called.
JavaScript resolves variables by looking at the parent scopes defined at code-writing time
This forms the scope chain
Relation to closures:
When a function is created, it captures its lexical environment
A closure is formed when an inner function continues to access variables from its lexical (outer) scope even after the outer function has finished executing

🔑 One-line interview answer:
Closures exist because JavaScript uses lexical scoping, allowing functions to retain access to their outer scope variables.


Q11. Why are function expressions preferred in callbacks and closures?
Function expressions are often preferred because:
They can be passed directly as values
Callbacks require functions to be passed as arguments
Function expressions fit naturally into this pattern
They avoid unnecessary hoisting
Function declarations are hoisted, which can cause confusion
Function expressions provide more predictable execution flow
They work better with closures
Function expressions are created at runtime
They capture the current lexical environment more explicitly
They allow anonymous functions
Useful when a function is only needed once
Reduces namespace pollution
They support conditional and dynamic creation
Can be defined inside blocks or conditions (with let / const)

🔑 One-line interview answer:
Function expressions are preferred in callbacks and closures because they are predictable, flexible, and better suited for passing functions as values.


Q12. Function declaration inside a block — scope behavior
Short answer:
It is inconsistent and should be avoided.
Detailed explanation:
In non-strict mode (older JavaScript):
Function declarations inside blocks may behave like function-scoped
They can be hoisted outside the block
In strict mode and modern JavaScript (ES6+):
Function declarations inside blocks are treated as block-scoped
They behave similarly to let

Problem:
Behavior differs between:
Browsers
Strict vs non-strict mode
This makes code unpredictable
Best practice:
Never use function declarations inside blocks
Use function expressions with let or const instead

if (true) {
  const fn = function () {};
}
  
🔑 One-line interview answer:
Function declarations inside blocks have inconsistent scoping, so function expressions should be used instead.


Q13. Named vs Anonymous Function Expressions
Anonymous Function Expression
Does not have its own name
Usually assigned to a variable or passed as a callback
Simpler and commonly used
Harder to debug because stack traces don’t show a function name
Named Function Expression
Has an internal name
The name is only accessible inside the function
Useful for:
Better stack traces
Recursion
Self-referencing without relying on the outer variable
When to use which:
Use anonymous functions for simple callbacks or one-time usage
Use named function expressions when debugging, recursion, or self-reference is needed

🔑 One-line interview answer:
Named function expressions improve debugging and recursion, while anonymous ones are simpler and used for callbacks.


Q14. Difference between call, apply, and bind (focus on this)
All three methods are used to explicitly control the value of this inside a function.
call
Invokes the function immediately
Accepts arguments one by one
Syntax: fn.call(thisArg, a, b)
apply
Invokes the function immediately
Accepts arguments as an array
Syntax: fn.apply(thisArg, [a, b])
bind
Does not invoke the function immediately
Returns a new function with this permanently bound
Useful for callbacks and event handlers


🔑 One-line interview answer:
call and apply invoke immediately, bind returns a new function, and all three set the value of this.


Q15. Why this behaves differently in arrow functions vs regular functions
Arrow Functions
Do not have their own this
They lexically inherit this from the surrounding scope
this is fixed at definition time
Cannot be changed using call, apply, or bind
Regular Functions
Have their own this
this is determined at runtime
Depends on how the function is called
Can be controlled using call, apply, and bind


🔑 One-line interview answer:
Arrow functions bind this lexically, while regular functions bind this dynamically at call time.
---*/