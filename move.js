function moveZerosToEnd(arr) {
  const nonZeros = arr.filter(n => n !== 0);
  const zeros = arr.filter(n => n === 0);
  return [...nonZeros, ...zeros];
}

console.log(moveZerosToEnd([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
console.log(moveZerosToEnd([0, 0, 1, 2, 0, 3])); // [1, 2, 3, 0, 0, 0]