const socket = require('socket.io-client')('http://localhost:3000');

socket.on('connect', () => {
	console.log('connect');
	let message = {
		id: 'firstmessage',
		message: 'I am a client'
	};
	socket.emit(message.id, message.message);
});
socket.on('returnmessage', (data) => {
	console.log(data);
});