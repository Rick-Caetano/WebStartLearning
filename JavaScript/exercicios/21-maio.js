//pesquisar referencia do MDN

/*
A ideia é de uma função que lê uma string contendo uma serie de produtos separados por virgulas. Esses produtos devem ser colocados em um array e depois lido, um por um. */
let Phrase = "Arroz, feijão, alface, tomate"

let repeat = (itens) => {
    list = itens.split(",")
    for (let item of list) {
        console.log(item)
    }
}

repeat(Phrase)

