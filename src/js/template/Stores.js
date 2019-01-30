import BarbaPageBase from '../barba/BarbaPageBase';
//import StoreMap from '../partial/StoreMap';
// const assign = require('lodash/assign');
// const forEach = require('lodash/forEach');
// const find = require('lodash/find');
import MapStores from '../partial/MapStores.js';

(function($) {
  $(document).on('change', '.select-store select', function() {
    var val = Number(this.value);
    if (val !== 0) {
      $('ul.b-stores-list li.store__item').each(function() {
        if ((Number($(this).data('select'))) !== val)
          $(this).hide();
        else $(this).show();
      });       
    } else {
      $('ul.b-stores-list li.store__item').each(function() {
        $(this).show();
      });
    }     
  });
})(jQuery);

export default class Stores extends BarbaPageBase {
  constructor() {
    super('stores');
  }
  display(container, promise, context) {
    super.display(container, promise, context);
  }
  onEnterCompleted() {
    super.onEnterCompleted();
    console.log('🗺');
    this.storeMap = new MapStores(this.view);
  }
  onLeave() {
    super.onLeave();
    this.storeMap.destroy();
  }
  hide(container, promise) {
    super.hide(container,promise);
    // this.listEpisode.kill();
    // this.listEpisode = null;
  }
}
