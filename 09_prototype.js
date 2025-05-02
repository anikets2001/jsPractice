/*--
✅ 1. Prototype Chain
JavaScript uses prototypal inheritance, meaning every object inherits properties/methods from another object via a prototype chain.

🔹 How it works:
When you access a property on an object:

JS first looks on the object itself.

If not found, it looks up the chain via __proto__.
---*/

// ✅ Example:
const person = {
  greet() {
    console.log("Hello");
  },
};

const employee = Object.create(person);
employee.name = "John";

employee.greet(); // Hello (inherited from person)
Here, employee.__proto__ === person;

/*---
✅ 2. __proto__ vs prototype
Term	Used For
__proto__	Property on objects to refer to their prototype
prototype	Property on constructor functions to define properties/methods to be inherited
---*/

// ✅ Example:
function Animal() {}
Animal.prototype.sound = function () {
  console.log("Some sound");
};

const dog = new Animal();
console.log(dog.__proto__ === Animal.prototype); // true

// Animal.prototype is the template for all instances.
// dog.__proto__ points to Animal.prototype.

/*---
✅ 3. Class Syntax and Inheritance (ES6)
JavaScript classes are just syntactic sugar over the prototype system.

---*/
// ✅ Example:
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

const d = new Dog("Tommy");
d.speak(); // Tommy barks

/*---
  🔹 Behind the scenes:
Dog.prototype inherits from Animal.prototype

You can override methods (speak() in this case)
---*/

/*--
✅ 4. Inheritance Flow Summary

d → Dog.prototype → Animal.prototype → Object.prototype → null
Every object eventually links to Object.prototype unless you break the chain manually.
---*/

/*---
✅ 5. Interview-Friendly Summary Table

Concept	                Key Point
__proto__	            Internal reference to the prototype object
prototype	            Used by constructor functions to define shared methods
Object.create()	        Creates a new object and sets its prototype
class	                Cleaner syntax over prototype inheritance
extends	                Creates a subclass
super	                Calls parent constructor/methods

---*/

/*---
✅ Code Snippet Comparison
Using Prototypes:

---*/

function User(name) {
  this.name = name;
}
User.prototype.sayHi = function () {
  console.log("Hi, " + this.name);
};

const u1 = new User("Alice");
u1.sayHi();

/*--
  using classes:
  ---*/
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log("Hi, " + this.name);
  }
}
const u2 = new User("Alice");
u2.sayHi();
