let menuButton = document.querySelector("#menu");
let menu = document.querySelector(".menu");

menuButton.addEventListener("click", function () {
    menu.classList.toggle("open");
});

const botoesTelaCheia = document.querySelectorAll('.botao-tela-cheia');
const iframes = document.querySelectorAll('iframe');

botoesTelaCheia.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        iframes[index].requestFullscreen();
    });
});