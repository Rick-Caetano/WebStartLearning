/*
 ## Type conversion (typecasting) vs type coersion
    
    São alterações de um tipo de dados para outro tipo
    
    A conversion é feita pelo programador quando deseja coververter algum tipo de dado

    A coersion é feita pelo JS quando é necessario converter um tipo de dados para não dar erro...
 */

// ##Coersion

    console.log('9' + 5) //String + number, ele vai converter o number em string e concatenar

// ##Conversion
    console.log(Number('9') + 5) //transformamos a string em number para fazer a soma

// ##Manipulando string e numeros

    //casas decimais (toFixed())

     //toFixed() é atrelado ao objeto number, e quando uma função é atrelado a um objeto, chamamos de metodo
    let numeroQuebrado = 2822628.29722
    console.log(numeroQuebrado.toFixed(2).replace(".",",")) // Esse let que era number se tranforma em uma string, pois não há "," em numbers para o JS

    // Letras maisculas ou minusculas

    let word = "Um Textinho Basico"
    console.log(word.toLowerCase(),word.toUpperCase())

    // Encontrar palavras
    console.log(word.includes("amor")) // é case sensitive 
    console.log(word.includes("Um"))

    // Separar strings
    let phraseArray = word.split(" ") // separa as palavras sempre que encontra espaços e coloca em um array

    let phraseArrayUnderscore = phraseArray.join("_") // Junta o array com underscore, transforma array em string

    console.log(phraseArrayUnderscore)

// ## Manipulando Arrays

    // Array com construtor

    let myArray = new Array('a', 'b', 'c')
    console.log(myArray)

    // Tranforma cadeia de caracteres em elementos de um array

    console.log(Array.from(word)) // cada letra (inclusive espaços) assume uma posição no array

     // Varias Manipulações usuais Arrays

     let techs = ["html", "css", "js"]

     techs.push("nodejs") // adiciona um item no fim
     techs.unshift("sql") // Adiciona um item no começo
     techs.pop() // remove um item do fim
     techs.shift() // remove um item do começo

     console.log(techs.slice(1, 3)) // Pega os elementos dentro do intervalo, nesse caso vai do elemento 1 ate o 3, ou seja "css" e "js". Não modifica o array

     techs.splice(1, 1)// remove elementos, o primeiro argumento se refere a posição do elemento no caso "css" e o segundo argumento a quatidade de itens que será tirado em seguida nesse caso apenas um, ou seja, só "css" mesmo. Modifica o array
     console.log(techs) 

    let index = techs.indexOf(" js") // Pesquisa qual o index do elemento (index de...)

    console.log(index)

    techs.splice(index, 1) // o index contem o numero do elemento dentro do array salvo, logo ele vai passar para o splice o index correto para remover esse elemento dorray

    console.log(techs)



