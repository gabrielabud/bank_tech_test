describe("PrintStatement", function() {
  var printSt;
  var d1 = new Date("January 01, 2018");
  var d2 = new Date("January 02, 2018");

  var transactions = [
    {_date: d2, _typeTran: "debit", _amount: 200},
    {_date: d1, _typeTran: "credit", _amount: 500},
  ];

  var balances = [300, 500];

  var statement =
    "date      || credit || debit || balance\n"+
    "02/01/2018              200.00      300.00\n"+
    "01/01/2018      500.00             500.00";


  beforeEach(function() {
    printSt = new PrintStatement(transactions, balances);
  });

  it("then initialising is an object of PrintStatement", function(){
    expect(printSt).toEqual(jasmine.any(PrintStatement));
  });

  it("prints statement", function(){
    expect(printSt.print()).toEqual(statement);
  });
});
