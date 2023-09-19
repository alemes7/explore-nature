const imagens = document.querySelectorAll('.js-imagens li');
const textos = document.querySelectorAll('.js-conteudo section');

console.log(imagens);
console.log(textos);

function ativarConteudo(indice) {
    textos.forEach((item) => {
        item.classList.remove('active');
    })
    textos[indice].classList.add('active');
}