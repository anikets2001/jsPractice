/*--- Differences between Promise and async/await

✔ Promises use .then()/.catch() for handling asynchronous operations.
✔ async/await uses try/catch blocks for cleaner and synchronous-looking code.

✔ async functions always return a Promise, even if you return a value.
✔ Promises themselves don’t “wait”; they run asynchronously and continue with the next .then().
✔ async/await pauses the execution of the function until the awaited Promise is settled, making the flow easier to follow.

✔ async/await is syntactic sugar over Promises.

---*/
