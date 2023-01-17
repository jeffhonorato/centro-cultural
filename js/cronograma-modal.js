const cardMesJaneiro = () => {
    const cardMes = document.querySelector(".js-card-janeiro");
    cardMes.addEventListener("click", () => {
        const modalMes = document.querySelector(".js-modal-janeiro");
        modalMes.classList.add("ativo");
        
    });
    console.log(cardMes)
}



cardMesJaneiro();