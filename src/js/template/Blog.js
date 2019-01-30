import BarbaPageBase from '../barba/BarbaPageBase';

class Blog extends BarbaPageBase {

  constructor() {
    super('blogue');
  }

  display(container) {

    let grid = $('.listArticle .grid').imagesLoaded(() => {
      grid.masonry({
			  	itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
        percentPosition: true
      }); 
    });

    //---Scroll Anim --///
    this.controller = new ScrollMagic.Controller();
    this.listArticle = new TimelineLite();
    this.pagination = new TimelineLite();

    	//Banner
    const bannerArticle = new TimelineLite({paused : true});
    bannerArticle.fromTo($('.bannerHead'), 0.5, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, ease:'Power1.easeOut'},0);
    bannerArticle.fromTo($('.bannerHead .vector'), 0.4, {css:{autoAlpha:0, x:'-40%', y:'-50%'}}, {css:{autoAlpha:1, x:'-50%', y:'-50%'}, ease:'Power1.easeOut'},0.8);
    bannerArticle.fromTo($('.bannerHead .drawing'), 0.4, {css:{autoAlpha:0, x:'-60%', y:'-50%'}}, {css:{autoAlpha:1, x:'-50%', y:'-50%'}, ease:'Power1.easeOut'},0.9);
    bannerArticle.fromTo($('.bannerHead .title'), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, ease:'Power1.easeOut'},1.5);
    bannerArticle.restart();

    	//Article
    	let article = $('.listArticle article', container);
    for (var i = 0; i <= article.length - 1; i++) {
      this.listArticle.to(article[i],0.3, {autoAlpha:1, ease:'Power1.easeOut'});
      this.listArticle.to($('.toLoad',article[i]), 0, {className:'+=loaded'});
      const scene = new ScrollMagic.Scene({triggerElement: $('.listArticle',container)[0], reverse: false})
        .setTween(this.listArticle)
        .addTo(this.controller);
    };

    //Pagination
    if ($('.pagination').length) {
      this.pagination.fromTo($('.pagination'), 0.4, {css:{autoAlpha:0, x:-40}}, {css:{autoAlpha:1, x:0}, delay: 0.5, ease:'Power1.easeOut'});

        	let pagination = new ScrollMagic.Scene({triggerElement: $('.pagination',container)[0], offset:-250, reverse: false})
        .setTween(this.pagination)
        .addTo(this.controller);
    }
  }

  hide(container, promise) {
    super.hide(container,promise);
        
    this.controller.destroy();
    this.listArticle.kill();
    this.pagination.kill();

    this.controller = null;
    this.listArticle = null;
    this.pagination = null;
  }

}

export default Blog;
