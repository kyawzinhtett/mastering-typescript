class Account {
    nickname?: string;

    constructor (
        public readonly id: number,
        public owner: string,
        private _balance: number) {
    }

    deposit (amount: number) {
        if (amount <= 0)
            throw new Error('Invalid Amount');

        this._balance += amount;
    }

    get balance (): number {
        return this._balance;
    }

    set balance (value: number) {
        if (value < 0 )
            throw new Error('Invalid Value');

        this._balance = value;
    }
}

let account = new Account(1, 'Kyaw Zin Htet', 0);

account.deposit(100);

console.log(account instanceof Account);

console.log(account.balance);

account.balance = 1;


 