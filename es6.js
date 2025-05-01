/*--
✅ 1. Destructuring
Destructuring allows unpacking values from arrays or objects into variables.
---*/

// 🟢 Array Destructuring

const arr = [1, 2, 3];
const [a, b] = arr; // a = 1, b = 2

// 🟢 Object Destructuring
const user = { name: "Alice", age: 25 };
// const { name, age } = user;

// 🧠 Used a lot in React props or API responses.

/*---
✅ 2. Template Literals
Use backticks (`) to embed expressions in strings.
---*/

const name = "Alice";
console.log(`Hello, ${name}!`); // Hello, Alice!
// 🧠 Prefer over string concatenation. Supports multiline strings too.

/*---
✅ 3. Default Parameters
Assign default values to function parameters.
---*/
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greet(); // Hello, Guest
// 🧠 Avoids undefined if argument is not passed.

/*---
✅ 4. Optional Chaining (?.)
Safely access nested properties without error if something is undefined or null.
---*/

const user2 = { profile: { name: "Bob" } };
console.log(user.profile?.name); // Bob
console.log(user.address?.city); // undefined (no error)
// 🧠 Avoids long if checks when accessing deep data.

/*---
✅ 5. Nullish Coalescing (??)
Returns right-hand value only if left is null or undefined (not for falsy values like 0 or "").
---*/
const input = 0;
console.log(input ?? 10); // 0 ✅

const username = null;
console.log(username ?? "Guest"); // Guest ✅
// 🔄 Compare with || which treats 0, "" as falsy.


/*---
✅ 6. Modules (import, export)
🟢 Named Export
---*/
// utils.js
export const sum = (a, b) => a + b;

// main.js
import { sum } from "./utils.js";
// 🟢 Default Export

// utils.js
export default function greet() {
  console.log("Hello");
}

// main.js
import greet from "./utils.js";
// 🧠 Use import/export to split code into reusable files.

/*---
✅ 7. Set
A collection of unique values (no duplicates).
---*/
const nums = new Set([1, 2, 2, 3]);
nums.add(4); // Set { 1, 2, 3, 4 }
nums.has(2); // true

// 🧠 Great for removing duplicates from an array.
const unique = [...new Set([1, 2, 2, 3])]; // [1, 2, 3]


/*---
✅ 8. Map
A collection of key-value pairs where keys can be any type.
---*/
const map = new Map();
map.set("name", "Alice");
map.set(1, "one");

console.log(map.get("name")); // Alice
// 🧠 Use when you need key-value pairs with non-string keys or order-preserving behavior.


/*---
🧠 Interview Tip Table

Feature	                    Purpose / Use Case
Destructuring	            Extract from objects or arrays
Template literals	        Embed variables in strings
Default parameters	        Provide fallback function values
Optional chaining (?.)	    Avoid errors on nested undefined/null access
Nullish coalescing (??)	    Use fallback only if null/undefined
Modules (import/export)	    Modularize code
Set	                        Store unique values
Map	                        Store key-value pairs   with any type as key

---*/