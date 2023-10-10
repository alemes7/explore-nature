import accordionInit from "./modulos/accordion.js";
import tabMenuInit from "./modulos/tabMenu.js";
import menuMobileInit from "./modulos/menuMobile.js";

tabMenuInit()
accordionInit()
menuMobileInit()

const form = document.querySelector('.form')
const dados = {}

function pegarValorForm(event){
    dados[event.target.name] = event.target.value
    console.log(dados)
}

function mudarNomeBtn() {
    btn.innerText = 'Copiado'
    setTimeout(() => {
        btn.innerText = 'Copiar'
    }, 3000)
}
// esse é um evento que acontece em milisegundos, ou seja, 3 segundos

localStorage.setItem('nome', 'Rafael')
const nome = localStorage.getItem('nome')
console.log(nome)