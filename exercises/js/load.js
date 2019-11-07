class LoadBlogData{
  constructor(blogId){
    this.$blog = $("#"+blogId);
  }
  addListeners(){
    let $h3s = this.$blog.find("h3");
    $h3s.each(function(i, h3){
    let $h3 = $(h3);
    let $h3Container = $("<div/>");
    $h3.data("container", $h3Container);
    $h3Container.insertAfter($h3);
    }).click(this.loadPostData.bind(this));
  }
  loadPostData(e){
    e.preventDefault();
    let $targetH3 = $(e.currentTarget);
    let $container = $targetH3.data("container");
    let id  = "#" + $targetH3.find("a").attr("href").split("#")[1];
    $container.load("data/blog.html " + id);
  }
}
var blog = new LoadBlogData("blog");
blog.addListeners();