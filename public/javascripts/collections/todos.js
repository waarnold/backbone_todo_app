var Todos = Backbone.Collection.extend({
  url: '/',
  model: Todo,
  comparator: function (a, b) {
    var aIsDueLater = moment(+a.get('dueDate')).isAfter(+b.get('dueDate')) && a.get('complete');

    if (a.get('complete') && !b.get('complete')) return 1;
    if (a.get('dueDate') && b.get('dueDate') && aIsDueLater) return 1;
    if (a.get('complete') && b.get('complete') && a.get('dueDate') && !b.get('dueDate')) return 1;
    if (!a.get('complete') && !b.get('complete') && a.get('dueDate') && !b.get('dueDate')) return 1;
  },

  saveModel: function (model) {
    model.save();
  },

  filterByName: function (name) {
    if (name === 'All Todos') return this;
    if (name === 'Completed') return this.where({ complete: true });
    if (name === 'undefined') return this.where({ dueDate: undefined });
    return this.where({ dueDate: name });
  },

  initialize: function () {
    this.on('add', this.saveModel);
  },
});
