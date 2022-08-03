let express = require('express');
let app = express();
let dotenv = require('dotenv').config()
let middleware = require('./middleware')

const publicRoute = __dirname + "/public"

app.use('/public', express.static(publicRoute))
app.use(middleware.middle)

app.get('/', (req, res) => {
    const fileRoute = __dirname + "/views/index.html"
    res.sendFile(fileRoute)
})

app.get('/json', (req, res) => {
    const message = process.env.MESSAGE_STYLE
    var response
    if(message == "uppercase") response = "HELLO JSON"
    else response = "Hello json"

    res.json({"message" : response})
})

































 module.exports = app;
