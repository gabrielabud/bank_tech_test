"use strict";

(function(exports){

  function Transaction(date, typeTran, amount) {
    this._date = date;
    this._typeTran = typeTran;
    this._amount = amount;
  };

  Transaction.prototype.date = function() {
    return this._date;
  };

  Transaction.prototype.typeTran = function() {
    return this._typeTran;
  };

  Transaction.prototype.amount = function() {
    return this._amount;
  };

  exports.Transaction = Transaction;
})(this);
