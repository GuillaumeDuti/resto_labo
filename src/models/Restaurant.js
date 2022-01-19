export class Restaurant {
    constructor(name, menu, wallet = 10000, rent = 2000) {
        this.name = name;
        this.wallet = wallet;
        this.rent = rent;
        this.menu = menu;
    }

    get Name() {
        return this.name;
    }

    get Wallet() {
        return this.wallet;
    }
    set Wallet(wallet) {
        this.wallet = wallet;
    }
}