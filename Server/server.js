var express = require('express')
var stickyDb = require('./schema/notes')
var db = require('./db')
var app = express();
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')
var stickyRouter = require('./routes/sticky')

//express config
app.use(express.static(path.join(__dirname,'../Sticky')))
app.use(bodyParser.json())
app.use(cors())
app.use('/task',stickyRouter)

app.listen(3000,()=>{
    console.log('listen at 3000')
})

