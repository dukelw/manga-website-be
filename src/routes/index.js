const siteRouter = require("./site");
const userRouter = require("./user");
const historyRouter = require("./history");
const favouriteRouter = require("./favourite");
const uploadRouter = require("./upload");
const commentRouter = require("./comment");

function route(app) {
  app.use("/api/v1/user/", userRouter);
  app.use("/api/v1/history/", historyRouter);
  app.use("/api/v1/comment/", commentRouter);
  app.use("/api/v1/favourite/", favouriteRouter);
  app.use("/api/v1/upload/", uploadRouter);
  app.use("/api/v1/", siteRouter);
}

module.exports = route;
