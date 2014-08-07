// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
   // we should only call playFirst when current song playing ends

    this.on('add', this.playOnlyIfLengthOne, this);
    this.on('ended', this.dequeue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('removeSong', this.removeSong, this);
  },

  playFirst: function() {
    var firstSong = this.at(0);
    firstSong.play();
  },

  playOnlyIfLengthOne: function() {
    if(this.length === 1) {
      this.playFirst();
    }
  },

  queueHasLength : function(){
    if( this.length){
      this.playFirst();
    }
  },
  dequeue: function() {
    this.remove(this.at(0));
    this.queueHasLength();
  },

  removeSong: function(song){
    this.remove(song);
  }


});
