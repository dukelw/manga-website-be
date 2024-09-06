const siteRouter = require("./site");

function route(app) {
  app.use("/api/v1/", siteRouter);
}

module.exports = route;
