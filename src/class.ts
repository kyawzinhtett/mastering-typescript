class Account {
    id: number;
    owner: string;
    balance: number;


    constructor (id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    deposit (amount: number) {
        if (amount <= 0)
            throw new Error('Invalid Amount');

        this.balance += amount;
    }
}