function addDashes(num) {
    return num.toString().split("").join("-");
}

// Example
let num = 12345;

console.log(addDashes(num));