//https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals
const select = document.querySelector('select')
const caseSelect = document.querySelector('caseSelect')
const p = document.querySelector('p')
const conditionCase = document.querySelector('#case')

select.addEventListener('change', setWeather)


function setWeather(){
//Usando o if
    if(select.value == 'sunny'){
        p.textContent = 'the wheather in outherside is sunny'
    } else if (select.value == 'rainy'){
        p.textContent = 'the wheather in outherside is rainy'
    } else if(select.value == 'snowing'){
        p.textContent = 'the wheather in outherside is snowing'
    } else if(select.value == 'overcast'){
        p.textContent = 'the wheather in outherside is overcast'
    } else {
        p.textContent = '';
    }

    //Caso "Outher Universe" seja selecionado, então o if é executado
    if(conditionCase.checked){
        
//Usando o case
        switch (select.value) {
            case 'sunny':
                p.textContent = 'the wheather in outherside is sunny, the day it\'s very hot'              
                break;
            case 'rainy':
                p.textContent = 'the wheather in outherside is rainy'
                break;
            case 'snowing':
                p.textContent = 'the wheather in outherside is snowing, the day it\'s very cold'
                break;
            case 'overcast':
                p.textContent = 'the wheather in outherside is overcast'
                break;

            default:
                p.textContent = ''
                break;
         }
    }   

}

