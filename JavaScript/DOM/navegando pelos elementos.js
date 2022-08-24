//Navegando pelos elementos

// ##Buscando elementos pais
//parentNode e parentElement -> Mostra o elemento pai de "h1"
const element1 = document.querySelector('h1')

console.log(element1.parentElement) //parentNode também nos trás o body
console.log(element1.parentElement)

// ##Buscando elementos filhos
/*childNodes -> pega os filhos e os coloca em uma nodelist, sendo possivel usar o forEach. No entanto conta os espaços vazios, considerando-os comote "text"
children -> Pega os filhps e os coloca em uma HTMLcolection. não se pode usar com forEach e não considera os espaços vazios*/
const el = document.querySelector('body')

console.log(el.childNodes)
console.log(el.children)

/*fistChild -> pega o primeiro filho de "body", conta espaços, se tiver, como "text"
textfirstEleementChild -> pega o primeiro filho de "body", não conta os espaços*/
console.log(el.firstChild)
console.log(el.firstElementChild)

/*lastChild -> pega o ultimo elemento de "body" e conta com espaços vazios 
lastElementChild -> pega o ultimo elemento de "body" e não conta com espaços vazios*/
console.log(el.lastChild)
console.log(el.lastElementChild)

// ##Buscando irmãos

/*nextSibling -> Pega o proximo irmão do elemento, considera espaços
nextElementSibling -> mesma coisa mas não considera espaços*/
const element2 = document.querySelector('body script')

console.log(element1.nextElementSibling)
console.log(element1.nextSibling) 

/* previousSibling -> Pega o irmão anterior do elemento, considera espaços
previousElementSibling -> Mesma coisa so que não considera espaços */
console.log(element2.previousSibling)
console.log(element2.previousElementSibling)