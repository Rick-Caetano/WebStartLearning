// transformar notaas escolares

/*
Crie um algoritmo que transforme as notas do sistema numerico para o sistema de notas em caracteres do tipo ABC

* de 90 para cima - A
* entre 80 e 89 - b
* entre 70 e 79 - c
* entre 60 e 69 - d
* menor que 59 - e

*/

let currentGrade = 89
let noteB = currentGrade >= 80 && currentGrade <= 89
let noteC = currentGrade >= 70 && currentGrade <= 79
let noteA = currentGrade >= 90 && currentGrade <= 100
let noteD = currentGrade >= 60 && currentGrade <= 69
let noteE = currentGrade < 60 && currentGrade >= 0 


if (noteA) {
    currentGrade = 'A'
} else if (noteB) {
    currentGrade = 'B'
} else if (noteC) {
    currentGrade = 'C'
} else if (noteD) {
    currentGrade = 'D'
} else if (noteE) {
    currentGrade = 'E'
} else {
    currentGrade = null
    console.log('Nota não aceita')
}

console.log("Você tirou " + currentGrade)