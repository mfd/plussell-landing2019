import BarbaPageBase from '../barba/BarbaPageBase';

class Donation extends BarbaPageBase {

  constructor() {
    super('donation');
  }

  display(container) {

    	//---Scroll Anim --///
    this.controller = new ScrollMagic.Controller();
    this.quoteDonation = new TimelineLite();
    this.headContent = new TimelineLite();
    this.mainContent = new TimelineLite();
    this.footerArticle = new TimelineLite();
    this.partner = new TimelineLite();

    	//Banner
    const bannerDonation = new TimelineLite({paused : true});
    bannerDonation.fromTo($('.bannerHead'), 0.5, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, ease:'Power1.easeOut'},0);
    bannerDonation.fromTo($('.bannerHead .vector'), 0.4, {css:{autoAlpha:0, x:'-60%', y:'-50%'}}, {css:{autoAlpha:1, x:'-50%', y:'-50%'}, ease:'Power1.easeOut'},0.8);
    bannerDonation.fromTo($('.bannerHead .drawing'), 0.4, {css:{autoAlpha:0, x:'-40%', y:'-50%'}}, {css:{autoAlpha:1, x:'-50%', y:'-50%'}, ease:'Power1.easeOut'},0.9);
    bannerDonation.fromTo($('.bannerHead .title'), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, ease:'Power1.easeOut'},1.5);
    bannerDonation.restart();

    	//Quote
    	this.quoteDonation.fromTo($('.textQuote > div'), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, ease:'Power1.easeOut'});
    	this.quoteDonation.fromTo($('.textQuote .content'), 0.4, {css:{autoAlpha:0, y:-40}}, {css:{autoAlpha:1, y:0}, ease:'Power1.easeOut'});

    	let quote = new ScrollMagic.Scene({triggerElement: '.textQuote', reverse: false})
      .setTween(this.quoteDonation)
      .addTo(this.controller);

    //Init
    this.headContent.fromTo($('.donation h2'), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, delay: 0.1, ease:'Power1.easeOut'});

    let headContent = new ScrollMagic.Scene({triggerElement: '.donation .content', reverse: false})
      .setTween(this.headContent)
      .addTo(this.controller);

    //Article
    this.mainContent.fromTo($('.donation .wysiwyg, .donation .sharing'), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, ease:'Power1.easeOut'});

    let mainContent = new ScrollMagic.Scene({triggerElement: '.donation .wysiwyg', offset:-250, reverse: false})
      .setTween(this.mainContent)
      .addTo(this.controller);

    //Footer Article
    this.footerArticle.fromTo($('.articleFooter'), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, delay: 0.1, ease:'Power1.easeOut'});
    this.footerArticle.fromTo($('.articleFooter .share'), 0.4, {css:{autoAlpha:0, x:40}}, {css:{autoAlpha:1, x:0}, ease:'Power1.easeOut'});

    let footerArticle = new ScrollMagic.Scene({triggerElement: $('.articleFooter',container)[0], offset:-250, reverse: false})
      .setTween(this.footerArticle)
      .addTo(this.controller);

    //Partner
    if ($('.partner').length) {
      this.partner.fromTo($('.partners-container'), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, ease:'Power1.easeOut'});

        	let partner = new ScrollMagic.Scene({triggerElement: '.partner', offset:-250, reverse: false})
        .setTween(this.partner)
        .addTo(this.controller);
    }

  }

  hide(container, promise) {
    super.hide(container,promise);
        
    this.controller.destroy();
    this.quoteDonation.kill();
    this.headContent.kill();
    this.mainContent.kill();
    this.footerArticle.kill();
    this.partner.kill();

    this.controller = null;
    this.quoteDonation = null;
    this.headContent = null;
    this.footerArticle = null;
    this.mainContent = null;
    this.partner = null;
  }


}

export default Donation;
