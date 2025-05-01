/*
 * JavaScript has two categories of data types:
 *
 * 1. Primitive Types (Immutable, stored by value):
 *    - String
 *    - Number
 *    - Boolean
 *    - null
 *    - undefined
 *    - Symbol
 *    - BigInt
 *
 * 2. Reference Types (Mutable, stored by reference):
 *    - Object
 *    - Array
 *    - Function
 *    - Date, RegExp, Map, Set, etc.
 */

// Example:
let a = 10; // Primitive (number)
let b = [1, 2, 3]; // Reference (array)
let c = { name: "JS" }; // Reference (object)

/*---
 *✅ Difference: Primitive vs Reference

 * Feature	       Primitive Types                       	Reference Types
 *
 * Storage	       Stored in stack (by value)             	Stored in heap (reference in stack)
 * Mutability	   Immutable	                            Mutable
 * Comparison	   Compared by value	                    Compared by reference
 * Copy Behavior   Creates a copy of the value	            Copies the reference (not the value)

---*/

/*
 * Type coercion means automatic or manual conversion between different data types.
 *
 * Two types:
 * 1. Implicit Coercion: JS converts types automatically.
 * 2. Explicit Coercion: Developer manually converts types.
 */

// 🔹 Implicit Coercion Examples:
console.log("5" + 2); // "52"  → number 2 is coerced to string
console.log("5" - 2); // 3     → string "5" coerced to number
console.log(1 == "1"); // true  → loose equality allows type coercion
console.log(1 === "1"); // false → strict equality, no coercion

// 🔹 Explicit Coercion Examples:
console.log(Number("123")); // 123
console.log(String(100)); // "100"
console.log(Boolean("")); // false

/*---
 * ✅ == vs === (Interview Must-Know)

 * Operator	        Meaning	              Coercion	Example
 * ==	            Loose equality	     ✅ Yes	   1 == '1' ✅
 * ===	            Strict equality	     ❌ No	   1 === '1' ❌
 * 
 * Tip: Always prefer === for predictable behavior in code.
---*/

/*
 * typeof: Returns a string representing the type of a value
 */

console.log(typeof 10); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof null); // "object" (quirk in JS)
console.log(typeof undefined); // "undefined"
console.log(typeof []); // "object"
console.log(typeof (() => {})); // "function"

/*
 * instanceof: Checks if an object is an instance of a constructor
 */

console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log(new Date() instanceof Date); // true
console.log("abc" instanceof String); // false (because string literal is not an object)

/*--
 * 💡 Interview Tip for typeof null:
 *     Even though typeof null === 'object', it's a bug in JS from the early days and kept for backward compatibility.
---*/

/*--- Primitives are immutable 
let str = "hello";
str[0] = "H";

console.log(str); // 👉 "hello" (not changed)
---*/

/*--- Non-primitives are mutable
let arr = [1, 2, 3];
arr[0] = 99;

console.log(arr); // 👉 [99, 2, 3]
---*/
