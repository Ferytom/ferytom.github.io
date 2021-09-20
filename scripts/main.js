const navbar = document.querySelector('.navbar')
const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav-links')
const navLinks = document.querySelectorAll('.nav-links li')

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active')

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        }
        else {
            link.style.animation = `navAnimation 0.5s ease forwards ${index / 7 + 0.5}s`
        }
    })

    burger.classList.toggle('toggle')
})

window.addEventListener('scroll', () => {
    const windowsPos = window.scrollY > 700

    navbar.classList.toggle('nav-scrolled', windowsPos)
})
