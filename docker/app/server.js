const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Hola desde version 2 🚀");


});

/*
❌ ERROR INTENCIONAL
Solo escucha en localhost
*/
server.listen(3000, () => {
  console.log("App escuchando en localhost:3000");
});

