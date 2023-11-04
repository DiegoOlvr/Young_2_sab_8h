// PEGAR HORA
let data = new Date()
// let hora = data.getHours() // PEGA A HORA ATUAL
let hora = window.prompt('Que hora são???')


// IDENTIFICAR IMG E BODY
let msg = document.getElementById('msg')
let img = document.getElementById('foto')
let corpo = document.getElementsByTagName('body')

// IMAGENS
let manha = 'https://img.freepik.com/fotos-premium/sol-nascente-de-manha_5219-1507.jpg'
let tarde = 'https://media-cdn.tripadvisor.com/media/photo-s/19/72/a7/33/por-do-sol-na-praia-do.jpg'
let noite = 'https://i.pinimg.com/736x/2a/52/a3/2a52a39806e84a502db951cf9e0488d5.jpg'

msg.innerHTML = `Agora são exatamente ${hora} horas.`

// CONDIÇÃO 
if (hora >= 4 && hora < 12)
{
    corpo[0].style.background = '#ef9e2d'
    img.src = manha
}
else if (hora <= 18) {
    corpo[0].style.background = '#ee5412'
    img.src = tarde
}
else {
    corpo[0].style.background = '#002a36'
    img.src = noite
}