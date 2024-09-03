// Importer le tableau d'objets depuis recipes.js
// const recipes = require('./recipes');// je récupere le tableau d'objets de la page recipes.js

// import { recipes } from './recipes.js';
import { recipes } from './recipesTest.js';

// console.log(recipes);

//=====================================================================================================================================================
//============================================================ MES FONCTIONS ==========================================================================
//=====================================================================================================================================================
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
    // Sélectionner la div où les cartes seront ajoutées
    const targetDiv = document.getElementById('partieRecettes');

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
        time.textContent = `Time: ${recipe.time} minutes`;

        sectionImage.appendChild(image);
        sectionImage.appendChild(time);

        // SECTION RECETTES
        const sectionRecettes = document.createElement('div');
        sectionRecettes.className = 'section-recettes';

        const titre = document.createElement('h2');
        titre.textContent = `Name: ${recipe.name}`;

        const titreRecette = document.createElement('h3');
        titreRecette.textContent = 'Recette :';

        const description = document.createElement('p');
        description.textContent = recipe.description;

        sectionRecettes.appendChild(titre);
        sectionRecettes.appendChild(titreRecette);
        sectionRecettes.appendChild(description);

        // SECTION INGREDIENTS
        const sectionIngredients = document.createElement('div');
        sectionIngredients.className = 'section-ingredients';

        const titreIngredients = document.createElement('h3');
        titreIngredients.textContent = 'Ingredients :';
        sectionIngredients.appendChild(titreIngredients);

        for (let j = 0; j < recipe.ingredients.length; j++) {
            const ingredient = recipe.ingredients[j];

            const ingredientTitle = document.createElement('h4');
            ingredientTitle.textContent = `${ingredient.ingredient}`;
            sectionIngredients.appendChild(ingredientTitle);

            const quantityTitle = document.createElement('h4');
            if (ingredient.quantity) {
                quantityTitle.textContent = `${ingredient.quantity}`;
                if (ingredient.unit) {
                    quantityTitle.textContent += ` ${ingredient.unit}`;
                }
            } else {
                quantityTitle.textContent = "Quantité non spécifiée";
            }
            sectionIngredients.appendChild(quantityTitle);
        }

        // Ajout des sous-divisions à la carte
        containerCard.appendChild(sectionImage);
        containerCard.appendChild(sectionRecettes);
        containerCard.appendChild(sectionIngredients);

        // Ajout de la carte principale à la div cible
        targetDiv.appendChild(containerCard);
    }
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

//======================================================== APPEL DES FONCTIONS ========================================================================
// ParcourirTableauObjetsAvecMoinsDeLignes();
// ParcourirTableauObjets();
// ParcourirTableauObjetsEnModeAffichageNavigateur();

    // Récupération de l'élément select
    const ustensilesSelect = document.getElementById('ustensiles');

    // Ajout d'un événement qui se déclenche lors d'une modification de la sélection
    ustensilesSelect.addEventListener('change', function() {
        // Affichage de la valeur sélectionnée dans la console
        console.log(ustensilesSelect.value);
    });
    const ingredientsSelect = document.getElementById('ingredients');

    // Ajout d'un événement qui se déclenche lors d'une modification de la sélection
    ingredientsSelect.addEventListener('change', function() {
        // Affichage de la valeur sélectionnée dans la console
        console.log(ingredientsSelect.value);
    });
    const appareilsSelect = document.getElementById('appareils');

   // Ajout d'un événement qui se déclenche lors d'une modification de la sélection
    appareilsSelect.addEventListener('change', function() {
        // Affichage de la valeur sélectionnée dans la console
        console.log(appareilsSelect.value);
    });
