const express = require('express')
const persRota = require('./rota/pers_rota')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/personagens", persRota)

app.listen (3000, () => { 
    console.log("Servidor Disponível")
})