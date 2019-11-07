class InputHint {
  constructor(id) {
    this.$input = $("input[name='" + id + "']");
    this.$label = $("label[for='" + id + "']");
    this.label_text = this.$label.text();
  }
  addHint() {
    this.$input.val(this.label_text);
    this.$input
      .addClass("hint")
      .focus(this.onFocus.bind(this))
      .blur(this.onBlur.bind(this));
    this.$label.remove();
  }
  onFocus() {
    if (this.$input.val() === this.label_text && this.$input.hasClass("hint")) {
      this.$input.val("");
      this.$input.removeClass("hint");
    }
  }
  onBlur() {
    if (!this.$input.val().trim()) {
      this.$input.val(this.label_text);
      this.$input.addClass("hint");
    } else {
      this.$input.val(this.$input.val().trim());
    }
  }
}
let input = new InputHint("q");
input.addHint();
