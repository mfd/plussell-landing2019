import BarbaPageBase from '../barba/BarbaPageBase';
//import PerfectScrollbar from 'perfect-scrollbar';
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
    this.initLightbox();
  }
  initLightbox() {
    console.log($('.module__pic-full').length);
    $('.module__pic-full').magnificPopup({
      type: 'image',
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


