const express = require("express");
const TodoRoutes = require("./todos/routes");
class AppRoutes {
  static get routes() {
    const router = express.Router();
    router.use("/api/todos", TodoRoutes.routes);

    return router;
  }
}

module.exports = AppRoutes;
