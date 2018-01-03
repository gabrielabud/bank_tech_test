"use strict";

(function(exports){

  function BankAccount() {
    this._balance = 0;
    this._allTransactions = new TransactionList();
    this._balanceHistory = [];
  };

  BankAccount.prototype.sufficientFunds = function(amount) {
    return this._balance >= amount;
  };

  BankAccount.prototype.balanceHistory = function() {
    return this._balanceHistory;
  };

  BankAccount.prototype.deposit = function(amount) {
      var transaction = new Transaction( new Date(), "credit", amount);
      this._allTransactions.saveTransactions(transaction);
      this._balance += amount;
      this._balanceHistory.unshift(this._balance);
  };

  BankAccount.prototype.withdraw = function(amount) {
    if (this.sufficientFunds(amount)) {
      var transaction = new Transaction( new Date(), "debit", amount);
      this._allTransactions.saveTransactions(transaction);
      this._balance -= amount;
      this._balanceHistory.unshift(this._balance);
    } else {
      throw new Error("Insufficient funds, Balance stands at " + this._balance);
    }
  };

  BankAccount.prototype.showStatement = function() {
    var printStatement = new PrintStatement(this._allTransactions.showTransactions(), this.balanceHistory());
    return printStatement.print();
  };

  exports.BankAccount = BankAccount;
})(this);
