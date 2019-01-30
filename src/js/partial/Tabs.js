//import PerfectScrollbar from 'perfect-scrollbar';
class TabsItem {
  constructor(el) {
    let opt = {
      el: el,
      dom: {},
      isMobile: $('body').hasClass('mobile'),
      hash: document.location.hash
    };
    // Elements
    this.opt = opt;

    this.el = el;
    this.init();
  }
  init() {
    //console.log('init tab', this.el);

    //BarbaController.addCallBack(this.hide.bind(this),'before');

    $(this.el).on('click', "li:not('.active') a", this.clickTab.bind(this));
    $(this.el).on('click', 'li.active a', this.toggleMobileMenu.bind(this));

    if (this.opt.isMobile) {
      this.scrollBlock();
    }
    //console.log(this.opt.hash);
    if (this.opt.hash) {
      console.log('start',this.opt.hash);
      //this.pageLoadCorrectTab(this.opt.hash);
    }
    //
  }
  destroy() {
    $(this.el).off('click', "li:not('.active') a", this.clickTab.bind(this));
    $(this.el).off('click', 'li.active a', this.toggleMobileMenu.bind(this));
  }
  hide() {
    //console.log('tabs hide');
  }
  clickTab(e) {
    //console.log(event, hash);
    //console.info(e, e.target, e.currentTarget);
    let hash = $(e.currentTarget).attr('href');
    this.changeTab(hash);
    e.preventDefault();
  }
  changeTab(hash) {
    //console.log('cng',hash);
    var $anchor = $(this.el).find("[href='"+hash+"']");
    var $div = $(this.el).find(hash);
    // activate correct anchor (visually)
    $anchor.parent().addClass('active').siblings().removeClass('active');
    $anchor.addClass('active').parent().siblings().find('a').removeClass('active');

    // activate correct div (visually)
    $div.addClass('active').siblings().removeClass('active');

    // update URL, no history addition
    // You'd have this active in a real situation, but it causes issues in an <iframe> (like here on CodePen) in Firefox. So commenting out.
    // window.history.replaceState("", "", hash);

    // Close menu, in case mobile
    //$anchor.closest('ul').removeClass('open');
    $(this.el).removeClass('open');
  }

  // If the page has a hash on load, go to that tab
  pageLoadCorrectTab(hash) {
    this.changeTab(hash);
  }

  toggleMobileMenu(event) {
    console.log('mob menu', event);
    event.preventDefault();
    //console.log('toggle mobile', el);
    //$(el).closest('ul').toggleClass('open');
    $(this.el).toggleClass('open');
  }
  scrollBlock() {
    console.log('init mobile scroll');
    let el = $(this.el).find('.tabs__caption');
    let elw = el.find('li').length;

    if (elw < 3) return;

    this.ps = new PerfectScrollbar(
      el[0], {
        //suppressScrollX: true,
        suppressScrollY: true
      });

    return this.ps;
  }
}


class Tabs {
  constructor(view) {
    this.view = view;
    this.elements = $(this.view).find('.tabs');

    this.init();
  }
  init() {
    console.log('init tabs');
    this.Tab = [];

    //BarbaController.addCallBack(this.hide.bind(this),'before');
    var elements = this.elements;
    for(let i = 0; i < elements.length; i++) {
      this.Tab[i] = new TabsItem(elements[i]);
    }
  }
  destroy() {
    console.log('destroy tabs');
    var elements = this.elements;
    for(let i = 0; i < elements.length; i++) {
      this.Tab[i] = null;
    }
  }
}

export default Tabs;
