export default function initModal() {

    // Seleciona o elemento de modal.
    const modal = document.querySelector(".js-modal");

    // Cria um objeto vazio para armazenar os dados do formulário.
    const dados = {};

    // Verifica se o email está armazenado no localStorage; se não estiver, exibe o modal.
    if (localStorage.getItem("email") === null) {
        modal.classList.add("active");
    } else {
        modal.classList.remove("active");
    }

    // Função para coletar os valores dos campos do formulário quando eles mudam.
    function pegarValorForm(event) {
        dados[event.target.name] = event.target.value;
        console.log(dados);
    }

    // Adiciona um ouvinte de mudança (change) para coletar valores do formulário quando eles mudam.
    modal.addEventListener('change', pegarValorForm);

    // Adiciona um ouvinte de envio de formulário para salvar os dados no localStorage e fechar o modal.
    document.querySelector(".modal-forms").addEventListener("submit", (event) => {
        event.preventDefault();
        localStorage.setItem("email", JSON.stringify(dados.email));
        alert("Dados salvos com sucesso");
        modal.classList.remove("active");
    });

    // Adiciona um ouvinte de clique para fechar o modal.
    document.querySelector(".modal-close").addEventListener("click", () => {
        modal.classList.remove("active");
    });

    // Se o email não estiver no localStorage, exibe o modal após 3 segundos.
    if (localStorage.getItem("email") === null) {
        setTimeout(() => {
            modal.classList.add("active");
        }, 3000);
    }
}