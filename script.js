const btnMobile = document.querySelector(".icone-menu");

function toogleMenu() {
    const nav = document.querySelector(".nav-menu")
    nav.classList.toggle("ativo");
}

btnMobile.addEventListener('click', toogleMenu)