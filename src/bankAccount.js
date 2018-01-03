"use strict";

(function(exports){

  function BankAccount(transactionList = new TransactionList()) {
    this._balance = 0;
    this._transactionList = transactionList;
    this._balanceHistory = [];
  };

  BankAccount.prototype.sufficientFunds = function(amount) {
    return this._balance >= amount;
  };

  BankAccount.prototype.balanceHistory = function() {
    return this._balanceHistory;
  };

  BankAccount.prototype.addTransaction = function(transaction) {
    this._transactionList.saveTransactions(transaction);
  };

  BankAccount.prototype.updateBalanceHistory = function() {
    this._balanceHistory.unshift(this._balance);
  };

  BankAccount.prototype.deposit = function(amount, transaction = new Transaction( new Date(), "credit", amount)) {
      this.addTransaction(transaction);
      this._balance += amount;
      this.updateBalanceHistory();
  };

  BankAccount.prototype.withdraw = function(amount, transaction = new Transaction( new Date(), "debit", amount)) {
    if (this.sufficientFunds(amount)) {
      this.addTransaction(transaction);
      this._balance -= amount;
      this.updateBalanceHistory();
    } else {
      throw new Error("Insufficient funds, Balance stands at " + this._balance);
    }
  };

  BankAccount.prototype.showStatement = function() {
    var printStatement = new PrintStatement(this._transactionList.showTransactions(), this.balanceHistory());
    return printStatement.print();
  };

  exports.BankAccount = BankAccount;
})(this);
