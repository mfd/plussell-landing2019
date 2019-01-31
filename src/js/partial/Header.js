import Dropdown from '../partial/Dropdown';
class Header {
  constructor(view) {
    //this.$el = options.$el;
    this.$window = $(window);
    this.$body = $('body');
    this.init();
  }

  init() {

    let $body = this.$body;
    console.log('init Header');



  }

  hidePanels(event) {
    //console.log('hide Panels');
    this.$body.removeClass('isLocationSwitch');
    this.$body.removeClass('isLoginform');
  }
  showLogin(event) {
    let $body = this.$body;
    event.preventDefault();
    $body.removeClass('isLocationSwitch');
    if ($body.hasClass('isLoginform')) {
      $body.removeClass('isLoginform');
    } else {
      $body.addClass('isLoginform');
    }
  }

  showLocation(event) {
    let $body = $('body');
    event.preventDefault();
    $body.removeClass('isLoginform');
    if ($body.hasClass('isLocationSwitch')) {
      $body.removeClass('isLocationSwitch');
    } else {
      $body.addClass('isLocationSwitch');
    }
  }
  initAnimations() {

    //this.controller = new ScrollMagic.Controller();
    //this.head = new TimelineLite();
    //this.head.fromTo($('header'), 0.4, {css:{autoAlpha:0, x: 200}}, {css:{autoAlpha:1, x: -200}, delay: 0.1, ease:'Power1.easeOut'});
    //this.head.staggerFrom($('.footer__in > div'), 1, {y:60, opacity:0, ease:Power3.easeOut}, 0.1, 0.25);
    //
    //     let header = new ScrollMagic.Scene({triggerElement: $('header')[0], offset:50, reverse: true})
    //       .setTween(this.head)
    //       .addIndicators({name: 'header (duration: 300)'})
    //       .addTo(this.controller);
  }
  destroy() {
    let $body = this.body;
    console.log('destroy header events');
    $('body').removeClass('isLoginform');
    // $('body').off('click', '.js-sign, .b-login-form--close', this.showLogin.bind(this));
    // $('body').removeClass('isLoginform');
    // $('body').off('click', '.location--change', this.showLocation.bind(this));
    //$body.off('click', this.hidePanels.bind(this));
  }
}

export default Header;
