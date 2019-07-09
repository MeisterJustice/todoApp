const express = require('express');
const router = express.Router();
const db = require("../models")
const controllers = require("../controllers/todos");

/* GET todos listing. */
router.route("/")
  .get(controllers.getTodos)
  .post(controllers.createTodo)

router.route("/:todoid")
  .get(controllers.getTodo)
  .put(controllers.updateTodo)
  .delete(controllers.deleteTodo)

module.exports = router;