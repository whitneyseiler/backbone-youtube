var VideoListEntryView = Backbone.View.extend({


  render: function() {
    this.$el.html(this.template(this.model.attributes));
    // debugger;
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
