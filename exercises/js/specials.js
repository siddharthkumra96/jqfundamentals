/* jshint esversion: 6 */
$(() => {
  const defaultValues = {
    title: '',
    text: '',
    image: '',
  };
  class AutoPopulate {
    constructor(id) {
      this.$specials = $(`#${id}`);
      this.cachedResponse = null;
      this.$target = $('<div/>');
      this.$specials.append(this.$target);
    }

    addListeners() {
      const $select = this.$specials.find('select');
      $select.change(this.getData.bind(this));
      this.$specials.find('.buttons').remove();
    }

    getData(e) {
      const optionVal = $(e.currentTarget).val();
      if (!this.cachedResponse) {
        $.get('/data/specials.json').done((res) => {
          this.setCachedReponse(res);
          this.setTarget(optionVal);
        });
      } else {
        this.setTarget(optionVal);
      }
    }

    setCachedReponse(data) {
      this.cachedResponse = data;
    }

    setTarget(optionVal) {
      if (!optionVal) {
        this.updateTarget(defaultValues);
      } else {
        this.updateTarget(this.cachedResponse[optionVal]);
      }
    }

    updateTarget(values) {
      const title = $('<h3>', { text: values.title });
      const text = $('<p>', { text: values.text });
      const image = $('<img />', { src: values.image });
      this.$target.empty();
      this.$target
        .append(title)
        .append(text)
        .append(image)
        .css('color', values.color);
    }
  }

  const specials = new AutoPopulate('specials');
  specials.addListeners();
});
