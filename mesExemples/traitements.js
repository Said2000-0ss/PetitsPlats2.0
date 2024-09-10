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