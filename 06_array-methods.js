/*--
✅ High-order Functions (Arrays)
High-order functions are functions that take other functions as arguments or return functions.

🔸 1. map()
Creates a new array by transforming each element.

Does not modify the original array.

const nums = [1, 2, 3];
const doubled = nums.map(num => num * 2); // [2, 4, 6]

🧠 Interview: Use map() when you want to transform every item.

🔸 2. filter()
Returns a new array with elements that pass the condition.
const nums = [1, 2, 3, 4];
const even = nums.filter(num => num % 2 === 0); // [2, 4]

🧠 Interview: Use filter() when you want to exclude or include specific items.

🔸 3. reduce()
Applies a function to accumulate array values into a single value.

const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, curr) => acc + curr, 0); // 10
🧠 Interview: Use reduce() for aggregating, like sum, max, groupBy, etc.

🔸 4. forEach()
Iterates over each element but does not return a new array.

[1, 2, 3].forEach(num => console.log(num * 2)); // prints 2, 4, 6
❌ Interview Trap: forEach cannot be chained and doesn't return anything.

🔸 5. find()
Returns the first element that matches the condition (or undefined if not found).

const users = [{ id: 1 }, { id: 2 }];
const user = users.find(u => u.id === 2); // { id: 2 }
🧠 Interview: Use find() when you need just one match, not all.

✅ Object Methods
🔸 1. Object.keys(obj)
Returns an array of keys:

Edit
Object.keys({ a: 1, b: 2 }); // ['a', 'b']
🔸 2. Object.values(obj)
Returns an array of values:

Object.values({ a: 1, b: 2 }); // [1, 2]
🔸 3. Object.entries(obj)
Returns an array of key-value pairs:

Object.entries({ a: 1, b: 2 }); // [['a', 1], ['b', 2]]
🧠 Use Object.entries() to easily loop over both keys and values using for...of.

✅ Destructuring
Extract values from objects or arrays into variables.

Array destructuring:

const [a, b] = [10, 20];
Object destructuring:

const { name, age } = { name: "John", age: 30 };
🧠 Useful for React props, API data, etc.

✅ Spread and Rest Operators
🔸 Spread (...) – expands elements

const arr = [1, 2];
const newArr = [...arr, 3]; // [1, 2, 3]

const obj = { a: 1 };
const newObj = { ...obj, b: 2 }; // { a: 1, b: 2 }
🔸 Rest (...) – collects remaining items

const [a, ...rest] = [1, 2, 3]; // rest = [2, 3]

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}


🧠 Interview Summary Table
Concept	          Use Case

map()	            Transform every item → returns new array
filter()	        Include only matching items
reduce()	        Accumulate into a single value
forEach()	        Just iterate (no return)
find()	          Return first match
Object.keys()	    Get all keys
Object.values()	  Get all values
Object.entries()	Get key-value pairs

Destructuring	    Extract data from objects/arrays
Spread	          Expand elements in arrays/objects
Rest	            Gather remaining values into a variable

---*/







