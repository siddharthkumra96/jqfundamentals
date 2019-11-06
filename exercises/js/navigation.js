class DropDownNavigation{
  constructor(id){
    this.$navEls = $("#"+id+" li");
  }
  addHover(){
    this.$navEls.hover(this.hoverHandler.bind(this), this.callbackHover.bind(this)).click(this.clickHandler.bind(this));
  }
  hoverHandler(e){
    let $currentEl = $(e.currentTarget);
    $currentEl.addClass("hover").find("ul").show();
  }
  callbackHover(e){
    let $curEl = $(e.currentTarget); 
    $curEl.removeClass("hover").find("ul").hide();
  }
  clickHandler(e){
    e.stopPropagation();
    window.location.assign($(e.currentTarget).find("a").attr("href"));
  }
}
var navDropDown = new DropDownNavigation("nav");
navDropDown.addHover();