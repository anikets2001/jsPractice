/*
 * `this` refers to the object that is executing the current function.
 * Its value depends on how the function is called (not where it's defined).
 */

// this in regular functions
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

Global scope                (non-strict)	window (or global object)
Inside regular function	    Depends on how it's called
Inside arrow function	      Lexically inherited from the outer scope
Inside object method	      The object the method belongs to
Inside class method	        The  class instance
Event handler (regular)	    The HTML element that triggered the event
Event handler (arrow)	      Inherits this from surrounding scope (often window)
With call/apply/bind	      Manually sets this

---*/



/*----
INTERVIEW QUESTIONS

Q1.
What does this refer to in JavaScript, and why is it said that this is determined at runtime?
ans: this in JavaScript refers to the object that invokes the current function.
Its value is determined at runtime because it depends on how the function is called, not where it is defined.
For example, in regular functions, this can refer to an object, the global object, or be undefined in strict mode.


Q2.
How does this behave differently in strict mode vs non-strict mode inside a regular function?
ans: Inside a regular function, when called in the global context:
In non-strict mode, this refers to the global object (window in browsers).
In strict mode, this is undefined.
Strict mode prevents accidental binding of this to the global object.

🔑 Key One-Liner (Interview Gold)
Strict mode makes this safer by avoiding implicit global binding.


Q3.
Why does this inside an arrow function not change when using call, apply, or bind?
ans: Arrow functions do not have their own this.
Instead, they lexically inherit this from the surrounding scope at the time they are defined.
Because of this, this is already fixed and cannot be changed using call, apply, or bind.
These methods only work on functions that have their own dynamic this, which arrow functions do not.


Q4.
What does this refer to inside a class method, and how is it different from a normal function call?
ans: Inside a class method, this refers to the instance of the class on which the method is called.
This happens because class methods are executed in the context of the object created using new.
In contrast, for normal functions, the value of this is dynamic and depends on how the function is invoked (global call, object call, strict mode, etc.).


Q5.
Why does this behave unexpectedly inside a nested regular function within an object method?
ans: Inside a nested regular function, this behaves unexpectedly because regular functions have their own this, which is determined by how they are invoked.
When a nested function is called as a plain function, it is no longer called as a method of the object, so this defaults to the global object in non-strict mode or undefined in strict mode.


Q6.
How do arrow functions solve the this problem in nested functions?
ans: Arrow functions do not have their own this.
Instead, they lexically inherit this from the surrounding scope.
Because of this, when an arrow function is used inside an object method, it retains the outer method’s this and does not lose the object context like a regular nested function.


Q7.
What does this refer to in an event handler, and why does it differ between regular functions and arrow functions?
ans: In event handlers, when a regular function is used, this refers to the HTML element on which the event is triggered.
When an arrow function is used, this does not refer to the element. Instead, it lexically inherits this from its surrounding scope, which is often the window object (or undefined in strict mode), depending on where the handler is defined.


Q8.
How does this behave in JavaScript constructors and with the new keyword?
ans: Inside a constructor function or class constructor, this refers to the newly created instance of the object.
This happens when the function is called using the new keyword. The new keyword creates a new object and binds this to that object.


Q9.
Why should arrow functions NOT be used as constructors?
ans: Arrow functions cannot be used as constructors because:
They do not have their own this
Arrow functions inherit this from their lexical (outer) scope
Constructors need their own this to bind to the new instance
They do not have a [[Construct]] method
So they cannot be called with new


Q10.
What will be the output of the following code and why?
const obj = {
  name: "JS",
  regular() {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
};

obj.regular();
obj.arrow();


ans:The output will be:
"JS"
undefined
----*/
