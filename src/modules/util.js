function switchDisplay(currentContent, newContent) {
    console.log('switching to ', newContent)
    currentContent.classList.toggle('hide-content')
    newContent.classList.toggle('hide-content')
}

export { switchDisplay };