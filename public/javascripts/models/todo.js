var Todo = Backbone.Model.extend({
  defaults: { complete: false, },
  saveModel: function () {
    this.save();
  },

  initialize: function () {
    this.on('change:complete', this.saveModel);
  },
});
