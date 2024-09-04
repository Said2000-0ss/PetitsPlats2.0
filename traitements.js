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
// Récupération de l'élément selectionnée via des écouteurs d'événements.
const ustensilesSelect = document.getElementById('ustensiles');
// Ajout d'un événement qui se déclenche lors d'une modification de la sélection
ustensilesSelect.addEventListener('change', function() {
// Affichage de la valeur sélectionnée dans la console : console.log(ustensilesSelect.value);
ustensiles=ustensilesSelect.value;
console.log(ustensiles);
});
const ingredientsSelect = document.getElementById('ingredients');
ingredientsSelect.addEventListener('change', function() {
ingredients=ingredientsSelect.value;// console.log(ingredientsSelect.value);
console.log(ingredients);
});
const appareilsSelect = document.getElementById('appareils');
appareilsSelect.addEventListener('change', function() {
appareils=appareilsSelect.value;// console.log(appareilsSelect.value);
console.log(appareils);
});
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





//=====================================================================================================================================================
//====================================================== APPELS DE FONCTIONS ==========================================================================
//=====================================================================================================================================================
// ParcourirTableauObjetsAvecMoinsDeLignes();
// ParcourirTableauObjets();
ParcourirTableauObjetsEnModeAffichageNavigateur();