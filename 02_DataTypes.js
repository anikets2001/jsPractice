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


/*---
INTERVIEW QUESTION:


1. What are the different data types in JavaScript? Classify them into primitive and non-primitive types.
ans: There are two types of data types: 1. primitive 2. non-primitive (reference type) Primitive: 1. Number 2. String 3. boolean 4. null 5. undefined 6. bigInt 7. Symbol non-primitive: 1. Object 2. Array 3. Date 4. regex 5. Set, map etc

Question 2 (Primitive Behavior)
What is the main difference between primitive and non-primitive data types in terms of memory and behavior?
ans:Primitive data types store a single value, are immutable, and are copied by value. They are typically stored in the stack.
Non-primitive data types can store multiple values, are mutable, and are copied by reference. They are stored in the heap.

Question 3 (Type Coercion – Basics)
What is type coercion in JavaScript?
Type coercion in JavaScript is the process of converting a value from one data type to another.
It can be implicit, where JavaScript automatically converts types during operations or comparisons, or explicit, where the developer manually converts types using functions like Number(), String(), or Boolean().

Question 4 (Implicit Coercion – + Operator)
The + operator behaves differently because it is overloaded in JavaScript. If either operand is a string, JavaScript converts the other operand to a string and performs string concatenation. For all other arithmetic operators, JavaScript converts operands to numbers and performs numeric operations.
Why does the + operator behave differently from other arithmetic operators when dealing with strings and numbers?


Question 5 (Equality & Coercion)
What is the difference between == and === in JavaScript?
== is the loose equality operator that compares values after performing type coercion, whereas === is the strict equality operator that compares both value and data type without type coercion.
In real-world code, === is preferred because it produces more predictable and accurate results.


Question 6 (Falsy Values & Coercion)
What are falsy values in JavaScript? How does JavaScript treat them during type coercion?
There are only 7 falsy values:
false
0
-0
0n (BigInt zero)
"" (empty string)
null
undefined
NaN

👉 Everything else is truthy, including:
[]
{}
"0"
-1
"false"

Interview-ready explanation
Falsy values are values that are converted to false when coerced to a boolean. JavaScript treats these values as false in conditional statements, while all other values are treated as truthy.


Question 7 (Tricky Coercion Concept)
Why does [] == false evaluate to true in JavaScript?
Step-by-step coercion:
== allows type coercion
false is converted to a number → 0
[] is converted to a primitive:
[] → "" (empty string)
"" is converted to a number → 0

Final comparison:
0 == 0 // true


Question 8 (Null vs Undefined)
What is the difference between null and undefined in JavaScript?
Add these points to strengthen it
Key interview facts
null is an assigned value
undefined is a default value
typeof null → "object" (legacy bug ⚠️)
typeof undefined → "undefined"
Polished interview-ready answer
null represents the intentional absence of a value and is explicitly assigned by the developer, whereas undefined means a variable has been declared but not initialized. undefined is automatically assigned by JavaScript.


Question 9 (Typeof Operator – Tricky)
What is the output of typeof null and why does JavaScript behave that way?
Interview-ready version (already perfect)
typeof null returns "object" due to a bug in the early implementation of JavaScript. It was never fixed to avoid breaking backward compatibility.
Bonus interview line (optional)
Internally, null is a primitive value, not an object.

Question 10 (Final – Type Coercion Edge Case)
What will be the output of null == undefined and null === undefined? Explain why.
✅ Correct Explanation (Interview-Ready)
null == undefined → true
== allows type coercion

JavaScript has a special rule:
null is only loosely equal to undefined
It is not equal to any other value
👉 No number/string conversion happens here — it’s a special case in the spec.
null === undefined → false
=== does strict comparison

Different types:
null → object (primitive)
undefined → undefined
No coercion → result is false

null == undefined is true due to a special rule, but null === undefined is always false.



---*/