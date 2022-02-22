class Sockets {
  constructor(io) {
    this.io = io;

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      // TODO: validate jwt
      // TODO: Know the user
      // TODO: emit connected users
      // TODO: Socket JOIN
      // TODO: listen to new message
      // TODO: Disconnect
    });
  }
}

module.exports = Sockets;
