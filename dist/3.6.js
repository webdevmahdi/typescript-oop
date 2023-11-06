"use strict";
{
    ///
    class Account {
        constructor(name, id, balance) {
            this.name = name;
            this._balance = balance;
            this.id = id;
        }
        // setter
        addDeposit(amm) {
            console.log(amm);
            console.log(this._balance);
            console.log(amm);
            return this._balance = this._balance + amm;
        }
        // getter
        getBalance() {
            return this._balance;
        }
    }
    let user = new Account('Mahdi', 122, 30000);
    let myBalance = user.getBalance();
    let deposit = user.addDeposit(400);
    // console.log(user.addDeposit = 500);
    // console.log(user.getBalance);
    console.log(user);
    console.log(myBalance);
    console.log(deposit);
    ///
}
