"use strict";

(function(exports){

  function PrintStatement(transactions, balances) {
    this._transactions = transactions;
    this._balances = balances;
  };

  PrintStatement.prototype.print = function () {
    var statement = ["date      || credit || debit || balance"];
    for (var i=0; i<this._transactions.length; i++) {
      var d = this._transactions[i]._date;
      var formatedDate = d.toLocaleDateString();
      if (this._transactions[i]._typeTran === "debit") {
        var item = formatedDate + "              " + this._transactions[i]._amount.toFixed(2) +"      "+ this._balances[i].toFixed(2);
        statement.push(item);
      } else {
        var item = formatedDate + "      " + this._transactions[i]._amount.toFixed(2) + "             "+ this._balances[i].toFixed(2);
        statement.push(item)
      }
    }
    return statement.join('\n');
  };

  exports.PrintStatement = PrintStatement;
})(this);
