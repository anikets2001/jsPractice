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

Task Type	        Examples	                                Priority
Microtask	        Promise.then(), queueMicrotask()	        ✅ Higher
Macrotask	        setTimeout, setInterval, DOM events	      ❌ Lower

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
  .catch((err) => console.error(err));

/*---
✅ Interview Summary Table

Concept	Quick Explanation

Promise	            Wrapper for async result; use .then, .catch
Async/Await	        Cleaner syntax for promises using await
Microtasks	        Promises, queueMicrotask – run first
Macrotasks	        setTimeout, setInterval, UI events – run later
Event Loop	        Handles execution order between sync, micro, macro tasks
Callback Hell	      Deeply nested callbacks, hard to read
Promise Chaining    Clean alternative to callbacks

---*/

/*--- methods of promises
1. Promise.all([p1,p2,p3]) -  waits for all promises to get resolved, if any promise get rejected, then entire result get rejects.
2. Promise.allSettled([p1,p2,p3])  - wait to all promises to get settled (either fullfil or reject), and give us aggregated result
3. Promise.race([p1,p2,p3]) - returns the first settled promise(success or failure)
4. Promise.any([p1,p2,p3]) - returns the first fulfilled promise(success)
---*/

// Example:
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolve");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p3 reject");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 resolved");
  }, 1000);
});

// promise.all()  -  it will wait for all promises to get resolved, if any rejected all rejected
const all = Promise.all([p1, p2, p3]);
all.then((res) => console.log("all:", res)).catch((err) => console.error(err));

// promise.allSettled()   - it will give us aggregated result of both resolved and rejected promises
const allSettled = Promise.allSettled([p1, p2, p3]);
allSettled
  .then((res) => console.log("allsettled:", res))
  .catch((err) => console.error(err));

// promise.race()   - it will return first settled promise
const race = Promise.race([p1, p2, p3]);
race.then((res) => console.log("race:", res)).catch((err) => console.log(err));

// Promise.any()  - it will return the first resolved promise(success)
const any = Promise.any([p1, p2, p3]);
any.then((res) => console.log("any:", res)).catch((err) => console.log(err));