export class Client {
    constructor(firstname, lastname, taste, hunger, wallet = 100) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.wallet = wallet;
        this.taste = taste;
        this.hunger = hunger;
        this.avis = undefined;
    }

    get Wallet() {
        return this.wallet;
    }
    set Wallet(wallet) {
        this.wallet = wallet;
    }
}