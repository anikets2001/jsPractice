/*---
Explanation:

step1: create a function flattenArray that takes array as an input,
step2: we are checking whether the input is not array, it this is the case just return it back as it is.
step3: we are creating an empty array
step4: start a loop on input array
step5: if current item is array, then concat it inside result by recursively applying flattenArray function on item
step6: else, if item is primitive, or a value then simply push that value into the result array
step7: at last return the result array(that is your flattened array)
---*/

function flattenArray(arr) {
  if (!Array.isArray(arr)) {
    return arr;
  }

  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

// Example:
const arr = [1, 2, [3, 4, [5, 6, [7, 8]]], 9, 10];

const result = flattenArray(arr);
console.log("flatten Array:", result);

// function to flatten an array upto given depth

/*---
Explanation:

step1: create a function flattenArray that takes two inputs array and depth,
step2: we are checking whether the input is not array, it this is the case just return it back as it is.
step3: we are creating an empty array
step4: start a loop on input array
step5: if current item is array, and depth is greater than 0,  
       then concat it inside result by recursively applying flattenArray function on item and passing the depth
step6: else, if item is primitive, or a value then simply push that value into the result array
step7: at last return the result array(that is your flattened array)
---*/

function flattenArrayDepth(arr, depth) {
  if (!Array.isArray(arr)) {
    return arr;
  }

  let result = [];
  for (let item of arr) {
    if (Array.isArray(item) && depth === undefined) {
      result = result.concat(flattenArrayDepth(item));
    } else if (Array.isArray(item) && depth > 0) {
      result = result.concat(flattenArrayDepth(item, depth - 1));
    } else {
      result.push(item);
    }
  }
  return result;
}

// Example:
const original = [1, 2, [3, 4, [5, 6, [7, 8]]], 9, 10];

const flattened = flattenArrayDepth(original, 2);
console.log("flatten Array:", flattened);

// flatten array using reduce method

function flattenArrayReduce(arr) {
  return arr.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr)) ? flattenArrayReduce(curr) : curr;
  }, []);
}

// Example:
const originalArr = [1, 2, [3, 4, [5, 6, [7, 8]]], 9, 10];

const flattenedArr = flattenArrayDepth(originalArr);
console.log("flatten Array:", flattenedArr);
