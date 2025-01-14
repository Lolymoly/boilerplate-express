let express = require('express');
let app = express();
let dotenv = require('dotenv').config()
let middleware = require('./middleware')
let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

const publicRoute = __dirname + "/public"

app.use('/public', express.static(publicRoute))
app.use(middleware)

app.get('/', (req, res) => {
    const fileRoute = __dirname + "/views/index.html"
    res.sendFile(fileRoute)
})

app.get('/now', (req, res, next) => {
    req.time = new Date().toString()
    next();
}
,(req, res) => {
    res.json({"time" : req.time})
})

app.get('/:word/echo', (req, res) => {
    res.json({"echo" : req.params.word})
})

app.get('/json', (req, res) => {
    const message = process.env.MESSAGE_STYLE
    var response
    if(message == "uppercase") response = "HELLO JSON"
    else response = "Hello json"

    res.json({"message" : response})
})


app.route('/name').post((req, res) => {
    res.json({
        "name" : req.body.first + " " + req.body.last
    })
})






























 module.exports = app;
