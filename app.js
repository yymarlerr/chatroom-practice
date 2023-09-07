const express = require("express");
const app = express();

const ServerSocket = require("ws").Server;
const port = 8080;

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const wss = new ServerSocket({ server });

wss.on("connection", (ws) => {
  console.log("[Client connected]");

  ws.on("message", (data) => {
    console.log("[Message from Client]:", Buffer.from(data).toString());
    ws.send("[Get message from Server]");
  });

  ws.on("close", () => {
    console.log("[Connection closed]");
  });
});
