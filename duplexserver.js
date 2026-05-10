import {createServer} from 'net';
const server = createServer((socket)=>{
    console.log('Client connected');
    socket.on('data', (data)=>{
        console.log('Received', data.toString());
        socket.write("Hello Client");
    })
    socket.on('end', ()=>{
        console.log('Cient disconnected');
    })
})
server.listen(3000, ()=>{
    console.log("Server is listening on port 3000")
})