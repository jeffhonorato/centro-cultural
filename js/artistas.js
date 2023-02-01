/***** APARECER MODAL ******/
const modalArtista = () => {
    const btnModalArtista = document.querySelector(".js-btn-artistas");
        btnModalArtista.addEventListener("click", () => {   
            const modal = document.querySelector(".js-modal-artistas");
            modal.classList.add("ativo");
            const barraDeRolagem = document.querySelector(".js-scroll");
            barraDeRolagem.classList.add("off");
        });

    const btnFechaModal = document.querySelector(".js-btn-fechar");  
        btnFechaModal.addEventListener("click", () => {
            const modal = document.querySelector(".js-modal-artistas");
            modal.classList.remove("ativo");
            const barraDeRolagem = document.querySelector(".js-scroll");
            barraDeRolagem.classList.remove("off");
        });
};

/***** MODAL CATEGORIAS ******/
const conteudoArteModal = () => {
    const btnArte = document.querySelectorAll(".js-btn-arte");
    const conteudoArte = document.querySelectorAll(".artista__modal");
    conteudoArte[0].classList.add("ativo")
    
    btnArte.forEach((btn, index) => {
        btn.addEventListener("click", () => {   
            conteudoArte[0].classList.remove("ativo")  
            conteudoArte[index].classList.add("ativo");

        });       
    });




}

    

modalArtista();
conteudoArteModal();