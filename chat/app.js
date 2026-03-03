require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const session = require('express-session');
const path = require('path');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/dynamic-chat-app');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Session setup
app.use(session({
  secret: process.env.SESSION_SECRET || 'healthcare-chat-app',
  resave: false,
  saveUninitialized: true
}));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const userRoute = require('./routes/userRoute');
app.use('/', userRoute);

// Socket.io connection
const User = require('./models/userModel');
const Chat = require('./models/chatModel');

// Map to store user socket connections
const userSockets = {};

io.on('connection', async (socket) => {
  console.log('A user connected');

  socket.on('user_connected', async (userId) => {
    // Store the user's socket ID
    userSockets[userId] = socket.id;
    socket.userId = userId;

    // Update user's online status in DB
    await User.findByIdAndUpdate({ _id: userId }, { is_online: '1' });

    // Notify others that user is online
    socket.broadcast.emit('user_status', { user_id: userId, status: '1' });
  });

  socket.on('join_chat', (chatId) => {
    socket.join(chatId);
    console.log(`User ${socket.userId} joined room: ${chatId}`);
  });

  socket.on('send_message', async (data) => {
    try {
      // Save chat message to database
      const chat = new Chat({
        sender_id: data.sender_id,
        receiver_id: data.receiver_id,
        message: data.message
      });
      const newChat = await chat.save();

      // Create a unique room ID for the conversation
      const chatRoomId = [data.sender_id, data.receiver_id].sort().join('-');

      // Emit message to the chat room
      io.to(chatRoomId).emit('new_message', {
        _id: newChat._id,
        sender_id: data.sender_id,
        message: data.message,
        createdAt: newChat.createdAt
      });

      // If receiver is not in the chat room, send to their specific socket
      if (userSockets[data.receiver_id]) {
        io.to(userSockets[data.receiver_id]).emit('new_message', {
          _id: newChat._id,
          sender_id: data.sender_id,
          message: data.message,
          createdAt: newChat.createdAt
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  });

  socket.on('disconnect', async () => {
    if (socket.userId) {
      // Remove user from socket map
      delete userSockets[socket.userId];

      // Update user's offline status in DB
      await User.findByIdAndUpdate({ _id: socket.userId }, { is_online: '0' });

      // Notify others that user is offline
      socket.broadcast.emit('user_status', { user_id: socket.userId, status: '0' });
      console.log(`User ${socket.userId} disconnected`);
    }
  });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
