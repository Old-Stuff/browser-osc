var app = require('express').createServer()
  , io = require('socket.io').listen(app)
  , osc = require('node-osc')
  , client = new osc.Client('127.0.0.1', 3333);

app.listen(8080);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

app.get('/*.(js|css|jpg)', function(req, res){
  res.sendfile("./public"+req.url);
});

io.sockets.on('connection', function (socket) {
  socket.on('button press', function (data) {
	  client.send("/mode", data);
  });
});