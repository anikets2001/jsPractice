/*---
  ✅ Differences between Shallow Copy and Deep Copy

  - In a **shallow copy**, top-level properties are copied by value, but 
    nested objects are copied by reference.  
    This means:
    - Changing top-level properties in the copy does **not** affect the original.
    - But changing nested properties **will reflect** in the original object.

  - In a **deep copy**, every level of the object is copied by value.
    - So, changes made to any property in the copied object do **not** affect the original.

  🔹 Methods:
  - Shallow Copy:  spread syntax (`...`), `Object.assign()`, direct assignment (`obj2 = obj1`)
  - Deep Copy:     `JSON.parse(JSON.stringify(obj))`, `structuredClone()`
---*/
