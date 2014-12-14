var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
server.on("connection", function(ws) //{
//   console.log("Client connected!");
//   connected +++;
//   console.log("connected users are" + connected);
//   ws.send("hello")
//   ws.on ("message", function(message){
//   if (message === "!") {
//     console.log(message);
//   };
//   });
// });
