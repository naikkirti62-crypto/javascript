
function addEvenNumbers(n) {
  let sum = 0;
  for (let i = 2; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}

console.log(addEvenNumbers(10)); // 30
console.log(addEvenNumbers(6));  // 12 (2+4+6)
