const { createServer } = require("http");
const next = require("next");

const app = next({
  dev: process.env.node !== "production"
});

const routes = require("./routes");
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(process.env.PORT || 3000, err => {
    if (err) throw err;
    console.log("ready on host 3000");
  });
});
