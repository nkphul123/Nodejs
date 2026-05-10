import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const http = createServer(app);
const io = new Server(http);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Broadcast.html'));
});
let clients = 0;
io.on('connection', (socket)=>{
    clients++;
    io.emit('newclient', {msg: `${clients} clients connected`});
    socket.on('disconnect', ()=>{
        clients--;
        io.emit('newclient', {msg: `${clients} clients connected`})
    })
})
http.listen(3000)

// import express from 'express';
// import { createServer } from 'http';
// import { Server } from 'socket.io';
// import path from 'path';
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const app = express();
// const http = createServer(app);
// const io = new Server(http);
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'Broadcast.html'));
// });
// let clients = 0;
// io.on('connection', (socket)=>{
//     clients++;
//     socket.emit('newclient', {msg:"Hey, welcome new client"})
//     socket.broadcast.emit('newclient', {msg: `${clients} clients connected`});
//     socket.on('disconnect', ()=>{
//         clients--;
//         socket.broadcast.emit('newclient', {msg: `${clients} clients connected`})
//     })
// })
// http.listen(3000)