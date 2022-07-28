const http = require("http");
const app = require("./app");

const server = http.createServer(app);

server.listen(6969, () => {
  console.log("server running");
});