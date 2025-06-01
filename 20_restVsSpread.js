/*---
    Rest vs Spread Operator in JavaScript

    Both rest (`...`) and spread (`...`) use the same syntax (three dots), 
    but their purpose depends on where they are used.

    "The rest operator (...) is used in function parameters to gather all remaining arguments into an array. 
    It's useful when we don’t know how many arguments will be passed. On the other hand, 
    the spread operator (...) is used to unpack or expand elements from arrays or objects — typically for copying or merging."

    1. Rest Operator:
       - Used in function parameters to group remaining arguments into an array.
       - Collects values.

       Example:
       function sum(...numbers) {
         return numbers.reduce((acc, val) => acc + val, 0);
       }
       sum(1, 2, 3); // Output: 6

    2. Spread Operator:
       - Used to expand elements of an array or object.
       - Spreads values.

       Examples:
       // Array
       const arr1 = [1, 2];
       const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

       // Object
       const obj1 = { a: 1 };
       const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }

    Key Difference:
    - Rest packs values into an array (function arguments).
    - Spread unpacks values from arrays/objects.
---*/
