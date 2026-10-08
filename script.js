const creerProduit = (identifiant, prix, nom, categorie, images, date) => {
  return {
    identifiant: identifiant,
    nom: nom,
    prix: prix,

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
    divproduits.innerHTML = "";
    this.liste.forEach((element) => {
      // creation d'elements html
      const nom = document.createElement("h3");
      const prix = document.createElement("p");
      const categorie = document.createElement("p");
      const supprimer = document.createElement("button");
      const edit = document.createElement("button");
      const divunproduit = document.createElement("div");
      const image = document.createElement("img");
      supprimer.classList.add("delete");
      nom.textContent = element.nom;
      prix.textContent = element.prix;
      categorie.textContent = element.categorie;
      edit.textContent = "edit";
      supprimer.textContent = "supprimer";
      image.src = element.images[0];

      // image

      let x = imageRotation(image, element.images);

      image.addEventListener("click", () => {
        x();
      });
      image.style.width = "200px";
      //

      //delete

      supprimer.addEventListener("click", () => {
        console.log("test");

        this.supprimerProduit(element.identifiant);
        this.afficherproduit();
      });

      //
      // edit
      edit.addEventListener("click", () => {
        nom.innerHTML = `<input id="nomEdit" type = "text" value = ${element.nom}  >`;
        prix.innerHTML = `<input id="prixEdit" type = "text" value = ${element.prix}  >`;
        categorie.innerHTML = `<input id="categorieEdit" type = "text" value = ${element.categorie}  >`;

        const buttonenrgistrer = document.createElement("button");

        buttonenrgistrer.textContent = "enregistrer";
        divunproduit.append(buttonenrgistrer);

        let nomValue = document.getElementById("nomEdit");

        let prixValue = document.getElementById("prixEdit");
        let categorieValue = document.getElementById("categorieEdit");

        buttonenrgistrer.addEventListener("click", () => {
          this.edit(
            element.identifiant,
            prixValue.value,
            nomValue.value,

            categorieValue.value,
          );

          this.afficherproduit();
        });
      });

      //

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
      prixInput.value,
      nomInput.value,
      categorieInput.value,
      [imag1Iput.value, imag2Iput.value],
      new Date(),
    );

    this.liste.push(produit);
    console.log(this.liste);
    localStorage.setItem("data", JSON.stringify(this.liste));
    //setitem tjiblna données ml storage
  }

  supprimerProduit(id) {
    this.liste = this.liste.filter((el) => {
      return el.identifiant !== id;
    });

    localStorage.setItem("data", JSON.stringify(this.liste));
  }

  edit(id, prix, nom, categorie) {
    this.liste = this.liste.map((el) => {
      if (el.identifiant === id) {
        return {
          ...el,
          prix: prix,
          nom: nom,
          categorie: categorie,
        };
      }

      return el;
    });
    localStorage.setItem("data", JSON.stringify(this.liste));
  }
  // filtre par categorie
  filtrerparcategorie(valeur) {
    if (valeur === "") {
      this.afficherproduit();
      return;
    }

    let originalData = this.liste;

    this.liste = this.liste.filter((el) => {
      return el.categorie === valeur;
    });

    this.afficherproduit();

    this.liste = originalData;
  }
  //
  // recherche
  rechercher(value) {
    if (value === "") {
      this.afficherproduit();
      return;
    }
    let datafiltré = [...this.liste];
    let originalData = this.liste;
    this.liste = datafiltré.filter((el) => {
      return el.nom.includes(value);
    });
    console.log(this.liste);

    this.afficherproduit();

    this.liste = originalData;
  }
}
//

// counter  pr lid
let counter = 0;

const genererId = () => {
  counter++;
  return counter;
};
//
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
  form.reset();
});

// function pr limage
// [img1 , img2]  length 2

const imageRotation = (img, tableau) => {
  let counter = 0;
  return function () {
    counter++;

    if (counter === tableau.length) {
      
      counter = 0;
    }
    img.src = tableau[counter];

    console.log(counter);
  };
};
///
const boutique1 = new Boutique("test");

const rechercheInput = document.getElementById("recherche");

rechercheInput.addEventListener("input", (event) => {
  console.log(rechercheInput.value);
  console.log(event.target.value);

  boutique1.rechercher(event.target.value);
});

let data = JSON.parse(localStorage.getItem("data"));
if (data) {
  boutique1.liste = data;
  boutique1.afficherproduit();
}
const filtrerparcateg = document.getElementById("filtrerParCateg");

filtrerparcateg.addEventListener("change", () => {
  console.log("test");

  boutique1.filtrerparcategorie(filtrerparcateg.value);
});
