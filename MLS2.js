const express = require('express')
const ejs = require('ejs')
const fs = require('fs')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended:true }))
app.use(express.static('./static'))


app.get('/', (req,res) => {
    res.render('MLS2_menu.ejs')
})

app.post('/?', (req,res) => {
    res.redirect('/game')
})

app.get('/game', (req,res) => {
    res.render('MLS2.ejs')
})

app.listen(1000, function() {
    console.log('listening on port 1000')
})