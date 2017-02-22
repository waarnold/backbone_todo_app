var Lists = Backbone.Collection.extend({
  model: List,
  comparator: function (a, b) {
    var aIsDueLater = moment(+a.get('dueDate')).isAfter(+b.get('dueDate')) && a.get('complete');

    if (a.get('dueDate') && b.get('dueDate') && aIsDueLater) return 1;
    if (a.get('dueDate') && !b.get('dueDate')) return 1;
  },

  getTotal: function () {
    var total = this.pluck('total').reduce(function (a, b) {
      return a + b;
    }, 0);

    return total;
  },
});
