export default function initModal() {
    const modal = document.querySelector('.modal');
    const form = document.querySelector('.modal-forms');
    const dados = {};

    function openModal() {
        modal.classList.add('active');
    }

    function closeModal() {
        modal.classList.remove('active');
    }

    function pegarValorForm(event) {
        dados[event.target.name] = event.target.value;
        console.log(dados);
    }

    form.addEventListener('change', pegarValorForm);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        localStorage.setItem('userEmail', dados.email); // Salve o email no localStorage
        alert("Dados salvos com sucesso");
        closeModal();
    });

    // Verifique se o email já está no localStorage
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
        closeModal(); // Se o email já estiver no localStorage, feche a modal.
    } else {
        openModal(); // Caso contrário, abra a modal.
    }
}

// Chama a função initModal() quando a página for carregada.
initModal();
