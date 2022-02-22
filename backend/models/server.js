// Servidor de Express
const express = require("express");
const http = require("http");
const cors = require("cors");
const socketio = require("socket.io");
const path = require("path");
const Sockets = require("./sockets");
const { dbConnection } = require("../db/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    dbConnection();
    this.server = http.createServer(this.app);
    this.io = socketio(this.server, {});
  }

  middlewares() {
    // Desplegar el directorio público
    this.app.use(express.static(path.resolve(__dirname, "../public")));
    // Cors
    this.app.use(cors());
    // Body Parser
    this.app.use(express.json());
    this.app.use("/api/login", require("../router/auth"));
    this.app.use("/api/messages", require("../router/messages"));
  }

  // Esta configuración se puede tener aquí o como propieda de clase
  // depende mucho de lo que necesites
  configurarSockets() {
    new Sockets(this.io);
  }

  execute() {
    // Inicializar Middlewares
    this.middlewares();

    // Inicializar sockets
    this.configurarSockets();

    // Inicializar Server
    this.server.listen(this.port, () => {
      console.log("Server corriendo en puerto:", this.port);
    });
  }
}

module.exports = Server;
