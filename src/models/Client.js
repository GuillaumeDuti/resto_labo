import { Wallet } from "./Wallet.js";

export class Client {
    #wallet
    constructor(firstname, lastname, taste, hunger, wallet = 100) {
        this.firstname  = firstname ;
        this.lastname   = lastname ;
        this.#wallet    = new Wallet(wallet, "client") ;
        this.taste      = taste ;
        this.hunger     = hunger ;
        this.avis       = undefined ;
        this.numero     = this.#wallet.Numero
    }

    get Wallet() {
        return this.#wallet ;
    }
    set Wallet(value) {
        if(value < 0) throw RangeError('Le portefeuille client ne peut être inférieur à 0')
        this.#wallet = Wallet(value, "client") ;
    }
}