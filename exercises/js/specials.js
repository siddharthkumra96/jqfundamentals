/* jshint esversion: 6 */
const defaultValues = {
  title: "",
  text: "",
  image: ""
};
class AutoPopulate {
  constructor(id) {
    this.$specials = $("#" + id);
    this.cachedResponse = null;
    this.$target = $("<div/>");
    this.$specials.append(this.$target);
  }
  addListeners() {
    let $select = this.$specials.find("select");
    $select.change(this.getData.bind(this));
    this.$specials.find(".buttons").remove();
  }
  getData(e) {
    let optionVal = $(e.currentTarget).val();
    if (!this.achedResponse) {
      $.get("/data/specials.json").done(res => {
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
    let title = $("<h3>", { text: values.title });
    let text = $("<p>", { text: values.text });
    let image = $("<img />", { src: values.image });
    this.$target.empty();
    this.$target
      .append(title)
      .append(text)
      .append(image)
      .css("color", values.color);
  }
}
$(function() {
  var specials = new AutoPopulate("specials");
  specials.addListeners();
});
