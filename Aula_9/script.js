const corpo = document.getElementsByTagName('body')
const div = document.getElementById('area')


div.addEventListener('click', clicar)
div.addEventListener('mouseenter', entrar)
div.addEventListener('mouseout', sair)

function clicar() {
    div.innerText = 'Clicou!'
    div.style.background = 'green'

}

function entrar() {
    div.innerText = 'Entrou!'
    div.style.background = 'blue'

}

function sair() {
    div.innerText = 'Saiu...'
    div.style.backgroundColor = 'red'
    div.style.fontSize = '60px'
}