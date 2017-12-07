var express = require("express"),
  app = express(),
  server = require("http").createServer(app),
  bodyParser = require("body-parser");

var port = process.env.PORT || 6969;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
  extended: true
}));

app.use(express.static(__dirname + '/../client/'));
app.use(express.static(__dirname + '/../'));

// app.get('/', (req, res)=> {
// 	res.sendFile('index.html')
// });


server.listen(port, function(err) {
  if (err) console.log(err);
  console.log("Server running on port " + port);
});

process.on('uncaughtException', function(exception) {
  console.log(exception);
});