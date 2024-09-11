// Importer le tableau d'objets depuis recipes.js
// const recipes = require('./recipes');// je récupere le tableau d'objets de la page recipes.js

// import { recipes } from './recipes.js';
import { recipes } from './recipesTriple.js';
// import { recipes } from './recipesTest.js';

// console.log(recipes);
//=====================================================================================================================================================
//============================================================ MES VARIABLES ==========================================================================
//=====================================================================================================================================================
//MES VARIABLES PARTIE IMAGE
//MES VARIABLES PARTIE SELECT
let ustensiles="";
let ingredients="";
let appareils="";
//MES VARIABLES PARTIE RECETTES

//=====================================================================================================================================================
//============================================================ MES FONCTIONS ==========================================================================
//=====================================================================================================================================================

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++ PARTIE IMAGES DE MES FONCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
// Fonction pour gérer la recherche
function handleSearch() {
    const searchValue = searchInput.value;
    console.log(searchValue);
    searchInput.value="";
}
// Ajout d'un événement 'click' au bouton
searchButton.addEventListener('click', function() {   
    handleSearch();
});
// Ajout d'un événement 'keydown' à l'input pour détecter la touche "Entrée"
searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++ PARTIE SELECT DE MES FONCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++   

// const ingredientsSelect = document.getElementById('ingredients');
// ingredientsSelect.addEventListener('change', function() {
// ingredients=ingredientsSelect.value;// console.log(ingredientsSelect.value);
// console.log(ingredients);
// });
// Récupération de l'élément selectionnée via des écouteurs d'événements.
const appareilsSelect = document.getElementById('appareils');
appareilsSelect.addEventListener('change', function() {
appareils=appareilsSelect.value;// console.log(appareilsSelect.value);
console.log(appareils);
});

const ustensilesSelect = document.getElementById('ustensiles');
// Ajout d'un événement qui se déclenche lors d'une modification de la sélection
ustensilesSelect.addEventListener('change', function() {
// Affichage de la valeur sélectionnée dans la console : console.log(ustensilesSelect.value);
ustensiles=ustensilesSelect.value;
console.log(ustensiles);
});

//======================================================= A partir d'ici nouveau code intégré ======================================================
const chevron = document.getElementById('chevron');
const dropdownList = document.getElementById('dropdown-list');
const items = document.querySelectorAll('.dropdown-item');

// Événement pour le clic sur le chevron
chevron.addEventListener('click', function() {
    // Toggle la liste déroulante
    dropdownList.classList.toggle('hidden');
    
    // Remplacer le chevron bas par le chevron haut et inversement
    if (chevron.classList.contains('fa-chevron-down')) {
        chevron.classList.remove('fa-chevron-down');
        chevron.classList.add('fa-chevron-up');
    } else {
        chevron.classList.remove('fa-chevron-up');
        chevron.classList.add('fa-chevron-down');
    }
});

// Événement pour chaque item de la liste
items.forEach(item => {
    item.addEventListener('click', function() {
        console.log(item.textContent);  // Afficher l'item sélectionné dans la console
        dropdownList.classList.add('hidden'); // Cacher la liste après la sélection
        chevron.classList.remove('fa-chevron-up'); // Remettre le chevron bas
        chevron.classList.add('fa-chevron-down');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('jeSuisUnInput');
    const searchButton = document.getElementById('search-button');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const resultContainer = document.getElementById('result-container');

    // Fonction pour chercher les 3 premiers caractères dans la liste des items
    function searchItems() {
        const inputValue = input.value.toLowerCase().trim();
        let found = false;

        if (inputValue.length >= 3) {
            // Parcourir les items de la liste déroulante
            for (let i = 0; i < dropdownItems.length; i++) {
                const itemValue = dropdownItems[i].textContent.toLowerCase();
                if (itemValue.startsWith(inputValue)) {
                    showResult(`Vous avez sélectionné : ${itemValue}`);
              
                    found = true;
                    break;
            
                }
            //     closeButton.textContent = 'X';
            // closeButton.className = 'close';
            }

            if (!found) {
                showResult("J'ai pas trouvé, veuillez resaisir le mot clé", true);
            }
        }
    }

    // Fonction pour afficher le résultat ou le message d'erreur
    function showResult(text, isError = false) {
        resultContainer.innerHTML = '';  // Vider le conteneur
        const resultDiv = document.createElement('div');
        resultDiv.className = 'result';
        resultDiv.textContent = text;
        const closeButton = document.createElement('span');
            closeButton.textContent = 'X';
            closeButton.className = 'close'; closeButton.onclick = function() {
                resultContainer.innerHTML = '';  // Fermer la div
                effacerInput();//j'ai mis ici effacer le input 
            };
            resultDiv.appendChild(closeButton);

        // Si c'est une erreur, ajouter le bouton de fermeture
        if (isError) {
            const closeButton = document.createElement('span');
            closeButton.textContent = 'X';
            closeButton.className = 'close';
            closeButton.onclick = function() {
                resultContainer.innerHTML = '';  // Fermer la div
                effacerInput();//j'ai mis ici effacer le input 
            };
            resultDiv.appendChild(closeButton);
          
        }

        resultContainer.appendChild(resultDiv);
    }

    // Événement de clic sur le bouton de recherche
    searchButton.addEventListener('click', searchItems);

    // Événement pour la touche "Entrée" sur l'input
    input.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchItems();
        }
    });
});


function effacerInput(){
const monInput=document.getElementById("jeSuisUnInput");
console.log("J'affiche la valeur de l'element : "+monInput);          // Affiche l'élément input
    console.log("J'affiche la valeur actuelle de l'input : "+monInput.value);    // Affiche la valeur actuelle de l'input
    monInput.value = "";            // Efface le contenu de l'input
}
// effacerInput();
//========================================================= FIN DU NOUVEAU CODE INTEGRE ============================================================


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++ PARTIE RECETTES DE MES FONCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
// function ParcourirTableauObjets(){// je parcours le tableau d'objet récupéré de la premiere page
//     for (let i = 0; i < recipes.length; i++) {
//         const recipe = recipes[i];
//         console.log(`ID: ${recipe.id}`);
//         console.log(`Image: ${recipe.image}`);
//         console.log(`Name: ${recipe.name}`);
//         console.log(`Servings: ${recipe.servings}`);
//         console.log("Ingredients:");
//         for (let j = 0; j < recipe.ingredients.length; j++) {//je parcoures le tableau d'objet récupéré du tableau ingredients
//             const ingredient = recipe.ingredients[j];
//             console.log(`  Ingredient: ${ingredient.ingredient}`);
//             console.log(`  Quantity: ${ingredient.quantity}`);
//             if (ingredient.unit) {
//                 console.log(`  Unit: ${ingredient.unit}`);
//             }
//         }
        
//         console.log(`Time: ${recipe.time} minutes`);
//         console.log(`Description: ${recipe.description}`);
//         console.log(`Appliance: ${recipe.appliance}`);
//         console.log("Ustensils: " + recipe.ustensils.join(', '));
//         console.log('----------------------------');
    
//     }
// }
//======================================================================================================================================
// function ParcourirTableauObjetsAvecMoinsDeLignes(){
//     for (let i = 0; i < recipes.length; i++) {
//         const recipe = recipes[i];
//         console.log(`ID: ${recipe.id}` + ` Image: ${recipe.image}` + ` Name: ${recipe.name}` + ` Servings: ${recipe.servings}`);
//         console.log("Ingredients:");
//         for (let j = 0; j < recipe.ingredients.length; j++) {
//             const ingredient = recipe.ingredients[j];
//             console.log(`  Ingredient: ${ingredient.ingredient}` + `  Quantity: ${ingredient.quantity}`);
//             if (ingredient.unit) {
//                 console.log(`  Unit: ${ingredient.unit}`);
//             }
//         }
//          console.log(`Time: ${recipe.time} minutes` + ` Description: ${recipe.description}` + ` Appliance: ${recipe.appliance}` + " Ustensils: " + recipe.ustensils.join(', '));
//         console.log('===============================================================================================================');
//     }
// }

//=============================================================== CREATION CARTE RECETTE ==============================================================
// // je creerai par la suite cette carte via une fonction qui prendra  en parametre l'ensemble de ses proprietes
// // Création de la div principale (carte)
// const containerCard = document.createElement('div');
// containerCard.className = 'card';
// containerCard.setAttribute("id","Card");
// // containerCard.textContent="je suis said";

// // Sélection de la div cible dans le HTML
// const targetDiv = document.getElementById('partieRecettes');

// // Ajout du nouveau div à la div cible
// if (targetDiv) {
//     targetDiv.appendChild(containerCard);
// } else {
//     console.error('La div avec l\'ID "mesMedias" n\'a pas été trouvée.');
// }
// //====================================================================================================================================
// // Création des trois sous-divisions
// //====================================================================================================================================
// const sectionImage = document.createElement('div');//premiere sous division : SECTION IMAGE
// sectionImage.textContent = 'Contenu 1';
// // Création de l'élément image
// const image = document.createElement('img');
// image.src = 'https://via.placeholder.com/300';  // Remplace avec l'URL de ton image
// image.alt = 'Image de la carte';
// // Création de la div pour le temps
// const time = document.createElement('div');
// time.className = 'text-content';
// time.textContent = 'Voici un exemple de texte dans la carte.';//je mettrai ici ma variable
// // Ajout de l'image et du texte à la carte
// sectionImage.appendChild(image);
// sectionImage.appendChild(time);
// // //====================================================================================================================================
// // // Création de la div sectionRecettes
// const sectionRecettes = document.createElement('div');//deuxieme sous division : SECTION RECETTES
// sectionRecettes.textContent = 'Contenu 2';
// sectionRecettes.className = 'section-recettes';
// // Création du titre
// const titre = document.createElement('h2');
// titre.textContent = 'Titre de la Recette';
// // Création du label
// const titreRecette = document.createElement('h3');
// titreRecette.textContent = 'Ingrédients :';
// // Création du texte descriptif
// const description = document.createElement('p');
// description.textContent = 'Ceci est une description de la recette qui donne un aperçu de ce que vous allez cuisiner.';
// // Ajout du titre, du label et du texte descriptif à la sectionRecettes
// sectionRecettes.appendChild(titre);
// sectionRecettes.appendChild(titreRecette);
// sectionRecettes.appendChild(description);
// //====================================================================================================================================
// //====================================================================================================================================
// //====================================================================================================================================
// //Ne pas perdre de vue que Ingredients est un tableau d'objet donc il faudra a nouveau le parcourir avec une boucle for , et creer les elements en fonction
// //ingredients et quantity
// // Création de la div sectionIngredients
// const sectionIngredients = document.createElement('div');//troisieme sous division : SECTION INGREDIENTS
// sectionIngredients.textContent = 'Contenu 3';
// sectionIngredients.className = 'section-ingredients';

// // Parcours du tableau d'ingrédients
//             // for (let j = 0; j < recipe.ingredients.length; j++) {
//             //     const ingredient = recipe.ingredients[j];

//             //     // Création du titre pour le nom de l'ingrédient
//             //     const ingredientTitle = document.createElement('h3');
//             //     ingredientTitle.textContent = ingredient.ingredient;
//             //     sectionIngredients.appendChild(ingredientTitle);

//             //     // Création du titre pour la quantité et l'unité
//             //     const quantityTitle = document.createElement('h4');
//             //     if (ingredient.quantity) {
//             //         quantityTitle.textContent = `${ingredient.quantity}`;
//             //         if (ingredient.unit) {
//             //             quantityTitle.textContent += ` ${ingredient.unit}`;
//             //         }
//             //     } else {
//             //         quantityTitle.textContent = "Quantité non spécifiée";
//             //     }
//             //     sectionIngredients.appendChild(quantityTitle);
//             // }
//*******************************************************************************************************************************************************/
//*******************************************************************************************************************************************************/
// // Création de la div principale (carte)
// const containerCard = document.createElement('div');
// containerCard.className = 'card';
// containerCard.setAttribute("id","Card");
// // containerCard.textContent="je suis said";

// // Sélection de la div cible dans le HTML
// const targetDiv = document.getElementById('partieRecettes');

// // Ajout du nouveau div à la div cible
// if (targetDiv) {
//     targetDiv.appendChild(containerCard);
// } else {
//     console.error('La div avec l\'ID "mesMedias" n\'a pas été trouvée.');
// }
// function ParcourirTableauObjetsEnModeAffichageNavigateur(){
//     // je parcours le tableau d'objet récupéré de la premiere page et j'affiche carte recette
//     for (let i = 0; i < recipes.length; i++) {
//         const recipe = recipes[i];
// //==========================================================
// const sectionImage = document.createElement('div');//premiere sous division : SECTION IMAGE
// sectionImage.textContent = 'Contenu 1';
// // Création de l'élément image
// const image = document.createElement('img');
// image.src = 'https://via.placeholder.com/300';  // Remplace avec l'URL de ton image//console.log(`Image: ${recipe.image}`);
// // image.src=`${recipe.image}`;
// image.alt = 'Image de la carte';
// // Création de la div pour le temps
// const time = document.createElement('div');
// time.className = 'text-content';
// time.textContent = `Time: ${recipe.time} minutes`;//je mettrai ici ma variable //console.log(`Time: ${recipe.time} minutes`);
// // Ajout de l'image et du texte à la carte
// sectionImage.appendChild(image);
// sectionImage.appendChild(time);
// //==========================================================
// // // Création de la div sectionRecettes
// const sectionRecettes = document.createElement('div');//deuxieme sous division : SECTION RECETTES
// sectionRecettes.textContent = 'Contenu 2';
// sectionRecettes.className = 'section-recettes';
// // Création du titre
// const titre = document.createElement('h2');
// titre.textContent = `Name: ${recipe.name}`;  
// // console.log(`Name: ${recipe.name}`);
// // Création du label
// const titreRecette = document.createElement('h3');
// titreRecette.textContent = 'Recette :';
// // Création du texte descriptif
// const description = document.createElement('p');
// // description.textContent = 'Ceci est une description de la recette qui donne un aperçu de ce que vous allez cuisiner.'; 
// description.textContent=`${recipe.description}`;
// // console.log(`Description: ${recipe.description}`);
// // Ajout du titre, du label et du texte descriptif à la sectionRecettes
// sectionRecettes.appendChild(titre);
// sectionRecettes.appendChild(titreRecette);
// sectionRecettes.appendChild(description);
//  //====================================================================================================================================
// //Ne pas perdre de vue que Ingredients est un tableau d'objet donc il faudra a nouveau le parcourir avec une boucle for , et creer les elements en fonction
// //ingredients et quantity
// // Création de la div sectionIngredients
// const sectionIngredients = document.createElement('div');//troisieme sous division : SECTION INGREDIENTS
// sectionIngredients.textContent = 'Contenu 3';
// sectionIngredients.className = 'section-ingredients';

// const titreIngredients = document.createElement('h3');
// titreIngredients.textContent = 'Ingredients :';
// sectionIngredients.appendChild(titreIngredients);

// // Parcours du tableau d'ingrédients
//             for (let j = 0; j < recipe.ingredients.length; j++) {
//                 const ingredient = recipe.ingredients[j];

//                 // Création du titre pour le nom de l'ingrédient
//                 const ingredientTitle = document.createElement('h3');
//                 ingredientTitle.textContent = `${ingredient.ingredient}`; 
//                 // console.log(`Ingredient: ${ingredient.ingredient}`);
//                 sectionIngredients.appendChild(ingredientTitle);

//                 // Création du titre pour la quantité et l'unité
               
//             //     if (ingredient.quantity) {
//             //         const quantityTitle = document.createElement('h4');
//             //         quantityTitle.textContent = `${ingredient.quantity}`;
//             //         if (ingredient.unit) {
//             //             quantityTitle.textContent += `${ingredient.unit}`;
//             //         }
//             //         sectionIngredients.appendChild(quantityTitle);
//             //     } else {
//             //         quantityTitle.textContent = "Quantité non spécifiée";
//             //     }
               
//             // }
//             const quantityTitle = document.createElement('h4');
//             if (ingredient.quantity) {
//                 quantityTitle.textContent = `${ingredient.quantity}`;
//                 if (ingredient.unit) {
//                     quantityTitle.textContent += ` ${ingredient.unit}`;
//                 }
//             } else {
//                 quantityTitle.textContent = "Quantité non spécifiée";
//             }
//             sectionIngredients.appendChild(quantityTitle);
//         }
function ParcourirTableauObjetsEnModeAffichageNavigateur() {
     // Initialiser le compteur à 0
     let compteur = 0;
    // Sélectionner la div où les cartes seront ajoutées
    const targetDiv = document.getElementById('partieRecettes');
      // Réinitialiser la div cible (si nécessaire) pour effacer les anciennes cartes
      targetDiv.innerHTML = '';

    // Parcourir le tableau d'objets récupéré
    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];

        // Création de la carte principale
        const containerCard = document.createElement('div');
        containerCard.className = 'card';

        // SECTION IMAGE
        const sectionImage = document.createElement('div');
        sectionImage.className = 'section-image';

        const image = document.createElement('img');
        image.src = `../images/${recipe.image}`;


        image.alt = 'Image de la carte';

        const time = document.createElement('div');
        time.className = 'text-content';
        time.textContent = `${recipe.time}min`;

        sectionImage.appendChild(image);
        sectionImage.appendChild(time);

        // SECTION RECETTES
        const sectionRecettes = document.createElement('div');
        sectionRecettes.className = 'section-recettes';

        const titre = document.createElement('h3');
        titre.textContent = `${recipe.name}`;

        const titreRecette = document.createElement('h4');
        titreRecette.textContent = 'Recette';

        const description = document.createElement('p');
        description.textContent = recipe.description;

        sectionRecettes.appendChild(titre);
        sectionRecettes.appendChild(titreRecette);
        sectionRecettes.appendChild(description);

        // SECTION INGREDIENTS
        const sectionIngredients = document.createElement('div');
        sectionIngredients.className = 'section-ingredients';

        const titreIngredients = document.createElement('h4');
        titreIngredients.textContent = 'Ingredients';
        titreIngredients.className='ingredients';
        sectionIngredients.appendChild(titreIngredients);
// je commence ici , je cree une div qui me permettra de fair ma mise en forme
        const presentation=document.createElement('div');
        presentation.className="presentationDiv";
        sectionIngredients.appendChild(presentation);

        for (let j = 0; j < recipe.ingredients.length; j++) {
            const ingredient = recipe.ingredients[j];
             // Créer une div pour chaque paire ingrédient + quantité
    const ingredientContainer = document.createElement('div');
    ingredientContainer.className = 'ingredient-container';

            const ingredientTitle = document.createElement('h5');
            ingredientTitle.textContent = `${ingredient.ingredient}`;
            ingredientTitle.className='titleIngredient';
            sectionIngredients.appendChild(ingredientTitle);

            const quantityTitle = document.createElement('h5');
            quantityTitle.className='titleQuantity';
            if (ingredient.quantity) {
                quantityTitle.textContent = `${ingredient.quantity}`;
                if (ingredient.unit) {
                    quantityTitle.textContent += ` ${ingredient.unit}`;
                }
            } else {
                // quantityTitle.textContent = "Quantité non spécifiée";
                quantityTitle.textContent = "---";
            }
            // sectionIngredients.appendChild(quantityTitle);
            // Ajouter les éléments dans la div "tuvasyariver"
    // presentation.appendChild(ingredientTitle);
    // presentation.appendChild(quantityTitle);
      // Ajouter les éléments à la div container
      ingredientContainer.appendChild(ingredientTitle);
      ingredientContainer.appendChild(quantityTitle);
  
      // Ajouter la div container à la div principale "tuvasyariver"
      presentation.appendChild(ingredientContainer);
        }

        // Ajout des sous-divisions à la carte
        containerCard.appendChild(sectionImage);
        containerCard.appendChild(sectionRecettes);
        containerCard.appendChild(sectionIngredients);

        // Ajout de la carte principale à la div cible
        targetDiv.appendChild(containerCard);
         // Incrémenter le compteur
         compteur++;
    }
     // Afficher le total des containerCard créés dans le span avec l'id "nbRecettes"
     const nbRecettesSpan = document.getElementById('nbRecettes');
     nbRecettesSpan.textContent = `${compteur} recettes`;
}
//*******************************************************************************************************************************************************/
        
        
        // console.log(`Name: ${recipe.name}`);
        // console.log(`Servings: ${recipe.servings}`);
        // console.log("Ingredients:");
        // for (let j = 0; j < recipe.ingredients.length; j++) {//je parcoures le tableau d'objet récupéré du tableau ingredients
        //     const ingredient = recipe.ingredients[j];
        //     console.log(`  Ingredient: ${ingredient.ingredient}`);
        //     console.log(`  Quantity: ${ingredient.quantity}`);
        //     if (ingredient.unit) {
        //         console.log(`  Unit: ${ingredient.unit}`);
        //     }
        // }
        
        // console.log(`ID: ${recipe.id}`);
        
        // console.log(`Appliance: ${recipe.appliance}`);
        // console.log("Ustensils: " + recipe.ustensils.join(', '));
        // console.log('----------------------------');
    
//     }
// }
//*******************************************************************************************************************************************************/
//*******************************************************************************************************************************************************/
// //====================================================================================================================================
// // Ajout des sous-divisions à la carte
// containerCard.appendChild(sectionImage);
// containerCard.appendChild(sectionRecettes);
// containerCard.appendChild(sectionIngredients);
// //====================================================================================================================================
// // Fin des trois sous-divisions
// //====================================================================================================================================
// //=====================================================================================================================================================
// //=====================================================================================================================================================

function alimenterIngredients() {
  const ingredientsSet = new Set(); // Utiliser un Set pour éviter les doublons

  // Vérifier que le tableau recipes est bien défini et non vide
  if (!Array.isArray(recipes) || recipes.length === 0) {
      console.error("Le tableau recipes est vide ou non défini");
      return;
  }

  // Parcourir les recettes et remplir le set d'ingrédients
  recipes.forEach(recipe => {
      if (Array.isArray(recipe.ingredients)) {
          recipe.ingredients.forEach(ingredient => ingredientsSet.add(ingredient.ingredient));
      } else {
          console.warn(`Ingrédients non définis pour la recette : ${recipe.name}`);
      }
  });

  // Récupérer l'élément <ul> par son ID
  const dropdownList = document.getElementById('dropdown-list');

  // Vider la liste existante, sauf les éléments fixes comme le champ de recherche
  const inputContainer = document.querySelector('.input-container'); // Sélectionner le conteneur de l'input
  dropdownList.innerHTML = ''; // Tout vider
  dropdownList.appendChild(inputContainer); // Réinsérer l'input container

  // Parcourir chaque ingrédient et créer un <li> dans le <ul>
  ingredientsSet.forEach(ingredient => {
      const li = document.createElement('li');
      li.classList.add('dropdown-item'); // Ajoute la classe CSS pour les items
      li.textContent = ingredient; // Ajouter le nom de l'ingrédient comme texte
      dropdownList.appendChild(li); // Ajouter chaque <li> dans la liste
  });
}







//======================================================================================================

// function alimenterSelects() {
//     const ustensilesSet = new Set();   // Utiliser un Set pour éviter les doublons
//     const ingredientsSet = new Set();
//     const appareilsSet = new Set();  // Ce sera maintenant applianceSet
  
//     // Vérifier que le tableau recipes est bien défini et non vide
//     if (!Array.isArray(recipes) || recipes.length === 0) {
//       console.error("Le tableau recipes est vide ou non défini");
//       return;
//     }
  
//     // Parcourir les recettes et remplir les sets
//     recipes.forEach(recipe => {
//       // Vérifier si ustensils existe et est un tableau
//       if (Array.isArray(recipe.ustensils)) {
//         recipe.ustensils.forEach(ustensile => ustensilesSet.add(ustensile));
//       } else {
//         console.warn(`Ustensils non définis pour la recette : ${recipe.name}`);
//       }
  
//       // Vérifier si ingredients existe et est un tableau
//       if (Array.isArray(recipe.ingredients)) {
//         recipe.ingredients.forEach(ingredient => ingredientsSet.add(ingredient.ingredient));
//       } else {
//         console.warn(`Ingrédients non définis pour la recette : ${recipe.name}`);
//       }
  
//       // Vérifier si appliance existe et est une chaîne de caractères
//       if (typeof recipe.appliance === 'string') {
//         appareilsSet.add(recipe.appliance);
//       } else {
//         console.warn(`Appliance non défini pour la recette : ${recipe.name}`);
//       }
//     });
  
    // Fonction pour vider et ajouter des options dans un <select>
    // function ajouterOptionsDansSelect(selectElement, itemsSet) {
    //   // Garder seulement la première option par défaut
    //   selectElement.innerHTML = '<option value="" disabled selected hidden>' + selectElement.options[0].textContent + '</option>';
  
    //   // Parcourir chaque élément du set et créer une option dans le <select>
    //   itemsSet.forEach(item => {
    //     const option = document.createElement('option');
    //     option.value = item;
    //     option.textContent = item;
    //     selectElement.appendChild(option);
    //   });
    // }
  
    // Récupérer les éléments <select> dans le DOM
    // const ustensilesSelect = document.getElementById('ustensiles');
    // const ingredientsSelect = document.getElementById('ingredients');
    // const appareilsSelect = document.getElementById('appareils');  // Toujours utiliser id appareils dans le HTML
  
    // Appeler la fonction pour chaque <select> avec le set correspondant
    // ajouterOptionsDansSelect(ustensilesSelect, ustensilesSet);
    // ajouterOptionsDansSelect(ingredientsSelect, ingredientsSet);
    // ajouterOptionsDansSelect(appareilsSelect, appareilsSet);
  // }
//=====================================================================================================================================================
//====================================================== APPELS DE FONCTIONS ==========================================================================
//=====================================================================================================================================================
// ParcourirTableauObjetsAvecMoinsDeLignes();
// ParcourirTableauObjets();
ParcourirTableauObjetsEnModeAffichageNavigateur();
  // Appel de la fonction après le chargement du DOM
  // document.addEventListener('DOMContentLoaded', alimenterSelects);
  document.addEventListener('DOMContentLoaded', () => {
    alimenterIngredients(); // Appeler la fonction après le chargement du DOM
});