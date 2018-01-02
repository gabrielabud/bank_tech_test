describe("BankAccount", function() {
  var account;

  beforeEach(function() {
    account = new BankAccount();
  });

  it("has a zero balance", function() {
    expect(account.balance()).toEqual(0)
  });
});
