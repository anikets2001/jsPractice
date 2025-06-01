/*---
    Differences between function declaration and function expression:

    - A function declaration defines a named function using the `function` keyword, and it is hoisted,
      meaning we can call it before its actual definition in the code.

    - A function expression involves assigning a function (can be named or anonymous) to a variable.
      It is not hoisted, so it cannot be invoked before it is defined.

    - Function declarations are processed at compile time (due to hoisting),
      while function expressions are evaluated at runtime.

    Example:
    // Function Declaration
    greet(); // ✅ works
    function greet() {
      console.log("Hello");
    }

    // Function Expression
    greet(); // ❌ Error: Cannot access 'greet' before initialization
    const greet = function() {
      console.log("Hello");
    };
---*/
