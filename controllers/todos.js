const db = require("../models");

exports.getTodos = function (req, res) {
    db.Todo.find()
        .then(function (todos) {
            res.json(todos);
        })
        .catch(function (err) {
            res.send(err);
        })
}

exports.createTodo = function (req, res) {
    db.Todo.create(req.body)
        .then(function (newTodo) {
            res.status(201).json(newTodo);
        })
        .catch(function (err) {
            res.send(err);
        })
}

exports.getTodo = function (req, res) {
    db.Todo.findById(req.params.todoid)
        .then(function (foundTodo) {
            res.json(foundTodo);
        })
        .catch(function (err) {
            res.send(err);
        })
}

exports.updateTodo = function (req, res) {
    db.Todo.findOneAndUpdate({
            _id: req.params.todoid
        }, req.body, {
            new: true
        })
        .then(function (UpdatedTodo) {
            res.json(UpdatedTodo);
        })
        .catch(function (err) {
            res.send(err);
        })
}

exports.deleteTodo = function (req, res) {
    db.Todo.remove({
            _id: req.params.todoid
        })
        .then(function () {
            res.json({
                message: "Deleted"
            });
        })
        .catch(function (err) {
            res.send(err);
        })
}

module.exports = exports;