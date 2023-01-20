const projetoMusica = () => {
    const btnMusica = document.querySelector(".js-btn-musica");
    btnMusica.addEventListener("click", () => {
        const modalMusica = document.querySelector(".js-projeto-modal-musica")
        modalMusica.classList.add("ativo");
        const scroll = document.querySelector(".js-scroll");
            scroll.classList.add("off");
    });

    const bntFechar = document.querySelector(".js-btnFechar-musica");
        bntFechar.addEventListener("click", () => {
            const modalMusica = document.querySelector(".js-projeto-modal-musica")
            modalMusica.classList.remove("ativo")
            const scroll = document.querySelector(".js-scroll");
            scroll.classList.remove("off");
        });
   
}


projetoMusica();    