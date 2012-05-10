var app = require('express').createServer()
  , io = require('socket.io').listen(app)
  , osc = require('node-osc')
  , client = new osc.Client('0.0.0.0', 3333);

app.listen(8080);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

app.get('/piano', function (req, res) {
  res.sendfile(__dirname + '/public/piano.html');
});


app.get('/*.(js|css|jpg)', function(req, res){
  res.sendfile("./public"+req.url);
});

io.sockets.on('connection', function (socket) {
  socket.on('button press', function (data) {
	  client.send("/mode", data);
  });
  socket.on('keyup', function (data) {
	  client.send("/key", data, 0)
  });
  socket.on('keydown', function (data) {
	  client.send("/key", data, 127)
  });
});
