"use strict";

(function(exports){

  function BankAccount() {
    this._balance = 0;
    this._allTransactions = new TransactionList();
    this._balanceHistory = [];
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
      this._balanceHistory.push(this._balance);
  };

  BankAccount.prototype.withdraw = function(amount) {
    if (this.sufficientFunds(amount)) {
      var transaction = new Transaction( new Date(), "debit", amount);
      this._allTransactions.saveTransactions(transaction);
      this._balance -= amount;
      this._balanceHistory.push(this._balance);
    } else {
      throw new Error("Insufficient funds, Balance stands at " + this.balance());
    }
  };

  BankAccount.prototype.showStatement = function() {
    var statement = ["date      || credit || debit || balance"];
    var transactions = this._allTransactions.showTransactions().reverse();
    var balanceHist = this._balanceHistory.reverse();
    for (var i=0; i<transactions.length; i++) {
      var d = transactions[i].date();
      var formatedDate = d.toLocaleDateString();
      if (transactions[i].typeTran() === "debit") {
        var item = formatedDate + "     0        " + transactions[i].amount() +"      "+ balanceHist[i];
        statement.push(item);
      } else {
        var item = formatedDate + "      " + transactions[i].amount() + "      0      "+ balanceHist[i];;
        statement.push(item)
      }
    }
    return statement.join('\n');
  };

  exports.BankAccount = BankAccount;
})(this);
