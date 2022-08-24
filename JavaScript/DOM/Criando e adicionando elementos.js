// Criando e adicionando elementos 
const body = document.querySelector('body')
const script = body.querySelector('input') // Pega o script dentro de body

// createElement
const newdiv = document.createElement('div'); //guarda o elemento, que está vazio, criado na const
newdiv.innerText = 'Olá Devs!'

// append -> adiciona algo depois do body. No caso do "body" adiciona ao final do ultimo elemento dentro de body
// prepend -> adiciona algo depois de body.
body.append(newdiv) 

// insertBefore -> insere um elemento antes de outro, deve ser declarados dois valores. Com ele é possivel colocar elementos no meio

body.insertBefore(newdiv, script)