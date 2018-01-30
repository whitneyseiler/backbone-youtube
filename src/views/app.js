var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoPlayerView({el: '.player'});
    new VideoListView({el: '.list'});
    return this;
  },

  template: templateURL('src/templates/app.html')

});
