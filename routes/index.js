var express = require('express');
var router = express.Router();

var _ = require('underscore');
var fs = require('fs');
var path = require('path');
var dataPath = path.resolve(path.dirname(__dirname), 'data/todos.json');

var Todos = {
  getLastID: function () {
    var id = JSON.parse(fs.readFileSync(dataPath, 'utf8')).lastID;
    return id;
  },

  get: function () {
    return JSON.parse(fs.readFileSync(dataPath, 'utf8')).todos;
  },

  set: function (todo) {
    var todos = this.get();
    todo.id = this.getLastID() + 1;
    todos.push(todo);
    this.write({ lastID: todo.id, todos: todos });
  },

  write: function (data) {
    fs.writeFileSync(dataPath, JSON.stringify(data), 'utf8');
  },
};

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {
    todos: Todos.get(),
  });
});

router.post('/', function (req, res) {
  Todos.set(req.body);
  res.json(req.body);
});

router.put('/:id', function (req, res) {
  var todos = Todos.get();
  var todo = _(_(todos).findWhere({ id: +req.params.id })).extend(req.body);
  Todos.write({
    lastID: Todos.getLastID(),
    todos: todos,
  });
  res.json(todo);
});

router.delete('/:id', function (req, res) {
  var id = +req.params.id;
  var todos = _(Todos.get()).reject(function (todo) {
    return todo.id === id;
  });

  Todos.write({ lastID: Todos.getLastID(), todos: todos });
  res.status(200).end();
});

module.exports = router;
