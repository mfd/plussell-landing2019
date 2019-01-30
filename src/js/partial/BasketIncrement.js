export default class BasketIncr {
  constructor($name,$el) {
    this.$el = $($el);

    this.$input = this.$el.find('.js-input');

    this.min = this.$input.attr('min') || false;
    this.max = this.$input.attr('max') || false;

    this.$el.on('click.incrementer', '.js-decrement', () => this.decrement());
    this.$el.on('click.incrementer', '.js-increment', () => this.increment());
  }
  init() {

  }
  decrement() {
    var value = this.$input.val();
    value--;
    if (!this.min || value >= this.min) {
      this.$input.val(value);
      this.$el.find('.js-decrement').removeClass('is-disabled');
      this.$el.find('.js-increment').removeClass('is-disabled');
    } else {
      this.$el.find('.js-decrement').addClass('is-disabled');
    }

  }

  increment() {
    var value = this.$input.val();
    value++;
    if( !this.max || value <= this.max) {
      this.$input.val(value++);
      this.$el.find('.js-decrement').removeClass('is-disabled');
      this.$el.find('.js-increment').removeClass('is-disabled');
    } else {
      this.$el.find('.js-increment').addClass('is-disabled');
    }
  }
  destroy() {
    this.$el.off('click.incrementer', '.js-decrement', () => this.decrement());
    this.$el.off('click.incrementer', '.js-increment', () => this.increment());
  }
}

