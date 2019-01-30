import BarbaController from '../barba/BarbaController';
//import PerfectScrollbar from 'perfect-scrollbar';
import FixBody from '../tools/FixBody';

class Menu {
  constructor() {
    BarbaController.addCallBack(this.close.bind(this),'before');
    this.$burger = document.querySelector('.menu__burger');
    this.$menu = document.querySelector('.menu-mobile');
    this.$shield = document.querySelector('.menu__shield');

    // Attributes
    this.status = false;
    this.running = false;

    //this.ps = new PerfectScrollbar('.menu-mobile');
    this.fixBody = new FixBody();
    this.fixBody.cancel();

    // Create Events
    this._onBurger = this.switch.bind(this);
    this._onShield = this.switch.bind(this);

    // Attach Events
    this.attach();

  }

  attach() {
    this.$burger.addEventListener('click', this._onBurger);
    //this.$shield.addEventListener('click', this._onShield);
  }

  switch() {
    if (!this.status) {
      this.open();
    }
    else {
      this.close();
    }
  }

  open(e) {
    console.log('open');
    this.status = true;
    // Update DOM
    document.documentElement.classList.add('is-menu-open');
    document.documentElement.classList.add('is-hidden');
    this.$burger.classList.add('is-active');

    this.fixBody.set();

    // $nav.toggleClass('is-active');
    // BODY.toggleClass('is-hidden');
    // BODY.toggleClass('is-nav');
  }

  close() {
    // Update DOM
    console.log('close');
    this.status = false;
    document.documentElement.classList.remove('is-menu-open');
    document.documentElement.classList.remove('is-hidden');
    this.$burger.classList.remove('is-active');
    this.fixBody.cancel();
  }
  hide() {
    $('.headerElement').removeClass('open');
  }
  destroy() {
    this.$burger.removeEventListener('click', this._onBurger);
  }
}

export default Menu;
