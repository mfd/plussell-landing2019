import SmartView from '../tools/SmartView';
import ResizeManager from '../managers/ResizeManager';


class Carousel extends SmartView {

  constructor() {
    super(document.querySelector('.partner'));
    this.wrapper = this.view.querySelector('.partners-container');

    ResizeManager.bind('.partner', this.resize.bind(this));
    // this.refresh = ::this.refresh;
    // this.cleanup = ::this.cleanup;
    this.refresh = this.refresh.bind(this);
    this.cleanup = this.cleanup.bind(this);

    this.timer = -1;
    this.displayElements = 5;

    // init
    this.resize();
  }
  /**
     * Build
     */
  build() {
    this.displayElements = 5;
    const ww = window.innerWidth;
    if( ww < 768 )
      this.displayElements = 2;
    else if( ww < 1024 )
      this.displayElements = 3;
    window.clearInterval( this.timer );
    const w     = this.wrapper.offsetWidth;
    const step  = Math.round(w * ( 1 / this.displayElements - 0.01 ) );
    const offset = ww < 1024 ? ( ww < 768 ? Math.round(w * 0.05) : Math.round(w * 0.04) ) : Math.round(w * 0.035);
    this.items = this.view.querySelectorAll('.partner-logo');
    for(let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      TweenMax.set( item, {css:{transform:'translateX(0)', left: step * Math.min(i,this.displayElements) + offset + 'px'} });
      //security
      item.classList.remove('hidden');
      if(i === 0) item.classList.add('first');
      if(i >= this.displayElements) {
        item.classList.add('hidden');
      } else {
        item.style.opacity = 1;
        item.style.visibility = 'visible';
      }
    }
    if( this.items.length > this.displayElements ) this.timer = window.setInterval( this.refresh, 4500);
  }
  refresh() {
    super.locate(); // ??????
    super.check();
    // smart view check
    if(!this.visibility) return;
    const last = this.wrapper.querySelector('li.hidden'); // first available
    if (last) last.classList.remove('hidden');
    const step  = Math.round(this.wrapper.offsetWidth * ( 1 / this.displayElements - 0.01 ) );
    TweenMax.to( last, 0.6, {css:{autoAlpha:1}, delay:0.5 });
    TweenMax.to( this.wrapper.querySelector('.first'), 0.35, {css:{autoAlpha:0} });
    const tl = new TimelineMax({ onComplete:this.cleanup});
    tl.staggerTo( this.items, 0.6, {css:{transform:`translateX(${-step/2}px) skew(-6deg,0)`}, ease:Power2.easeIn }, 0.03);
    tl.staggerTo( this.items, 0.6, {css:{transform:`translateX(${-step}px) skew(0deg,0)`}, ease:Back.easeOut}, 0.03, 0.6 );

  }
  cleanup() {
    const first = this.wrapper.querySelector('.first');
    this.wrapper.querySelector('ul').appendChild(first);
    first.classList.add('hidden');
    first.classList.remove('first');
    this.build(); // M A N D A T O R Y
  }

  destroy() {
    //this.dipose();
  }
  /**
     * Resize
     */
  resize() {
    this.build();
    if( this.items.length > 0 ) {
      this.wrapper.style.height = 0 + this.items[0].clientHeight + 'px';
      TweenMax.killTweensOf( this.items );
    }
    super.locate();
  }

}

export default Carousel;
