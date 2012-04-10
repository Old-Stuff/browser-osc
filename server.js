var app = require('express').createServer()
  , io = require('socket.io').listen(app);

app.listen(8080);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.get('/*.(js|css)', function(req, res){
  res.sendfile("./public"+req.url);
});

io.sockets.on('connection', function (socket) {
  socket.on('button press', function (data) {
    console.log(data);
  });
});