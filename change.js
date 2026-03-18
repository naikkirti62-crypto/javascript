function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // base case: 0 coins needed to make amount 0

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log(coinChange([3, 2, 1], 6)); // 2  (3+3)
console.log(coinChange([5, 7], 1));    // -1 (not possible)
console.log(coinChange([1, 5, 10], 11)); // 2 (10+1)