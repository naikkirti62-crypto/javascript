function canVote(age) {
  return age >= 18 ? "Eligible" : "Not Eligible";
}

console.log(canVote(21)); // "Eligible"
console.log(canVote(16)); // "Not Eligible"
console.log(canVote(18)); // "Eligible"