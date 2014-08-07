// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  	this.on('add', this.playFirst, this);
  },

  playFirst: function() {
  	var first = this.shift();
  	first.play();
  }


});