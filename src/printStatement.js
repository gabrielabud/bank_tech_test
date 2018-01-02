"use strict";

(function(exports){

  function PrintStatement(transactions, balances) {
    this._transactions = transactions;
    this._balances = balances;
  };

  PrintStatement.prototype.print = function () {
    var statement = ["date      || credit || debit || balance"];
    for (var i=0; i<this._transactions.length; i++) {
      var d = this._transactions[i].date();
      var formatedDate = d.toLocaleDateString();
      if (this._transactions[i].typeTran() === "debit") {
        var item = formatedDate + "     0        " + this._transactions[i].amount() +"      "+ this._balances[i];
        statement.push(item);
      } else {
        var item = formatedDate + "      " + this._transactions[i].amount() + "      0      "+ this._balances[i];;
        statement.push(item)
      }
    }
    return statement.join('\n');
  };

  exports.PrintStatement = PrintStatement;
})(this);
