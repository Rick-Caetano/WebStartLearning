//modulos nativos
const path = require('path') //O riquire serve para chamar modulos, nesse caso chama o path

console.log(__dirname) //O dirname é uma variavel global que contem o diretorio do arquivo

console.log(path.basename(__filename)) //O basename é um função do modulo path que mostra o nome de um arquivo, ja o filename é um variavel global que tem o caminho completo do arquivo atual

//Meus modulos
module.exports = "Enviando dados do meu modulo" //Modulo.exports é uma variavel global que permite criar modulos, e o conteudo dentro será exportado para o outro arquivo
