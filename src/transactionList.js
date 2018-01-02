"use strict";

(function(exports) {
  function TransactionList() {
    this._tranList = [];
  };

  TransactionList.prototype.showTransactions = function() {
    return this._tranList;
  }

  TransactionList.prototype.saveTransactions = function(transaction) {
    this._tranList.push(transaction);
    return this._tranList;
  };

  exports.TransactionList = TransactionList;
})(this);
