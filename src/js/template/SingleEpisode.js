import BarbaPageBase from '../barba/BarbaPageBase';

class SingleEpisode extends BarbaPageBase {

  constructor() {
    super('singleEpisode');
  }

  display(container) {

    	//---Scroll Anim --///
    this.controller = new ScrollMagic.Controller();
    this.firstContent = new TimelineLite();
    this.mainContent = new TimelineLite();
    this.showCtaDonation = new TimelineLite();
    this.hideCtaDonation = new TimelineLite();
    this.footerArticle = new TimelineLite();
    this.moreEpisode = new TimelineLite();
    this.otherEpisode = new TimelineLite();

    	//Init
    this.firstContent.fromTo($('.singleEpisode h6.label'), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, delay: 0.1, ease:'Power1.easeOut'});
    	this.firstContent.fromTo($('.singleEpisode h2'), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, delay: 0.1, ease:'Power1.easeOut'});
    	this.firstContent.fromTo($('.singleEpisode .media'), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, ease:'Power1.easeOut'});
    this.firstContent.to($('.singleEpisode .media .toLoad'), 0, {className:'+=loaded'});

    	//Article
    	this.mainContent.fromTo($('.singleEpisode .by, .singleEpisode .wysiwyg, .singleEpisode .sharing'), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, ease:'Power1.easeOut'});
    this.mainContent.to($('.singleEpisode .by .toLoad'), 0, {className:'+=loaded'});

    	let mainContent = new ScrollMagic.Scene({triggerElement: $('.singleEpisode .by',container)[0], offset:-250, reverse: false})
      .setTween(this.mainContent)
      .addTo(this.controller);

    //Show CTA Donation
    this.showCtaDonation.to($('.ctaDonationFixe'), 0.4, {css:{bottom:-114}});

    let showCtaDonation = new ScrollMagic.Scene({triggerElement: $('.singleEpisode .by',container)[0], offset:-250, reverse: true})
      .setTween(this.showCtaDonation)
      .addTo(this.controller);

    //Footer Article
    this.footerArticle.fromTo($('.articleFooter'), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, delay: 0.1, ease:'Power1.easeOut'});
    this.footerArticle.fromTo($('.articleFooter .presentBy'), 0.4, {css:{autoAlpha:0, x:-40}}, {css:{autoAlpha:1, x:0}, delay: 0.1, ease:'Power1.easeOut'});
    this.footerArticle.fromTo($('.articleFooter .share'), 0.4, {css:{autoAlpha:0, x:40}}, {css:{autoAlpha:1, x:0}, ease:'Power1.easeOut'});

    	let footerArticle = new ScrollMagic.Scene({triggerElement: $('.articleFooter',container)[0], offset:-250, reverse: false})
      .setTween(this.footerArticle)
      .addTo(this.controller);

    //Hide CTA Donation
    this.hideCtaDonation.to($('.ctaDonationFixe'), 0.4, {css:{bottom:-220}});

    let hideCtaDonation = new ScrollMagic.Scene({triggerElement: $('.articleFooter',container)[0], offset:-250, reverse: true})
      .setTween(this.hideCtaDonation)
      .addTo(this.controller);

    //More Episode
    this.moreEpisode.fromTo($('.listEpisode h2'), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, delay: 0.1, ease:'Power1.easeOut'});
    	this.moreEpisode.fromTo($('.listEpisode .seeAll'), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, ease:'Power1.easeOut'});

    	let moreEpisode = new ScrollMagic.Scene({triggerElement: $('.listEpisode',container)[0], reverse: false})
      .setTween(this.moreEpisode)
      .addTo(this.controller);

    	let episode = $('.listEpisode .episode');
    for (var i = 0; i <= episode.length - 1; i++) {
      this.otherEpisode.to(episode[i],0.3, {autoAlpha:1, ease:'Power1.easeOut'});
      this.otherEpisode.to($('.toLoad',episode[i]), 0, {className:'+=loaded'});
      const scene = new ScrollMagic.Scene({triggerElement: $('.listEpisode',container)[0], reverse: false})
        .setTween(this.otherEpisode)
        .addTo(this.controller);
    };
  }

  hide(container, promise) {
    super.hide(container,promise);
        
    this.controller.destroy();
    this.firstContent.kill();
    this.mainContent.kill();
    this.showCtaDonation.kill();
    this.hideCtaDonation.kill();
    this.footerArticle.kill();
    this.moreEpisode.kill();
    this.otherEpisode.kill();

    this.controller = null;
    this.firstContent = null;
    this.mainContent = null;
    this.showCtaDonation = null;
    this.hideCtaDonation = null;
    this.footerArticle = null;
    this.moreEpisode = null;
    this.otherEpisode = null;
  }
}

export default SingleEpisode;
