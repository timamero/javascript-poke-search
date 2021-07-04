import { switchDisplay } from "./modules/util";
import { mainHeader } from "./modules/heading"
import { searchContainer, form, submitHandler, resetSearch, pokemonName} from "./modules/search";
import { resultsContainer, backButton, showPokemon, resetResults, loadingContainer } from "./modules/results";


const rootElement = document.getElementById('root')
const container = document.createElement('div')

container.className = "container";

rootElement.appendChild(container)
container.appendChild(mainHeader)
container.appendChild(searchContainer)
container.appendChild(resultsContainer)
container.appendChild(loadingContainer)

console.log('appended children')

form.onsubmit = (event) => {
    console.log('start onsubmit event')
    submitHandler(event) 
    showPokemon(pokemonName)
}

backButton.onclick = () => {
    switchDisplay(resultsContainer, searchContainer)
    resetSearch()
    resetResults()
}

resetSearch()

export {container};