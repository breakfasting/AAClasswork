// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

var change = function(amount, coins, memo) {
    // if (amount in memo) return memo[amount]
    if (amount === 0) return 0;

    let count = 0;
    for (let i = 0; i < coins.length; i++) {
        let left = amount - coins[i];
        if (left > 0) {
          console.log(`currAmount: ${amount}, testing: ${coins[i]}, amount left: ${left}`)

          count += change(left, coins)
        }
        if (left === 0) {
          count += 1
        }
    }
    return count
};

console.log(change(5, [1,2,5]))