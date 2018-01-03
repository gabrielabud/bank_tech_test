describe("BankAccount", function() {
  var account;

  beforeEach(function() {
    account = new BankAccount();
    transaction = jasmine.createSpyObj('transaction',['new']);
    transactionList = jasmine.createSpyObj('transactionList', ['saveTransactions'], ['showTransactions']);
    printStatement = jasmine.createSpyObj('printStatement', ['print']);
  });

  it("has a zero balance", function() {
    expect(account._balance).toEqual(0)
  });

  it("when initialising is an object of type BankAccount", function() {
    expect(account).toEqual(jasmine.any(BankAccount));
  });

  it("when initialising has a transaction list", function() {
    expect(account._transactionList).toEqual(jasmine.any(TransactionList));
  });

  describe("When depositing Money", function() {
    it("the balance is increased", function() {
      account.deposit(500);
      expect(account._balance).toEqual(500);
    });

    it("the balance is added to the balance history", function() {
      account.deposit(500);
      account.deposit(700);
      console.log(account._balanceHistory);
      expect(account._balanceHistory[0]).toEqual(1200);
    });

    it("add one transaction to the transaction list", function() {
      account.deposit(500, transaction);
      expect(account._transactionList.showTransactions()).toContain(transaction);
    });
  })

  describe("When withdrawing money", function() {
    it("the balance is decreased", function() {
      account.deposit(500);
      account.withdraw(200);
      expect(account._balance).toEqual(300);
    });

    it("the balance is added to the balance history", function() {
      account.deposit(500);
      account.withdraw(200);
      console.log(account._balanceHistory);
      expect(account._balanceHistory[0]).toEqual(300);
    });
  })
});
