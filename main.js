class Personne {
    constructor(nom, prenom, dateDeNaissance) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateDeNaissance = dateDeNaissance;
    }

    getNom() {
        console.log(`nom = ${this.nom}`);
    }
    setNom(nom) {
        this.nom = nom;
    }

    getPrenom() {
        console.log(`prenom = ${this.prenom}`);
    }
    setPrenom(prenom) {
        this.prenom = prenom;
    }

    getDateDeNaissance() {
        console.log(`date de naissance = ${this.dateDeNaissance}`);
    }
    setDateDeNaissance(dateDeNaissance) {
        this.dateDeNaissance = dateDeNaissance;
    }
}

class Compte {
    constructor(numero, solde, ligneDeCredit, titulaire) {
        this.numero = numero;

        if (solde < ligneDeCredit) {
            this.solde = ligneDeCredit
        } else {
            this.solde = solde;
        }
        if (ligneDeCredit < 0) {
            this.ligneDeCredit = 0;
        } else {
            this.ligneDeCredit = ligneDeCredit;
        }

        this.titulaire = titulaire;
    }


    getNumero() {
        console.log(`numero = ${this.numero}`);
    }
    setNumero(numero) {
        this.numero = numero;
    }

    getSolde() {
        console.log(`solde = ${this.solde}`);
    }
    setSolde(solde) {
        this.solde = solde;
    }

    getLigneDeCredit() {
        console.log(`ligne de credit = ${this.ligneDeCredit}`);
    }
    setLigneDeCredit(ligneDeCredit) {
        this.ligneDeCredit = ligneDeCredit;
    }

    getTitulaire() {
        console.log(`titulaire = ${this.titulaire}`);
    }
    setTitulaire(titulaire) {
        this.titulaire = titulaire;
    }
}

let user = new Personne("Dut", "Gui", "31 aout 1993");
let compte = new Compte(23, 200, 400, user);

console.log(compte);