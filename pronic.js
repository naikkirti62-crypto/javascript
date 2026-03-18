function isPronic(num) {
  for (let i = 0; i <= Math.sqrt(num); i++) {
    if (i * (i + 1) === num) return "Pronic";
  }
  return "Not Pronic";
}

console.log(isPronic(12)); // "Pronic"   (3 * 4)
console.log(isPronic(42)); // "Pronic"   (6 * 7)
console.log(isPronic(10)); // "Not Pronic"