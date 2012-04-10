// Jquery
var socket = io.connect('http://localhost');

$(function(){
    $('.btn').click(function(){
		var id = "/" + $(this).attr('id');
		socket.emit('button press', { my: id })
    });
});