const express = require('express');
const mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json({extended: true}))
var connection = mysql.createConnection({
    host: "db-py2-moviles-hunt-alvarez-martinez.cdseqvbeenn9.us-east-2.rds.amazonaws.com",
    user:"jphuntv",
    password:"JpHv04102K",
    database:"connect4"
});


app.post('/addPartida', function(req, res) {
    console.log('/addPartida')
    var reqBody = req.body
    const usuario1 = reqBody.jugador1
    const usuario2 = reqBody.jugador2
    const fechaHora = reqBody.fechaHora
    console.log('datos, ',usuario1, usuario2,fechaHora)
    var sql = 'CALL addPartida(?,?,?)'
    connection.query(sql,[usuario1, usuario2, fechaHora], function(err, results, fields) {
        if(err){
            console.log(err.message)
            res.send({msj:false})
        }else{
            var idPartida =  results[0][0]['idPartida']
            console.log('idPartida: ', idPartida)
            res.send({msj:true, idPartida:idPartida})
        }   
    })    
})

app.post('/addVictoria', function(req, res) {
    console.log('/addVictoria')
    var reqBody = req.body
    const idPartida = reqBody.idPartida
    const ganador = reqBody.ganador
    const duracion = reqBody.duracion
    const movTotales = reqBody.movTotales
    const movGanador = reqBody.movGanador
    console.log('datos, ',idPartida, ganador, duracion, movTotales, movGanador)
    var sql = 'CALL addVictoria(?,?,?,?,?)'
    connection.query(sql,[idPartida, ganador, duracion, movTotales, movGanador], function(err, results, fields) {
        if(err){
            console.log(err.message)
            res.send({msj:false})
        }else{
            var idVictoria =  results[0][0]['idVictoria']
            console.log('idVictoria: ', idVictoria)
            res.send({msj:true, idVictoria:idVictoria})
        }   
    })    
})

app.post('/getTopVictorias', function(req, res) {
    console.log('/getTopVictorias')
    var sql = 'CALL getTop5UsersByVictorias()'
    connection.query(sql, function(err, results, fields) {
        if(err){
            console.log(err.message)
            res.send({msj:false})
        }else{
            var datos =  results[0]
            console.log('datos: ', datos)
            res.send({msj:true, datos:datos})
        }   
    })    
})
app.post('/getMenorMovimientos', function(req, res) {
    console.log('/getMenorMovimientos')
    var sql = 'CALL getUsuarioMenosJugadas()'
    connection.query(sql, function(err, results, fields) {
        if(err){
            console.log(err.message)
            res.send({msj:false})
        }else{
            var datos =  results[0]
            console.log('datos: ', datos)
            res.send({msj:true, datos:datos})
        }   
    })    
})

app.post('/getEmpates', function(req, res) {
    console.log('/getEmpates')
    var sql = 'CALL getEmpates()'
    connection.query(sql, function(err, results, fields) {
        if(err){
            console.log(err.message)
            res.send({msj:false})
        }else{
            var datos =  results[0]
            console.log('datos: ', datos)
            res.send({msj:true, datos:datos})
        }   
    })    
})
app.listen(3000, () => console.log('Example app is listening on port 3000.'));