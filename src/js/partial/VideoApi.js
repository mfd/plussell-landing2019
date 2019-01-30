class VideoApi {

  constructor() {
    this.video = $('.startPlayer');
    this.vidId = null;
    this.player = null;
    this.widthPlayer = null;
    this.heightPlayer = null;
    this.onPlayerReady = this.onPlayerReady.bind(this);
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    this.windowResize = this.windowResize.bind(this);

    $(window).on('resize',this.windowResize);
    $('body').on('click', '.startPlayer', this.startPlayer.bind(this));
  }

  windowResize() {
    this.resizePlayer();
  }

  resizePlayer() {
    this.widthPlayer = this.video.width();
    this.heightPlayer = (this.widthPlayer*9)/16;
    $('iframe', this.video).width(this.widthPlayer).height(this.heightPlayer);
  }

  startPlayer(e) {

    this.video = $(e.currentTarget);
    this.widthPlayer = this.video.width();
    this.heightPlayer = (this.widthPlayer*9)/16;
    this.vidId = this.video.attr('data-id');
    this.video.append("<div id='player'></div>");
    TweenMax.to($('img',this.video), 0.3, {opacity:0, ease:'Cubic.easeOut'});
    TweenMax.to($('.btnPlay',this.video), 0.3, {opacity:0, ease:'Cubic.easeOut', onComplete:() => {
      this.youTubePlayerAPI();
      TweenMax.to($('#player',this.video), 0.3, {opacity:1, ease:'Cubic.easeOut'});
    }});
  }

  youTubePlayerAPI() {
    this.player = new YT.Player('player', {
      height: this.heightPlayer,
      width: this.widthPlayer,
      videoId: this.vidId,
      events: {
        'onReady': this.onPlayerReady,
        'onStateChange': this.onPlayerStateChange
      },
      playerVars: {
        'showinfo': 0,
        'rel' : 0,
        'wmode':'transparent'
      }
    });
  }

  onPlayerReady(event) {
    if(!$('body').hasClass('mobile')) event.target.playVideo();
  }

  onPlayerStateChange(event) {
    if(event.data === 0) {

      this.closeYoutube();
    }
  }

  closeYoutube() {
    TweenMax.to($('#player',this.video), 0.3, {opacity:0, ease:'Cubic.easeOut', onComplete:() => {
      $('#player',this.video).remove();
      TweenMax.to($('.btnPlay',this.video), 0.3, {opacity:1, ease:'Cubic.easeOut'});
      TweenMax.to($('img',this.video), 0.3, {opacity:1, ease:'Cubic.easeOut'});
    }});
  }

  destroy() {
    $(window).off('resize',this.windowResize);
    $('body').off('click', '.startPlayer', this.startPlayer.bind(this));
    this.windowResize = null;
  }
    
}

export default VideoApi;
