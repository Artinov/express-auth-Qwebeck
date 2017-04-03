var express = require("express");
var app = express();

var path = require('path');
// var users = require('./users.json');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/about', function(req, res) {
    res.send("This is about page !");
});

app.post('/login', function(req, res) {
    console.log(req.body); // This your request data

    var users = require('./users.json');  // mine
  users.forEach(function(){
    console.log(req.body.login)
console.log(users[0].password)
console.log (users[0].login)

// if(req.body.login===users.login && req.body.password===users.password){
//     console.log(done)
// }else{
//     console.log("error")
// }

  })
 
    /*
     * Write your auth logic here
     */

    res.send("This is auth route");
});

app.listen(3000, function() {
    console.log("Server is working on http://localhost:3000/");
});