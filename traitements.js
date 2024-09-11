// import { recipes } from './recipes.js';
import { recipes } from './recipesTriple.js';
// import { recipes } from './recipesTest.js';
//=====================================================================================================================================================
//============================================================ MES VARIABLES ==========================================================================
//=====================================================================================================================================================
//MES VARIABLES PARTIE IMAGE
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
//MES VARIABLES PARTIE SELECT
//MES VARIABLES PARTIE RECETTES
//=====================================================================================================================================================
//============================================================ MES FONCTIONS ==========================================================================
//=====================================================================================================================================================

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++ PARTIE IMAGES DE MES FONCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
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
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++ PARTIE SELECT DE MES FONCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++   
// Fonction pour alimenter les listes déroulantes avec les données du tableau recipes
function alimenterListesDeroulantes() {
    // Utilisation de Set pour éviter les doublons
    const ingredientsSet = new Set();
    const appareilsSet = new Set();
    const ustensilesSet = new Set();
    // Vérification que le tableau recipes est défini et non vide
    if (!Array.isArray(recipes) || recipes.length === 0) {
        console.error("Le tableau recipes est vide ou non défini.");
        return;
    }
    // Parcourir chaque recette dans le tableau recipes
    recipes.forEach(recipe => {
        // Ajouter chaque ingrédient du tableau dans le Set ingredientsSet
        recipe.ingredients.forEach(ingredient => {
            ingredientsSet.add(ingredient.ingredient);
        });
        // Ajouter chaque appareil dans le Set appareilsSet
        appareilsSet.add(recipe.appliance);
        // Ajouter chaque ustensile du tableau dans le Set ustensilesSet
        recipe.ustensils.forEach(ustensile => {
            ustensilesSet.add(ustensile);
        });
    });

    // Fonction pour alimenter les listes déroulantes avec des éléments de type <li>
    function ajouterItemsDansListe(listeElement, itemsSet) {
        // Vider la liste avant de l'alimenter
        listeElement.innerHTML = '';
        // Ajouter chaque item du Set comme un élément <li> dans la liste
        itemsSet.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            li.classList.add('dropdown-item'); // Ajout de la classe 'dropdown-item'
            listeElement.appendChild(li); // Insertion de l'élément dans la liste
        });
    }
    // Sélectionner les éléments <ul> dans le DOM
    const ingredientsListe = document.getElementById('ingredients-list');
    const appareilsListe = document.getElementById('appareils-list');
    const ustensilesListe = document.getElementById('ustensiles-list');
    // Alimenter les listes avec les éléments correspondants
    ajouterItemsDansListe(ingredientsListe, ingredientsSet);
    ajouterItemsDansListe(appareilsListe, appareilsSet);
    ajouterItemsDansListe(ustensilesListe, ustensilesSet);
}

// Fonction pour gérer l'affichage de la liste déroulante avec le chevron
function toggleDropdown() {
    const chevron = document.querySelector('#chevron');
    const ingredientsContent = document.querySelector('#ingredients-content');

    // Vérifie si l'élément est caché ou non
    if (ingredientsContent.classList.contains('hidden')) {
        ingredientsContent.classList.remove('hidden'); // Affiche le contenu
        chevron.classList.remove('fa-chevron-down');
        chevron.classList.add('fa-chevron-up');
    } else {
        ingredientsContent.classList.add('hidden'); // Cache le contenu
        chevron.classList.remove('fa-chevron-up');
        chevron.classList.add('fa-chevron-down');
    }
}

// Attacher l'événement de clic au chevron
document.querySelector('#chevron').addEventListener('click', toggleDropdown);
// Fonction pour alimenter la liste des ingrédients
function alimenterIngredientsListe() {
    const ingredientsList = document.querySelector('#ingredients-list');
    const ingredientsSet = new Set();
    // Parcourir le tableau des recettes et alimenter les ingrédients
    recipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
            ingredientsSet.add(ingredient.ingredient);
        });
    });
    // Créer des éléments <li> pour chaque ingrédient
    ingredientsSet.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        li.classList.add('dropdown-item');
        ingredientsList.appendChild(li);
    });
}
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
//=====================================================================================================================================================
//====================================================== APPELS DE FONCTIONS ==========================================================================
//=====================================================================================================================================================
// Appel de la fonction pour alimenter la liste des ingrédients
alimenterIngredientsListe();
ParcourirTableauObjetsEnModeAffichageNavigateur();
// Appel des fonctions lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    alimenterIngredients(); // Appeler la fonction après le chargement du DOM
    alimenterListesDeroulantes(); // Alimenter les listes avec les données
});