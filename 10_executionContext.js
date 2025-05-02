/*---
✅ 1. What is Execution Context?
Execution Context is the environment in which JavaScript code is evaluated and executed.

There are three types of execution contexts:

1. Global Execution Context (GEC)

2. Function Execution Context (FEC)

3. Eval Execution Context (rarely used)

---*/

/*---
✅ 2. Creation Phase vs Execution Phase
Whenever a script or function runs, two phases occur inside the execution context:

Phase	What Happens
Creation Phase	Memory is allocated; variables declared with var are hoisted and initialized as undefined, let/const enter the **Temporal Dead Zone (TDZ)`. Functions are hoisted fully.
Execution Phase	Code runs line-by-line and variables get actual values.

---*/
// ✅ Example:
console.log(a); // undefined
var a = 10;

/*---
var a is hoisted and initialized as undefined in the creation phase

a = 10 is assigned during the execution phase
---*/

/*---
✅ 3. Lexical Environment
Lexical Environment is the place where variables/functions are physically written in the code (scope structure).

It consists of:

The current scope (variables, functions)

A reference to its outer lexical environment

---*/

// ✅ Example:

function outer() {
  let a = 10;

  function inner() {
    console.log(a); // 10 ← looks in outer lexical environment
  }

  inner();
}
outer();

//   inner function closes over a, because it’s lexically inside outer.

/*---
✅ 4. Scope Chain
Scope Chain is how JavaScript resolves variable names in nested functions.

When a variable is not found in the current scope:

JS moves to the outer lexical environment

It continues until it reaches the global scope

---*/

// ✅ Visual Example:
let a = "global";

function outer() {
  let b = "outer";

  function inner() {
    let c = "inner";
    console.log(a, b, c);
  }

  inner();
}
outer(); // output: "global outer inner"

// scope chain
// inner() → outer() → global

/*--
✅ 5. Interview Summary Table
Concept	                        Key Idea
Execution Context	            Container for the code being executed
Creation Phase	                Hoisting of var, function; TDZ for let/const
Execution Phase	                Actual code runs line by line
Lexical Environment	            Code structure that determines available variables/functions
Scope Chain	                    Chain of environments used to resolve variables
---*/

/*---
✅ Common Interview Question
🧠 Q: What happens when a function is invoked in JS?
✅ A: A new Function Execution Context is created with its own lexical environment and a reference to the outer environment.

---*/

/*---
difference between global, function and eval execution context
🔷 1. Global Execution Context (GEC)
✅ What is it?
The default execution context created when your JavaScript code first runs.

It represents the global scope, where top-level code (not inside any function) is executed.

✅ What it contains:
A global object:

In browsers → window

In Node.js → global

A reference to this (points to global object in non-strict mode)

All global variables and function declarations

✅ Creation:
Happens only once, at the start of program execution.
---*/

// ✅ Example:
var x = 10;
function greet() {
  console.log("Hello");
}

//   Here, both x and greet are part of the Global Execution Context.

/*---
🔷 2. Function Execution Context (FEC)
✅ What is it?
Created every time a function is invoked.

Each function call gets its own execution context.

✅ Contains:
Its own variable environment (local variables, parameters)

A reference to its outer (lexical) environment

A reference to this (depends on how the function is called)

✅ Lifecycle:
Just like GEC, it has:

Creation phase:

Parameters and var declarations are hoisted

let and const enter TDZ

Execution phase:

Code runs line-by-line
---*/

// ✅ Example:

function outer(a) {
  var b = 10;
  function inner() {
    console.log(a + b);
  }
  inner();
}
outer(5);

//   outer(5) creates a new FEC

// inner() also creates a new FEC, nested inside outer

/*---
🔷 3. Eval Execution Context (Rarely Used)
✅ What is it?
Created when the eval() function is used to run a string of JavaScript code at runtime.
---*/

eval("var x = 5;");
console.log(x); // 5

/*---
⚠️ Why is it rarely used?
Performance cost: Slower due to dynamic code execution

Security risk: Can run untrusted code

Debugging difficulty: Hard to trace and maintain

✅ Behavior:
Code inside eval() is executed in the current lexical scope, which could be global or function.

💡 Best practice: Avoid eval() unless absolutely necessary.
---*/

/*---
🔁 Summary Table
Execution Context	            When It's Created	            Scope	                Contains
Global	                        At the start of script	        Global	                Global vars, functions, global this
Function	                    On function invocation	        Local to function	    Params, local vars, this, outer scope
Eval	                        On eval() call	                Current lexical scope	Code string executed dynamically
---*/
