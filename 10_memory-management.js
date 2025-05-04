/*---
✅ What is Memory Management?
Memory management refers to how JavaScript allocates and frees up memory during the execution of a program.

JavaScript is garbage-collected, which means:

You don't manually allocate or free memory.

The JS engine automatically reclaims memory that is no longer used.
---*/

/*---
🧹 Garbage Collection Basics
✅ What is Garbage Collection (GC)?
Garbage collection is the process of finding and removing memory that is no longer reachable.

✅ How It Works
JavaScript engines (like V8) use algorithms like:

Mark-and-Sweep Algorithm:

Start from the root (global).

"Mark" all reachable objects.

"Sweep" or delete all unreachable objects.

✅ Reachability
An object is considered reachable if:

It can be accessed in the code (from variables, closures, etc.)

---*/

// Example:
let obj = { name: "John" }; // reachable
obj = null; // now becomes unreachable — eligible for GC

/*--- 

🧠 Closures and Memory Leaks
✅ What is a Closure?
A closure is a function that remembers its lexical environment, even after the outer function has returned.

---*/

// Example:
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer(); // closure created
counter(); // 1

/*---
✅ Closures and Memory Usage
Closures retain variables from their outer scope. This is powerful but can keep memory alive unnecessarily.

⚠️ When Closures Cause Memory Leaks
If you create many closures and they hold large objects or DOM nodes, and they're not cleaned up, they can cause memory leaks.
  ---*/

function leakyFunction() {
  const hugeData = new Array(1000000).fill("🧠");
  return function () {
    console.log(hugeData[0]);
  };
}

const leak = leakyFunction(); // `hugeData` is still in memory

/*---   Even though leakyFunction has finished executing, hugeData remains in memory due to closure.

In this case:

hugeData is not garbage collected

Why? Because inner() is still referencing it (through the closure)

🔸 So Why Can Closures Cause Memory Leaks?
Closures can retain variables in memory longer than necessary, especially:

if those variables reference large objects or DOM elements

and if you forget to release or dereference them

✅ Real Problem:
Closures preserve references, and if:

The closure is stored in a long-lived place (e.g. in global scope, or attached to a DOM event)

It references heavy data (big arrays, DOM nodes)

➡️ That memory stays alive indefinitely, even if it’s no longer needed.

🔒 Memory Retention Flow in Closures (Mental Model)

Global Scope
  ↓
Function → Closure → References outer variables (even big ones)
        → If closure is long-lived, so are the captured variables


---*/

/*--

⚠️ What Causes Memory Leaks?
1.Unremoved DOM references

---*/
let element = document.getElementById("btn");
// If not set to null and element is removed from DOM, memory stays

// 2.Global variables (accidentally or poorly scoped)
someLeakedVar = "I am global";

// 3.Timers/Intervals not cleared
setInterval(() => {
  // keeps running and holds memory
}, 1000);

//   4. Detached DOM nodes referenced in closures

/*---
🧠 Interview Summary Points
✅ JavaScript uses automatic garbage collection
✅ Uses mark-and-sweep to remove unreachable memory
✅ Closures keep outer variables alive → can lead to memory leaks
✅ Be careful with:

Long-lived closures

Timers

Global variables

Detached DOM elements
---*/