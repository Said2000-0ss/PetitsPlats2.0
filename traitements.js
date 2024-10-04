import { recipes } from './recipes.js';
// import { recipes } from './recipesTriple.js';
// import { recipes } from './recipesTest.js';
//=====================================================================================================================================================
//============================================================ MES VARIABLES ==========================================================================
//=====================================================================================================================================================
//MES VARIABLES PARTIE IMAGE
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
// Sélectionne l'élément croix par son ID
const croix = document.getElementById('croix');
//MES VARIABLES PARTIE SELECT
let ingredientClike="";
let appareilClike="";
let ustensilesClike=""; 
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
    // rechercheViaGrandeBarre(searchValue); 
    // Si la chaîne contient 3 lettres ou plus, lance la recherche
    if (searchValue.length >= 3) {
        rechercheViaGrandeBarre(searchValue);  // Appelle la fonction de recherche
         // Mettre la croix en display: block si elle n'est pas visible
    croix.style.display = 'block';
    }else{
        ParcourirTableauObjetsEnModeAffichageNavigateur() // Cette fonction devra afficher toutes les recettes
        croix.style.display = 'none';
    }
    // searchInput.value = "";
}
// Ajout d'un événement 'click' au bouton
searchButton.addEventListener('click', function () {

    // handleSearch();
    const searchValue = searchInput.value;
    rechercheViaGrandeBarre(searchValue); 
    searchInput.value = "";
});
// Ajout d'un événement 'keydown' à l'input pour détecter la touche "Entrée"
searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        // handleSearch();
        const searchValue = searchInput.value;
        rechercheViaGrandeBarre(searchValue); 
        searchInput.value = "";
    }
});
// Sélectionne la barre de recherche par son ID
// const barreDeRecherche = document.getElementById('idDeTaBarreDeRecherche'); 

// Ajoute un événement input ou keyup sur la barre de recherche
searchInput.addEventListener('input', function() {
    // const mots = event.target.value; // Récupère la valeur saisie

    // // Si la chaîne contient 3 lettres ou plus, lance la recherche
    // if (mots.length >= 3) {
    //     rechercheViaGrandeBarre(mots);  // Appelle la fonction de recherche
    // }
    handleSearch();
});
//====================================================================================



// Ajoute un écouteur d'événements au clic sur la croix
croix.addEventListener('click', function() {
    // Efface la barre de recherche
    searchInput.value = '';

    // Réinitialise la page : tu peux appeler une fonction pour afficher toutes les recettes
    ParcourirTableauObjetsEnModeAffichageNavigateur() // Cette fonction devra afficher toutes les recettes

    // // Tu peux aussi effacer les résultats de recherche spécifiques si nécessaire
    // const targetDiv = document.getElementById('partieRecettes');
    // targetDiv.innerHTML = '';  // Réinitialise le contenu
    croix.style.display = 'none';
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

// Fonction générique pour gérer l'affichage des listes déroulantes et des chevrons
function toggleDropdown(contentId, chevronId) {
    const chevron = document.getElementById(chevronId);
    const content = document.getElementById(contentId);

    // Vérifie si l'élément est caché ou non
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden'); // Affiche le contenu
        chevron.classList.remove('fa-chevron-down');
        chevron.classList.add('fa-chevron-up');
    } else {
        content.classList.add('hidden'); // Cache le contenu
        chevron.classList.remove('fa-chevron-up');
        chevron.classList.add('fa-chevron-down');
        if (contentId=='appareils-list'){
            console.log("je suis passé par là et je compte vider la liste");
            const affichageChoixDiv= document.getElementById("affichageChoixAppareils");
            affichageChoixDiv.textContent="";
        }
        if (contentId=='ustensiles-list'){
            console.log("je suis passé par là et je compte vider la liste");
            const affichageChoixDiv= document.getElementById("affichageChoixUstensiles");
            affichageChoixDiv.textContent="";
        }
        
    }
}
// Attacher l'événement de clic à chaque chevron
document.getElementById('ingredients-container').addEventListener('click', function () {
    toggleDropdown('ingredients-content', 'ingredients-chevron');
    const affichageDiv= document.getElementById("affichageChoixIngredients");
    affichageDiv.textContent="";
});

document.getElementById('appareils-container').addEventListener('click', function () {
    toggleDropdown('appareils-list', 'appareils-chevron');
    
   
});

document.getElementById('ustensiles-container').addEventListener('click', function () {
    toggleDropdown('ustensiles-list', 'ustensiles-chevron');
});

//===============================================================================================================================
function rechercheViaGrandeBarre(mots) {
    // Transformer les mots en minuscules pour faire une recherche insensible à la casse
    const motsRecherche = mots.toLowerCase();
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
    nbRecettesSpan.textContent = `${compteur} recettes trouvées`;
}

//============================================================pppppppppppppppppppppp
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
//==============================================================
// function selectionByIngredient(ingredientClike) {
//     // Parcourir les recettes
//     recipes.forEach(recipe => {
//         // Vérifier si l'ingrédient choisi est présent dans la recette
//         let ingredientFound = recipe.ingredients.some(item => item.ingredient.toLowerCase() === ingredientClike.toLowerCase());
        
//         // Si l'ingrédient est trouvé, afficher l'appareil et les ustensiles
//         if (ingredientFound) {
//             console.log("Appareil associé :", recipe.appliance);
//             console.log("Ustensiles associés :", recipe.ustensils);
//         }
//     });
// }
// function selectionByIngredient(ingredientClike) {
//     // Vide les listes avant de les remplir
//     const appareilsList = document.getElementById('appareils-list');
//     const ustensilesList = document.getElementById('ustensiles-list');
    
//     appareilsList.innerHTML = ''; // Vider la liste des appareils
//     ustensilesList.innerHTML = ''; // Vider la liste des ustensiles

//     // Trouver la recette contenant l'ingrédient cliqué
//     const foundRecipes = recipes.filter(recipe => {
//         return recipe.ingredients.some(ingredientObj => 
//             ingredientObj.ingredient.toLowerCase() === ingredientClike.toLowerCase()
//         );
//     });

//     // Si des recettes ont été trouvées, on affiche les appareils et ustensiles liés
//     foundRecipes.forEach(recipe => {
//         console.log('Appareil:', recipe.appliance);
//         console.log('Ustensiles:', recipe.ustensils);

//         // Ajouter l'appareil à la liste des appareils
//         const appareilItem = document.createElement('li');
//         appareilItem.textContent = recipe.appliance;
//         appareilsList.appendChild(appareilItem);

//         // Ajouter les ustensiles à la liste des ustensiles
//         recipe.ustensils.forEach(ustensile => {
//             const ustensileItem = document.createElement('li');
//             ustensileItem.textContent = ustensile;
//             ustensilesList.appendChild(ustensileItem);
//         });
//     });
// }
function selectionByIngredient(ingredientClike) {
    // Vide les listes avant de les remplir
    const appareilsList = document.getElementById('appareils-list');
    const ustensilesList = document.getElementById('ustensiles-list');
    
    appareilsList.innerHTML = ''; // Vider la liste des appareils
    ustensilesList.innerHTML = ''; // Vider la liste des ustensiles

    // Crée des ensembles pour stocker les appareils et ustensiles sans doublons
    const uniqueAppliances = new Set();
    const uniqueUstensils = new Set();

    // Trouver les recettes contenant l'ingrédient cliqué
    const foundRecipes = recipes.filter(recipe => {
        return recipe.ingredients.some(ingredientObj => 
            ingredientObj.ingredient.toLowerCase() === ingredientClike.toLowerCase()
        );
    });

    // Si des recettes ont été trouvées, on ajoute les appareils et ustensiles aux ensembles
    foundRecipes.forEach(recipe => {
        console.log('Appareil:', recipe.appliance);
        console.log('Ustensiles:', recipe.ustensils);

        // Ajouter l'appareil à l'ensemble uniqueAppliances
        uniqueAppliances.add(recipe.appliance);

        // Ajouter chaque ustensile à l'ensemble uniqueUstensils
        recipe.ustensils.forEach(ustensile => {
            uniqueUstensils.add(ustensile);
        });
    });

    // Remplir la liste des appareils sans doublons
    uniqueAppliances.forEach(appliance => {
        const appareilItem = document.createElement('li');
        appareilItem.textContent = appliance;
        appareilItem.classList.add('dropdown-item');
        appareilsList.appendChild(appareilItem);
    });

    // Remplir la liste des ustensiles sans doublons
    uniqueUstensils.forEach(ustensile => {
        const ustensileItem = document.createElement('li');
        ustensileItem.textContent = ustensile;
        ustensileItem.classList.add('dropdown-item');
        ustensilesList.appendChild(ustensileItem);
    });
}

//==============================================================
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Sélectionner tous les éléments li dans la liste avec l'id "ingredients-list"
document.addEventListener('DOMContentLoaded', function() {
    const ingredientsList = document.getElementById('ingredients-list');

    ingredientsList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            const clickedText = event.target.textContent;
            console.log("Vous avez cliqué sur la liste ingredients :", clickedText);
             ingredientClike =clickedText;
             console.log("je suis la variable ingredientClike:  "+ingredientClike);
             selectionByIngredient(ingredientClike);
             afficherViaIngredient(ingredientClike);
             const affichageYellow= document.getElementById("affichageChoixIngredients");
             affichageYellow.textContent=ingredientClike+"ccc";//============================ c'est ici que je suis ===================================
        }
    });
});
// Sélectionner tous les éléments li dans la liste avec l'id "appareils-list"
document.addEventListener('DOMContentLoaded', function() {
    const appareilsList = document.getElementById('appareils-list');

    appareilsList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            const clickedText = event.target.textContent;
            
            console.log("Vous avez cliqué sur la liste appareils:", clickedText);
             appareilClike =clickedText;
             console.log("je suis la variable : appareilClike:  "+appareilClike);
             afficherViaAppareil(appareilClike)
             const affichageChoixDiv= document.getElementById("affichageChoixAppareils");
             affichageChoixDiv.textContent=appareilClike;
             selectByAppareils(appareilClike);
             afficherRecettesFiltrees(null, appareilClike, null);


        }
    });
});
// Sélectionner tous les éléments li dans la liste avec l'id "ustensiles-list"
document.addEventListener('DOMContentLoaded', function() {
    const ustensilsList = document.getElementById('ustensiles-list');

    ustensilsList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            const clickedText = event.target.textContent;
            
            ustensilesClike=clickedText;
             console.log("je suis la variable : ustensilesClike : "+ustensilesClike);
             afficherViaUstensiles(ustensilesClike); 
            console.log("Vous avez cliqué sur la liste ustensiles :", clickedText);
             const affichageChoixUstensiles=document.getElementById("affichageChoixUstensiles");
             selectByUstensiles(ustensilesClike);
             affichageChoixUstensiles.textContent=ustensilesClike;
             afficherRecettesFiltrees(null, null, ustensilesClike) ;
             
        }
    });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById('jeSuisUnInput').addEventListener('input', function () {
    const inputText = this.value.trim().toLowerCase();
    const affichageChoix = document.getElementById('affichageChoixIngredients');
    const ingredientsList = document.getElementById('ingredients-list'); // Assurez-vous que cette liste a le bon ID

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
                            affichageChoix.innerHTML = `A${li.textContent} <span class="close">X</span>`;
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
    }
});

// Fonction pour attacher l'événement de clic sur la croix
function attachCloseEvent() {
    const closeBtn = document.querySelector('#affichageChoixIngredients .close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            document.getElementById('affichageChoixIngredients').style.display = 'none'; // Cacher la div
            document.getElementById('jeSuisUnInput').value = ''; // Réinitialiser l'input
            displayFullIngredientsList(); // Réafficher l'intégralité de la liste des ingrédients
        });
    }
}

// Fonction pour réafficher l'intégralité de la liste des ingrédients
function displayFullIngredientsList() {
    const ingredientsList = document.getElementById('ingredients-list');
    ingredientsList.innerHTML = ''; // Vider d'abord la liste
    const uniqueIngredients = new Set();

    // Afficher tous les ingrédients à nouveau
    recipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredientObj => {
            if (!uniqueIngredients.has(ingredientObj.ingredient.toLowerCase())) {
                uniqueIngredients.add(ingredientObj.ingredient.toLowerCase());

                const li = document.createElement('li');
                li.textContent = ingredientObj.ingredient;

                // Ajouter un écouteur d'événement de clic pour chaque <li>
                li.addEventListener('click', function () {
                    affichageChoix.innerHTML = `B${li.textContent} <span class="close">X</span>`;
                    affichageChoix.style.display = 'block';
                    ingredientsList.innerHTML = ''; // Vider la liste
                    attachCloseEvent(); // Attacher l'événement de la croix
                });

                ingredientsList.appendChild(li);
            }
        });
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

//c'est ma nouvelle methode d'affichage 
function afficherViaIngredient(ingredient) {
    // Initialiser le compteur à 0
    let compteur = 0;
    // Sélectionner la div où les cartes seront ajoutées
    const targetDiv = document.getElementById('partieRecettes');

    // Réinitialiser la div cible pour effacer les anciennes cartes
    targetDiv.innerHTML = '';

    // Parcourir le tableau d'objets recipes
    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];

        // Vérifier si l'ingrédient est présent dans cette recette
        const ingredientsList = recipe.ingredients.map(ing => ing.ingredient.toLowerCase());
        if (!ingredientsList.includes(ingredient.toLowerCase())) {
            continue; // Sauter la recette si l'ingrédient n'est pas présent
        }

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

        // je commence ici , je cree une div qui me permettra de faire ma mise en forme
        const presentation = document.createElement('div');
        presentation.className = "presentationDiv";
        sectionIngredients.appendChild(presentation);

        // Parcourir les ingrédients de la recette
        for (let j = 0; j < recipe.ingredients.length; j++) {
            const ingredientObj = recipe.ingredients[j];

            // Créer une div pour chaque paire ingrédient + quantité
            const ingredientContainer = document.createElement('div');
            ingredientContainer.className = 'ingredient-container';
            const ingredientTitle = document.createElement('h5');
            ingredientTitle.textContent = `${ingredientObj.ingredient}`;
            ingredientTitle.className = 'titleIngredient';
            sectionIngredients.appendChild(ingredientTitle);
            const quantityTitle = document.createElement('h5');
            quantityTitle.className = 'titleQuantity';
            if (ingredientObj.quantity) {
                quantityTitle.textContent = `${ingredientObj.quantity}`;
                if (ingredientObj.unit) {
                    quantityTitle.textContent += ` ${ingredientObj.unit}`;
                }
            } else {
                quantityTitle.textContent = "---";
            }

            // Ajouter les éléments à la div container
            ingredientContainer.appendChild(ingredientTitle);
            ingredientContainer.appendChild(quantityTitle);
            // Ajouter la div container à la div principale "presentation"
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
function afficherViaAppareil(appliance) {
    // Initialiser le compteur à 0
    let compteur = 0;
    // Sélectionner la div où les cartes seront ajoutées
    const targetDiv = document.getElementById('partieRecettes');

    // Réinitialiser la div cible pour effacer les anciennes cartes
    targetDiv.innerHTML = '';

    // Parcourir le tableau d'objets recipes
    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];

        // Vérifier si l'appareil est présent dans cette recette
        if (recipe.appliance.toLowerCase() !== appliance.toLowerCase()) {
            continue; // Sauter la recette si l'appareil n'est pas présent
        }

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

        // je commence ici , je cree une div qui me permettra de faire ma mise en forme
        const presentation = document.createElement('div');
        presentation.className = "presentationDiv";
        sectionIngredients.appendChild(presentation);

        // Parcourir les ingrédients de la recette
        for (let j = 0; j < recipe.ingredients.length; j++) {
            const ingredientObj = recipe.ingredients[j];

            // Créer une div pour chaque paire ingrédient + quantité
            const ingredientContainer = document.createElement('div');
            ingredientContainer.className = 'ingredient-container';
            const ingredientTitle = document.createElement('h5');
            ingredientTitle.textContent = `${ingredientObj.ingredient}`;
            ingredientTitle.className = 'titleIngredient';
            sectionIngredients.appendChild(ingredientTitle);
            const quantityTitle = document.createElement('h5');
            quantityTitle.className = 'titleQuantity';
            if (ingredientObj.quantity) {
                quantityTitle.textContent = `${ingredientObj.quantity}`;
                if (ingredientObj.unit) {
                    quantityTitle.textContent += ` ${ingredientObj.unit}`;
                }
            } else {
                quantityTitle.textContent = "---";
            }

            // Ajouter les éléments à la div container
            ingredientContainer.appendChild(ingredientTitle);
            ingredientContainer.appendChild(quantityTitle);
            // Ajouter la div container à la div principale "presentation"
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
function afficherViaUstensiles(ustensile) {
    // Initialiser le compteur à 0
    let compteur = 0;
    // Sélectionner la div où les cartes seront ajoutées
    const targetDiv = document.getElementById('partieRecettes');

    // Réinitialiser la div cible pour effacer les anciennes cartes
    targetDiv.innerHTML = '';

    // Parcourir le tableau d'objets recipes
    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];

        // Vérifier si l'ustensile est présent dans cette recette
        if (!recipe.ustensils.map(u => u.toLowerCase()).includes(ustensile.toLowerCase())) {
            continue; // Sauter la recette si l'ustensile n'est pas présent
        }

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

        // je commence ici , je cree une div qui me permettra de faire ma mise en forme
        const presentation = document.createElement('div');
        presentation.className = "presentationDiv";
        sectionIngredients.appendChild(presentation);

        // Parcourir les ingrédients de la recette
        for (let j = 0; j < recipe.ingredients.length; j++) {
            const ingredientObj = recipe.ingredients[j];

            // Créer une div pour chaque paire ingrédient + quantité
            const ingredientContainer = document.createElement('div');
            ingredientContainer.className = 'ingredient-container';
            const ingredientTitle = document.createElement('h5');
            ingredientTitle.textContent = `${ingredientObj.ingredient}`;
            ingredientTitle.className = 'titleIngredient';
            sectionIngredients.appendChild(ingredientTitle);
            const quantityTitle = document.createElement('h5');
            quantityTitle.className = 'titleQuantity';
            if (ingredientObj.quantity) {
                quantityTitle.textContent = `${ingredientObj.quantity}`;
                if (ingredientObj.unit) {
                    quantityTitle.textContent += ` ${ingredientObj.unit}`;
                }
            } else {
                quantityTitle.textContent = "---";
            }

            // Ajouter les éléments à la div container
            ingredientContainer.appendChild(ingredientTitle);
            ingredientContainer.appendChild(quantityTitle);
            // Ajouter la div container à la div principale "presentation"
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

//========================================================================================================
//========================================================================================================

//========================================================================================================
//========================================================================================================
function afficherRecettesFiltrees(ingredients, appliance, ustensile) {
    let compteur = 0;
    const targetDiv = document.getElementById('partieRecettes');
    targetDiv.innerHTML = '';  // Réinitialiser la div cible

    // Parcourir les recettes et appliquer les filtres
    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];

        // Vérification des conditions
        const matchIngredient = !ingredients || recipe.ingredients.some(ing => ing.ingredient.toLowerCase() === ingredients.toLowerCase());
        const matchAppliance = !appliance || recipe.appliance.toLowerCase() === appliance.toLowerCase();
        const matchUstensile = !ustensile || recipe.ustensils.includes(ustensile.toLowerCase());

        // Si la recette correspond aux critères
        if (matchIngredient && matchAppliance && matchUstensile) {
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
    nbRecettesSpan.textContent = `${compteur} recettes trouvées`;
}


//========================================================================================================
function selectByAppareils(appareilClick) {
    // Vide les listes avant de les remplir
    const ingredientsList = document.getElementById('ingredients-list');
    const ustensilesList = document.getElementById('ustensiles-list');

    ingredientsList.innerHTML = ''; // Vider la liste des ingrédients
    ustensilesList.innerHTML = ''; // Vider la liste des ustensiles

    // Crée des ensembles pour stocker les ingrédients et ustensiles sans doublons
    const uniqueIngredients = new Set();
    const uniqueUstensils = new Set();

    // Trouver les recettes contenant l'appareil cliqué
    const foundRecipes = recipes.filter(recipe => {
        return recipe.appliance.toLowerCase() === appareilClick.toLowerCase();
    });

    // Si des recettes ont été trouvées, on ajoute les ingrédients et ustensiles aux ensembles
    foundRecipes.forEach(recipe => {
        // Ajouter chaque ingrédient à l'ensemble uniqueIngredients
        recipe.ingredients.forEach(ingredientObj => {
            uniqueIngredients.add(ingredientObj.ingredient);
        });

        // Ajouter chaque ustensile à l'ensemble uniqueUstensils
        recipe.ustensils.forEach(ustensile => {
            uniqueUstensils.add(ustensile);
        });
    });

    // Remplir la liste des ingrédients sans doublons
    uniqueIngredients.forEach(ingredient => {
        const ingredientItem = document.createElement('li');
        ingredientItem.textContent = ingredient;
        ingredientItem.classList.add('dropdown-item');
        ingredientsList.appendChild(ingredientItem);
    });

    // Remplir la liste des ustensiles sans doublons
    uniqueUstensils.forEach(ustensile => {
        const ustensileItem = document.createElement('li');
        ustensileItem.textContent = ustensile;
        ustensileItem.classList.add('dropdown-item');
        ustensilesList.appendChild(ustensileItem);
    });
}
function selectByUstensiles(ustensileClick) {
    // Vide les listes avant de les remplir
    const ingredientsList = document.getElementById('ingredients-list');
    const appareilsList = document.getElementById('appareils-list');

    ingredientsList.innerHTML = ''; // Vider la liste des ingrédients
    appareilsList.innerHTML = ''; // Vider la liste des appareils

    // Crée des ensembles pour stocker les ingrédients et appareils sans doublons
    const uniqueIngredients = new Set();
    const uniqueAppliances = new Set();

    // Trouver les recettes contenant l'ustensile cliqué
    const foundRecipes = recipes.filter(recipe => {
        return recipe.ustensils.includes(ustensileClick.toLowerCase());
    });

    // Si des recettes ont été trouvées, on ajoute les ingrédients et appareils aux ensembles
    foundRecipes.forEach(recipe => {
        // Ajouter chaque ingrédient à l'ensemble uniqueIngredients
        recipe.ingredients.forEach(ingredientObj => {
            uniqueIngredients.add(ingredientObj.ingredient);
        });

        // Ajouter l'appareil à l'ensemble uniqueAppliances
        uniqueAppliances.add(recipe.appliance);
    });

    // Remplir la liste des ingrédients sans doublons
    uniqueIngredients.forEach(ingredient => {
        const ingredientItem = document.createElement('li');
        ingredientItem.textContent = ingredient;
        ingredientItem.classList.add('dropdown-item');
        ingredientsList.appendChild(ingredientItem);
    });

    // Remplir la liste des appareils sans doublons
    uniqueAppliances.forEach(appareil => {
        const appareilItem = document.createElement('li');
        appareilItem.textContent = appareil;
        appareilItem.classList.add('dropdown-item');
        appareilsList.appendChild(appareilItem);
    });
}

//========================================================================================================
// afficherRecettesFiltrees('poulet', 'four', 'spatule');  // Filtre par les trois paramètres
// afficherRecettesFiltrees('poulet', null, 'spatule');    // Filtre par ingrédient et ustensile
// afficherRecettesFiltrees(null, 'four', null);           // Filtre uniquement par appareil



//======================================================== c'est ici que je viens d'insérer le code ==================================================

//======================================================== c'est ici que le code vient de s'arreter ===================================================

//=====================================================================================================================================================
//====================================================== APPELS DE FONCTIONS ==========================================================================
//=====================================================================================================================================================
// Appel de la fonction pour alimenter la liste des ingrédients
alimenterIngredientsListe();
ParcourirTableauObjetsEnModeAffichageNavigateur();
// Appel des fonctions lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    // alimenterIngredients(); // Appeler la fonction après le chargement du DOM
    alimenterListesDeroulantes(); // Alimenter les listes avec les données
});