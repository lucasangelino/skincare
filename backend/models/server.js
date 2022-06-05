// Servidor de Express
const express = require("express");
const http = require("http");
const cors = require("cors");
const socketio = require("socket.io");
const path = require("path");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
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
    this.app.use("/ingredient", require("../router/ingredient"));
  }

  execute() {
    // Inicializar Middlewares
    this.middlewares();

    // Inicializar Server
    this.server.listen(this.port, () => {
      console.log("Server corriendo en puerto:", this.port);
    });
  }
}

module.exports = Server;
