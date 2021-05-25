var accounts = 100;

function bankAccountFactory(initialBalance = 0) {
  var newAccountNum = accounts++;

  return {
    acct: `#${newAccountNum}`,
    balance: initialBalance,
    transactions: [],

    withdraw(amount) {
      this.balance -= amount;
      this.transactions.push(-amount);
    },

    deposit(amount) {
      this.balance += amount;
      this.transactions.push(amount);
    },
  };
}
