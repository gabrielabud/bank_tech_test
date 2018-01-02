"use strict";

(function(exports){

  function BankAccount() {
    this._balance = 0;
    this._allTransactions = new TransactionList();
  };

  BankAccount.prototype.balance = function() {
    return this._balance;
  };

  BankAccount.prototype.allTransactions = function() {
    return this._allTransactions;
  };

  BankAccount.prototype.sufficientFunds = function(amount) {
    return this._balance >= amount;
  };

  BankAccount.prototype.deposit = function(amount) {
      var transaction = new Transaction( new Date(), "credit", amount);
      this._allTransactions.saveTransactions(transaction);
      this._balance += amount;
  };

  BankAccount.prototype.withdraw = function(amount) {
    if (this.sufficientFunds(amount)) {
      var transaction = new Transaction( new Date(), "debit", amount);
      this._allTransactions.saveTransactions(transaction);
      this._balance -= amount;
    } else {
      throw new Error("Insufficient funds, Balance stands at " + this.balance());
    }
  };

  exports.BankAccount = BankAccount;
})(this);
