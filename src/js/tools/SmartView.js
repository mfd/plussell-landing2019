import Tools from './Tools';

class SmartView {
  constructor( view = null ) {
    this.view = view;
    this.visible = false;
    this.visibility = false;
    this.offsetTop = 0;
    this.offsetBottom = 0;
		
    this.locate();
  }
  /**
	 * Check if visible in viewport
	 */
  check() {
    const top = Tools.getScrollTop();
    this.visibility = this.offsetBottom > top && this.offsetTop < top + window.innerHeight;
  }
  /**
	 *  Save the offset top position
	 */
  locate() {
    if(!this.view) {
      return;
    }
    this.offsetTop = Tools.getScrollTop() + this.view.getBoundingClientRect().top;
    this.offsetBottom = this.offsetTop + this.view.offsetHeight;
  }
  dispose() {
    this.view = null;
    this.visible = false;
    this.visibility = false;
    this.offsetTop = 0;
    this.offsetBottom = 0;
  }
}
export default SmartView;
