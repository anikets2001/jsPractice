/*---
Explanation:

step1: we are creating a function deepClone that takes an object as an argument
step2: we are checking whether this input is null or type of this input is not equal to 'object', if such a case then return it as it is
step3: we are checking whether this input is an array, if this is the case then we are deepClone every element of array using map function
step4: we are creating a object cloned
step5: we are starting a loop on keys of input obj
step6: we are checking that the keys are present in the origin input array(as we have to just clone the input obj keys not its prototype)
step7: if this is the case then we are calling deepClone on each key of obj and assigning it to cloned[key]
step8: at last we are returning the cloned object
---*/

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  if (Array.isArray(obj)) return obj.map(deepClone);

  let cloned = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
}

let user = {
  name: "Aniket",
  age: 23,
  address: {
    street: "Guru haridas road",
    city: "gurgoan",
    state: "Haryana",
  },
};

let clonedUser = deepClone(user);

console.log("user:", user);
console.log("clonedUser:", clonedUser);

clonedUser.address.city = "Noida";

console.log("user:", user);
console.log("clonedUser:", clonedUser);
