"use strict";

(function(exports){

  function BankAccount() {
    this._balance = 0;
  };

  BankAccount.prototype.balance = function () {
    return this._balance;
  };

  exports.BankAccount = BankAccount;
})(this);
