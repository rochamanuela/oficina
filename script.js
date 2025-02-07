const container = document.getElementById("template-container")
const isDesktop = window.innerWidth >= 768

if (isDesktop) {
    container.innerHTML = `<h1>Template Desktop</h1>`
} else {
    container.innerHTML = `<h1>Template Mobile</h1>`
}

// Atualizar ao redimensionar
window.addEventListener("resize", () => {
    const newIsDesktop = window.innerWidth >= 768
    if (newIsDesktop !== isDesktop) {
        container.innerHTML = newIsDesktop
            ? `<h1>Template Desktop</h1>`
            : `<h1>Template Mobile</h1>`
    }
})
