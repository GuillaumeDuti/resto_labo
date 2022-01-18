class Client {
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

const foodItems = [
    {
        name : "sugar",
        price : 0.2,
    },
    {
        name : "brown sugar",
        price : 0.3,
    },
    {
        name : "chocolate",
        price : 0.6,
    },
    {
        name : "ham and cheese",
        price : 0.8,
    },
    {
        name : "fruits",
        price : 1,
    },
    {
        name : "rhum",
        price : 1.2,
    }
];