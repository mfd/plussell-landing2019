export default class PriceSlider {
  constructor($name,$el) {
    this.$el = $($el);
    this.rangeSliderEl = this.$el.find('.slider-ui');
    this.min = this.$el.find('[name="min"]');
    this.max = this.$el.find('[name="max"]');

    this.init();
    this.min.on('keyup mouseup paste', () => this.setMin());
    this.max.on('keyup mouseup paste', () => this.setMax());

  }
  init() {
    let min = this.min;
    let max = this.max;
    let rangeSliderEl = this.rangeSliderEl[0];
    const moneyFormat = wNumb({
      decimals: 0,
      //thousand: ' ',
      suffix: ''
    });
    this.rangeSlider = noUiSlider.create(rangeSliderEl, {
      start: [parseInt(min.val()), parseInt(max.val())],
      step: 1,
      range: {
        'min': [parseInt(min.val())],
        'max': [parseInt(max.val())]
      },
      format: moneyFormat,
      connect: true
    });
    this.rangeSlider.on('update', function(val, handle) {
      console.log(`Цена от ${val[0]} до ${val[1]} руб.`);
      min.val(moneyFormat.from(val[0]));
      max.val(moneyFormat.from(val[1]));
    });
  }
  setMin() {
    this.rangeSlider.set([this.min.val(), null]);
  }
  setMax() {
    this.rangeSlider.set([null, this.max.val()]);
  }

  destroy() {
    this.min.off('keyup mouseup paste', () => this.setMin());
    this.max.off('keyup mouseup paste', () => this.setMax());
    this.rangeSlider.destroy();
  }
}

