const express = require('express');
const http = require('http');
const path = require('path');


const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res,) => {
    res.sendFile(__dirname + '/public/index.html');

    
});

let connectedPeers = [];
// create a new io socket
io.on('connection', (Socket) => {
    
    connectedPeers.push(Socket.id);
    console.log(connectedPeers);
    Socket.on('disconnect', () =>{
        console.log("user disconnected");
    });

    const newConnectedPrees = connectedPeers.filter((peerSocketId) => {
        peerSocketId != Socket.io;

    })

    connectedPeers = newConnectedPrees;
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});