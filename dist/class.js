"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid Amount');
        this.balance += amount;
    }
}
let account = new Account(1, 'Kyaw Zin Htet', 0);
account.deposit(100);
console.log(account instanceof Account);
//# sourceMappingURL=class.js.map