const cardMesJaneiro = () => {
    const cardMes = document.querySelector(".js-card-janeiro");
    cardMes.addEventListener("click", (e) => {
        const modalMes = document.querySelector(".js-modal-janeiro");
        modalMes.classList.add("ativo"); 
        e.stopPropagation();
    });
    console.log(cardMes);
}



cardMesJaneiro();