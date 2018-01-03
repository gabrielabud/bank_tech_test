describe("PrintStatement", function() {
  var printSt;
  var d1 = new Date("January 01, 2018");
  var d2 = new Date("January 02, 2018");
  var d3 = new Date("January 03, 2018");

  var transactions = [
    {_date: d3, _typeTran: "debit", _amount: 200},
    {_date: d2, _typeTran: "debit", _amount: 200},
    {_date: d1, _typeTran: "credit", _amount: 1500},
  ];

  var balances = [1100, 1300, 1500];

  beforeEach(function() {
    printSt = new PrintStatement(transactions, balances);
  });

  it("then initialising is an object of PrintStatement", function(){
    expect(printSt).toEqual(jasmine.any(PrintStatement));
  });
});
