{
    ///
    class Account {
        name: string;
        id: number;
        protected _balance: number;
        constructor(name: string, id: number, balance: number){
            this.name = name,
            this._balance = balance,
            this.id = id
        }

        addDeposit(amm: number){
            this._balance = this._balance + amm
        }

        getBalance(){
            return this._balance;
        }
    }
    let user = new Account('Mahdi', 122, 30000);
    let myBalance = user.addDeposit(400)
    console.log(user)
    console.log(myBalance)

    ///
}