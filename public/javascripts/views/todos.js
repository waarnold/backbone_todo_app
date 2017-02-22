var TodosView = Backbone.View.extend({
  tagName: 'table',
  render: function () {
    console.log('big render');
    this.collection.sort();
    this.$el.empty();
    this.collection.each(this.renderTodo);
    App.$el.find('#todos').append(this.$el);
  },

  renderTodo: function (model) {
    var todoView = new TodoView({ model: model });
    this.$el.append(todoView.el);
  },

  initialize: function () {
    _.bindAll(this, 'renderTodo');
    this.listenTo(this.collection, 'change:dueDate change:complete', this.render);
    this.render();
  },
});
