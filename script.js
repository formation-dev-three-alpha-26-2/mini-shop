const creerProduit = (identifiant, prix, nom, categorie, images, date) => {
  return {
    identifiant: identifiant,
    prix: prix,
    nom: nom,
    categorie: categorie,
    images: images,
    date: date,
  };
};

const divproduits = document.getElementById("produits");

class Boutique {
  constructor(nom) {
    this.liste = [];
    this.nom = nom;
  }






  afficherproduit() {

divproduits.innerHTML = ""
    this.liste.forEach((element) => {

// creation d'elements html
      const nom = document.createElement("h3");
      const prix = document.createElement("p");
      const categorie = document.createElement("p");
      const supprimer = document.createElement("button");
      const edit = document.createElement("button");
      const divunproduit = document.createElement("div");
      const image = document.createElement("img");
      supprimer.classList.add = "delete";
      nom.textContent = element.nom;
      prix.textContent = element.prix;
      categorie.textContent = element.categorie;
      edit.textContent = "edit";
      supprimer.textContent = "supprimer";
      image.src = element.images[0];
      image.style.width = "200px";

  


      //

      supprimer.addEventListener("click", () => {
        console.log("test");
        
        this.supprimerProduit(element.identifiant);
          this.afficherproduit()

      });





      divunproduit.append(nom, prix, categorie, image, supprimer, edit);

      divproduits.append(divunproduit);
    });
  }










  ajouterUnProduit() {
    const nomInput = document.getElementById("nom");
    const prixInput = document.getElementById("prix");
    const categorieInput = document.getElementById("categorie");
    const imag1Iput = document.getElementById("image");
    const imag2Iput = document.getElementById("image2");

    let produit = creerProduit(
      genererId(),
      nomInput.value,
      prixInput.value,
      categorieInput.value,
      [imag1Iput.value, imag2Iput.value],
      new Date(),
    );

    this.liste.push(produit);
    console.log(this.liste);

    //setitem tjiblna données ml storage
  }








  supprimerProduit(id) {
   this.liste =  this.liste.filter((el) => {
      return el.identifiant !== id;
    });
  }









}

let counter = 0;

const genererId = () => {
  counter++;
  return counter;
};





const form = document.getElementById("form");

// div : inputet , button  => event on click aal button

// form : inputet , button => event sumbit




form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("hello");
  boutique1.ajouterUnProduit();
  console.log(boutique1.liste);
  
  // localStorage.setItem("data", JSON.stringify(boutique1.liste));
  boutique1.afficherproduit();
});








const boutique1 = new Boutique("test");

