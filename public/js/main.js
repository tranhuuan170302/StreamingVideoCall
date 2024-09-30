const socket = io('/');

socket.on('connect', () => {
    console.log('Succesfully connected to socket.io server');
    console.log(socket.id);
});

