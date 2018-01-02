describe("TransactionList", function() {
  var list;

  beforeEach(function() {
    list = new TransactionList();
    transaction = jasmine.createSpy('transaction');
  });

  it("has empty list", function(){
    expect(list._tranList).toEqual([])
  });
});
