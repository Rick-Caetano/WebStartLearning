// ## Estruturas de repetição

//for
/* 
    Interessante usamos quando já sabemos quando deve parar
      * Controle
        // break - para a execução do loop
        // continue - pula a repetição do momento
*/

for (let i = 10; i > 0; i--) {
    

    if (i === 5 || i === 7) {
        continue;
    }

    console.log(i)

    if (i === 2) {
        break;
    }
}

// while
/*
    Interessante usarmos quando não sabemos o momento da parada
*/

let i = 373586
while(i > 10){
    console.log(i)

    i /= 10
}

//for...of

let name = 'rick'
let names = ['João', 'Paulo', 'sasha']

for(let char of name){ //para variaveis
    console.log(char) //soletra o nome, pois o char so armazena uma letra
}

for(let name of names) { // o name de dentro desse escopo é diferente do name de fora do escopo
    console.log(name) // escreve na tela os elementos do array
}

// for... in

let person = {
    name: 'cesar',
    idade: 18,
    weight: 88.6
}

for(let property in person) {
    console.log(`${property}: ${person[property]}`) // property acessa apenas o nome das propriedades, quando colocamos person[property], o property é convertido nos valores da propriedade e não no nome
}