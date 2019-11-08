/* jshint esversion:6 */
class StackOfElements {
  constructor() {
    this.counter = 1;
    this.$mainContainer = $("<div/>", { class: "mainContainer" });
    this.$stackContainer = $("<div/>", {
      class: "stackContainer",
      text: "Stack is empty!"
    }).on("click", "div.stackEl", this.clickHandler.bind(this));
    this.$stackElement = $("<div/>", { class: "stackEl" });
  }
  display() {
    this.$addButton = $("<button/>", { text: "Add", class: "addButton" }).on(
      "click",
      this.addHandler.bind(this)
    );
    this.$addButton.appendTo(this.$mainContainer);
    this.$stackContainer.appendTo(this.$mainContainer);
    this.$mainContainer.appendTo("body");
  }
  addHandler(e) {
    if (this.counter === 1) {
      this.$stackContainer.text("");
    }
    let $newStackElement = this.$stackElement.clone();
    $newStackElement.text(this.counter++);
    $newStackElement.appendTo(this.$stackContainer);
  }
  clickHandler(e) {
    let $targetElement = $(e.target);
    if (this.$stackContainer.children(":last").get(0) === e.target) {
      $targetElement.remove();
      this.counter--;
    } else {
      $targetElement.css("background-color", "yellow");
    }
    if (this.counter === 1) {
      this.$stackContainer.text("Stack is empty!");
    }
  }
}
var stack = new StackOfElements();
stack.display();
