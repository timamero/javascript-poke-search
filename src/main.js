import { mainHeader } from "./modules/heading"
import { searchContainer, form, submitHandler, resetSearch, pokemonName} from "./modules/search";
import { resultsContainer, backButton, showPokemon, resetResults } from "./modules/results";


const rootElement = document.getElementById('root')
const container = document.createElement('div')

container.className = "container";

rootElement.appendChild(container)
container.appendChild(mainHeader)
container.appendChild(searchContainer)
container.appendChild(resultsContainer)

form.onsubmit = (event) => {
    submitHandler(event)
    showPokemon(pokemonName)
    switchDisplay(searchContainer, resultsContainer, container)
}

backButton.onclick = () => {
    switchDisplay(resultsContainer, searchContainer, container)
    resetSearch()
    resetResults()
}

function switchDisplay(currentContent, newContent) {
    currentContent.classList.toggle('hide-content')
    newContent.classList.toggle('hide-content')
}

resetSearch()