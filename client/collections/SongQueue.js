// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
   // we should only call playFirst when current song playing ends

   this.on('add', this.checkQueueLength, this);
    // this.on('remove', this.playFirst, this);
  },

  playFirst: function() {
    var firstSong = this.at(0);
    firstSong.play();
    console.log('playFirst called',this);
  },

  checkQueueLength : function(){
    if( this.length === 1 ){
      this.playFirst();
    }
  }


});
