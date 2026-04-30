const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Hello from backend server");
});

server.listen(3000, () => {
  console.log("Backend server running on port 3000");
});