const response = document.querySelector('#response p:first-child')
const butao = document.querySelector('button')
const question = document.querySelector('input')
const divResponses = document.querySelector('#response')
const divMessage = document.querySelector('.message')
const possibleResponses = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]
butao.addEventListener('click', randomResponse)

function randomResponse(){
  let random = Math.floor(Math.random() * possibleResponses.length)
  const questionSave = '<p>' + question.value + '</p>'
  const seerAnswer = '<p id="seerAnswer">' + possibleResponses[random] + '</p>'
  //const textBallon = '<img src="">'

  if(question.value == ''){
    divMessage.style.display = 'block'
    setTimeout(function (){
      divMessage.style.display = 'none'
    }, 5000)

    return; //sai de funções (possivelmente retorna um valor nulo)
  }

  question.focus()
  butao.setAttribute('disabled', true)
  divResponses.innerHTML = questionSave + seerAnswer
  divResponses.style.opacity = 1;

  setTimeout(function (){
    divResponses.style.opacity = 0;
    butao.removeAttribute('disabled') //deve ser colocado dentro de "setTimeout",pois ai ele esperá o tempo definido para ser desativado. Agora se o colocarmos dentro da função apenas, ele terá um efeito imediato e não funcionara da forma que queremos.
  }, 3500)
  
}