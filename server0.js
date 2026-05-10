import express from 'express'
import {createServer} from 'http'
import {Server} from 'socket.io'
const app = express()
const http = createServer(app);
const io = new Server(http)
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'client0.html'))
})
io.on("connection", (socket)=>{
    console.log("Client is connected");
    socket.emit("message", "Hello from server to the client")
    socket.on("disconnect", ()=>{
        console.log("Client is disconnected")
    })
})
http.listen(3000, ()=>{
    console.log("Server is running on port no 3000")
})