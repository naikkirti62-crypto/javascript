function ginortS(str) {
  const lower = str.split("").filter(c => c >= "a" && c <= "z").sort().join("");
  const upper = str.split("").filter(c => c >= "A" && c <= "Z").sort().join("");
  const odds  = str.split("").filter(c => "13579".includes(c)).sort().join("");
  const evens = str.split("").filter(c => "02468".includes(c)).sort().join("");

  return lower + upper + odds + evens;
}

console.log(ginortS("HelloWorld1234")); 