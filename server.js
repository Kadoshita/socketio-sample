const http = require('http');
const socketio = require('socket.io');
const server = http.createServer().listen(3000);
const io = socketio.listen(server);

io.sockets.on('connection', (socket) => {
	console.log('connection');
	socket.on('firstmessage', (data) => {
		console.log(data);
		let message = {
			id: 'returnmessage',
			message: 'I am a server'
		};
		io.sockets.emit(message.id, message.message);
	});

	socket.on('disconnect', () => {
		console.log('disconnect');
	});
});