import 'babel-polyfill';

// import $ from 'jquery';
// import jQuery from 'jquery';
// window.$ = $;
// window.jQuery = jQuery;

// import 'TweenMax';
// import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
// import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
// import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

//import 'TimelineLite';
//import 'owl.carousel';

///import 'fullpage.js/dist/jquery.fullpage.extensions.min';
//import 'fullpage.js/dist/jquery.fullPage';
//import PerfectScrollbar from 'perfect-scrollbar';

import FixBody from 'js-util/FixBody';

import DeviceInfo from './tools/DeviceInfo';
//import ResizeManager from './managers/ResizeManager';
import BarbaController from './barba/BarbaController';
//import MouseManager from './managers/MouseManager';
//import ScrollManager from './managers/ScrollManager';
//import RafManager from './managers/RafManager';
// import Menu from './partial/Menu';

import Header from './partial/Header';
//import Menu from './partial/Menu';
import owlCarousel from './partial/owlCarousel';
//Pages

import Home from './template/Home';
import Page from './template/Page';
import OneItem from './template/OneItem';
import Stores from './template/Stores';

class Main {

  constructor() {
    $(this.ready.bind(this));
  }

  ready() {
    window.container = document.getElementById('barba-wrapper');
    DeviceInfo.check();
    //ResizeManager.start();
    BarbaController.start(true);

    //MouseManager.start();
    //ScrollManager.start();

    //RafManager.start();


    // INIT VIEWS
    this.home = new Home();
    this.page = new Page();
    this.oneitem = new OneItem();
    this.stores = new Stores();

    this.header = new Header();
    //this.menu = new Menu();

    BarbaController.register(this.home);
    BarbaController.register(this.page);
    BarbaController.register(this.oneitem);
    BarbaController.register(this.stores);

    //onPageReady
    Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {
      let $body = $('body');
      $body.removeClass('page-'+oldStatus.namespace);
      console.log('changeNamespace');
      $body.addClass('page-'+currentStatus.namespace);
    });



    // Trigger first anim
    const container = document.querySelector('.barba-container');
    const first = BarbaController.pages[ container.getAttribute('data-namespace') ];
    const delay = 0.3;
    if(first) TweenMax.delayedCall( delay, () => {
      first.onEnter();
      first.onEnterCompleted();
      first.display( container );
    });

    //setTimeout(function() {
    $('body').addClass('is-loaded');

    //}, 600);

    setTimeout(function() {
      $('html').addClass('has-dom-loaded');
    }, 1000);





  }

}

new Main();
