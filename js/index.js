import accordionInit from "./modulos/accordion.js";
import tabMenuInit from "./modulos/tabMenu.js";
import menuMobileInit from "./modulos/menuMobile.js";
import initModal from "./modulos/modal.js";

tabMenuInit()
accordionInit()
menuMobileInit()
initModal()

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