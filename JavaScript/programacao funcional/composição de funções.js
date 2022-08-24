/*
    Composição de funções 

    . Um encadeamento de funções
    . Uma função que retorna um dado e vai para outra função, que retorna um dado e vai para oura função, que retorna...
*/

//Vamos separ as linhas por "." pois assim o codigo fica mais visivel
const people = ['rafa', 'diego', 'dani', 'rod']
const upperCasePeopleThatStartsWithD = people
.filter(person => person.startsWith('d')) //person é o dado do array que é passdo para person. startsWith e filter são funçoes do js. Perceba que depois de separado os nomes que começam com "d" ele executa a proxima função.
.map(dperson => dperson.toUpperCase()) // map aplica uma função aos dados separdos pelo filter, que são identificados como dperson. nesse caso é aplicado a função toUpperCase

console.log(upperCasePeopleThatStartsWithD)