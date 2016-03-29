var express = require("express")

var app = express()

app.get('/search', function(req, res){
    delete req.query.__proto__
    var data = JSON.stringify(req.query)
    console.log(data)
    res.end(data)
})


app.listen(process.argv[2])