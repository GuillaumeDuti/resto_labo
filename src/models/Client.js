export class Client {
    constructor(firstname, lastname, taste, hunger, wallet = 100) {
        this.firstname  = firstname ;
        this.lastname   = lastname ;
        this.wallet     = wallet ;
        this.taste      = taste ;
        this.hunger     = hunger ;
        this.avis       = undefined ; 
    }

    getWallet() {
        return this.wallet ;
    }
    setWallet(wallet) {
        this.wallet = wallet ;
    }
}