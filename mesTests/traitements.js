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

const affichage= document.getElementById("affichageDiv");
function verifierTailleChaine(inputValue) {
    if (inputValue.length >= 3) {
        console.log("Je suis à 3 lettres et +");
        // affichage.textContent="Je suis à 3 lettres et +";
    } else {
        console.log("Veuillez rajouter des lettres jusqu'à atteindre 3 lettres");
        affichage.textContent="Veuillez rajouter des lettres jusqu'à atteindre 3 lettres";
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('jeSuisUnInput');
    const searchButton = document.getElementById('search-button');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const resultContainer = document.getElementById('result-container');
    // Créer une nouvelle div pour afficher les résultats de la saisie instantanée
    const liveTypingDiv = document.getElementById("live-typing");

    // Fonction pour gérer la saisie instantanée dans l'input
    input.addEventListener('input', function() {
        const inputValue = input.value;
        verifierTailleChaine(inputValue); // Appeler la fonction de vérification
        // Afficher la valeur de l'input en temps réel dans la console
        console.log("Saisie en cours: " + inputValue);
        searchItems();

        // Afficher la valeur de l'input dans la nouvelle div
        liveTypingDiv.textContent = inputValue ? "Vous tapez : " + inputValue : "Vous n'avez rien saisi";  // Si rien n'est saisi, afficher un message par défaut
    });

    // Fonction pour chercher les 3 premiers caractères dans la liste des items
    function searchItems() {
        const inputValue = input.value.toLowerCase().trim();
        let found = false;

        if (inputValue.length >= 3) {
            for (let i = 0; i < dropdownItems.length; i++) {
                const itemValue = dropdownItems[i].textContent.toLowerCase();
                if (itemValue.startsWith(inputValue)) {
                    showResult(`Vous avez sélectionné : ${itemValue}`);
                    console.log(`Vous avez sélectionné : ${itemValue}`);
                    affichage.textContent=`Vous avez sélectionné : ${itemValue}`;
                    found = true;
                    break;
                }
            }

            if (!found) {
                showResult("J'ai pas trouvé, veuillez resaisir le mot clé", true);
                console.log("j'ai pas trouvé, veuillez saisir à nouveau le mot clé");
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
        closeButton.className = 'close';
        closeButton.onclick = function() {
            resultContainer.innerHTML = '';  // Fermer la div
            effacerInput();  // Effacer le contenu de l'input
        };
        resultDiv.appendChild(closeButton);

        if (isError) {
            const closeButton = document.createElement('span');
            closeButton.textContent = 'X';
            closeButton.className = 'close';
            closeButton.onclick = function() {
                resultContainer.innerHTML = '';  // Fermer la div
                effacerInput();  // Effacer le contenu de l'input
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

function effacerInput() {
    const monInput = document.getElementById("jeSuisUnInput");
    console.log("J'affiche la valeur de l'élément : " + monInput);
    console.log("J'affiche la valeur actuelle de l'input : " + monInput.value);
    monInput.value = "";  // Efface le contenu de l'input
}
