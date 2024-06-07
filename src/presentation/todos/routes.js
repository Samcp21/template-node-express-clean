const express = require("express");
const {TodosController} = require("./controller");
const router = express.Router();

class TodoRoutes {
  static get routes() {
    const todosController = new TodosController();

    router.get("/", todosController.getTodos);

    return router;
  }
}

module.exports = TodoRoutes;
