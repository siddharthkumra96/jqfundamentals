let $blog = $("#blog");
let $h3s = $blog.find("h3");
$h3s.each(function(i, h3){
  let $h3 = $(h3);
  let $h3Container = $("<div/>");
  $h3.data("container", $h3Container);
  $h3Container.insertAfter($h3);
  }).click(function(e){
    e.preventDefault();
    let $this = $(this);
    let $container = $this.data("container");
    let id  = "#" + $this.find("a").attr("href").split("#")[1];
    $container.load("data/blog.html " + id); //space to filter with the provided id
  });