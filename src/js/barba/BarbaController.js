import Tools from '../tools/Tools';

/**
 *
 * BARBA
 * CONTROLLER
 *
 */

class BarbaController {

  static start( verbose = true ) {

    window.Barba = require('barba.js');

    // params
    BarbaController.verbose = verbose;
    BarbaController.pages = {};
    BarbaController.callbacks = {
      'before' : [],
      'after' : []
    };

    // Barba
    Barba.Pjax.getTransition = BarbaController.getTransition;
    Barba.Pjax.cacheEnabled = false;
    Barba.Pjax.start();
  }

  static getTransition() {
    const t = Barba.BaseTransition.extend({

      animIn: function() {
        console.log('---- Launch transition 👊 -----');
        console.log('animIn');

        const shapeLeave = new TimelineLite({
          onComplete: () => {
            $('html').addClass('has-dom-loaded');
          },
          paused : true
        });
        shapeLeave.fromTo($('.shapeTransit2'), 0.7, {css:{bottom:'0'}}, {css:{bottom:'-100%'}, ease:'Power1.easeInOut'},0);
        shapeLeave.fromTo($('.shapeTransit1'), 0.7, {css:{bottom:'0%'}}, {css:{bottom:'-100%'}, ease:'Power1.easeInOut'},0.3);
        shapeLeave.restart();
        //$('.barba-container');
        $(this.newContainer).addClass('is-animate');

      },

      start: function() {

        if(BarbaController.loader) BarbaController.loader.display();

        const before = BarbaController.callbacks.before;
        if(before.length > 0) for(let i = 0; i < before.length; i++ ) before[i]();

        //console.log('start');

        Promise
          .all([
            this.newContainerLoading,
            this.hideCurrent(),
            this.animOut()
          ])
          .then(() => {
            this.display();
            this.animIn();
          });
      },

      animOut: function() {
        //console.log('animOut');
        $('.barba-container').removeClass('is-animate');
        $('html').removeClass('has-dom-loaded');
        let deferred = Barba.Utils.deferred();
        //debugger;

        const shapeEnter = new TimelineLite({
          paused : true,
          onComplete:() => {
            deferred.resolve();
          }
        });
        shapeEnter.fromTo($('.shapeTransit1'), 0.7, {css:{bottom:'-100%'}}, {css:{bottom:'0%'}, ease:'Power1.easeInOut'},0);
        shapeEnter.fromTo($('.shapeTransit2'), 0.7, {css:{bottom:'-100%'}}, {css:{bottom:'0%'}, ease:'Power1.easeInOut'},0.3);
        shapeEnter.restart();
        return deferred.promise;

      },

      hideCurrent: function() {
        let deferred = Barba.Utils.deferred();


        if(BarbaController.verbose) console.log('%cHide current', 'color:#ccc;');

        const id 	= this.oldContainer.getAttribute('data-namespace');
        const page 	= BarbaController.pages[id];

        console.log('----- ❌ [VIEW]:hide - ', id);


        if(page)
          page.hide( this.oldContainer, deferred.resolve );
        else
          deferred.resolve();

        return deferred.promise;
      },

      display: function() {

        if(BarbaController.verbose) console.log('%cDisplay', 'color:#ccc;', this.newContainer.getAttribute('data-namespace'));

        const id 	= this.newContainer.getAttribute('data-namespace');
        const page 	= BarbaController.pages[id];
        console.log('----- ✅ [VIEW]:display :', id);


        if(!page) console.error("BarbaController :: View doesn't exist");
        if(!page) BarbaController.pages['page'];
        Tools.scrollTo(0,0);

        window.container.appendChild(this.newContainer);
        page.display( this.newContainer );

        const after = BarbaController.callbacks.after;
        if(after.length > 0) for(let i = 0; i < after.length; i++ ) after[i]();

        this.done();

        if(BarbaController.loader) BarbaController.loader.hide();
      }
    });
    return t;
  }

  /**
	 * Add Loader
	 * Loader object needs to get a display/hide methods
	 */
  static addLoader( loader ) {

    BarbaController.loader = loader;

  }

  /**
	 * Register
	 * Page must extends BarbaPageBase !
	 */
  static register( page ) {

    BarbaController.pages[page.id] = page;
  }

  /**
	 * Add CallBack
	 * Param must be function
	 */
  static addCallBack( callback, timing ) {

    if( timing !== 'before' && timing !== 'after' ) {
      console.error('BarbaController :: addCallBack :: Timing is invalid', timing);
      return;
    }

    BarbaController.callbacks[timing].push(callback);

  }

}

export default BarbaController;
