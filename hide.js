function hideCreditCard(cardNumber) {
  return "*".repeat(12) + cardNumber.slice(-4);
}

console.log(hideCreditCard("1234567890123456"));