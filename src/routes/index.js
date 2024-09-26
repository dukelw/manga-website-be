const siteRouter = require("./site");
const userRouter = require("./user");
const historyRouter = require("./history");

function route(app) {
  app.use("/api/v1/user/", userRouter);
  app.use("/api/v1/history/", historyRouter);
  app.use("/api/v1/", siteRouter);
}

module.exports = route;
