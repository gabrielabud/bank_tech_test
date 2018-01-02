describe("Transaction", function() {
  var a;

  beforeEach(function() {
    a = new Transaction("02/01/2012", "debit", 1000)
  });

  it("has date", function() {
    expect(a.date()).toEqual("02/01/2012");
  });

  it("has a type", function() {
    expect(a.typeTran()).toEqual("debit");
  });

  it("has an amount", function() {
    expect(a.amount()).toEqual(1000);
  });

});
