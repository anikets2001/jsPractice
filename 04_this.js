/*
 * `this` refers to the object that is executing the current function.
 * Its value depends on how the function is called (not where it's defined).
 */

// this is regular functions
const person = {
  name: "John",
  sayHello: function () {
    console.log("Hello " + this.name); // ✅ 'this' refers to person object
  },
};
person.sayHello(); // Hello John

//   this in arrow functions
const personTwo = {
  name: "John",
  sayHello: () => {
    console.log("Hello " + this.name); // ❌ 'this' refers to outer scope (e.g., window)
  },
};
personTwo.sayHello(); // Hello undefined

// 🔸 2. this with call(), apply(), and bind()
function greet(greeting) {
  console.log(`${greeting}, my name is ${this.name}`);
}

const user = { name: "Alice" };

greet.call(user, "Hi"); // Hi, my name is Alice (arguments passed one by one)
greet.apply(user, ["Hey"]); // Hey, my name is Alice (arguments passed as array)

const boundFn = greet.bind(user, "Hello");
boundFn(); // Hello, my name is Alice

// 🔸 3. this Inside Objects
const obj = {
  a: 10,
  show() {
    console.log(this.a); // ✅ refers to obj
  },
};
obj.show(); // 10

// If used inside a nested function, this may not behave as expected:

const obj2 = {
  a: 10,
  show() {
    function inner() {
      console.log(this.a); // ❌ undefined (this refers to global)
    }
    inner();
  },
};
obj2.show();

// Solution using arrow function:

const obj3 = {
  a: 10,
  show() {
    const inner = () => console.log(this.a); // ✅ lexical this
    inner();
  },
};
obj3.show(); // 10

// 🔸 4. this in Classes
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const u = new User("Raj");
u.sayHi(); // Hi, I'm Raj

// 🔸 5. this in Event Handlers

// ✅ Regular Function (works as expected)

document.getElementById("btn").addEventListener("click", function () {
  console.log(this); // ✅ refers to the clicked element
});

// ❌ Arrow Function (lexical this)
document.getElementById("btn").addEventListener("click", () => {
  console.log(this); // ❌ refers to the outer scope, not the button
});

/*--
🧠 Summary Table for Interview

Context	this refers to...

Global scope             (non-strict)	        window (or global object)
Inside regular function	 Depends on how it's called
Inside arrow function	 Lexically inherited from the outer scope
Inside object method	 The object the method belongs to
Inside class method	The  class instance
Event handler (regular)	 The HTML element that triggered the event
Event handler (arrow)	 Inherits this from surrounding scope (often window)
With call/apply/bind	 Manually sets this

---*/
