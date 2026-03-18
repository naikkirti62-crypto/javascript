function isDisarium(num) {
  const digits = String(num).split("");
  const sum = digits.reduce((acc, digit, index) => {
    return acc + Math.pow(Number(digit), index + 1);
  }, 0);

  return sum === num ? "Disarium" : "Not Disarium";
}

console.log(isDisarium(89));  // "Disarium"     → 8^1 + 9^2 = 8 + 81 = 89
console.log(isDisarium(175)); // "Disarium"     → 1^1 + 7^2 + 5^3 = 1 + 49 + 125 = 175
console.log(isDisarium(100)); // "Not Disarium" → 1^1 + 0^2 + 0^3 = 1 ≠ 100