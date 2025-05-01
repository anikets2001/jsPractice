/*---
✅ What is Asynchronous JavaScript?
JavaScript is single-threaded, meaning it executes one thing at a time. But asynchronous behavior (like APIs, timers, file reading) is handled non-blockingly using:

Callbacks

Promises

Async/Await

Event Loop

---*/

// 🔸 1. Promises
// A Promise a object that represents the eventual completion/failure of an asynchronous task and returns its value. It has 3 states:

// pending
// fulfilled → .then()
// rejected → .catch()

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data received"), 1000);
  });
};

fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

/*---
🔸 2. Async/Await
Syntactic sugar over Promises. It lets you write async code like synchronous code.

---*/

async function getData() {
  try {
    const res = await fetchData(); // waits till resolved
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}
getData();
// ✅ Interview Tip: await can only be used inside an async function.

/*---
🔸 3. Microtasks vs Macrotasks

Task Type	Examples	                            Priority
Microtask	Promise.then(), queueMicrotask()	    ✅ Higher
Macrotask	setTimeout, setInterval, DOM events	    ❌ Lower
---*/

console.log("Start");

setTimeout(() => console.log("setTimeout"), 0); // macrotask

Promise.resolve().then(() => console.log("Promise")); // microtask

console.log("End");

/* Output:
Start
End
Promise
setTimeout
*/

/*---
🔸 4. Event Loop
Event Loop checks:

Is the call stack empty?

If yes → execute microtasks first (Promises)

Then → move to macrotasks (setTimeout etc.)

Visualization:
[ call stack ]
    |
[ microtask queue ] ---> ✅ First
    |
[ macrotask queue ] ---> ❌ Then
✅ Interview Tip: Microtasks are processed before macrotasks after each stack execution.
---*/



// 🔸 5. Callback Hell & Promise Chaining

// ❌ Callback Hell (Pyramid of Doom)
doA(() => {
  doB(() => {
    doC(() => {
      console.log("Done"); // deeply nested!
    });
  });
});

// ✅ Promise Chaining
doA()
  .then(doB)
  .then(doC)
  .then(() => console.log("Done"))
  .catch(err => console.error(err));


/*---
✅ Interview Summary Table

Concept	Quick Explanation

Promise	            Wrapper for async result; use .then, .catch
Async/Await	        Cleaner syntax for promises using await
Microtasks	        Promises, queueMicrotask – run first
Macrotasks	        setTimeout, setInterval, UI events – run later
Event Loop	        Handles execution order between sync, micro, macro tasks
Callback Hell	    Deeply nested callbacks, hard to read
Promise Chaining    Clean alternative to callbacks

---*/