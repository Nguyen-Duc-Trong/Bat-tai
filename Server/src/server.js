const authRouter = require("./modules/auth/auth.routes");
const { server } = require("./server");
exports.Server = (app) => {
  app.use("/api/v1/auth", authRouter);
  app.all("*", (req, res, next) => {
    next(new AppError("Endpoint was not found", 404));
  });
};
