const element1 = document.querySelector('h1')
const element2 = document.querySelector('p')
const element3 = document.querySelector('input')

// ##HTML
//textContent -> Pega o conteudo do texto
element1.textContent += ', Sejam Bem Vindos'

//innerText -> troca o texto interno do html
element2.innerText = 'Olá caro DEV'

//innerHTML -> Aceita elementos html
element2.innerHTML += "<small>!!!<small>"

//value -> atribui valor a um input ou te passa um valor. Se ja existir um value, você pode captura-lo da também
element3.value = "coloque algo aqui"

//Manipulando atributos
element3.setAttribute('id', 'info') //Coloca um atributo no elemento HTML

const element3Id = document.querySelector('#info')

console.log(element3Id.getAttribute('id')) //Pega o atributo do elemento e mostra na tela

element3Id.removeAttribute('id') //Remove um atributo

// ## CSS
//style -> altera os estilos. É como colocar o css em linha nos documentos. Serve tanto para pegar quando para colocar estilos

const bgElement = document.querySelector('body')

bgElement.style.backgroundColor = 'lightblue' //coloca um estilo
console.log(bgElement.style.backgroundColor) // mostra um estilo

//alterando estilos
// classlist -> pega classes ja definidas em um documento css ou tag style e aplica. nesse caso o css em linha não é aplicado

element3.classList.add('active', 'fundo') //add adiciona as classes para o elemento

//element3.classList.remove('active') remove classes
element3.classList.toggle('green') //se a classe existir, ele tira. Se não existir ele adiciona. Só aceita um argumento
console.log(element3.classList)