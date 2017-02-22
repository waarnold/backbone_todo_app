var List = Backbone.Model.extend({
  select: function () {
    var currentList = this.collection.findWhere({ selected: true });
    currentList.unset('selected');
    this.set('selected', true);
    if (this.view) {
      this.view.render();
      console.log('it had a view already');
    } else {
      new CurrentListView({ model: this });
      console.log('just created a new view');
    }
  },
});
