class Footer {
  constructor(view) {
    this.body = $('body');
    this.init();
  }

  init() {
    //     this.controller = new ScrollMagic.Controller();
    //     this.footer = new TimelineLite();
    //     this.footer.fromTo($('footer'), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, delay: 0.1, ease:'Power1.easeOut'});
    //     this.footer.staggerFrom($('.footer__in > div'), 1, {y:60, opacity:0, ease:Power3.easeOut}, 0.1, 0.25);
    //
    //     let footer = new ScrollMagic.Scene({triggerElement: $('footer')[0], offset:-250, reverse: true})
    //       .setTween(this.footer)
    //       .addIndicators({name: 'footer (duration: 300)'})
    //       .addTo(this.controller);
  }


  destroy() {

  }
}

export default Footer;
