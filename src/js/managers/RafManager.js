/**
 * Request Animation Frame API
 */
class RafManager {
  constructor() {
    this.update = this.update.bind(this);
    this.binders = [];
    this.raf = null;
    return this;
  }
  /* Start */
  static start() {
    if(!RafManager.INSTANCE) RafManager.INSTANCE = new RafManager();
    RafManager.INSTANCE.update();
  }
  /* Stop */
  static stop() {
    window.cancelAnimationFrame( RafManager.INSTANCE.raf );
  }
  /* Update */
  update() {
    for(let i=0; i < this.binders.length; i++) this.binders[i].fn();
    this.raf = window.requestAnimationFrame( this.update );

  }
  /**
	 * Bind
	 * @param  {[type]}   id [description]
	 * @param  {Function} fn [description]
	 */
  static bind(id, fn) {
    if(!RafManager.INSTANCE) RafManager.INSTANCE = new RafManager();
    RafManager.INSTANCE.binders.push({id:id,fn:fn});
  }
  static unbind(id) {
    let tgtID = -1;
    let _this = RafManager.INSTANCE;
    for(let i=0; i < _this.binders.length; i++)
    {
      if(_this.binders[i].id === id)
      {
        tgtID = i;
        break;
      }
    }
    // avoiding fails
    if( tgtID > -1 ) _this.binders.splice( tgtID, 1);
  }
  static debug() {
    console.table( RafManager.INSTANCE.binders );
  }
}
export default RafManager;
