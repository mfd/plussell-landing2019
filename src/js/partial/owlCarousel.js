//import ResizeManager from '../managers/ResizeManager';
//import 'owlCarousel';
import DeviceInfo from '../tools/DeviceInfo';

class Carousel {

  constructor() {
    console.log('owlCar', $('.owl-gallery').length);
    this.el = $('.owl-gallery');
    this.win = $(window).width();
    this.init();
  }
  /**
     * Build
     */
  init() {

    let $this = this.el;

    let isData = $('.owl-gallery[data-count]').length;
    let count  = isData ? $this.attr('data-count').split('|') : ['1', '3', '3'];

    var isGalleryLook = $this.hasClass('owl-gallery-look');

    if ($('.oneitem__gallery-carousel').length > 0) {
      //this.initOneItemGallery();
    }



    $this.owlCarousel({
      loop: true,
      //margin: 10,
      stagePadding: 10,
      dots: false,
      responsiveClass:true,
      responsive:{
        0:{
          items:count[0],
          nav:true,
          //dots: true,
        },
        600:{
          items:count[1],
          nav:true
        },
        1000:{
          items:count[2],
          nav:true,
          loop:false
        }
      }
    });

    if (isGalleryLook) {
      $this.find('.owl-stage >:first-child').addClass('activeLook');
      $this.find('.owl-stage .owl-item').on('click', function() {
        $(this).siblings().removeClass('activeLook');
        $(this).addClass('activeLook');
        var n = $(this).index();
        console.log(n);
        $this.trigger('to.owl.carousel', [n, 500, true]);// 500 is the speed of the transition in ms
        return false;
      });
    }

  }
  initOneItemGallery() {

  }

  cleanup() {

  }

  destroy() {
    console.log('destroy', this.el);
    this.el.trigger('destroy.owl.carousel');
  }

  resize() {
    console.log('resize');
  }

}

export default Carousel;
