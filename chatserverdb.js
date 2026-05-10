// create table chats (id serial primary key, message text);
// import express from 'express';
// import { createServer } from 'http';
// import { Server } from 'socket.io';
// import { fileURLToPath } from 'url';
// import path from 'path';
// import pkg from 'pg';
// const { Pool } = pkg;
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const app = express();
// const httpServer = createServer(app);
// const io = new Server(httpServer);

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'messages',
//   password: '123',
//   port: 5432,
// });

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'chatclientdb.html'));
// });

// io.on('connection', async (socket) => {
//   console.log('User connected:', socket.id);
//   const result = await pool.query(
//     'SELECT message FROM chats'
//   );
//   result.rows.forEach((row) => {
//     socket.emit('chat message', row.message);
//   });
//   socket.on('chat message', async (msg) => {
//     console.log('Message:', msg);
//     await pool.query(
//       'INSERT INTO chats (message) VALUES ($1)',
//       [msg]
//     );
//     io.emit('chat message', msg);
//   });
//   socket.on('disconnect', () => {
//     console.log('User disconnected:', socket.id);
//   });
// });

// httpServer.listen(3000);


import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/messagesdb');

const messageSchema = new mongoose.Schema({
  message: String
});
const Message = mongoose.model('Messages', messageSchema);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'chatclientdb.html'));
});

io.on('connection', async (socket) => {
  console.log('User connected:', socket.id);
  const chats = await Message.find();
  chats.forEach((chat) => {
    socket.emit('chat message', chat.message);
  });
  socket.on('chat message', async (msg) => {
    console.log('Message:', msg);
    const chat = new Message({ message: msg });
    await chat.save();
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

httpServer.listen(3000);
