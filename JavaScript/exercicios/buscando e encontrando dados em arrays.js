/* Buseado no Array de livros por categoria abaixo, faça os seguintes desafios

    * Contar o número de categoria e o número de livros em cada categoria 
    * Contar o número de autores
    * Mostrar livros do autor augusto Cury
    * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor
*/

const booksByCategory = [ // o primeiro array junta varias categorias
    { // esse objeto junta varias informações sobre uma categoria
        category: "Riqueza",
        books: [ // esse array junta varios livros da categoria
         { // cada um desses objetos representa um livro
            title: "Os segredos da mente milionaria",
            author: "T. Harv Eker",
         },
         {
            title: "O homem mais rico da babilonia",
            author: "George S. Clason",
         },
         {
            title: "Pai rico, pai pobre",
            author: "Robert T. Kiyosaki e Sharon L. Lechter"
         },
        ],
    },
    {
        category: "Inteligência emocional",
        books: [
         {
            title: "Você é insubstituível",
            author: "Augusto Cury"
         },
         {
             title: "Ansiedade - Como enfrentar o mal do século",
             author: "Augusto Cury"
         },
         {
             title: "Os 7 hábitos das pessoas altamente eficazes",
             author: "Stephen R. Covey"
         },
        ],
    },
];

//My solution
var numberCategorys = booksByCategory.length
console.log(numberCategorys)
console.log(booksByCategory[0].books.length + booksByCategory[1].books.length)

let searchAutor = (authorName, arrayIndex) => {
    let booksAuthor = []
    for(let i of booksByCategory[arrayIndex].books){
        if  (i.author == authorName) {
            booksAuthor.push(i.title)    
        }
    } 
    return booksAuthor
  }  

  function booksByAuthor(author){
    let arrayIndex = 0;
    const titleBooks1 = searchAutor(author,arrayIndex);
    arrayIndex++
    const titleBooks2 = searchAutor(author,arrayIndex);
      

    return titleBooks1, titleBooks2
}

console.log(booksByAuthor('Augusto Cury'))

//Outher soluctions

console.log(numberCategorys)
for(let category of booksByCategory){
    console.log(`total de livros da categoria ${category.category}`)
    console.log(category.books.length)

}

// conta os autores
function countAuthors() {
    let authors = [];

    for(let category of booksByCategory){
        for(let book of category.books){

        // verifica se dentro do array contem algum elemento com o autor deste livro, se retornar -1 então não achou o author la dentro, executando o if

            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log("total de autores:" + authors.length)
}

countAuthors()

// Pesquisando autores
function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }

    console.log(`livros do autor ${author}: ${books.join(', ')}`)
}

booksOfAuthor('Augusto Cury')