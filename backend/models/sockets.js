const { verifyJWT } = require("../helpers/jwt");
const {
  userConnected,
  userDisconnected,
  getUsers,
  saveMessage,
} = require("../controllers/socket");

class Sockets {
  constructor(io) {
    this.io = io;

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", async (socket) => {
      const xToken = socket.handshake.query["x-token"];
      const [isValid, uid] = verifyJWT(xToken);
      if (!isValid) {
        socket.disconnect(true);
        return socket.disconnect();
      }
      await userConnected(uid);
      socket.join(uid);
      this.io.emit("user-list", await getUsers());

      socket.on("disconnect", async () => {
        await userDisconnected(uid);
        this.io.emit("user-list", await getUsers());
      });

      socket.on("personal-message", async (payload) => {
        const message = await saveMessage(payload);
        this.io.to(payload.to).emit("new-message", message);
        this.io.to(payload.from).emit("new-message", message);
      });
    });
  }
}

module.exports = Sockets;
