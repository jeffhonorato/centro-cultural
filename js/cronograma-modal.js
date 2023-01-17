const cardMesJaneiro = () => {

    const cardMes = document.querySelector(".js-card-janeiro");
    cardMes.addEventListener("click", (e) => {
        const modalMes = document.querySelector(".js-modal-janeiro");
        modalMes.classList.add("ativo"); 
        e.stopPropagation();
    });

    const btnFechar = document.querySelector(".js-btnFechar-modal-janeiro");
        btnFechar.addEventListener("click", () => {
            const modalMes = document.querySelector(".js-modal-janeiro");
            modalMes.classList.remove("ativo");  
        });
    
    
}



cardMesJaneiro();