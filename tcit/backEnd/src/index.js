const express = require('express')
const cors = require('cors');

const app = express()
const port= 8000

const bodyParser= require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))               
let listaBlanca=['http://localhost:3000', 'https://localhost:3000','http://localhost:3000/posts']
app.use(cors({
   //  origin: listaBlanca
}));

const indexRotes = require('./routes/index')
app.use('/',indexRotes)

app.listen(port,()=>{
    console.log('server listen on ',port)
})
