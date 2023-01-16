const iconeMenu = document.querySelector(".js__icone--menu");
    iconeMenu.addEventListener("click", () => {
        const nav = document.querySelector(".js__nav--itens");
        nav.classList.toggle("ativo");
    });