const cheio = document.querySelector('#cheio');
const beber = document.querySelector('#beber');
const copo = document.querySelector('#copo')
const msg = document.querySelector('.msg')
const tava = document.querySelector('#tava')
const seboso = document.querySelector('#seboso')
const buttons = document.querySelector('.buttons')
const dudu1 = document.querySelector('.dudu1')
const dudu2 = document.querySelector('.dudu2')
const voltar = document.querySelector('.voltar')

function cafeCheio() {
    copo.src = 'img/cafe-cheio.png'
    beber.style.display = "block"
    cheio.style.display = "none"
}
function beberCafe() {
    copo.classList.add('.msg')
    msg.style.display = "flex"
    copo.style.display = "none"
    buttons.style.display = "none"
}

function tavaGostoso() {
    dudu1.style.display = "block"
    msg.style.display = "none"

}
function tavaSeboso() {
    dudu2.style.display = "block"
    msg.style.display = "none"
}

cheio.addEventListener('click', cafeCheio);
beber.addEventListener('click', beberCafe);
tava.addEventListener('click', tavaGostoso);
seboso.addEventListener('click', tavaSeboso);
