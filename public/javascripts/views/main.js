var MainView = Backbone.View.extend({
  template: App.templates.main,
  tagName: 'main',
  events: {
    'click a': 'createTodo',
  },
  createTodo: function (e) {
    e.preventDefault();
    new ModalView();
  },

  render: function () {
    this.$el.html(this.template());
    App.$el.find('#content').append(this.$el);
  },

  initialize: function () {
    this.render();
  },
});
