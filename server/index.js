var express = require('express');
var app = express();

app.use(express.static(path.resolve(__dirname, '../front-end/build')));

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
});

const getUserEndpoint = require ('./getUser');
app.use('/getUser', getUserEndpoint);


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})