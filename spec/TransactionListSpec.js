describe("TransactionList", function() {
  var list;

  beforeEach(function() {
    list = new TransactionList();
    transaction = jasmine.createSpy('transaction');
  });

  it("has empty list", function(){
    expect(list._tranList).toEqual([])
  });

  it("saves initial transactions", function(){
    list.saveTransactions(transaction);
    expect(list.showTransactions()).toEqual([transaction])
  });

  it("saves more transactions", function(){
    list.saveTransactions(transaction);
    list.saveTransactions(transaction);
    expect(list.showTransactions().length).toBeGreaterThan(1);
  });


});
