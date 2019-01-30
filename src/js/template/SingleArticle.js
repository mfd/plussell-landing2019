import BarbaPageBase from '../barba/BarbaPageBase';

class SingleArticle extends BarbaPageBase {

  constructor() {
    super('singleArticle');
  }

  display(container) {

    	//---Scroll Anim --///
    this.controller = new ScrollMagic.Controller();
    this.firstContent = new TimelineLite();
    this.mainContent = new TimelineLite();
    this.footerArticle = new TimelineLite();
    this.moreArticle = new TimelineLite();
    this.listArticle = new TimelineLite();

    	//Init
    this.firstContent.fromTo($('.singleArticle .date'), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, delay: 0.1, ease:'Power1.easeOut'});
    	this.firstContent.fromTo($('.singleArticle h2'), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, delay: 0.1, ease:'Power1.easeOut'});
    	this.firstContent.fromTo($('.singleArticle .media'), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, ease:'Power1.easeOut'});
    this.firstContent.to($('.singleArticle .media .toLoad'), 0, {className:'+=loaded'});

    	//Article
    	this.mainContent.fromTo($('.singleArticle .by, .singleArticle .wysiwyg ,.singleArticle .sharing'), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, ease:'Power1.easeOut'});
    this.mainContent.to($('.singleArticle .by .toLoad'), 0, {className:'+=loaded'});

    	let mainContent = new ScrollMagic.Scene({triggerElement: $('.singleArticle .by',container)[0], offset:-250, reverse: false})
      .setTween(this.mainContent)
      .addTo(this.controller);

    //Footer Article
    this.footerArticle.fromTo($('.articleFooter'), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, delay: 0.1, ease:'Power1.easeOut'});
    this.footerArticle.fromTo($('.articleFooter nav'), 0.4, {css:{autoAlpha:0, x:-40}}, {css:{autoAlpha:1, x:0}, delay: 0.1, ease:'Power1.easeOut'});
    this.footerArticle.fromTo($('.articleFooter .share'), 0.4, {css:{autoAlpha:0, x:40}}, {css:{autoAlpha:1, x:0}, ease:'Power1.easeOut'});

    	let footerArticle = new ScrollMagic.Scene({triggerElement: $('.articleFooter',container)[0], offset:-250, reverse: false})
      .setTween(this.footerArticle)
      .addTo(this.controller);
  }

  hide(container, promise) {
    super.hide(container,promise);
        
    this.controller.destroy();
    this.firstContent.kill();
    this.mainContent.kill();
    this.footerArticle.kill();
    this.moreArticle.kill();
    this.listArticle.kill();

    this.controller = null;
    this.firstContent = null;
    this.mainContent = null;
    this.footerArticle = null;
    this.moreArticle = null;
    this.listArticle = null;
  }


}

export default SingleArticle;
