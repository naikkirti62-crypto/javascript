function brokenKeyboard(text, brokenKey) {
  const words = text.split(" ");
  let count = 0;

  for (let word of words) {
    if (!word.toLowerCase().includes(brokenKey.toLowerCase())) {
      count++;
    }
  }

  return count;
}

console.log(brokenKeyboard("JavaScript challenges are good for practicing coding", "p"));


console.log(brokenKeyboard("hello world foo bar", "o")); 