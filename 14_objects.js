/*---

Q. Can we freeze an object in javascript
  yes we use Object.freeze(obj) method to freeze a a object which means we cannot add, remove, update the properties of an object

  
---*/

// example:
const obj = {
  name: "Aniket",
  age: 24,
  address: "moradabad",
};

Object.freeze(obj);
obj.name = "John";
console.log(obj);

/*---

Q.can we free a single property of an object

There is no such direct method to freeze a single property but yes we can do that with 
'defineProperty' method
 ---*/

const user = { age: 24, address: "moradabad" };

Object.defineProperty(user, "name", {
  value: "Aniket",
  writeable: false,
  configurable: false,
});

console.log("username:", user);
user.name = "John doe";
console.log("username:", user);

//What is configurable: false above
// It prevents you to even delete or create that value again, you cannot change the configurations of that property
// delete name: cannot done
// writable: true cannot done now

/*---
What does Object.seal() method does?
Object.seal(obj) method prevents adding or removing properties in a object, but you can still update the property values
----*/

// Example:
const employee = {
  name: "John Doe",
  empId: 1234,
  designation: "software engineer",
};

Object.seal(employee);

employee.address = "Gurgaon";
console.log("employee", employee); //cannot add new property

employee.empId = 5678;
console.log("employee", employee); //can update the current property value

/*----
Q. What does Object.assign do?
 Object.assign(target, source) copies the properties from one or more source objects onto a target object
---*/

// Example:
const source = { a: 1, b: 2 };
const target = { c: 3, d: 4 };

Object.assign(target, source);
console.log("target", target);

/*---
What does Object.create does ?
It basically create a new object with the given prototype
---*/

// Example:
const animal = { barks: true };
const dog = Object.create(animal);

console.log("barks:", dog.barks);

