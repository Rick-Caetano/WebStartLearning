//http://devfuria.com.br/javascript/manipulando-checkboxes-com-javascript/

const div = document.querySelector('#main')
const list = document.querySelector('#list')
const bnt = document.querySelector('#addPeople')
const recusar = document.querySelector('#recusar')
const input = document.querySelector('input')
const adimitted = document.querySelector('#adimitted')
const refused = document.querySelector('#refused')
let people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce']
let peopleRefusedSaves = [] //salvara as pessoas recusadas para uso futuro
let info = document.createElement('div')
let count = 0
let cont = 0
let contador = 0

adimitted.textContent = 'Adimit: '
refused.textContent = 'refused: '
info.setAttribute('id', 'infoBox')

//adiciona os convidados e verifica a entrada dos inputs
bnt.addEventListener('click', function addGuests(){
    if (input.value == ''){
        infoBox('você deve digitar o nome do convidado')
        return
    }

    for (let names of people) {
        if(names == input.value){
            infoBox('Nomes repetidos não serão aceitos')
            return
        }
    }

    people.push(input.value)
    updateNameGuests()
    createGuestsList()
})

//menssagens de erro personalizadas
function infoBox(message){
    div.append(info)
    info.innerHTML = `<p>${message}</p>`
    info.style.opacity = 1
    setTimeout(() =>{
        info.style.opacity = 0
    }, 2000)
}

//atualiza o nome dos que foram convidados
function updateNameGuests(){

let refusedNames = ''
let peopleRefused = ['Phil', 'Lola']
//pequena função para remover espaços (devia ser global para uso em todo o codigo...)
let removeEspace = (type) => { 
    type.textContent = type.textContent.slice(0, type.textContent.length -2) + '' //Remove o ultimo espaço e a ultima virgula, não colocando nada depois
}

if(count == 0){
for(let i = 0; i < people.length; i++){
    adimitted.textContent += people[i] + ', '

    /* função desnecessariamente complicada e sem uso nesse caso
    refusedNames = people[i] == 'Phil' || people[i] == 'Lola'
    if(refusedNames){
        refused.textContent += people[i] + ', '
        }
    }
    for(let x=0;x<peopleRefused.length;x++){
        if(people[i] == peopleRefused[x]){
            refused.textContent += peopleRefused[x] + ', '
        }
    }
    removeEspace(refused) 
    */
}
    removeEspace(adimitted)
} else {
    let lastIndex = people.length - 1

    adimitted.textContent += ', ' + people[lastIndex] + ', '
    removeEspace(adimitted)
}  
    count++
}

//Cria a lista de convidados, setando as configurações da lista
function createGuestsList(){
if (cont == 0){
    for(let i = 0; i<people.length; i++){
        let nameCheck = document.createElement('input')
        let nameCheckLabel = document.createElement('label')

        nameCheck.setAttribute('type', 'checkbox')
        nameCheck.setAttribute('id', people[i])
        nameCheck.setAttribute('value', people[i])
        nameCheck.setAttribute('checked', true)
        nameCheck.setAttribute('style','height: 25px; width: 25px;')
        nameCheckLabel.setAttribute('for', people[i])
        nameCheckLabel.textContent = people[i]

        list.append(nameCheck)
        list.append(nameCheckLabel)
    }

} else{
    let nameCheck = document.createElement('input')
    let nameCheckLabel = document.createElement('label')
    let lastIndex = people.length - 1

    nameCheck.setAttribute('type', 'checkbox')
    nameCheck.setAttribute('id', people[lastIndex])
    nameCheck.setAttribute('value', people[lastIndex])
    nameCheck.setAttribute('checked', true)
    nameCheck.setAttribute('style','height: 25px; width: 25px;')
    nameCheckLabel.setAttribute('for', people[lastIndex])
    nameCheckLabel.textContent = people[lastIndex]

    list.append(nameCheck)
    list.append(nameCheckLabel)
    }
    cont++
}

//verfica se as caixas foram desmarcasdas ao clicar no butão
recusar.addEventListener('click', function checkGuests(){
    const paragrfTest = document.querySelector('#teste')
    for(let i =0; i<people.length; i++){
        let checkbox = document.querySelector(`#${people[i]}`)
        
        if(checkbox.checked == false){
            updateRefusedGuests(checkbox.value)
        }
    }
})

//coloca os convidados como recusados
function updateRefusedGuests(names){
    let peopleRefused = names

    refused.textContent += peopleRefused + ' '
    peopleRefusedSaves.push(peopleRefused)

   /* Pensamento desnecessariamente complicado
   if(contador == 0){
        for(let i = 0; i < people.length; i++){

            for(let x=0;x<peopleRefused.length;x++){
                if(people[i] == peopleRefused[x]){
                    refused.textContent += peopleRefused[x] + ', '
                    }
                }
        }
    } else{
        let lastIndex = peopleRefused.length - 1

        refused.textContent += peopleRefused[lastIndex]
    }

    contador++
    */
}