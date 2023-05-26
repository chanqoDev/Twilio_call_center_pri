const express = require("express");
const twilio = require("./Twilio");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const socketIo = require("socket.io");

// const socketIo = require("socket.io")(server, {
//   cors: { origin: "*", methods: ["*"] },
// });

// const io = require("socket.io")(server, {
//   cors: {
//     origin: "http://localhost:3001",
//     methods: ["GET", "POST"],
//     credentials: true,
//   },
// });

const app = express();
app.use(cors());
var server = http.createServer(app);
// const socket = io(server);
var socket = socketIo(server);

socket.on("connection", (socket) => {
  console.log("Socket connected", socket);
});

socket.on("disconnect", (socket) => {
  console.log("Socket disconnected", socket);
});

app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

app.get("/test", (req, res) => {
  res.send("<h1>howdy Twilio</h1>");
});

app.get("/login", async (req, res) => {
  const { to, username, channel } = req.body;

  const data = await twilio.sendVerify(to, channel);
  res.send(data);
  console.log(data);
});

app.get("/verfiy", async (req, res) => {
  console.log("verifing code");
  const { to, code } = req.body;
  const data = await twilio.verifyCodeAsync(to, code);
  res.send(data);
});
// console.log(process.env.MOBILE);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
