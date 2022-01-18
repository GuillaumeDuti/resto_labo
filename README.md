# RESTO LABO

Un restaurant experimental, le "Resto-Lab", ouvre ses portes à Digital City Brussels. 
Celui-ci tente de satisfaire un maximum ses clients afin d'augmenter un maximum son chiffre d'affaire.  

Pour y parvenir, chaque jour, il peut créer ou modifier ses recettes pour se rapprocher un maximum des goûts de ses clients.
Les clients satisfaits reviendront le jour suivant et en parleront autour d'eux.
Les clients déçus ne reviendront pas et risque de faire une mauvaise press pour le restaurant. 
Ainsi le nombre de couverts varieront au grés des jours, améliorant ou diminuant le chiffre d'affaire du restaurant.

Le jeu s'arrête si le restaurant est en faillite ou si au bout de N temps le chiffre d'affaire est au dessus de N. 

Structure du jeu (js): 

- client
    - nom
    - prenom
    - portefeuille
    - goûts (au début uniquement crêpes) :
        - % farine
        - % lait
        - % sucre
        - % sucre vanillé
        - % beurre
        - % oeuf
    - avis (ex : de 0 à 5) :
        - 0 : ne vient plus et déconseille le resto +++
        - 1 : ne vient plus et déconseille le resto +
        - 2 : ne vient plus
        - 3 : revient
        - 4 : revient et conseille le resto +
        - 5 : revient et conseille le resto +++
- restaurant :
    - chiffre d'affaire
    - location
- recette 
    - ingredients (voir section)
        - prix
        - quantité
    - 



Possibilité d'évolution du jeu : 
- différentes class de client : 
    - client lambda
    - influenceur culinaire (impact pour les avis +++)


