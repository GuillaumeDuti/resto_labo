export class Client {
    constructor(firstname, lastname, taste, hunger, wallet = 100) {
        this.firstname  = firstname ;
        this.lastname   = lastname ;
        this.Wallet     = wallet ;
        this.taste      = taste ;
        this.hunger     = hunger ;
        this.avis       = undefined ; 
    }

    get Wallet() {
        return this.wallet ;
    }
    set Wallet(value) {
        if(value < 0) throw RangeError('Le portefeuille client ne peut être inférieur à 0')
        this.wallet = value ;
    }
}