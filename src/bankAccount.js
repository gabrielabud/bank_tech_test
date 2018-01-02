"use strict";

(function(exports){

  function BankAccount() {
    this._balance = 0;
    this._allTransactions = new TransactionList();
  };

  BankAccount.prototype.balance = function () {
    return this._balance;
  };

  BankAccount.prototype.allTransactions = function () {
    return this._allTransactions;
  };

  exports.BankAccount = BankAccount;
})(this);
