import BarbaPageBase from '../barba/BarbaPageBase';
import PerfectScrollbar from 'perfect-scrollbar';
import 'magnific-popup';

export default class OneItem extends BarbaPageBase {

  constructor() {
    super('oneitem');
    this.win = $(window).width();

  }

  display(container) {
    console.log('Start One Item page');

  }
  onEnter() {
    super.onEnter();

  }

  onEnterCompleted() {
    super.onEnterCompleted();
    this.gallery = $(this.view).find('.oneitem__gallery-carousel');
    //this.itemGallery();
    //this.initModal();
  }

  itemGallery() {
    let $gallery = this.gallery;
    //debugger;
    $gallery.find('.owl-carousel').owlCarousel({
      loop:true,
      items:1,
      margin:0,
      stagePadding: 0,
      autoplay:false
    });

    if (this.win > 768) {
      var dotcount = 1;
      $gallery.find('.owl-dot').each(function() {
        $( this ).addClass( 'dotnumber' + dotcount);
        $( this ).attr('data-info', dotcount);
        dotcount=dotcount+1;
      });
      var slidecount = 1;

      $gallery.find('.owl-item').not('.cloned').each(function() {
        $(this).addClass( 'slidenumber' + slidecount);
        slidecount=slidecount+1;
      });

      $gallery.find('.owl-dot').each(function() {
        var grab = $(this).data('info');
        var slidegrab = $('.slidenumber'+ grab +' img').attr('src');
        $(this).css('background-image', 'url('+slidegrab+')');
      });

      var amount = $('.owl-dot').length;
      var gotowidth = 100/amount;
      $gallery.find('.owl-dot').css('height', gotowidth+'%');

      //$('.owl-dots').wrapInner( "<div class='scroll-wrap'></div>");
      //$('.owl-dots').find('.scroll-wrap').css({ height: $('.oneitem__gallery-carousel').height()});

      this.owlDotScroll = new PerfectScrollbar($gallery.find('.owl-dots')[0],{
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 10,
        suppressScrollX: true,
        useBothWheelAxes: true
      });

      $gallery.magnificPopup({
        delegate: '.owl-item:not(.cloned) a',
        type: 'image',
        //removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
          beforeOpen: function() {
            // just a hack that adds mfp-anim class to markup
            //debugger;
            this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
            //this.st.mainClass = this.st.el.attr('data-effect');
            //this.st.mainClass = 'mfp-zoom-out';
          }
        },
        tLoading: 'Загрузка #%curr%...',
        //mainClass: 'mfp-img-mobile',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
          preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
          tError: '<a href="%url%">Изображение #%curr%</a> не может быть загружено',
          titleSrc: function(item) {
            //return item.el.attr('title') + '<small></small>';
            return $('.oneitem__title').html();
          }
        },
        verticalFit: true

      });
    }
  }

  initModal() {
    $(this.view).find('a.popuplink').magnificPopup({
      type: 'ajax',
      removalDelay: 1000,
      closeBtnInside:true,
      fixedContentPos:true,
      closeMarkup :
        `<button title="%title%" type="button" class="mfp-close">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 29.41 29.41">
            <polygon points="29.41 1.41 28 0 14.71 13.29 1.41 0 0 1.41 13.29 14.71 0 28 1.41 29.41 14.71 16.12 28 29.41 29.41 28 16.12 14.71 29.41 1.41"/>
          </svg>
        </button>`,
      callbacks: {
        parseAjax: function(mfpResponse) {
          mfpResponse.data = $(mfpResponse.data).find('.ajaxcontent');
        },
      }
    });
  }
  display() {

  }



  hide(container, promise) {
    super.hide(container,promise);

    // let $galleryContainer = this.gallery;
    // $galleryContainer.trigger('destroy.owl.carousel');
    // $('.owl-item:not(.cloned) a', $galleryContainer).off('click');
    // $('.owl-item:not(.cloned) a', $galleryContainer).removeData('magnificPopup');
    // this.owlDotScroll.destroy();
    // this.owlDotScroll = null;
    // this.gallery = null;
  }
}


