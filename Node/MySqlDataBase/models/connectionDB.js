const Sequelize = require('sequelize')

const sequel= new Sequelize('nodeclea', 'rickCaetano', '194522iki',{
    host:'localhost',
    dialect:'mysql'
});

sequel.authenticate().then(function(){
    console.log('connected to database')
}).catch(function(){
    console.log('connection failed')
})

module.exports = sequel

