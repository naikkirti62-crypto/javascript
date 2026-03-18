function isNegative(num) {
  return num < 0 ? "Negative" : "Not Negative";
}

console.log(isNegative(-4)); // "Negative"
console.log(isNegative(5));  // "Not Negative"
console.log(isNegative(0));  // "Not Negative"