import BarbaPageBase from '../barba/BarbaPageBase';

class Team extends BarbaPageBase {

  constructor() {
    super('team');
  }

  display(container) {

    	//---Scroll Anim --///
    this.controller = new ScrollMagic.Controller();

    	//Banner
    const bannerTeam = new TimelineLite({paused : true});
    bannerTeam.fromTo($('.bannerHead'), 0.5, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, ease:'Power1.easeOut'},0);
    bannerTeam.fromTo($('.bannerHead .vector'), 0.4, {css:{autoAlpha:0, x:'-40%', y:'-50%'}}, {css:{autoAlpha:1, x:'-50%', y:'-50%'}, ease:'Power1.easeOut'},0.8);
    bannerTeam.fromTo($('.bannerHead .drawing'), 0.4, {css:{autoAlpha:0, x:'-60%', y:'-50%'}}, {css:{autoAlpha:1, x:'-50%', y:'-50%'}, ease:'Power1.easeOut'},0.9);
    bannerTeam.fromTo($('.bannerHead .title'), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, ease:'Power1.easeOut'},1.5);
    bannerTeam.restart();

    	//Member
    	let member = $('.team .member');
    for (var i = 0; i <= member.length - 1; i++) {
        	this.member = new TimelineLite();
        	if($(window).width()>767) {
	        	if (i % 2 === 0) {
	            	this.member.fromTo($('.media',member[i]), 0.4, {css:{autoAlpha:0, x:40}}, {css:{autoAlpha:1, x:0}, delay: 0.1, ease:'Power1.easeOut'});
          this.member.to($('.media .toLoad',member[i]), 0, {className:'+=loaded'});
	    	    	this.member.fromTo($('.text',member[i]), 0.4, {css:{autoAlpha:0, x:40}}, {css:{autoAlpha:1, x:0}, ease:'Power1.easeOut'});
	    	    }else {
	    	    	this.member.fromTo($('.text',member[i]), 0.4, {css:{autoAlpha:0, x:-40}}, {css:{autoAlpha:1, x:0}, ease:'Power1.easeOut'});
	    	    	this.member.fromTo($('.media',member[i]), 0.4, {css:{autoAlpha:0, x:-40}}, {css:{autoAlpha:1, x:0}, delay: 0.1, ease:'Power1.easeOut'});
          this.member.to($('.media .toLoad',member[i]), 0, {className:'+=loaded'});
	    	    }
	    	}else{
            	this.member.fromTo($('.media',member[i]), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, delay: 0.1, ease:'Power1.easeOut'});
        this.member.to($('.media .toLoad',member[i]), 0, {className:'+=loaded'});
	    	    this.member.fromTo($('.text',member[i]), 0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, ease:'Power1.easeOut'});
      }
      const scene = new ScrollMagic.Scene({triggerElement: member[i], reverse: false})
        .setTween(this.member)
        .addTo(this.controller);
    };
  }

  hide(container, promise) {
    super.hide(container,promise);
        
    this.controller.destroy();

    this.controller = null;
  }


}

export default Team;
