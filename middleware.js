let express = require('express');
let app = express();


function middle(req, res, next) {
    console.log(req.method+ ' ' + req.path + ' - ' + req.ip);
    next()
}

module.exports = middle;