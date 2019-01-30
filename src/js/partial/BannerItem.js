class BannerItem {

  constructor(view) {

    this.view = view;

    this.depth = this.view.getAttribute('data-depth');
    if(!this.depth) this.depth = 3;
  }

  parallaxItem(ratioX, ratioY) {
    if(!$('body').hasClass('mobile')) {
      this.view.style.transform = 
			this.view.style.webkitTransform = 'translate3d('+(ratioX/this.depth)+'px,'+(ratioY/this.depth)+'px,0)';
    }
  }

	
}

export default BannerItem;
