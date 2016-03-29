var express = require("express")
var crypto = require('crypto')

var app = express()
var crypt = crypto.createHash('sha1')

app.put('/message/:id', function(req, res){
    var id = req.params.id
    var date = new Date().toDateString()
    
    crypt = crypt.update(date + id).digest('hex')
    console.log(crypt)
    res.end(crypt)
})


app.listen(process.argv[2])