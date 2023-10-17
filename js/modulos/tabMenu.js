// Exporta a função como padrão para que ela possa ser importada em outros arquivos
export default function tabMenuInit() {
    // Seleciona todas as imagens em uma lista de elementos
    const imagens = document.querySelectorAll('.js-imagens li');
    
    // Seleciona todas as seções de conteúdo em uma lista de elementos
    const textos = document.querySelectorAll('.js-conteudo section');

    // Adiciona um ouvinte de evento de clique a cada imagem
    imagens.forEach((imagem, indice) => {
        imagem.addEventListener('click', () => {
            ativarConteudo(indice);
        });
    });

    // Define uma função chamada ativarConteudo que mostra o conteúdo associado ao índice
    function ativarConteudo(indice) {
        // Remove a classe 'active' de todas as seções de conteúdo
        textos.forEach((item) => {
            item.classList.remove('active');
        });
        
        // Adiciona a classe 'active' à seção de conteúdo correspondente ao índice fornecido
        textos[indice].classList.add('active');
    }
}
