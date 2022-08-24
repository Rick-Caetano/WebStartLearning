//https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Looping_code

//Procurando algo com JS

const button = document.querySelector('button')
const pragf = document.querySelector('p')
const name = document.querySelector('input')
const contact = 
['geisa: (31) 99292-2323', 
'augusto: (55) 92828-2852', 
'roberto: (32) 98772-2121', 
'felipe: (31) 94828-2142']

pragf.style.textTransform = 'lowercase'

button.addEventListener('click', function(){
    
    let contactName = ''
    let search = name.value
    for(let i =0; i< contact.length; i++){
        contactName = contact[i].split(':')
 
        if (search === contactName[0]){
            pragf.textContent = 'The tell number is: ' + contactName[1]
            break;
            
        } else {
            pragf.textContent = 'This contact not exist'
        }
    }
})