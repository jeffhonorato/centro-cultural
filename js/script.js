let time = 3000;
let imagemIndex = 0;
let imagens = document.querySelectorAll(".slider__img");
let maximoDeImagens = imagens.length;

const trocandoImagem = () => {

    imagens[imagemIndex].classList.remove("selected");
    imagemIndex++;

    if(imagemIndex >= maximoDeImagens) {
        imagemIndex = 0;
    }

    imagens[imagemIndex].classList.add("selected");
}

const start = () => {
    setInterval(() => {
        // Troca de Imagem
        trocandoImagem()
    }, time)
}

window.addEventListener("load", start)