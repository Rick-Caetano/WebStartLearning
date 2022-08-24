const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 8080


function expressTest(){
    app.listen(port, (error) => {
        if(!error){
            console.log('the aplication, now run...')
        } else {
            console.log('error to execute the aplication')
        }
    })
}

const connection = mysql.createConnection({
    host:"localhost",
    user:"rickCaeatano",
    password:"ikkki0016134"
})

connection.connect(error => {
    if(error){
        console.log('One error occorred, impossible to connect database')
        
    }

    app.listen(port, () =>{
        console.log('well done! Database is ready to use on port ' + port)
    })
})
