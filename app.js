const express = require('express')
const bodyParser = require('body-parser')
const _ = require('underscore')


const app = express()
app.use(bodyParser.json())



app.get('/', (req, res) => {

    let body = _.pick(req.body, "first_name", "last_name", "age", "cihat" )
    res.send(body)  


})

app.post('/', (req, res) => {

 

})

app.put('/', (req, res) => {

    res.send('put gönderildi')

})

app.delete('/', (req, res) => {

    res.send('delete gönderildi')

})

app.listen(3000)


