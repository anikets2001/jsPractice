/*----
  Differences between Arrow Functions and Regular Functions:

  - Arrow functions are a new ES6 syntax for writing functions more concisely.
    They are also known as "fat arrow" functions.

  - Arrow functions do **not** have their own `this` binding.
    They inherit `this` from the surrounding (lexical) scope.
    Regular functions have their **own** `this`.

  - Arrow functions do **not** have access to the `arguments` object.
    Regular functions do.

  - Arrow functions are **not hoisted**.
    Regular functions **are hoisted** — they can be called before their declaration.

  - Arrow functions **cannot** be used as constructors.
    Regular functions **can** be used with `new` to create instances.
----*/
