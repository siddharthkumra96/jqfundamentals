class Drawer{
  constructor(id) {
    this.$blog = $("#"+id);
  }
  createDrawers(){
    let $h3InBlog = this.$blog.find("h3");
    $h3InBlog.click(this.handleClick.bind(this));
  }
  handleClick(event){
    event.preventDefault();
    let $clickedHeading = $(event.currentTarget);
    let $excerptInClickedHeading = $clickedHeading.next("p.excerpt");
    $excerptInClickedHeading.slideToggle();
    $clickedHeading.parent().siblings().find("p:visible").slideUp();
  }
}

var drawer = new Drawer("blog");
drawer.createDrawers();