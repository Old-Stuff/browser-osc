var socket = io.connect('http://speaker-bot.local:8080');

$(function(){
    $('.btn').click(function(){
		var id = $(this).attr('id');
		socket.emit('button press', id)
    });
    $('.btn-large').click(function(){
    		var id = $(this).attr('id');
		socket.emit('button press', id)
    });
});
