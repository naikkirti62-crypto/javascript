function divisibleByFive(num) {
  return num % 5 === 0 ? "Yes" : "No";
}

console.log(divisibleByFive(25)); // "Yes"
console.log(divisibleByFive(13)); // "No"
console.log(divisibleByFive(10)); // "Yes"