import BannerItem from './BannerItem';
import ScrollManager from '../managers/ScrollManager';
import RafManager from '../managers/RafManager';

class Banner {

  constructor() {

    this.banner = $('.bannerHead');
    this.ratioX = 0;
    this.ratioY = 0;
    this.smoothRatioX = 0;
    this.smoothRatioY = 0;

    this.parallax = this.parallax.bind(this);
    this.toggleEffect = this.toggleEffect.bind(this);

    this.setMouseMoveItems();
  }

  setMouseMoveItems() {
    if($('html').hasClass('allowHover')) {

      this.parallaxItem = [];
      const elements = $('.bannerHead .parallaxItem');

      for(let i = 0; i < elements.length; i++) {
        this.parallaxItem[i] = new BannerItem(elements[i]);
      }

      ScrollManager.bind('banner',this.toggleEffect);
      this.toggleEffect();
    }
  }

  toggleEffect() {
    if(window.scroll > this.banner.offset().top - window.h) {
      if(!this.banner.hasClass('active')) {
        this.banner.addClass('active');
        RafManager.bind('banner',this.parallax);
      }
    }else{
      if(this.banner.hasClass('active')) {
        this.banner.removeClass('active');
        RafManager.unbind('banner');
      }
    }

  }

  parallax() {
    this.ratioX = window.mouseX/window.w * -100;
    this.ratioY = window.mouseY/window.h * -50;

    this.smoothRatioX += (this.ratioX - this.smoothRatioX) * 0.05;
    this.smoothRatioY += (this.ratioY - this.smoothRatioY) * 0.05;

    for(let i=0; i<this.parallaxItem.length; i++) {
      this.parallaxItem[i].parallaxItem(this.smoothRatioX, this.smoothRatioY);
    }
  }

  destroy() {
    RafManager.unbind('banner');
    ScrollManager.unbind('banner');

    for(let i=0; i<this.parallaxItem.length; i++) {
      this.parallaxItem[i].view = null;
    }

    this.banner = null;
    this.parallaxItem = null;
    this.parallax = null;
    this.toggleEffect = null;
  }

}

export default Banner;
