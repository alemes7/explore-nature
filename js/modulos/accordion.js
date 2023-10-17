// Exporta a função como padrão para que ela possa ser importada em outros arquivos
export default function accordionInit() {
    // Seleciona todos os elementos com a classe "faq" e armazena em uma NodeList
    const faqs = document.querySelectorAll(".faq");

    // Itera sobre cada elemento da NodeList
    faqs.forEach(faq => {
        // Adiciona um ouvinte de evento de clique a cada elemento "faq"
        faq.addEventListener("click", () => {
            // Verifica se o elemento "faq" atual possui a classe "active"
            if (faq.classList.contains("active")) {
                // Se tiver a classe "active", remove-a, ocultando o conteúdo associado
                faq.classList.remove("active");
            } else {
                // Se não tiver a classe "active", remove a classe de todos os outros elementos "faq"
                faqs.forEach(otherFaq => otherFaq.classList.remove("active"));
                // Em seguida, adiciona a classe "active" apenas ao elemento "faq" clicado, exibindo seu conteúdo
                faq.classList.add("active");
            }
        });
    });
}
