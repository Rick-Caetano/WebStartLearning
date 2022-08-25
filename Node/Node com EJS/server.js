/*
Este arquivo define as configurações do servidor localhost. 
    - Antes de começarmos, precismos ter o express e o ejs instalado via NPM.
    - Depois precisamos criar um arquivo ejs(é a mesma coisa que um HTML comum, só muda a extensão do arquivo)
    - Este arquivo deve estar em uma pasta views

obs: se alterarmos arquivos ejs o server não precisa ser parado, mas se alterarmos arquivos JS, é preciso restartar o server
*/

const express = require('express'); 
const app = express();
const items = [
    {
        title:'F',
        message: 'acil de usar'
    },
    {
        title:'O',
        message: 'rganizado'
    },
    {
        title:'D',
        message:'inamico'
    },
    {
        title:'A',
        message:'lteravel'
    }
]

const subtitle = "Uma linguagem de modelagem para criação de HTML"
app.set('view engine', 'ejs'); //Escolha a engine que irá renderizar o HTML

app.get('/', function(req, res){ //pega  raiz do site
     
    res.render('pages/index', {
        qualitys: items,
        subtitle: subtitle,
    }); //escolhe o arquivo index (o caminho não precisa de contar com a pasta views, pois ele e como se fosse a raiz para arquivos ejs). Passa também o objeto qualitys para o ejs
})

app.get('/about', function(req, res){ //caso tenha uma pagina about ele define o caminho
    res.render('pages/about')
})

app.listen(8080); //A porta que ele está ouvindo
console.log('server startatado...')