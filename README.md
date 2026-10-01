# Mini-Boutique


L’application doit permettre de :

* Ajouter un nouveau produit.
* Afficher tous les produits.
* Modifier un produit.
* Supprimer un produit.
* Rechercher un produit par son nom.
* Filtrer les produits par catégorie.
* Trier les produits par prix.
* Trier les produits par date.
* Changer les images d’un produit lorsqu’on clique dessus.
* Sauvegarder les produits dans `localStorage`.

---

## Structure des données

Chaque produit doit être créé à l’aide d’une **Factory Function**.

Elle doit recevoir :

```text
identifiant
prix
nom
categorie
images
date
```

Exemple :

```text
{
  identifiant: "abc123",
  prix: 2499,
  nom: "PC Gamer",
  categorie: "Ordinateurs",
  images: [
    "pc-gamer-1.jpg",
    "pc-gamer-2.jpg"
  ],
  date: "2026-10-01"
}
```

`images` doit être un tableau contenant au minimum **deux URLs**.

Pour générer l’identifiant, utilisez l’identifiant généré qui vous est fourni.

Pour générer la date, utilisez :

```text
new Date()
```

Créez au départ quelques produits de votre choix.

---

## Factory Function

Créez une Factory Function appelée :

```text
creerProduit()
```

Elle doit recevoir :

```text
identifiant
prix
nom
categorie
images
date
```

Elle doit retourner un objet représentant un produit.

---

## Classe Boutique

Créez une classe appelée :

```text
Boutique
```

Elle doit recevoir le nom de la boutique.

La classe doit contenir :

```text
liste = []
```

`liste` contiendra tous les produits de la boutique.

La classe sera responsable de la gestion des produits :

* ajouter
* modifier
* supprimer
* rechercher
* filtrer
* trier

---

# Fonctionnalités

## 1 — Afficher les produits — Lecture

Créer une fonction appelée :

```text
afficherProduit()
```

Elle permet d'afficher un produit dans le DOM.

Pour chaque produit, afficher :

* l'image
* le nom
* le prix
* la catégorie
* la date
* un bouton `Modifier`
* un bouton `Supprimer`

Utilisez :

```text
createElement()
textContent
append()
```

Créer ensuite une fonction appelée :

```text
afficherProduits()
```

Elle permet d'afficher **tous les produits**.

Indice :

```text
forEach()
```

La fonction `afficherProduits()` doit recevoir un tableau en paramètre afin de pouvoir afficher différentes listes.

Exemple :

```text
afficherProduits(boutique.liste)
```

---

## 2 — Ajouter un produit — Création

Créer un formulaire contenant :

* un champ pour le nom
* un champ pour le prix
* un champ pour la catégorie
* un champ pour la première image
* un champ pour la deuxième image
* un bouton `Ajouter`

Quand l'utilisateur ajoute un produit :

* récupérer les valeurs des champs
* créer le produit avec la Factory Function `creerProduit()`
* ajouter automatiquement le produit à `liste`
* sauvegarder la nouvelle liste dans `localStorage`
* afficher les produits

Créer une méthode appelée :

```text
ajouterProduit()
```

dans la classe `Boutique`.

---

## 3 — Supprimer un produit — Suppression

Ajouter un bouton `Supprimer` à chaque produit.

Quand l'utilisateur clique sur `Supprimer` :

* récupérer l'identifiant du produit
* supprimer le produit correspondant de `liste`
* mettre à jour `localStorage`
* mettre à jour l'affichage

Créer une méthode appelée :

```text
supprimerProduit()
```

dans la classe `Boutique`.

Elle doit permettre de supprimer un produit grâce à son `identifiant`.

---

## 4 — Modifier un produit — Mise à jour

Ajouter un bouton `Modifier` à chaque produit.

Quand l'utilisateur clique sur `Modifier` :

* récupérer l'identifiant du produit
* récupérer les informations du produit
* afficher ses informations dans le formulaire
* permettre à l'utilisateur de modifier les valeurs
* sauvegarder les nouvelles informations
* mettre à jour `localStorage`
* mettre à jour l'affichage

Créer une méthode appelée :

```text
modifierProduit()
```

Elle doit recevoir :

```text
identifiant
propriete
nouvelleValeur
```

Exemple :

```text
modifierProduit(identifiant, "prix", 2299)
```

Après la modification, mettre à jour l'affichage et `localStorage`.

---

## 5 — Changer les images d'un produit

Lorsqu'un utilisateur clique sur l'image d'un produit :

* afficher l'image suivante du tableau `images`
* lorsque la dernière image est atteinte, revenir à la première

Exemple :

```text
image 1 → image 2 → image 3 → image 1
```

Utilisez une **Closure** pour conserver l'index de l'image actuelle.

Créer une fonction appelée :

```text
changerImage()
```

---

## 6 — Filtrer par catégorie

Ajouter :

* un champ pour la catégorie
* un bouton `Filtrer`

Quand l'utilisateur recherche une catégorie :

* récupérer la valeur du champ
* rechercher les produits appartenant à cette catégorie
* afficher uniquement les produits correspondants

Créer une méthode appelée :

```text
filtrerParCategorie()
```

dans la classe `Boutique`.

Indice :

```text
forEach()
```

---

## 7 — Rechercher un produit par son nom

Ajouter :

* un champ de recherche
* un bouton `Rechercher`

Quand l'utilisateur clique sur `Rechercher` :

* récupérer la valeur du champ avec `.value`
* rechercher les produits correspondant au nom saisi
* afficher uniquement les produits correspondants

Créer une méthode appelée :

```text
rechercherParNom()
```

Indice :

```text
filter()
```

### Bonus

La recherche doit fonctionner même si l'utilisateur utilise des majuscules ou des minuscules.

Indice :

```text
toLowerCase()
```

---

## 8 — Trier les produits par prix

Créer un bouton :

```text
Trier par prix
```

Quand l'utilisateur clique dessus :

* trier les produits par prix
* afficher la nouvelle liste

Créer une méthode appelée :

```text
trierParPrix()
```

dans la classe `Boutique`.

Indice :

```text
Array.sort()
```

La fonction `afficherProduits()` doit recevoir le tableau trié.

---

## 9 — Trier les produits par date

Créer un bouton :

```text
Trier par date
```

Quand l'utilisateur clique dessus :

* trier les produits par date
* afficher les produits du plus récent au plus ancien

Créer une méthode appelée :

```text
trierParDate()
```

dans la classe `Boutique`.

Indice :

```text
Array.sort()
```

---

## 10 — Vider l'affichage

Lorsque vous effectuez une recherche, un filtre ou un tri, vous devez remplacer l'ancien affichage.

Indice :

```text
innerHTML = ""
```

Utilisez cette technique dans votre fonction `afficherProduits()` afin d'éviter d'afficher plusieurs fois les mêmes produits.

---

## 11 — Réinitialiser le formulaire

Après avoir ajouté ou modifié un produit :

* vider les champs
* remettre le formulaire dans son état initial

Indice :

```text
champ.value = ""
```

Vous pouvez créer une fonction :

```text
reinitialiserFormulaire()
```

---

## 12 — Sauvegarder les produits avec localStorage

Les produits doivent rester disponibles même après avoir actualisé la page.

Sauvegardez la liste des produits dans `localStorage`.

Utilisez :

```text
localStorage.setItem()
localStorage.getItem()
JSON.stringify()
JSON.parse()
```

Après chaque :

* ajout
* modification
* suppression

la liste sauvegardée dans `localStorage` doit être mise à jour.

---

## 13 — Charger les produits au démarrage

Lorsque la page est chargée :

* récupérer les produits depuis `localStorage`
* convertir les données en tableau
* remplir `boutique.liste`
* afficher les produits

Si aucun produit n'est enregistré dans `localStorage`, utilisez les produits créés au départ.

---
