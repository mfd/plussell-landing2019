import BarbaPageBase from '../barba/BarbaPageBase';

class Episode extends BarbaPageBase {

  constructor() {
    super('episode');
  }

  display(container) {

    	//---Scroll Anim --///
    this.controller = new ScrollMagic.Controller();
    this.listEpisode = new TimelineLite();
    this.pagination = new TimelineLite();

    	//Banner

    const bannerEpisode = new TimelineLite({paused : true});
    bannerEpisode.fromTo($('.bannerHead'), 0.5, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, ease:'Power1.easeOut'},0);
    bannerEpisode.fromTo($('.bannerHead .vector'), 0.4, {css:{autoAlpha:0, x:'-40%', y:'-50%'}}, {css:{autoAlpha:1, x:'-50%', y:'-50%'}, ease:'Power1.easeOut'},0.8);
    bannerEpisode.fromTo($('.bannerHead .drawing'), 0.4, {css:{autoAlpha:0, x:'-60%', y:'-50%'}}, {css:{autoAlpha:1, x:'-50%', y:'-50%'}, ease:'Power1.easeOut'},0.9);
    bannerEpisode.fromTo($('.bannerHead .title'), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, ease:'Power1.easeOut'},1.5);
    bannerEpisode.restart();


    	//Episode
    	let episode = $('.listEpisode .episode',container);
    for (var i = 0; i <= episode.length - 1; i++) {
      this.listEpisode.to(episode[i],0.3, {autoAlpha:1, ease:'Power1.easeOut'});
      this.listEpisode.to($('.toLoad',episode[i]), 0, {className:'+=loaded'});
      const scene = new ScrollMagic.Scene({triggerElement: $('.listEpisode',container)[0], reverse: false})
        .setTween(this.listEpisode)
        .addTo(this.controller);
    };

    //Pagination
    if ($('.pagination').length) {
      this.pagination.fromTo($('.pagination'), 0.4, {css:{autoAlpha:0, x:-40}}, {css:{autoAlpha:1, x:0}, delay: 0.5, ease:'Power1.easeOut'});

        	let pagination = new ScrollMagic.Scene({triggerElement: $('.pagination',container)[0], offset:-250, reverse: false})
        .setTween(this.pagination)
        .addTo(this.controller);
    };
  }

  hide(container, promise) {
    super.hide(container,promise);
        
    this.controller.destroy();
    this.listEpisode.kill();
    this.pagination.kill();

    this.controller = null;
    this.listEpisode = null;
    this.pagination = null;
  }

}

export default Episode;
