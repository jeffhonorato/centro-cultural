const navBarOpen = () => {
    const iconeMenu = document.querySelector(".js__icone--menu");
    const nav = document.querySelector(".js__nav--itens");
    iconeMenu.addEventListener("click", () => {
        nav.classList.toggle("ativo")
    });
};

navBarOpen();