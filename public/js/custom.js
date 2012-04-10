// Jquery
var socket = io.connect('http://192.168.1.161:8080');

$(function(){
    $('.btn').click(function(){
		var id = $(this).attr('id');
		socket.emit('button press', id)
    });
});