const preloadGif = document.querySelector('div')
const body = document.querySelector('body')
const img = document.querySelector('img')

//gera um numero inteiro aleatorio
function getRandomArbitrary(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min);
}

//configura o estilo do preload (evita repetição de codigo)
function preloadStyle(srcValue, color){
        img.setAttribute('src', srcValue)
        preloadGif.style.backgroundColor = color
}

//aplica um gif de acordo com o numero aleatorio
function randomPreload(){
    const valueRandom = getRandomArbitrary(1,5)

    if(valueRandom == 1){
        preloadStyle('../Midias/pixel art gorillaz.gif', '#5B8BA0')
    } else if(valueRandom == 2){
        preloadStyle('../Midias/pixel art adventure time.gif', '#A896A0')
    } else if(valueRandom == 3){
        preloadStyle('../Midias/pixel art star wars.gif', '#636363')
    } else if(valueRandom == 4){
        preloadStyle( '../Midias/pixel art cat.gif', '#ffe1e1')
    }

}

//chama o randomPreload
randomPreload()

// deixa invisivel o conteudo assim que excede o timeout
setTimeout(function(){
    preloadGif.classList.add('invisible')
}, 6000)


/* Outra solução -> nesse caso o tempo do gif e definido pelo tempo que levar para carregar toda a pagina

window.addEventListener('load',function(){
    preloadGif.classList.add('invisible')
})*/
