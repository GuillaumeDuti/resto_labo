export class Wallet {
    #capital;
    #type;
    #numero;
    constructor(capital, type) {
        this.#numero    = "BE"+this.randomNumber();
        this.#capital   = capital;
        this.#type      = type;
    }
    
    get Capital() {
        return this.#capital ;
    }

    get Numero() {
        return this.#numero
    }

    randomNumber() {
        let min = 10000000000000;
        let max = 99999999999999;
        let number = Math.floor(Math.random() * (max - min + 1)) + min
        // let number = "";
        // for(let i = 0 ; i < iteration ; i++) {
        //     // let random = 5;
        //     let random = Math.round(Math.random() * 10).toString();
        //     number += random;
        //     // number = `${number}${random}`;
        // }
        return number
    }
    
    moneyIn(value) {
        if(isNaN(value)) throw TypeError(`${value} n'est pas un nombre`)
        if(value < 0) throw RangeError('Le portefeuille restaurant ne peut être inférieur à 0')
        this.#capital += value ; 
    }

    moneyOut(value) {
        if(isNaN(value)) throw TypeError(`${value} n'est pas un nombre`)
        if(value < 0) throw RangeError('Le portefeuille restaurant ne peut être inférieur à 0')
        if(this.#capital < value) throw RangeError(`Impossible de retirer les ${value} € demandés. Le portefeuille restaurant ne contient que ${this.#capital} €.`)
        this.#capital -= value ; 
    }
}