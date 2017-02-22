var ListView = Backbone.View.extend({
  template: App.templates.list,
  tagName: 'li',
  events: { click: 'selectList' },
  selectList: function () {
    this.model.select();
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
  },

  initialize: function () {
    this.render();
  },
});
