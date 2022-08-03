let express = require('express');
let app = express();
let dotenv = require('dotenv').config()

const publicRoute = __dirname + "/public"

app.use('/public', express.static(publicRoute))

app.get('/', (req, res) => {
    const fileRoute = __dirname + "/views/index.html"
    res.sendFile(fileRoute)
})

app.get('/json', (req, res) => {
    const message = process.env.MESSAGE_STYLE
    var response
    if(message == "allCaps") response = "HELLO WORLD"
    else response = "Hello World"

    res.json({"message" : response})
})

































 module.exports = app;
