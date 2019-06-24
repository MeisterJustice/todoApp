var express = require('express');
var router = express.Router();
var db = require("../models")
var controllers = require("../controllers/todos");

/* GET todos listing. */
router.route("/")
  .get(controllers.getTodos)
  .post(controllers.createTodo)

router.route("/:todoid")
  .get(controllers.getTodo)
  .put(controllers.updateTodo)
  .delete(controllers.deleteTodo)

module.exports = router;