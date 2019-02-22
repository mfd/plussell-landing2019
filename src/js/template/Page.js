import BarbaPageBase from '../barba/BarbaPageBase';
//import tippy from 'tippy.js';

class Page extends BarbaPageBase {

  constructor() {
    super('page');
  }

  display(container) {

    console.log('Start page');



    // Scroll
    //this.pagination = new TimelineLite();
    //this.controller = new ScrollMagic.Controller();
    //this.listItems = new TimelineLite();
    //this.head = new TimelineLite();

  }
  onEnter() {
    super.onEnter();

    // this.gridItems = new TimelineLite();
    // this.gridItems.set(this.view.querySelectorAll('.grid__catalog .item'), {
    //   opacity: 0,
    //   y: 20,
    // });


    this.tips = [];

    // this.view.querySelectorAll('[data-tippy]').forEach(el => {
    //   this.tips.push(
    //     tippy(el)
    //   );
    // });



  }

  onEnterCompleted() {
    super.onEnterCompleted();

  }

  display() {
    // this.gridItems.staggerTo(
    //   this.view.querySelectorAll('.grid__catalog .item'),
    //   10,
    //   {
    //     opacity: 1,
    //     y: 0,
    //     ease: Power4.easeOut,
    //   },
    //   0.1
    // );

    //debugger;
  }
  hide(container, promise) {
    super.hide(container,promise);

    this.tips = null;
    // const first = this.tips[0];
    // first.destroy(first.store[0].popper);

    //this.gridItems.kill();
    //this.gridItems = null;

  }
}

export default Page;
