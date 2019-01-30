class Popup {

  constructor() {

    this.playerPopup = $('.popUp .player');
    this.vidPopupId = null;
    this.widthPopup = null;
    this.heightPopup = null;
    this.windowResize = this.windowResize.bind(this);

    $(window).on('resize', this.windowResize);
    $('body').on('click', '.playerPopup', this.openPopup.bind(this));
    $('body').on('click', '.popUp .bg', this.closePopup.bind(this));
    $('body').on('click', '.btnClose', this.closePopup.bind(this));
  }

  windowResize() {
    this.resizePopup();
  }

  resizePopup() {
    this.widthPopup = this.playerPopup.outerWidth();
    this.heightPopup = (this.widthPopup*9)/16;
    $('iframe',this.playerPopup).width(this.widthPopup).height(this.heightPopup);
  }

  openPopup(e) {
    e.stopImmediatePropagation();
    TweenMax.to($('.popUp'), 0.2, {css:{autoAlpha:1}, ease:'Cubic.easeOut'});
    this.widthPopup = this.playerPopup.outerWidth();
    this.heightPopup = (this.widthPopup*9)/16;
    this.vidPopupId = $(e.currentTarget).attr('data-id');
    this.playerPopup.append('<iframe width='+this.widthPopup+' height='+this.heightPopup+' src="https://www.youtube.com/embed/'+this.vidPopupId+'?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
  }

  closePopup() {
    TweenMax.to($('.popUp'), 0.2, {css:{autoAlpha:0}, ease:'Cubic.easeOut', onComplete:() => {
      this.playerPopup.html('');
    }});
  }

  destroy() {
    $(window).off('resize',this.windowResize);
    $('body').off('click', '.playerPopup', this.openPopup.bind(this));
    $('body').off('click', '.popUp .bg', this.closePopup.bind(this));
    $('body').off('click', '.btnClose', this.closePopup.bind(this));
    this.windowResize = null;
  }

}

export default Popup;
