export class Restaurant {
    constructor(name, menu, wallet = 10000, rent = 2000) {
        this.name       = name ;
        this.wallet     = wallet ;
        this.rent       = rent ;
        this.menu       = menu ;
    }

    getName() {
        return this.name ; 
    }

    getWallet() {
        return this.wallet ;
    }
    setWallet(wallet) {
        this.wallet = wallet ;
    }
}