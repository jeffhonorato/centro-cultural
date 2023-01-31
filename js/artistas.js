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
        btnArte.forEach((btn) => {
            btn.addEventListener("click", () => {
                if(btn.innerText === "Musica") {
                    const conteudoArteMusica = document.querySelector(".js-artistas-musica");
                    conteudoArteMusica.classList.add("ativo");
                }
                
                
               
            });
        });
    console.log(btnArte)
    
}

    

modalArtista();
conteudoArteModal();