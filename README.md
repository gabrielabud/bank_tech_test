# Bank Tech Test

This is app build in Javascript as part of Makers Academy technical test challenge.

## Specification

* You should be able to interact with your code via the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).
```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

## Instructions on how to use the app

```
$ git clone https://github.com/gabrielabud/bank_tech_test
$ cd bank_tech_test
$ open SpecRunner.html

-> Open the browser console.
```
![App](/images/console.png)
![App](/images/tests.png)

## Approach
I have designed the objects and their interaction, by having the single-responsibility principle in mind.

Objects and their responsibilities

- Transaction: records amount, date and type debit/credit.
- TransactionList: save transactions.
- BankAccount: deposits, withdrawal, keeping balance history, showing statement.
- PrintStatement: takes the lists of transactions and balance history and prints them in a statement format.

As further improvement, I could also extract balance as a separate object and option for the user to input the date.
