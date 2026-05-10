import {createServer} from "http"
import {Server} from "socket.io"
const http = createServer()
const io = new Server(http)
 
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