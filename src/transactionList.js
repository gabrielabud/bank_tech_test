"use strict";

(function(exports) {
  function TransactionList() {
    this._tranList = [];
  };

  TransactionList.prototype.showTransactions = function() {
    return this._tranList;
  }

  TransactionList.prototype.saveTransactions = function(transaction) {
    this._tranList.unshift(transaction);
  };

  exports.TransactionList = TransactionList;
})(this);
