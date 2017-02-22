var App = {
  $el: $('body'),
  templates: JST,
  createLists: function () {
    var byDueDate = this.todos.groupBy('dueDate');
    var completeTodos = this.todos.where({ complete: true });
    this.lists = new Lists([
      { name: 'All Todos', header: true, selected: true, todos: new Todos(this.todos) },
      { name: 'Completed', header: true, complete: true, todos: new Todos(completeTodos) },
    ]);

    for (var array in byDueDate) {
      var completeTodosForList = _(byDueDate[array]).filter(function (model) {
        return model.get('complete');
      });

      this.lists.add({ name: array, todos: new Todos(byDueDate[array]) });
      if (completeTodos) {
        this.lists.add({ name: array, complete: true, todos: new Todos(completeTodosForList) });
      }
    }
  },

  init: function () {
    this.createLists();

    new AllListsView({ collection: this.lists });
    new CompleteListsView({ collection: this.lists });

    // new CurrentListView({ model: this.currentList });
  },
};

Handlebars.registerHelper('formatDate', function (dueDate) {
  if (dueDate === 'All Todos' || dueDate === 'Completed') return dueDate;
  if (dueDate === 'undefined') return 'No Due Date';
  return moment(+dueDate).format('MM/YY');
});

Handlebars.registerHelper('ifCond', function (x, y, options) {
  if (x === y) return options.fn(this);
  return options.inverse(this);
});
