var AllListsView = Backbone.View.extend({
  tagName: 'ul',
  attributes: { id: 'all' },
  render: function () {
    this.$el.empty();
    this.collection.each(this.renderList);
    App.$el.find('#all_wrapper').append(this.$el);
  },

  renderList: function (model) {
    if (model.get('complete') === true) return;
    var listView = new ListView({ model: model });
    this.$el.append(listView.el);
  },

  initialize: function () {
    _.bindAll(this, 'renderList');
    this.render();
    this.listenTo(this.collection, 'change:selected', this.render);
  },
});
