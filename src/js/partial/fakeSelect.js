export default class FakeSelect {
  constructor(name, el, callback) {
    this.el = el;
    this.el.classList.add('fake-select');
    this.select = this.el.querySelector('select');
    this.label = this.el.querySelector('[data-fake-label]');
    this.callback = callback || function() {};
    this.init();
  }

  bind() {
    this.update = this.update.bind(this);
    this.select.addEventListener('change', this.update);
  }
  init() {
    this.update();
    this.bind();
  }
  destroy() {
    this.select.removeEventListener('change', this.update);
  }

  update() {
    const index = this.select.selectedIndex;
    const option = this.select.options[index];
    // const value = option.value;

    this.label.textContent = option.textContent;

    if (typeof this.oldIndex !== 'undefined' && index !== this.oldIndex) {
      this.callback(option);
    }

    this.oldIndex = index;
  }
}
