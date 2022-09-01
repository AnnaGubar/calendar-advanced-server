const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const { PORT = 4444 } = process.env;

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log("JSON Server is running");
});
