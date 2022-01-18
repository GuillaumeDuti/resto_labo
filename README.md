# RESTO LABO

Un restaurant experimental, le "Resto-Lab", ouvre ses portes à Digital City Brussels. 
Celui-ci tente de satisfaire un maximum ses clients afin d'augmenter un maximum son chiffre d'affaire.  

Pour y parvenir, chaque jour, il peut créer ou modifier ses recettes pour se rapprocher un maximum des goûts de ses clients.
Les clients satisfaits reviendront le jour suivant et en parleront autour d'eux.
Les clients déçus ne reviendront pas et risque de faire une mauvaise press pour le restaurant. 
Ainsi le nombre de couverts varieront au grés des jours, améliorant ou diminuant le chiffre d'affaire du restaurant.

Le jeu s'arrête si le restaurant est en faillite ou si au bout de N temps le chiffre d'affaire est au dessus de N. 

## Structure du jeu (js): 

- client
    - nom
    - prenom
    - portefeuille
    - goûts (au début uniquement crêpes) :
        - sucre
        - cassonade
        - chocolat
        - fruits
        - jambon fromage
        - rhum
    - faim : (faim + goût = bonus ?)
        - +
        - ++
        - +++
    - avis général (ex : de 0 à 5)
- restaurant :
    - nom
    - chiffre d'affaire
    - location
    - stock
- recette :
    - nom
    - ingredients :
        - aliment
        - quantité :
            - +
            - ++
            - +++
- aliment : 
    - nom
    - prix
- avis (review) : 
    - nom auteur
    - prenom auteur
    - note : 
        - 0 : ne vient plus et déconseille le resto +++
        - 1 : ne vient plus et déconseille le resto +
        - 2 : ne vient plus
        - 3 : revient
        - 4 : revient et conseille le resto +
        - 5 : revient et conseille le resto +++
    - explication
    - (vu par n pers)

## Possibilité d'évolution du jeu : 
- recette avancé : 
    - % farine
    - % lait
    - % sucre
    - % sucre vanillé
    - % beurre
    - % oeuf
- aliments : 
    - nom
    - type
    - prix (par portion)
    - type de portion :
        - gramme
        - pièce
- différentes class de client : 
    - client lambda
    - influenceur culinaire (impact pour les avis +++);
- concurence avec d'autres resto
- plusieurs chefs
- services resto
    - payement employé
    - qualité employé (augmente avec le temps...)


