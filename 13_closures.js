/*---
Okay in javascript a child function or a nested function can have access to its lexical scope that means it can access the
variables defined in its parent function, even after the parent function has finished execution
---*/

// let me clarify this to you with an example

function parent() {
  let count = 0;
  return function child() {
    count++;
    return count;
  };
}

const counter = parent();

console.log(counter());
console.log(counter());
console.log(counter());

/*---
Q. But why we use closures
The main use-case of closures is that it preserves the state between multiple function calls
as you can see in above example, we are preserving the count variable on each invocation, 
the count variable is not setting back to 0 each time.

Q. What happens to the variables in a closure after the outer function is done executing?
They are kept in the memory as long as the inner function is still in use.

Q. memory leak in closures ?
Closures sometimes leads to the problem of memory leak because the variables in the outer function
are remain in the memory, they are not garbage collected because they are still referenced by the inner function
---*/
