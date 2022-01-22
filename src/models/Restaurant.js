import { Wallet } from "./Wallet.js";

export class Restaurant {
    
    #rent
    
    constructor(name, menu, wallet = 10000, rent = 2000) {

        if(isNaN(wallet)) throw TypeError(`${wallet} n'est pas un nombre`)
        if(isNaN(rent)) throw TypeError(`${rent} n'est pas un nombre`)
        if(wallet < 0) throw RangeError('Le portefeuille restaurant ne peut être inférieur à 0')
        if(rent < 0) throw RangeError('Le portefeuille restaurant ne peut être inférieur à 0')

        this.name       = name ;
        this.menu       = menu ;
        this.wallet     = new Wallet(wallet, "restaurant");
        // this.#wallet    = wallet ;
        this.#rent      = rent ;
    }

    get Name() {
        return this.name ; 
    }

    get Wallet() {
        return this.wallet.capital ;
    }

    // moneyIn(value) {
    //     if(isNaN(value)) throw TypeError(`${value} n'est pas un nombre`)
    //     if(value < 0) throw RangeError('Le portefeuille restaurant ne peut être inférieur à 0')
    //     this.#wallet += value ; 
    // }

    // moneyOut(value) {
    //     if(isNaN(value)) throw TypeError(`${value} n'est pas un nombre`)
    //     if(value < 0) throw RangeError('Le portefeuille restaurant ne peut être inférieur à 0')
    //     if(this.#wallet < value) throw RangeError(`Impossible de retirer les ${value} € demandés. Le portefeuille restaurant ne contient que ${this.#wallet} €.`)
    //     this.#wallet -= value ; 
    // }
}