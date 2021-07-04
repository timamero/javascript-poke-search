const searchContainer = document.createElement('div')
searchContainer.className = ('content')


const form = document.createElement('form')
const fieldWrapper = document.createElement('div')
const label = document.createElement('label')
const input = document.createElement('input')
const button = document.createElement('button')
form.className = 'form'
fieldWrapper.className = 'field-wrapper'
label.setAttribute('for', 'pokemonName')
label.textContent = 'Enter Pokemon Name';
input.setAttribute('id', 'pokemonName')
button.className = 'btn'
button.setAttribute('type', 'submit')
button.textContent = 'Get Information!'

form.appendChild(fieldWrapper)
fieldWrapper.appendChild(label)
fieldWrapper.append(input)
form.append(button)
searchContainer.appendChild(form)

let pokemonName = ''
const submitHandler = (event) => {
    event.preventDefault()
    pokemonName = event.target.elements.pokemonName.value
}

function resetSearch() {
    input.value = ''
    input.focus()
}

export { searchContainer, form, submitHandler, resetSearch, pokemonName}