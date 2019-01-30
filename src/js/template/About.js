import BarbaPageBase from '../barba/BarbaPageBase';

class About extends BarbaPageBase {

  constructor() {
    super('about');
  }

  display(container) {

    	//---Scroll Anim --///
    this.controller = new ScrollMagic.Controller();
    this.quoteAbout = new TimelineLite();
    this.headContent = new TimelineLite();
    this.mainContent = new TimelineLite();
    this.footerArticle = new TimelineLite();
    this.partner = new TimelineLite();

    	//Banner
    const bannerAbout = new TimelineLite({paused : true});
    bannerAbout.fromTo($('.bannerHead'), 0.5, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, ease:'Power1.easeOut'},0);
    bannerAbout.fromTo($('.bannerHead .vector'), 0.4, {css:{autoAlpha:0, x:'-60%', y:'-50%'}}, {css:{autoAlpha:1, x:'-50%', y:'-50%'}, ease:'Power1.easeOut'},0.8);
    bannerAbout.fromTo($('.bannerHead .drawing'), 0.4, {css:{autoAlpha:0, x:'-40%', y:'-50%'}}, {css:{autoAlpha:1, x:'-50%', y:'-50%'}, ease:'Power1.easeOut'},0.9);
    bannerAbout.fromTo($('.bannerHead .title'), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, ease:'Power1.easeOut'},1.5);
    bannerAbout.restart();

    	//Quote
    	this.quoteAbout.fromTo($('.textQuote > div'), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, ease:'Power1.easeOut'});
    	this.quoteAbout.fromTo($('.textQuote .content'), 0.4, {css:{autoAlpha:0, y:-40}}, {css:{autoAlpha:1, y:0}, ease:'Power1.easeOut'});

    	let quote = new ScrollMagic.Scene({triggerElement: '.textQuote', reverse: false})
      .setTween(this.quoteAbout)
      .addTo(this.controller);

    //Init
    this.headContent.fromTo($('.about h2'), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, delay: 0.1, ease:'Power1.easeOut'});
    this.headContent.fromTo($('.about .media'), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, ease:'Power1.easeOut'});
    this.headContent.to($('.about .media .toLoad'), 0, {className:'+=loaded'});

    let headContent = new ScrollMagic.Scene({triggerElement: '.about .content', reverse: false})
      .setTween(this.headContent)
      .addTo(this.controller);

    //Article
    this.mainContent.fromTo($('.about .wysiwyg, .about .sharing'), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, ease:'Power1.easeOut'});

    let mainContent = new ScrollMagic.Scene({triggerElement: '.about .wysiwyg', offset:-250, reverse: false})
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
    this.quoteAbout.kill();
    this.headContent.kill();
    this.mainContent.kill();
    this.footerArticle.kill();
    this.partner.kill();

    this.controller = null;
    this.quoteAbout = null;
    this.headContent = null;
    this.footerArticle = null;
    this.mainContent = null;
    this.partner = null;
  }


}

export default About;
