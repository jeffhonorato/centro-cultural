const projetoMusica = () => {
    const btnMusica = document.querySelector(".js-btn-musica");
    btnMusica.addEventListener("click", () => {
        const modalMusica = document.querySelector(".js-projeto-modal-musica")
        modalMusica.classList.add("ativo");
        console.log(modalMusica)
    });

    const bntFechar = document.querySelector(".js-btnFechar-musica");
        bntFechar.addEventListener("click", () => {
            const modalMusica = document.querySelector(".js-projeto-modal-musica")
            modalMusica.classList.remove("ativo")
        });
   
}


projetoMusica();    