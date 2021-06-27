const mainHeader = document.createElement('h1')

function randomColor() {
    const colors = ['#9097C0', '#9abf8f', '#BF9A8F' , '#BF8FB6']
    return colors[Math.floor(Math.random() * colors.length)]
}

mainHeader.textContent = 'Poke-Search'
mainHeader.style.color = randomColor()

export { mainHeader };