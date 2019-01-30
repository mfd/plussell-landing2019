//import 'fullpage.js/dist/jquery.fullPage.js';
//import 'IScroll';

export default class HomeBG {

  constructor(view) {

    this.view = view;

    if (!$('body').hasClass('mobile')) {
      this.initFullPage();
    }

    //this.initFullPage();

    //this.changeBg();
    $(window).on('scroll', this.changeBg);


  }
  initFullPage() {
    console.log('init fullpage');
    let self = this;
    let colors = ['body--smoke','body--gray', 'body--white'];

    this.myFullpage = new fullpage('#fullpage', {
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      scrollOverflow: true,
      onLeave: function(section, origin, destination, direction) {
        if (origin.index === 0) {
          $('body').addClass(colors[0]);
        } else {
          $('body').removeClass(colors[0]);
        }
        if (origin.index === 1) {
          $('body').addClass(colors[1]);
        } else {
          $('body').removeClass(colors[1]);
        }
        if (origin.index === 2) {
          $('body').addClass(colors[2]);
        } else {
          $('body').removeClass(colors[2]);
        }
      }
    });
    $('body').addClass(colors[0]);
  }

  changeBg() {
    //console.log('start changeBg');
    let $st = $(window).scrollTop();
    let $bg1 = $('#fullpage .section').height() + 30;
    let $bg2 = ($('#fullpage .section').height() * 2) + 100;
    console.log('scroll', $st, $bg1);

    if ( $st >= 0 && $st < $bg1) {
      console.log('show1');
      $('body').addClass('body--smoke');
    } else {
      $('body').removeClass('body--smoke');
    }

    if ( $st > $bg1 && $st < $bg2) {
      console.log('show2', $bg2);
      $('body').addClass('body--gray');
    } else {
      $('body').removeClass('body--gray');
    }

  }
  destroy() {
    $(window).off('scroll', this.changeBg);
    $('body').removeClass('body--smoke');
    $('body').removeClass('body--gray');
    if ($('html').hasClass( 'fp-enabled' ) ) {
      fullpage_api.destroy('all');
    }
  }
}
