describe("BankAccount", function() {
  var account;

  beforeEach(function() {
    account = new BankAccount();
  });

  it("has a zero balance", function() {
    expect(account._balance).toEqual(0)
  });

  it("when initialising is an object of type BankAccount", function() {
    expect(account).toEqual(jasmine.any(BankAccount));
  });

  it("when initialising has a transaction list", function() {
    expect(account._allTransactions).toEqual(jasmine.any(TransactionList));
  });
});
