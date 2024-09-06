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
let ustensiles = "";
let ingredients = "";
let appareils = "";
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
    searchInput.value = "";
}
// Ajout d'un événement 'click' au bouton
searchButton.addEventListener('click', function () {
    handleSearch();
});
// Ajout d'un événement 'keydown' à l'input pour détecter la touche "Entrée"
searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
});
function filtrerEtAfficherRecettes() {
    // Récupérer les 3 selects
    const selectIngredients = document.getElementById('ingredients');
    const selectAppareils = document.getElementById('appareils');
    const selectUstensiles = document.getElementById('ustensiles');
    // Récupérer les valeurs sélectionnées
    const ingredientChoisi = selectIngredients.value;
    const appareilChoisi = selectAppareils.value;
    const ustensileChoisi = selectUstensiles.value;
    // Sélectionner la div où les cartes seront ajoutées
    const targetDiv = document.getElementById('partieRecettes');
    targetDiv.innerHTML = ''; // Effacer les anciennes cartes
    // Initialiser un compteur pour les recettes
    let compteur = 0;
    // Parcourir le tableau des recettes (recipes)
    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];
        let recetteValide = true;
        // Vérification des ingrédients
        if (ingredientChoisi !== "") {
            let ingredientTrouve = false;
            for (let j = 0; j < recipe.ingredients.length; j++) {
                if (recipe.ingredients[j].ingredient === ingredientChoisi) {
                    ingredientTrouve = true;
                    break;
                }
            }
            if (!ingredientTrouve) {
                recetteValide = false; // Invalide si l'ingrédient n'est pas trouvé
            }
        }
        // Vérification de l'appareil
        if (recetteValide && appareilChoisi !== "") {
            if (recipe.appliance !== appareilChoisi) {
                recetteValide = false; // Invalide si l'appareil ne correspond pas
            }
        }
        // Vérification des ustensiles
        if (recetteValide && ustensileChoisi !== "") {
            let ustensileTrouve = false;
            for (let k = 0; k < recipe.ustensils.length; k++) {
                if (recipe.ustensils[k] === ustensileChoisi) {
                    ustensileTrouve = true;
                    break;
                }
            }
            if (!ustensileTrouve) {
                recetteValide = false; // Invalide si l'ustensile n'est pas trouvé
            }
        }
        // Si la recette est valide, on la construit et l'ajoute à la div
        if (recetteValide) {
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
            time.textContent = `${recipe.time} min`;
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
            titreIngredients.textContent = 'Ingrédients';
            sectionIngredients.appendChild(titreIngredients);
            const presentation = document.createElement('div');
            presentation.className = 'presentationDiv';
            sectionIngredients.appendChild(presentation);
            for (let j = 0; j < recipe.ingredients.length; j++) {
                const ingredient = recipe.ingredients[j];
                const ingredientContainer = document.createElement('div');
                ingredientContainer.className = 'ingredient-container';
                const ingredientTitle = document.createElement('h5');
                ingredientTitle.textContent = ingredient.ingredient;
                const quantityTitle = document.createElement('h5');
                if (ingredient.quantity) {
                    quantityTitle.textContent = ingredient.quantity + (ingredient.unit ? ` ${ingredient.unit}` : '');
                } else {
                    quantityTitle.textContent = "---";
                }
                ingredientContainer.appendChild(ingredientTitle);
                ingredientContainer.appendChild(quantityTitle);
                presentation.appendChild(ingredientContainer);
            }
            // Ajout des sections à la carte
            containerCard.appendChild(sectionImage);
            containerCard.appendChild(sectionRecettes);
            containerCard.appendChild(sectionIngredients);
            // Ajout de la carte principale à la div cible
            targetDiv.appendChild(containerCard);
            compteur++;
        }
    }
    // Mise à jour du nombre de recettes affichées
    const nbRecettesSpan = document.getElementById('nbRecettes');
    nbRecettesSpan.textContent = `${compteur} recettes`;
}
//Appelle cette fonction lorsque l'utilisateur change une sélection dans l'un des <select> :
document.getElementById('ingredients').addEventListener('change', filtrerEtAfficherRecettes);
document.getElementById('appareils').addEventListener('change', filtrerEtAfficherRecettes);
document.getElementById('ustensiles').addEventListener('change', filtrerEtAfficherRecettes);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++ PARTIE SELECT DE MES FONCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++   
// Récupération de l'élément selectionnée via des écouteurs d'événements.
const ustensilesSelect = document.getElementById('ustensiles');
// Ajout d'un événement qui se déclenche lors d'une modification de la sélection
ustensilesSelect.addEventListener('change', function () {
    // Affichage de la valeur sélectionnée dans la console : console.log(ustensilesSelect.value);
    ustensiles = ustensilesSelect.value;
    console.log(ustensiles);
});
const ingredientsSelect = document.getElementById('ingredients');
ingredientsSelect.addEventListener('change', function () {
    ingredients = ingredientsSelect.value;// console.log(ingredientsSelect.value);
    console.log(ingredients);
});
const appareilsSelect = document.getElementById('appareils');
appareilsSelect.addEventListener('change', function () {
    appareils = appareilsSelect.value;// console.log(appareilsSelect.value);
    console.log(appareils);
});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++ PARTIE RECETTES DE MES FONCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
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
        titreIngredients.className = 'ingredients';
        sectionIngredients.appendChild(titreIngredients);
        // je commence ici , je cree une div qui me permettra de fair ma mise en forme
        const presentation = document.createElement('div');
        presentation.className = "presentationDiv";
        sectionIngredients.appendChild(presentation);
        for (let j = 0; j < recipe.ingredients.length; j++) {
            const ingredient = recipe.ingredients[j];
            // Créer une div pour chaque paire ingrédient + quantité
            const ingredientContainer = document.createElement('div');
            ingredientContainer.className = 'ingredient-container';
            const ingredientTitle = document.createElement('h5');
            ingredientTitle.textContent = `${ingredient.ingredient}`;
            ingredientTitle.className = 'titleIngredient';
            sectionIngredients.appendChild(ingredientTitle);
            const quantityTitle = document.createElement('h5');
            quantityTitle.className = 'titleQuantity';
            if (ingredient.quantity) {
                quantityTitle.textContent = `${ingredient.quantity}`;
                if (ingredient.unit) {
                    quantityTitle.textContent += ` ${ingredient.unit}`;
                }
            } else {
                // quantityTitle.textContent = "Quantité non spécifiée";
                quantityTitle.textContent = "---";
            }
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
//=====================================================================================================================================================
//====================================================== APPELS DE FONCTIONS ==========================================================================
//=====================================================================================================================================================
// ParcourirTableauObjetsAvecMoinsDeLignes();
// ParcourirTableauObjets();
ParcourirTableauObjetsEnModeAffichageNavigateur();
// Appel de la fonction après le chargement du DOM
// document.addEventListener('DOMContentLoaded', alimenterSelects);
