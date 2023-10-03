export default function tabMenuInit() {

    const imagens = document.querySelectorAll('.js-imagens li');
    const textos = document.querySelectorAll('.js-conteudo section');

    imagens.forEach((imagem, indice) => {
        imagem.addEventListener('click', () => {
            ativarConteudo(indice);
        });
    });

    function ativarConteudo(indice) {
        textos.forEach((item) => {
            item.classList.remove('active');
        });
        textos[indice].classList.add('active');
    }
}