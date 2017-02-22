var ModalView = Backbone.View.extend({
  template: App.templates.modal,
  attributes: {
    id: 'modal_wrapper',
  },
  events: {
    'click #modal_layer': 'remove',
    'click #submit': 'save',
  },

  save: function (e) {
    e.preventDefault();
    var $form = $(e.target).closest('form');
    var attrs = {};
    var dueDate;

    $form.serializeArray().forEach(function (obj) { attrs[obj.name] = obj.value; });

    if (attrs.year !== 'Year' && attrs.month !== 'Month') {
      // dueDate is stored as unix timestamp
      dueDate = moment(attrs.year + '/' + attrs.month + '/' + attrs.day, 'YYYY/MM/DD').format('x');
    }

    ['year', 'month', 'day'].forEach(function (attr) { delete attrs[attr]; });

    if (dueDate) attrs.dueDate = dueDate;

    //this should be taken care of by controller
    if (this.model) {
      console.log('PUT request');
      this.model.save(attrs);
    } else {
      console.log('POST request');
      App.todos.add(attrs);
    }

    this.remove();
  },

  navigateOnEscape: function (e) {
    var escapeCode = e.which === 27;
    if (escapeCode) {
      $(document).off('keyup');
      this.remove();
    }
  },

  populateForm: function () {
    var title = this.model.get('title');
    var dueDate = this.model.get('dueDate');

    this.$el.find('#title').val(title);
    if (dueDate) {
      this.$el.find('#year option[value="' + moment(+dueDate).format('YYYY') + '"]').prop('selected', true);
      this.$el.find('#month option[value="' + moment(+dueDate).format('MM') + '"]').prop('selected', true);
      this.$el.find('#day option[value="' + moment(+dueDate).format('DD') + '"]').prop('selected', true);
    }
  },

  render: function () {
    var html = this.model ? this.template(this.model.toJSON()) : this.template();
    this.$el.html(html);
    App.$el.find('#content').append(this.$el);
    this.delegateEvents();

    if (this.model) this.populateForm();
  },

  initialize: function () {
    this.render();
    $(document).on('keyup', this.navigateOnEscape.bind(this));
  },
});
