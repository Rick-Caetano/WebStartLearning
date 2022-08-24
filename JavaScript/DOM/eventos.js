
//onkeyup -> toda vez que segura a teclata
//onkeydown -> toda vez que aperta a tecla
//onkeypress ->  quase a mesma coisa que a onkeydown
const input = document.querySelector('input')
const h1 = document.querySelector('h1')

input.onkeydown = function() {
    console.log('a tecla que foi apertada é: ')
}

//addEventListner() -> ouve os eventos e recebe dois argumentos. Primeiro o tipo do evento e depois a função que ele vai executar. Poder empilhar funcionalidades

h1.addEventListener('click', print) //apenas chama a função como atalho sem executar

function print(){
    console.log('print')
}

h1.addEventListener('click', function(){
    console.log('Outro assunto')
})

//h1.onclick = print -> É uma alternativa para addEventListner. Dessa forma não podemos empilhar as funções. 

// Event -> É Argumento que amplia funcionalidades, usando apennas console.log('event'), podemos ver o prototype e quais as opções de uso para ele, como "key" por exemplo

input.onkeyup = function(event) {
    console.log(event.key)
    console.log(event.currentTarget.value) // mostra o valor do input, juntando todas as entradas anteriores
}