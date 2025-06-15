function flattenObject(obj, prefix = '', result = {}) {
    for (const [key, value] of Object.entries(obj)) {
      const newKey = prefix ? `${prefix}.${key}` : key; // fixed line
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        flattenObject(value, newKey, result);
      } else {
        result[newKey] = value;
      }
    }
    return result;
  }
  
  let obj = {
    a: 1,
    b: 2,
    c: {
      d: 7,
      e: 8,
      f: {
        g: 4
      }
    }
  };
  
  const resultantObj = flattenObject(obj);
  console.log(resultantObj);
  