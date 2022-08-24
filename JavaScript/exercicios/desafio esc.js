const button = document.querySelector('button')
const div = button.nextElementSibling

button.addEventListener('click', floatWindon)

function floatWindon(){
    div.classList.remove('invisible')
}

document.onkeydown = function(event){
    if(event.key === 'Escape'){
        div.classList.add('invisible')
    }
}

/* Outra solução

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'

    if(isEscKey){
        div.classList.add('invisible')
    }
}
) 

*/