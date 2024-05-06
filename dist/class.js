"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid Amount');
        this._balance += amount;
    }
    getBalance() {
        return this._balance;
    }
}
let account = new Account(1, 'Kyaw Zin Htet', 0);
account.deposit(100);
console.log(account instanceof Account);
console.log(account.getBalance());
//# sourceMappingURL=class.js.map