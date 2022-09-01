function random(number) {
    return Math.floor(Math.random()*number);
  }

function bgChange(event) {
    const rndColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`
    /*as duas linhas abaixo devem ser colocadas fora da função para funcionar com varios objetos
    event.target.style.background = rndColor //target é o proprio objeto que esta sendo clicado
    console.log(event) */
    return rndColor
  }

//criamos uma div que abriga as outras divs para não precisar usar loops
const container = document.querySelector('#container')

//reduzimos tudo a uma linha e colocando a linha do 'event' fora da function podemos aplicar em todas as divs dentro de #container
container.addEventListener('click', event => event.target.style.backgroundColor = bgChange())

/* let boxs = document.querySelectorAll('div')

for (let i = 0; i < boxs.length; i++) {
    boxs[i].onclick = function(event){
        event.target.style.backgroundColor = bgChange()
    }
    
}*/