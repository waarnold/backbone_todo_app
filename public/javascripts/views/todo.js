var TodoView = Backbone.View.extend({
  template: App.templates.todo,
  tagName: 'tr',
  events: {
    'click td.list_item': 'update',
    'click td.delete': 'destroy',
  },
  update: function (e) {
    var $e = $(e.target);
    if ($e.hasClass('title')) {
      new ModalView({ model: this.model });
      return;
    }

    this.model.set('complete', !this.model.get('complete'));
  },

  destroy: function () {
    this.model.destroy();
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    // console.log('little render');
  },

  initialize: function () {
    this.render();
    this.listenTo(this.model, 'change:title', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },
});
