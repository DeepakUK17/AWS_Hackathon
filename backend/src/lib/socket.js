const { Server } = require('socket.io');

let io;

module.exports = {
  init: (server) => {
    io = new Server(server, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
    });

    io.on('connection', (socket) => {
      console.log(`⚡ Client connected to Socket.io: ${socket.id}`);

      socket.on('disconnect', () => {
        console.log(`🔌 Client disconnected: ${socket.id}`);
      });
    });

    return io;
  },
  
  getIO: () => {
    if (!io) {
      throw new Error('Socket.io not initialized!');
    }
    return io;
  },
  
  // Helper functions for common events
  emitDataUpdated: (moduleName) => {
    if (io) io.emit('data_updated', { module: moduleName, time: new Date() });
  },
  
  emitNewNotification: (notification) => {
    if (io) io.emit('new_notification', notification);
  }
};
