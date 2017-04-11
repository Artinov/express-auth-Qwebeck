var express = require("express");
var app = express();

var path = require('path');
var users = require('./users.json');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/about', function(req, res) {
    res.send("This is about page !");
});

app.post('/login', function(req, res) {
    console.log(req.body); // This your request data

var successAuth 
users.forEach(function(user){
 
var reqData = req.body
if(user.login == reqData.login &&  user.password == reqData.password ){
    successAuth = true
} 

});
res.send(successAuth)
})

app.listen(3000, function() {
    console.log("Server is working on http://localhost:3000/");
})