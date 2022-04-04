const { verifyJWT } = require("../helpers/jwt");
const {
  userConnected,
  userDisconnected,
  getUsers,
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
      console.log("user connected with id: ", uid);
      await userConnected(uid);
      this.io.emit("user-list", await getUsers());

      socket.on("disconnect", async () => {
        await userDisconnected(uid);
      });
    });
  }
}

module.exports = Sockets;
