function transformArr(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(transformArr(item));
    } else {
      result.push(item.data);
    }
  }

  return result;
}

const arr = [
  {
    data: 1,
  },
  [
    {
      data: 2,
    },
  ],
  {
    data: 3,
  },
];

const resultArr = transformArr(arr);
console.log(resultArr);
