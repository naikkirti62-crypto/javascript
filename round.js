function roundNumber(num, ndigits) {
    return Number(num.toFixed(ndigits));
}

// Example
let num = 0.778899;
let ndigits = 2;

console.log(roundNumber(num, ndigits));