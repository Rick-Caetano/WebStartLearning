/*
Execute esse codigo no console do google chrome
 */

// getElementById -> seleciona um elemento especifico. Retorna um elemento
const element1 = document.getElementById('blog-title')
console.log(element1)

// getElementByClassName() -> seleciona varios elementos que pertencem a classe. Devolve um html colection, não permite forEach
const element2 = document.getElementsByClassName('titles')
console.log(element2)

// getElementsByTagName() -> Seleciona varios elementos com uma mesma tag e salva em uma coleção de dados. Devolve um html colection, não permite forEach
const element3 = document.getElementsByTagName('meta')
console.log(element3)

// querySelector() -> aceita classes, id, ou tags, assim como declariamos no css. Pega o primeiro que acha. Retorna um elemento

const element4 = document.querySelector('h1')
console.log(element4)

// querySelectorAll() -> Faz uma coleção de nós e seleciona mais de um elemento, tem a vantagem entre os outros de poder aplicar o forEach

const element5 = document.querySelectorAll('.titles')

element5.forEach(el => console.log(el))