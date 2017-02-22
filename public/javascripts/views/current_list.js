var CurrentListView = Backbone.View.extend({
  template: App.templates.header,
  attributes: {
    id: 'content_wrapper',
  },
  events: {
    'click #sidebar_toggle': 'toggleSidebar',
    'click a': 'createTodo',
  },
  toggleSidebar: function () {
    $('#sidebar').toggle();
    $('#content').toggleClass('halfscreen');
  },

  createTodo: function (e) {
    e.preventDefault();
    new ModalView();
  },

  render: function () {
    this.$el.html(this.template({
      name: this.model.get('name'),
      length: this.model.get('todos').length,
    }));

    this.subview = new TodosView({ collection: this.todos });
    this.$el.find('#todos').append(this.subview.$el);
    App.$el.find('#content').html(this.$el);
  },

  initialize: function () {
    this.model.view = this;
    this.todos = this.model.get('todos');
    this.render();
    this.listenTo(this.todos, 'add remove', this.render);
  },
});
