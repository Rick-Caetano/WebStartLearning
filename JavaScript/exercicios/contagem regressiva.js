//https://coderwall.com/p/_ppzrw/be-careful-with-settimeout-in-loops

const div = document.querySelector('div')
const bnt = document.querySelector('button')

bnt.addEventListener('click', function regressiveContage(){
    let count = 10
    const createNumber = document.createElement('p')
    let interval = setInterval(function(){
        
        createNumber.textContent = count--
        div.append(createNumber)
        
        if (count < 0){
            clearInterval(interval)
            document.body.style.backgroundImage = 'url(../Midias/moon.jpg)'
        }
    }, 1000)
   
})


/**
 ## Usar o setTimeout dentro de loops

 for(i = 1; i<=5;i++){
     setDelay(i)
 }

 function setDelay(i){
     setTimeout(function(){
         console.log(i)
     }, 1000);
 }
 */