/*
Fluxo normal dos eventos:

Bubling -> O navegador verifica se o elemento que foi clicado realmente possui o evento, caso afirmativo ele o executa.
    - Em seguida ele passa para o próximo elemento ancestral (pai) imediato e faz a mesma coisa. Ou seja, vai subindo e executando...
    - O bubling também permite delegar eventos, ou seja, em uma 'UL' em vez de declararmos o evento ONCLICK para cada 'LI' podemos simplismente definir o evento no pai que é a propria UL e todos os filhos herdarão esse evento.
*/

const button = document.querySelector('button')
const videoBox = document.querySelector('div')
const video = document.querySelector('video')

function showVideo() {
    if(videoBox.getAttribute('class') === 'hidden'){
        videoBox.setAttribute('class','showing')
    }
}

button.addEventListener('click', showVideo)

videoBox.addEventListener('click', () => {
    videoBox.setAttribute('class','hidden')
    button.setAttribute('class','showing')
    video.pause()
})

video.addEventListener('click', (event) => {
    //stopProgation interrompe o fluxo normal do bubling
    event.stopPropagation() // sem esta linha, o navegador iria fechar o video mesmo que fosse apertado em cima dele para dar play, por causa do evento de click anterior
    video.play()
    button.setAttribute('class','hidden')
})