let ws;

document.querySelector(".connect").addEventListener("click", () => {
  connect();
});

document.querySelector(".disconnect").addEventListener("click", () => {
  disconnect();
});

document.querySelector(".send").addEventListener("click", () => {
  const msg = document.querySelector(".msg");
  sendMessage(msg.value);
});

const connect = () => {
  ws = new WebSocket("ws://localhost:8080");
  ws.onopen = () => console.log("[Open connection]");
};

const disconnect = () => {
  ws.close();
  ws.onclose = () => console.log("[Close connection]");
};

const sendMessage = (msg) => {
  ws.send(msg);
  ws.onmessage = (event) => console.log("[Send message]", event);
};
