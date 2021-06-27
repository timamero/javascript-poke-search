const resultsContainer = document.createElement('div')
const backButton = document.createElement('button')
const resultsContent = document.createElement('div')
const noResults = document.createElement('p')
const pokemonName = document.createElement('h2')
const pokemonSprite = document.createElement('img')
const pokemonType = document.createElement('p')

resultsContainer.className = 'content hide-content'
resultsContent.className = 'results-content'
noResults.textContent = 'No data found'
backButton.textContent = 'Back to Search'
backButton.className = 'btn'

resultsContainer.appendChild(resultsContent)
resultsContainer.appendChild(backButton)

function showPokemon(name) {
    name = name.toLowerCase()
    let url = 'https://pokeapi.co/api/v2/pokemon/' + name + '/'
    fetch(url, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(response => {
        pokemonName.textContent = capitalizeFirstLetter(response.species.name)
        pokemonSprite.src = response.sprites.front_shiny
        pokemonType.textContent = capitalizeFirstLetter(response.types[0].type.name)

        resultsContent.appendChild(pokemonName)
        resultsContent.appendChild(pokemonSprite)
        resultsContent.appendChild(pokemonType)
    }, () => resultsContent.appendChild(noResults))
    .catch(error => console.log(error));
}

function capitalizeFirstLetter(string) {
    let stringArr = string.split('')
    let firstLetter = stringArr[0].toUpperCase()
    stringArr.splice(0, 1)
    stringArr.unshift(firstLetter)
    return stringArr.join('')
}

function resetResults() {
    pokemonName.textContent = ''
    if (resultsContent.contains(pokemonName)) {
        resultsContent.removeChild(pokemonName)
    resultsContent.removeChild(pokemonSprite)
    resultsContent.removeChild(pokemonType)
    } else {
        resultsContent.removeChild(noResults)
    }
}

export { resultsContainer, backButton, showPokemon, resetResults }