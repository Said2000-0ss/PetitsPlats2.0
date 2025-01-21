import { recipes } from './recipes.js';
//=====================================================================================================================================================
//============================================================ MES VARIABLES ==========================================================================
//=====================================================================================================================================================
//MES VARIABLES PARTIE IMAGE
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const croix = document.getElementById('croixGrandeBarre');
//MES VARIABLES PARTIE SELECT
let ingredientClike = [];
let appareilClike = [];
let ustensilesClike = [];
let filteredRecipes = recipes;
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++ PARTIE IMAGES DE MES FONCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
// Fonction pour gérer la recherche  // rechercheViaGrandeBarre(searchValue); 
function handleSearch() {
    const searchValue = searchInput.value;
    if (searchValue.length >= 3) { // Si la chaîne contient 3 lettres ou plus, lance la recherche
        rechercheViaGrandeBarre(searchValue);  // Appelle la fonction de recherche
        croix.style.display = 'block';
    } else {
        ParcourirTableauObjetsEnModeAffichageNavigateur() // Cette fonction devra afficher toutes les recettes
        croix.style.display = 'none';
    }
}

searchButton.addEventListener('click', function () {
    const searchValue = searchInput.value;
    rechercheViaGrandeBarre(searchValue);
    searchInput.value = "";
    croix.style.display = 'none';
    ParcourirTableauObjetsEnModeAffichageNavigateur()
});
searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const searchValue = searchInput.value;
        rechercheViaGrandeBarre(searchValue);
        searchInput.value = "";
        croix.style.display = 'none';
    ParcourirTableauObjetsEnModeAffichageNavigateur()
    }
});
searchInput.addEventListener('input', function () {
    handleSearch(); 
});
croix.addEventListener('click', function () {// Ajoute un écouteur d'événements au clic sur la croix
    searchInput.value = '';  // Efface la barre de recherche
    ParcourirTableauObjetsEnModeAffichageNavigateur() // Cette fonction affichera toutes les recettes.
    croix.style.display = 'none';
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++ PARTIE SELECT DE MES FONCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++   
function alimenterListesDeroulantes() {// Fonction pour alimenter les listes déroulantes avec les données du tableau recipes
    const ingredientsSet = new Set(); // Utilisation de Set pour éviter les doublons
    const appareilsSet = new Set();
    const ustensilesSet = new Set();
    if (!Array.isArray(filteredRecipes) || filteredRecipes.length === 0) {
        console.error("Le tableau recipes est vide ou non défini.");
        return;
    }
   
    // filteredRecipes.forEach(recipe => { // Parcourir chaque recette dans le tableau recipes
    //     if (typeof ingredientsSet === 'undefined' || ingredientsSet.size === 0) {
    //         recipes.forEach(recipe => { // Remplir ingredientsSet avec les ingrédients uniques
    //             recipe.ingredients.forEach(ingredient => {
    //                 ingredientsSet.add(ingredient.ingredient);  // Ajouter chaque ingrédient dans le Set
    //             });
    //         });
    //         console.log("je viens de remplir ingredientsSet avec les ingrédients uniques.");
    //     } else {
    //         console.log("ingredientsSet est déjà défini et contient des éléments.");
    //     }
    //     appareilsSet.add(recipe.appliance);// Ajouter chaque appareil dans le Set appareilsSet
    //     // Ajouter chaque ustensile du tableau dans le Set ustensilesSet
    //     recipe.ustensils.forEach(ustensile => {
    //         // ustensilesSet.add(ustensile);
    //         ustensilesSet.add(ustensile.toLowerCase());
    //     });
    // });
    //=======================================
    for (let i = 0; i < filteredRecipes.length; i++) { // Parcourir chaque recette dans filteredRecipes
        const recipe = filteredRecipes[i];
    
        // if (typeof ingredientsSet === 'undefined' || ingredientsSet.size === 0) {
        //     for (let j = 0; j < recipes.length; j++) { // Remplir ingredientsSet avec les ingrédients uniques
        //         const currentRecipe = recipes[j];
    
        //         for (let k = 0; k < currentRecipe.ingredients.length; k++) {
        //             const ingredient = currentRecipe.ingredients[k];
        //             ingredientsSet.add(ingredient.ingredient); // Ajouter chaque ingrédient dans le Set
        //         }
        //     }
        //     console.log("je viens de remplir ingredientsSet avec les ingrédients uniques.");
        // } else {
        //     console.log("ingredientsSet est déjà défini et contient des éléments.");
        // }
        console.log(recipe)
        for (let l = 0; l < recipe.ingredients.length; l++) {
            const ingredient = recipe.ingredients[l].ingredient ? recipe.ingredients[l].ingredient : recipe.ingredients[l];
            console.log(ingredient)
            ingredientsSet.add(ingredient.toLowerCase());
        }
        // Ajouter chaque appareil dans le Set appareilsSet
        appareilsSet.add(recipe.appliance);
    
        // Ajouter chaque ustensile dans le Set ustensilesSet
        for (let l = 0; l < recipe.ustensils.length; l++) {
            const ustensile = recipe.ustensils[l];
            ustensilesSet.add(ustensile.toLowerCase());
        }
    }
    
    //=======================================
console.log("je suis ingredientSet",ingredientsSet)
console.log("je suis appareilsSet", appareilsSet)
console.log("je suis ustensilesSet", ustensilesSet)
  
    // function ajouterItemsDansListe(listeElement, itemsSet) {  // Fonction pour alimenter les listes déroulantes avec des éléments de type <li>
    //     listeElement.innerHTML = ''; // Vider la liste avant de l'alimenter
    //     itemsSet.forEach(item => { // Ajouter chaque item du Set comme un élément <li> dans la liste
    //         const li = document.createElement('li');
    //         li.textContent = item;
    //         li.classList.add('dropdown-item'); // Ajout de la classe 'dropdown-item'
    //         listeElement.appendChild(li); // Insertion de l'élément dans la liste
    //     });
    // }
    function ajouterItemsDansListe(listeElement, itemsSet) {  
        // Fonction pour alimenter les listes déroulantes avec des éléments de type <li>
        listeElement.innerHTML = ''; // Vider la liste avant de l'alimenter
    
        // Convertir le Set en tableau pour pouvoir utiliser une boucle for
        const itemsArray = Array.from(itemsSet);
    
        for (let i = 0; i < itemsArray.length; i++) { // Parcourir chaque élément du tableau
            const item = itemsArray[i];
            const li = document.createElement('li');
            li.textContent = item;
            li.classList.add('dropdown-item'); // Ajout de la classe 'dropdown-item'
            listeElement.appendChild(li); // Insertion de l'élément dans la liste
        }
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





function toggleDropdown(contentId, chevronId, syncContentIds = []) {
    const chevron = document.getElementById(chevronId);
    const content = document.getElementById(contentId);
    // Si la section est fermée
    if (content.classList.contains('hidden')) {
        // Affiche cette section
        content.classList.remove('hidden');
        chevron.classList.remove('fa-chevron-down');
        chevron.classList.add('fa-chevron-up');
        // Ouvre aussi les autres sections spécifiées (sync)
        syncContentIds.forEach(syncContentId => {
            const syncContent = document.getElementById(syncContentId);
            if (syncContent) {
                syncContent.classList.remove('hidden');
                const syncChevron = document.getElementById(`${syncContentId.replace('content', 'chevron')}`);
                if (syncChevron) {
                    syncChevron.classList.remove('fa-chevron-down');
                    syncChevron.classList.add('fa-chevron-up');
                }
            }
        });
    } else {
        // Si la section est déjà ouverte, la fermer
        content.classList.add('hidden');
        chevron.classList.remove('fa-chevron-up');
        chevron.classList.add('fa-chevron-down');
        // Réinitialiser les champs et les affichages lorsque la section se ferme
        const affichageChoixDiv = document.getElementById(`affichageChoix${capitalizeFirstLetter(contentId.split('-')[0])}`);
        if (affichageChoixDiv) {
            affichageChoixDiv.textContent = ''; // Efface le contenu
            const inputField = document.getElementById(`input${capitalizeFirstLetter(contentId.split('-')[0])}`);
            if (inputField) {
                inputField.value = ''; // Réinitialise l'input
            }
        }
    }
}

// Fonction utilitaire pour capitaliser la première lettre
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Attacher l'événement de clic à chaque chevron
document.getElementById('ingredients-container').addEventListener('click', function () {
    toggleDropdown('ingredients-content', 'ingredients-chevron', ['appareils-content', 'ustensiles-content']); // Ouvre aussi appareils et ustensiles
});

document.getElementById('appareils-container').addEventListener('click', function () {
    toggleDropdown('appareils-content', 'appareils-chevron', ['ingredients-content', 'ustensiles-content']); // Ouvre aussi ingredients et ustensiles
});

document.getElementById('ustensiles-container').addEventListener('click', function () {
    toggleDropdown('ustensiles-content', 'ustensiles-chevron', ['ingredients-content', 'appareils-content']); // Ouvre aussi ingredients et appareils
});


//================================================ RECHERCHE VIA GRANDE BARRE ===============================================================================
function rechercheViaGrandeBarre(mots) {
    const motsRecherche = mots.toLowerCase(); // Transformer les mots en minuscules pour faire une recherche insensible à la casse
    let compteur = 0;
    const targetDiv = document.getElementById('partieRecettes');
    targetDiv.innerHTML = '';  // Réinitialiser la div cible
    // Parcourir les recettes et appliquer les filtres
    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];
        // Vérification si les mots recherchés sont présents dans le titre, la description ou les ingrédients
        const matchTitle = recipe.name.toLowerCase().includes(motsRecherche);
        const matchDescription = recipe.description.toLowerCase().includes(motsRecherche);
        const matchIngredients = recipe.ingredients.some(ing => ing.ingredient.toLowerCase().includes(motsRecherche));
        // Si la recette correspond aux critères
        if (matchTitle || matchDescription || matchIngredients) {
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
            const presentation = document.createElement('div');
            presentation.className = 'presentationDiv';
            sectionIngredients.appendChild(presentation);
            // Ajout des ingrédients à la carte
            for (let j = 0; j < recipe.ingredients.length; j++) {
                const ingredient = recipe.ingredients[j];
                const ingredientContainer = document.createElement('div');
                ingredientContainer.className = 'ingredient-container';
                const ingredientTitle = document.createElement('h5');
                ingredientTitle.textContent = `${ingredient.ingredient}`;
                ingredientTitle.className = 'titleIngredient';
                const quantityTitle = document.createElement('h5');
                quantityTitle.className = 'titleQuantity';
                if (ingredient.quantity) {
                    quantityTitle.textContent = `${ingredient.quantity}`;
                    if (ingredient.unit) {
                        quantityTitle.textContent += ` ${ingredient.unit}`;
                    }
                } else {
                    quantityTitle.textContent = '---';
                }
                ingredientContainer.appendChild(ingredientTitle);
                ingredientContainer.appendChild(quantityTitle);
                presentation.appendChild(ingredientContainer);
            }
             // Ajouter les sous-divisions à la carte
            containerCard.appendChild(sectionImage);
            containerCard.appendChild(sectionRecettes);
            containerCard.appendChild(sectionIngredients);
            // Ajouter la carte principale à la div cible
            targetDiv.appendChild(containerCard);
            // Incrémenter le compteur
            compteur++;
        }
    }
    // Mettre à jour le compteur de recettes
    const nbRecettesSpan = document.getElementById('nbRecettes');
    nbRecettesSpan.textContent = `${compteur} recettes`;// recetttes via la grande Barre
}//================================================  FIN DE LA RECHERCHE VIA GRANDE BARRE =======================================================================


//========================================================== ALIMENTER MES SELECTS ===================================================================
// function alimenterIngredientsListe() {// Fonction pour alimenter la liste des ingrédients
//     const ingredientsList = document.querySelector('#ingredients-list');
//     const ingredientsSet = new Set();
//     recipes.forEach(recipe => {// Parcourir le tableau des recettes et alimenter les ingrédients
//         recipe.ingredients.forEach(ingredient => {
//             ingredientsSet.add(ingredient.ingredient);
//         });
//     });
//     // console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++")
//     // console.log(ingredientsSet,recipes);
//     // console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++")
//     ingredientsSet.forEach(ingredient => { // Créer des éléments <li> pour chaque ingrédient
//         const li = document.createElement('li');
//         li.textContent = ingredient;
//         li.classList.add('dropdown-item');
//         ingredientsList.appendChild(li);
//     });
// }
function alimenterIngredientsListe() {  
    // Fonction pour alimenter la liste des ingrédients
    const ingredientsList = document.querySelector('#ingredients-list');
    const ingredientsSet = new Set();

    // Parcourir le tableau des recettes et alimenter les ingrédients
    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];
        for (let j = 0; j < recipe.ingredients.length; j++) {
            const ingredient = recipe.ingredients[j];
            ingredientsSet.add(ingredient.ingredient);
        }
    }

    // Créer des éléments <li> pour chaque ingrédient
    const ingredientsArray = Array.from(ingredientsSet);
    for (let i = 0; i < ingredientsArray.length; i++) {
        const ingredient = ingredientsArray[i];
        const li = document.createElement('li');
        li.textContent = ingredient;
        li.classList.add('dropdown-item');
        ingredientsList.appendChild(li);
    }
}
// function alimenterIngredientsListe() {
//     console.log("je suis passé par la");
// }


// function alimenterAppareilsListe() {// Fonction pour alimenter la liste des appareils
//     const appareilsList = document.querySelector('#appareils-list');
//     const appareilsSet = new Set(); // Parcourir le tableau des recettes et alimenter les appareils
//     recipes.forEach(recipe => {
//         appareilsSet.add(recipe.appliance);
//     });
//     // console.log(appareilsSet, recipes)
//     appareilsSet.forEach(appareil => {    // Créer des éléments <li> pour chaque appareil
//         const li = document.createElement('li');
//         li.textContent = appareil;
//         li.classList.add('dropdown-item');
//         appareilsList.appendChild(li);
//     });
// }
function alimenterAppareilsListe() {  
    // Fonction pour alimenter la liste des appareils
    const appareilsList = document.querySelector('#appareils-list');
    const appareilsSet = new Set();

    // Parcourir le tableau des recettes et alimenter les appareils
    for (let i = 0; i < recipes.length; i++) {
        appareilsSet.add(recipes[i].appliance);
    }

    // Créer des éléments <li> pour chaque appareil
    const appareilsArray = Array.from(appareilsSet);
    for (let i = 0; i < appareilsArray.length; i++) {
        const appareil = appareilsArray[i];
        const li = document.createElement('li');
        li.textContent = appareil;
        li.classList.add('dropdown-item');
        appareilsList.appendChild(li);
    }
}

// function alimenterUstensilesListe() {
//     const ustensilesList = document.querySelector('#ustensiles-list');
//     const ustensilesSet = new Set();
//     recipes.forEach(recipe => { // Parcourir le tableau des recettes et alimenter les ustensiles
//         recipe.ustensils.forEach(ustensile => {
//             ustensilesSet.add(ustensile);
//         });
//     });
//     ustensilesSet.forEach(ustensile => {  // Créer des éléments <li> pour chaque ustensile
//         const li = document.createElement('li');
//         li.textContent = ustensile;
//         li.classList.add('dropdown-item');
//         ustensilesList.appendChild(li);
//     });
// }
function alimenterUstensilesListe() {
    const ustensilesList = document.querySelector('#ustensiles-list');
    const ustensilesSet = new Set();

    // Parcourir le tableau des recettes et alimenter les ustensiles
    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];
        for (let j = 0; j < recipe.ustensils.length; j++) {
            ustensilesSet.add(recipe.ustensils[j]);
        }
    }

    // Créer des éléments <li> pour chaque ustensile
    const ustensilesArray = Array.from(ustensilesSet);
    for (let i = 0; i < ustensilesArray.length; i++) {
        const ustensile = ustensilesArray[i];
        const li = document.createElement('li');
        li.textContent = ustensile;
        li.classList.add('dropdown-item');
        ustensilesList.appendChild(li);
    }
}



document.addEventListener('DOMContentLoaded', function () {
    const ingredientsList = document.getElementById('ingredients-list');
    const affichageChoixIngredients = document.getElementById("affichageChoixIngredients");
    const affichageResultat = document.getElementById("result-container");

    ingredientsList.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            const clickedText = event.target.textContent;

            // Vérifier si l'élément a déjà été ajouté
            if (ingredientClike.includes(clickedText.toLowerCase())) {
                console.log("Cet élément a déjà été ajouté :", clickedText);
                return; // Ne rien faire si l'élément est déjà dans la liste
            }

            console.log("Vous avez cliqué sur :", clickedText);

            // Ajouter l'élément cliqué à ingredientClike
            ingredientClike.push(clickedText.toLowerCase());

            // Créer le span dans 'affichageChoixIngredients' avec la croix pour supprimer
            const spanChoix = document.createElement("span");
            spanChoix.classList.add("yellow-background");
            spanChoix.textContent = clickedText;

            // Créer la croix pour la suppression (icône FontAwesome ici pour ingredient-container)
            const crossChoix = document.createElement("span");  
            const iconChoix = document.createElement("i");
            iconChoix.classList.add("fa-solid", "fa-circle-xmark");

            // Ajouter l'icône au <span> dans spanChoix
            crossChoix.appendChild(iconChoix);

            // Ajouter la classe pour le style
            crossChoix.classList.add("delete-cross");

            // Ajouter la croix dans le span
            spanChoix.appendChild(crossChoix);
            
            // Créer un conteneur div pour chaque élément (pour forcer le passage à la ligne)
            const divChoix = document.createElement("div");
            divChoix.classList.add("ingredient-container"); // Ajouter une classe pour le conteneur
            divChoix.appendChild(spanChoix);  // Ajouter l'élément avec la croix dans le div
            affichageChoixIngredients.appendChild(divChoix);
            document.getElementById('inputIngredients').value = '';
            
            const spanResultat = document.createElement("span");
            spanResultat.classList.add("yellow-background");
            spanResultat.textContent = clickedText;

            // Créer la croix dans le spanResultat (texte "x" ici pour result-container)
            const crossResultat = document.createElement("span");
            crossResultat.classList.add("delete-cross");
            crossResultat.textContent = "x";  // Texte "x" pour la croix

            // Ajouter la croix à spanResultat
            spanResultat.appendChild(crossResultat);

            const divResultat = document.createElement("div");
            divResultat.classList.add("ingredient-container"); // Ajouter une classe pour le conteneur
            divResultat.appendChild(spanResultat);  // Ajouter l'élément dans le div
            affichageResultat.appendChild(divResultat);

            // Ajouter un événement de suppression pour la croix dans 'affichageChoixIngredients'
            crossChoix.addEventListener('click', function () {
                affichageChoixIngredients.removeChild(divChoix); // Supprimer l'élément du conteneur affichageChoixIngredients
                affichageResultat.removeChild(divResultat); // Supprimer l'élément du conteneur affichageResultat
                const index = ingredientClike.indexOf(clickedText.toLowerCase());  // Retirer l'élément de ingredientClike
                if (index > -1) {
                    ingredientClike.splice(index, 1);
                    verifierEtAfficherRecettes(); // Mettre à jour les recettes après suppression
                }
            });

            spanResultat.addEventListener('click', function () { // Ajouter un événement de suppression pour les éléments dans 'result-container'
                affichageChoixIngredients.removeChild(divChoix); // Supprimer l'élément du conteneur affichageChoixIngredients
                affichageResultat.removeChild(divResultat); // Supprimer l'élément du conteneur affichageResultat
                const index = ingredientClike.indexOf(clickedText.toLowerCase()); // Retirer l'élément de ingredientClike
                if (index > -1) {
                    ingredientClike.splice(index, 1);
                    verifierEtAfficherRecettes(); // Mettre à jour les recettes après suppression
                }
            });

            // Mettre à jour les recettes (ou d'autres actions nécessaires)
            verifierEtAfficherRecettes();
            alimenterListesDeroulantes();
        }
    });
});








document.getElementById('croixIngredients').addEventListener('click', () => {// Fonction pour masquer la croix lorsqu'on clique sur la croix elle-même
    const croixIngredients = document.getElementById('croixIngredients');
    const affichageChoixIngredients = document.getElementById('affichageChoixIngredients');
    croixIngredients.style.display = 'none'; // Cache la croix
    affichageChoixIngredients.innerHTML = ''; // Efface le contenu affiché
    ingredientClike = [];
    const affichageResultat = document.getElementById("result-container");
    affichageResultat.textContent = ingredientClike;
    console.log("croix 2")
affichageResultat.classList.add("yellow-background");
    verifierEtAfficherRecettes();
    alimenterIngredientsListe();
    const inputIngredients = document.getElementById('inputIngredients');
inputIngredients.value = '';
    const affichageResutatBis = document.getElementById("result-container-bis");
            affichageResutatBis.textContent = "";
});


document.getElementById('croixAppareils').addEventListener('click', () => {// Fonction pour masquer la croix lorsqu'on clique sur la croix elle-même
    const croixAppareils = document.getElementById('croixAppareils');
    const affichageChoixAppareils = document.getElementById('affichageChoixAppareils');
    croixAppareils.style.display = 'none'; // Cache la croix
    affichageChoixAppareils.innerHTML = ''; // Efface le contenu affiché
    const inputAppareils = document.getElementById('inputAppareils');
    inputAppareils.value = '';
    appareilClike = [];
    const affichageResultatAppareils = document.getElementById("result-container-appareils");
    affichageResultatAppareils.textContent = '';
    affichageResultatAppareils.classList.add("yellow-background");
    verifierEtAfficherRecettes();
    alimenterAppareilsListe();
    // alimenterIngredientsListe();
});



document.getElementById('croixUstensiles').addEventListener('click', () => {// Fonction pour masquer la croix lorsqu'on clique sur la croix elle-même
    const croixUstensiles = document.getElementById('croixUstensiles');
    const affichageChoixUstensiles = document.getElementById('affichageChoixUstensiles');
  
const inputUstensiles = document.getElementById('inputUstensiles');
inputUstensiles.value = '';
    croixUstensiles.style.display = 'none'; // Cache la croix
    affichageChoixUstensiles.innerHTML = ''; // Efface le contenu affiché
    ustensilesClike = [];
    const containerAffichageUstensiles = document.getElementById("result-container-ustensiles");
    containerAffichageUstensiles.textContent = '';
    
    verifierEtAfficherRecettes();
    // alimenterUstensilesListe();
    // alimenterIngredientsListe();
    alimenterListesDeroulantes();
});

function filtrerUstensilesListe() {// Fonction pour filtrer les ustensiles en fonction de la saisie dans l'input
    const input = document.querySelector('#inputUstensiles');
    const filter = input.value.toLowerCase();
    const ustensilesList = document.querySelectorAll('#ustensiles-list li');
    ustensilesList.forEach(li => { // Affiche ou cache chaque <li> en fonction de la saisie
        if (li.textContent.toLowerCase().includes(filter)) {
            li.style.display = '';
        } else {
            li.style.display = 'none';
        }
    });
}

alimenterUstensilesListe();// Initialiser la liste des ustensiles et l'événement de filtrage
document.querySelector('#inputUstensiles').addEventListener('input', filtrerUstensilesListe);

document.addEventListener('DOMContentLoaded', function () {
    const appareilsList = document.getElementById('appareils-list');
    const affichageChoixAppareils = document.getElementById("affichageChoixAppareils");
    const affichageResultatAppareils = document.getElementById("result-container-appareils");

    appareilsList.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            const clickedText = event.target.textContent;

            // Vérifier si l'élément a déjà été ajouté
            if (appareilClike.includes(clickedText.toLowerCase())) {
                console.log("Cet élément a déjà été ajouté :", clickedText);
                return; // Ne rien faire si l'élément est déjà dans la liste
            }

            console.log("Vous avez cliqué sur :", clickedText);

            // Ajouter l'élément cliqué à appareilClike
            appareilClike.push(clickedText.toLowerCase());

            // Créer le span dans 'affichageChoixAppareils' avec la croix pour supprimer
            const spanAppareils = document.createElement("span");
            spanAppareils.classList.add("yellow-background");
            spanAppareils.textContent = clickedText;

            // Créer la croix pour la suppression
            const crossAppareils = document.createElement("span");
            const icon = document.createElement("i");
            icon.classList.add("fa-solid", "fa-circle-xmark");

            // Ajouter l'icône <i> au <span>
            crossAppareils.appendChild(icon);
            crossAppareils.classList.add("delete-cross");

            // Ajouter la croix dans le span
            spanAppareils.appendChild(crossAppareils);
            // Créer un conteneur div pour chaque élément (pour forcer le passage à la ligne)
            const divAppareils = document.createElement("div");
            divAppareils.classList.add("ingredient-container");
            divAppareils.appendChild(spanAppareils);
            affichageChoixAppareils.appendChild(divAppareils);
            document.getElementById('inputAppareils').value = '';

            // Créer le span pour afficher dans 'result-container-appareils'
            const spanResultatAppareils = document.createElement("span");
            spanResultatAppareils.classList.add("yellow-background");
            spanResultatAppareils.textContent = clickedText; // On ajoute ici le texte sans la croix

            // Créer la croix (texte "x") pour la suppression dans spanResultatAppareils
            const crossResultatAppareils = document.createElement("span");
            crossResultatAppareils.textContent = " x";  // Ajouter " x" comme texte pour la croix

            // Appliquer les classes pour s'assurer que la croix est à droite
            crossResultatAppareils.classList.add("delete-cross-resultat");

            // Ajouter la croix dans le spanResultatAppareils
            spanResultatAppareils.appendChild(crossResultatAppareils);

            const divResultatAppareils = document.createElement("div");
            divResultatAppareils.classList.add("ingredient-container");
            divResultatAppareils.appendChild(spanResultatAppareils);
            affichageResultatAppareils.appendChild(divResultatAppareils);

            // Ajouter un événement de suppression pour la croix dans 'affichageChoixAppareils'
            crossAppareils.addEventListener('click', function () {
                affichageChoixAppareils.removeChild(divAppareils);
                affichageResultatAppareils.removeChild(divResultatAppareils);
                const index = appareilClike.indexOf(clickedText.toLowerCase());
                if (index > -1) {
                    appareilClike.splice(index, 1);
                    verifierEtAfficherRecettes(); // Mettre à jour les recettes après suppression
                }
            });

            // Ajouter un événement de suppression pour 'spanResultatAppareils' (affichageResultatAppareils)
            crossResultatAppareils.addEventListener('click', function () {
                affichageChoixAppareils.removeChild(divAppareils);
                affichageResultatAppareils.removeChild(divResultatAppareils);
                const index = appareilClike.indexOf(clickedText.toLowerCase());
                if (index > -1) {
                    appareilClike.splice(index, 1);
                    verifierEtAfficherRecettes(); // Mettre à jour les recettes après suppression
                }
            });

            // Mettre à jour les recettes
            verifierEtAfficherRecettes();
            alimenterAppareilsListe(); // Mettre à jour la liste des appareils
        }
    });
});






document.addEventListener('DOMContentLoaded', function () {
    const ustensilsList = document.getElementById('ustensiles-list');
    const affichageChoixUstensiles = document.getElementById("affichageChoixUstensiles");
    const affichageResultatUstensiles = document.getElementById("result-container-ustensiles");

    ustensilsList.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            const clickedText = event.target.textContent;

            // Vérifier si l'élément a déjà été ajouté
            if (ustensilesClike.includes(clickedText.toLowerCase())) {
                console.log("Cet élément a déjà été ajouté :", clickedText);
                return; // Ne rien faire si l'élément est déjà dans la liste
            }

            console.log("Vous avez cliqué sur :", clickedText);

            // Ajouter l'élément cliqué à ustensilesClike
            ustensilesClike.push(clickedText.toLowerCase());

            // Créer le span dans 'affichageChoixUstensiles' avec la croix pour supprimer
            const spanUstensiles = document.createElement("span");
            spanUstensiles.classList.add("yellow-background");
            spanUstensiles.textContent = clickedText;

            // Créer la croix pour la suppression
            const crossUstensiles = document.createElement("span");  
            const icon = document.createElement("i");
            icon.classList.add("fa-solid", "fa-circle-xmark");

            // Ajouter l'icône <i> au <span>
            crossUstensiles.appendChild(icon);
            crossUstensiles.classList.add("delete-cross");

            // Ajouter la croix dans le span
            spanUstensiles.appendChild(crossUstensiles);
            // Créer un conteneur div pour chaque élément (pour forcer le passage à la ligne)
            const divUstensiles = document.createElement("div");
            divUstensiles.classList.add("ingredient-container");
            divUstensiles.appendChild(spanUstensiles);
            affichageChoixUstensiles.appendChild(divUstensiles);
            document.getElementById('inputUstensiles').value = '';

            const spanResultatUstensiles = document.createElement("span");
            spanResultatUstensiles.classList.add("yellow-background");
            spanResultatUstensiles.textContent = clickedText  +" x";

            const divResultatUstensiles = document.createElement("div");
            divResultatUstensiles.classList.add("ingredient-container");
            divResultatUstensiles.appendChild(spanResultatUstensiles);
            affichageResultatUstensiles.appendChild(divResultatUstensiles);

            // Ajouter un événement de suppression pour la croix dans 'affichageChoixUstensiles'
            crossUstensiles.addEventListener('click', function () {
                affichageChoixUstensiles.removeChild(divUstensiles);
                affichageResultatUstensiles.removeChild(divResultatUstensiles);
                const index = ustensilesClike.indexOf(clickedText.toLowerCase());
                if (index > -1) {
                    ustensilesClike.splice(index, 1);
                    verifierEtAfficherRecettes(); // Mettre à jour les recettes après suppression
                }
            });

            spanResultatUstensiles.addEventListener('click', function () { // Ajouter un événement de suppression pour les éléments dans 'result-container-ustensiles'
                affichageChoixUstensiles.removeChild(divUstensiles);
                affichageResultatUstensiles.removeChild(divResultatUstensiles);
                const index = ustensilesClike.indexOf(clickedText.toLowerCase());
                if (index > -1) {
                    ustensilesClike.splice(index, 1);
                    verifierEtAfficherRecettes(); // Mettre à jour les recettes après suppression
                }
            });

            // Mettre à jour les recettes
            verifierEtAfficherRecettes();
            alimenterListesDeroulantes();
        }
    });
});




document.getElementById('inputIngredients').addEventListener('input', function () {
    const inputText = this.value.trim().toLowerCase();
    const affichageChoix = document.getElementById('affichageChoixIngredients');
    const ingredientsList = document.getElementById('ingredients-list');
    // Si le texte a 3 lettres ou plus, on filtre la liste des ingrédients
    if (inputText.length >= 1) {
        // On vide la liste des ingrédients avant de la remplir avec les résultats filtrés
        ingredientsList.innerHTML = '';
        // Créer un ensemble pour s'assurer qu'il n'y a pas de doublons
        const uniqueIngredients = new Set();
        // Filtrer les ingrédients qui contiennent le texte saisi
        const filteredIngredients = recipes.filter(recipe => {
            return recipe.ingredients.some(ing =>
                ing.ingredient.toLowerCase().includes(inputText)
            );
        });

        // Afficher les ingrédients filtrés dans la liste déroulante
        filteredIngredients.forEach(recipe => {
            recipe.ingredients.forEach(ingredientObj => {
                if (ingredientObj.ingredient.toLowerCase().includes(inputText)) {
                    // Vérifier si l'ingrédient est déjà dans l'ensemble
                    if (!uniqueIngredients.has(ingredientObj.ingredient.toLowerCase())) {
                        uniqueIngredients.add(ingredientObj.ingredient.toLowerCase());
                        const li = document.createElement('li');
                        li.textContent = ingredientObj.ingredient;
                        // Ajouter un écouteur d'événement de clic pour chaque <li>
                        li.addEventListener('click', function () {
                            // Afficher l'ingrédient sélectionné dans "affichageChoix"
                            // affichageChoix.innerHTML = `A${li.textContent} <span class="close">X</span>`;
                            affichageChoix.style.display = 'block';
                            ingredientsList.innerHTML = ''; // Vider la liste filtrée
                            attachCloseEvent(); // Attacher l'événement de la croix
                            // Debug : Vérifie si la croix est bien ajoutée
                            console.log('Cross added: ', document.querySelector('#affichageChoix .close'));
                        });
                        ingredientsList.appendChild(li);
                    }
                }
            });
        });
    } else {
        // Si le texte est inférieur à 3 lettres, on réinitialise la liste des ingrédients
        ingredientsList.innerHTML = ''; // Réinitialiser ou afficher la liste complète
        alimenterIngredientsListe();
    }
});

// Fonction pour attacher l'événement de clic sur la croix
function attachCloseEvent() {
    const closeBtn = document.querySelector('#affichageChoixIngredients .close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            document.getElementById('affichageChoixIngredients').style.display = 'none'; // Cacher la div
            document.getElementById('inputIngredients').value = ''; // Réinitialiser l'input
            displayFullIngredientsList(); // Réafficher l'intégralité de la liste des ingrédients
        });
    }
}

// Fonction pour réafficher l'intégralité de la liste des ingrédients
// function displayFullIngredientsList() {
//     const ingredientsList = document.getElementById('ingredients-list');
//     ingredientsList.innerHTML = ''; // Vider d'abord la liste
//     const uniqueIngredients = new Set();
//      recipes.forEach(recipe => {// Afficher tous les ingrédients à nouveau
//         recipe.ingredients.forEach(ingredientObj => {
//             if (!uniqueIngredients.has(ingredientObj.ingredient.toLowerCase())) {
//                 uniqueIngredients.add(ingredientObj.ingredient.toLowerCase());
//                 const li = document.createElement('li');
//                 li.textContent = ingredientObj.ingredient;
//                 li.addEventListener('click', function () { // Ajouter un écouteur d'événement de clic pour chaque <li>
//                     affichageChoix.innerHTML = `B${li.textContent} <span class="close">X</span>`;
//                     // affichageChoix.innerHTML = `${li.textContent} <span class="close">X</span>`;
//                     // affichageChoix.style.display = 'block';
//                     ingredientsList.innerHTML = ''; // Vider la liste
//                     attachCloseEvent(); // Attacher l'événement de la croix
//                 });
//                 ingredientsList.appendChild(li);
//             }
//         });
//     });
// }
function displayFullIngredientsList() {
    const ingredientsList = document.getElementById('ingredients-list');
    ingredientsList.innerHTML = ''; // Vider d'abord la liste
    const uniqueIngredients = new Set();

    // Remplacement de recipes.forEach par une boucle for
    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];

        // Remplacement de recipe.ingredients.forEach par une boucle for
        for (let j = 0; j < recipe.ingredients.length; j++) {
            const ingredientObj = recipe.ingredients[j];

            if (!uniqueIngredients.has(ingredientObj.ingredient.toLowerCase())) {
                uniqueIngredients.add(ingredientObj.ingredient.toLowerCase());
                
                const li = document.createElement('li');
                li.textContent = ingredientObj.ingredient;

                // Ajouter un écouteur d'événement de clic pour chaque <li>
                li.addEventListener('click', function () {
                    affichageChoix.innerHTML = `B${li.textContent} <span class="close">X</span>`;
                    ingredientsList.innerHTML = ''; // Vider la liste
                    attachCloseEvent(); // Attacher l'événement de la croix
                });

                ingredientsList.appendChild(li);
            }
        }
    }
}


function verifierEtAfficherRecettes() {
    const ingredientParam = ingredientClike === "" ? null : ingredientClike;
    const appareilParam = appareilClike === "" ? null : appareilClike;
    const ustensileParam = ustensilesClike === "" ? null : ustensilesClike;
    afficherRecettesFiltrees(ingredientParam, appareilParam, ustensileParam);
}

// document.getElementById('inputAppareils').addEventListener('input', function () {
//     const inputText = this.value.trim().toLowerCase();
//     const affichageChoix = document.getElementById('affichageChoixAppareils');
//     const appareilsList = document.getElementById('appareils-list');
//     // Si le texte a 1 lettre ou plus, on filtre la liste des appareils
//     if (inputText.length >= 1) {// On vide la liste des appareils avant de la remplir avec les résultats filtrés
//         appareilsList.innerHTML = ''; // Créer un ensemble pour s'assurer qu'il n'y a pas de doublons
//         const uniqueAppareils = new Set(); // Filtrer les appareils qui contiennent le texte saisi
//         const filteredAppareils = recipes.filter(recipe => {
//             return recipe.appliance.toLowerCase().includes(inputText);
//         });
//         filteredAppareils.forEach(recipe => {    // Afficher les appareils filtrés dans la liste déroulante
//             const appareil = recipe.appliance.toLowerCase();
//             if (!uniqueAppareils.has(appareil)) {
//                 uniqueAppareils.add(appareil);
//                 const li = document.createElement('li');
//                 li.textContent = recipe.appliance;
//                 li.classList.add('dropdown-item');
//                 // Ajouter un écouteur d'événement de clic pour chaque <li>
//                 li.addEventListener('click', function () {
//                     // Afficher l'appareil sélectionné dans "affichageChoix"
//                     affichageChoix.innerHTML = `${li.textContent} <span class="close">X</span>`;
//                     affichageChoix.style.display = 'block';
//                     appareilsList.innerHTML = ''; // Vider la liste filtrée
//                     attachCloseEventAppareils(); // Attacher l'événement de la croix
//                     // Debug : Vérifie si la croix est bien ajoutée
//                     console.log('Cross added: ', document.querySelector('#affichageChoixAppareils .close'));
//                 });
//                 appareilsList.appendChild(li);
//             }
//         });
//     } else {
//         // Si le texte est inférieur à 1 lettre, on réinitialise la liste des appareils
//         appareilsList.innerHTML = ''; // Réinitialiser ou afficher la liste complète
//         alimenterAppareilsListe();
//     }
// });
document.getElementById('inputAppareils').oninput = function () {
    const inputText = this.value.trim().toLowerCase();
    const affichageChoix = document.getElementById('affichageChoixAppareils');
    const appareilsList = document.getElementById('appareils-list');

    // Si le texte a 1 lettre ou plus, on filtre la liste des appareils
    if (inputText.length >= 1) {
        // On vide la liste des appareils avant de la remplir avec les résultats filtrés
        appareilsList.innerHTML = '';

        // Créer un ensemble pour s'assurer qu'il n'y a pas de doublons
        const uniqueAppareils = new Set();

        // Filtrer les appareils qui contiennent le texte saisi
        for (let i = 0; i < recipes.length; i++) {
            const recipe = recipes[i];
            if (recipe.appliance.toLowerCase().includes(inputText)) {
                const appareil = recipe.appliance.toLowerCase();
                if (!uniqueAppareils.has(appareil)) {
                    uniqueAppareils.add(appareil);
                    
                    // Créer l'élément <li> pour chaque appareil
                    const li = document.createElement('li');
                    li.textContent = recipe.appliance;
                    li.classList.add('dropdown-item');
                    
                    // Ajouter un écouteur d'événement de clic pour chaque <li>
                    li.onclick = function () {
                        // Afficher l'appareil sélectionné dans "affichageChoix"
                        // affichageChoix.innerHTML = `${li.textContent} <span class="close">X</span>`;
                        affichageChoix.style.display = 'block';
                        appareilsList.innerHTML = ''; // Vider la liste filtrée
                        attachCloseEventAppareils(); // Attacher l'événement de la croix

                        // Debug : Vérifie si la croix est bien ajoutée
                        console.log('Cross added: ', document.querySelector('#affichageChoixAppareils .close'));
                    };
                    
                    // Ajouter l'élément <li> dans la liste des appareils
                    appareilsList.appendChild(li);
                }
            }
        }
    } else {
        // Si le texte est inférieur à 1 lettre, on réinitialise la liste des appareils
        appareilsList.innerHTML = '';
        alimenterAppareilsListe(); // Réinitialiser ou afficher la liste complète
    }
};

// Fonction pour attacher l'événement de fermeture sur la croix
function attachCloseEventAppareils() {
    const closeBtn = document.querySelector('#affichageChoixAppareils .close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            document.getElementById('affichageChoixAppareils').style.display = 'none';
            document.getElementById('inputAppareils').value = '';
        });
    }
}
// document.getElementById('inputUstensiles').addEventListener('input', function () {
//     const inputText = this.value.trim().toLowerCase();
//     const affichageChoix = document.getElementById('affichageChoixUstensiles');
//     const ustensilesList = document.getElementById('ustensiles-list');
//     if (inputText.length >= 1) {// Si le texte a 1 lettre ou plus, on filtre la liste des ustensiles
//         ustensilesList.innerHTML = '';  // On vide la liste des ustensiles avant de la remplir avec les résultats filtrés
//         const uniqueUstensiles = new Set();// Créer un ensemble pour s'assurer qu'il n'y a pas de doublon
//         const filteredUstensiles = recipes.filter(recipe => {    // Filtrer les ustensiles qui contiennent le texte saisi
//             return recipe.ustensils.some(ustensile =>
//                 ustensile.toLowerCase().includes(inputText)
//             );
//         });
//         filteredUstensiles.forEach(recipe => {  // Afficher les ustensiles filtrés dans la liste déroulante
//             recipe.ustensils.forEach(ustensile => {
//                 const ustensileLower = ustensile.toLowerCase();
//                 if (ustensileLower.includes(inputText) && !uniqueUstensiles.has(ustensileLower)) {
//                     uniqueUstensiles.add(ustensileLower);
//                     const li = document.createElement('li');
//                     li.textContent = ustensile;
//                     li.classList.add('dropdown-item');  // Ajouter un écouteur d'événement de clic pour chaque <li>
//                     li.addEventListener('click', function () {   // Afficher l'ustensile sélectionné dans "affichageChoix"
//                         affichageChoix.innerHTML = `${li.textContent} <span class="close">X</span>`;
//                         affichageChoix.style.display = 'block';
//                         ustensilesList.innerHTML = ''; // Vider la liste filtrée
//                         attachCloseEventUstensiles(); // Attacher l'événement de la croix
//                         console.log('Cross added: ', document.querySelector('#affichageChoixUstensiles .close'));// Debug : Vérifie si la croix est bien ajoutée
//                     });
//                     ustensilesList.appendChild(li);
//                 }
//             });
//         });
//     } else {
//         ustensilesList.innerHTML = ''; // Réinitialiser ou afficher la liste complète // Si le texte est inférieur à 1 lettre, on réinitialise la liste des ustensiles
//     alimenterUstensilesListe();
//     }
 
// });
document.getElementById('inputUstensiles').addEventListener('input', function () {
    const inputText = this.value.trim().toLowerCase();
    const affichageChoix = document.getElementById('affichageChoixUstensiles');
    const ustensilesList = document.getElementById('ustensiles-list');
    
    if (inputText.length >= 1) { // Si le texte a 1 lettre ou plus, on filtre la liste des ustensiles
        ustensilesList.innerHTML = ''; // On vide la liste des ustensiles avant de la remplir avec les résultats filtrés
        const uniqueUstensiles = new Set(); // Créer un ensemble pour s'assurer qu'il n'y a pas de doublon
        
        // Filtrer les ustensiles qui contiennent le texte saisi
        const filteredUstensiles = [];
        for (let i = 0; i < recipes.length; i++) {
            const recipe = recipes[i];
            for (let j = 0; j < recipe.ustensils.length; j++) {
                if (recipe.ustensils[j].toLowerCase().includes(inputText)) {
                    filteredUstensiles.push(recipe);
                    break; // Sortir de la boucle interne une fois qu'un ustensile correspond
                }
            }
        }

        // Afficher les ustensiles filtrés dans la liste déroulante
        for (let i = 0; i < filteredUstensiles.length; i++) {
            const recipe = filteredUstensiles[i];
            for (let j = 0; j < recipe.ustensils.length; j++) {
                const ustensile = recipe.ustensils[j];
                const ustensileLower = ustensile.toLowerCase();
                
                if (ustensileLower.includes(inputText) && !uniqueUstensiles.has(ustensileLower)) {
                    uniqueUstensiles.add(ustensileLower);
                    
                    const li = document.createElement('li');
                    li.textContent = ustensile;
                    li.classList.add('dropdown-item');
                    
                    // Ajouter un écouteur d'événement de clic pour chaque <li>
                    li.addEventListener('click', function () {
                        // Afficher l'ustensile sélectionné dans "affichageChoix"
                        // affichageChoix.innerHTML = `${li.textContent} <span class="close">X</span>`;
                        affichageChoix.style.display = 'block';
                        ustensilesList.innerHTML = ''; // Vider la liste filtrée
                        attachCloseEventUstensiles(); // Attacher l'événement de la croix
                        console.log('Cross added: ', document.querySelector('#affichageChoixUstensiles .close')); // Debug : Vérifie si la croix est bien ajoutée
                    });

                    ustensilesList.appendChild(li);
                }
            }
        }
    } else {
        // Si le texte est inférieur à 1 lettre, on réinitialise la liste des ustensiles
        ustensilesList.innerHTML = ''; 
        alimenterUstensilesListe(); // Réinitialiser ou afficher la liste complète
    }
});

// Fonction pour attacher l'événement de fermeture sur la croix
function attachCloseEventUstensiles() {
    const closeBtn = document.querySelector('#affichageChoixUstensiles .close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            document.getElementById('affichageChoixUstensiles').style.display = 'none';
            document.getElementById('inputUstensiles').value = '';
        });
    }
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
        const presentation = document.createElement('div'); // je commence ici , je cree une div qui me permettra de fair ma mise en forme
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
            ingredientContainer.appendChild(ingredientTitle);// Ajouter les éléments à la div container
            ingredientContainer.appendChild(quantityTitle);     // Ajouter la div container à la div principale "tuvasyariver"
            presentation.appendChild(ingredientContainer);
        }
        containerCard.appendChild(sectionImage);     // Ajout des sous-divisions à la carte
        containerCard.appendChild(sectionRecettes);
        containerCard.appendChild(sectionIngredients);  // Ajout de la carte principale à la div cible
        targetDiv.appendChild(containerCard); // Incrémenter le compteur
        compteur++;
    }
    // Afficher le total des containerCard créés dans le span avec l'id "nbRecettes"
    const nbRecettesSpan = document.getElementById('nbRecettes');
    nbRecettesSpan.textContent = `${compteur} recettes `;// recettes de départ
}

//========================================================================================================
function afficherRecettesFiltrees(ingredients, appliance, ustensile) {
    console.log("afficherRecettesFiltrees", ingredients, appliance, ustensile);
    let compteur = 0;
    const targetDiv = document.getElementById('partieRecettes');
    targetDiv.innerHTML = '';  // Réinitialiser la div cible
    filteredRecipes = [];
    for (let i = 0; i < recipes.length; i++) {// Parcourir les recettes et appliquer les filtres
        const recipe = recipes[i];
        let matchIngredient=true; 
if(ingredients.length>0){
         matchIngredient = recipe.ingredients.some(ing => ingredients.includes(ing.ingredient.toLowerCase()));
        }
let matchAppliance =true; 
if(appliance.length>0){
 matchAppliance =  appliance.some(appl => recipe.appliance.toLowerCase()==appl.toLowerCase());
}

    let matchUstensile =true; 
    if(ustensile.length>0){

 matchUstensile = recipe.ustensils.some(ust => ustensile.includes(ust.toLowerCase()));
}   // Si la recette correspond aux critères
        // console.log(matchIngredient ,matchAppliance ,matchUstensile)
        if (matchIngredient && matchAppliance && matchUstensile) {
            // console.log(recipe);
filteredRecipes.push({
    ingredients: recipe.ingredients.map(ingredient => {
        // Si ingredient est un objet avec une propriété `ingredient`
        return typeof ingredient.ingredient === 'string' ? ingredient.ingredient.toLowerCase() : ingredient.ingredient;
    }),
    appliance: recipe.appliance.toLowerCase() 
    ,
    ustensils: recipe.ustensils.map(ustensil => {
        return typeof ustensil === 'string' ? ustensil.toLowerCase() : ustensil;
    })
});



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
            const presentation = document.createElement('div');
            presentation.className = 'presentationDiv';
            sectionIngredients.appendChild(presentation);
            // Ajout des ingrédients à la carte
            for (let j = 0; j < recipe.ingredients.length; j++) {
                const ingredient = recipe.ingredients[j];
                const ingredientContainer = document.createElement('div');
                ingredientContainer.className = 'ingredient-container';
                const ingredientTitle = document.createElement('h5');
                ingredientTitle.textContent = `${ingredient.ingredient}`;
                ingredientTitle.className = 'titleIngredient';
                const quantityTitle = document.createElement('h5');
                quantityTitle.className = 'titleQuantity';
                if (ingredient.quantity) {
                    quantityTitle.textContent = `${ingredient.quantity}`;
                    if (ingredient.unit) {
                        quantityTitle.textContent += ` ${ingredient.unit}`;
                    }
                } else {
                    quantityTitle.textContent = '---';
                }
                ingredientContainer.appendChild(ingredientTitle);
                ingredientContainer.appendChild(quantityTitle);
                presentation.appendChild(ingredientContainer);
            }
            // Ajouter les sous-divisions à la carte
            containerCard.appendChild(sectionImage);
            containerCard.appendChild(sectionRecettes);
            containerCard.appendChild(sectionIngredients);
            // Ajouter la carte principale à la div cible
            targetDiv.appendChild(containerCard);
            // Incrémenter le compteur
            compteur++;
        }
    }
    // Mettre à jour le compteur de recettes
    const nbRecettesSpan = document.getElementById('nbRecettes');
    nbRecettesSpan.textContent = `${compteur} recettes trouvées`;
    alimenterListesDeroulantes();
}




//=====================================================================================================================================================
//====================================================== APPELS DE FONCTIONS ==========================================================================
//=====================================================================================================================================================
// Appel de la fonction pour alimenter la liste des ingrédients
// alimenterIngredientsListe();
ParcourirTableauObjetsEnModeAffichageNavigateur();
// Appel des fonctions lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    // alimenterIngredients(); // Appeler la fonction après le chargement du DOM
    alimenterListesDeroulantes(); // Alimenter les listes avec les données
});