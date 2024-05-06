class Account {
    readonly id: number;
    owner: string;
    private _balance: number;
    nickname?: string;


    constructor (id: number, owner: string, _balance: number) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }

    deposit (amount: number) {
        if (amount <= 0)
            throw new Error('Invalid Amount');

        this._balance += amount;
    }

    getBalance (): number {
        return this._balance;
    }
}

let account = new Account(1, 'Kyaw Zin Htet', 0);

account.deposit(100);

console.log(account instanceof Account);

console.log(account.getBalance());


 