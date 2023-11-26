const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 3000 });

server.on('connection', (socket) => {
    console.log('Client connected');

    // Handle messages from the client
    socket.on('message', (data) => {
        console.log(`Received: ${data}`);

        // You can process the received data here

        // Send a response back to the client
        socket.send('Server received your message');
    });

    // Handle socket closure
    socket.on('close', () => {
        console.log('Client disconnected');
    });
});
