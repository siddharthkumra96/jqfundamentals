var cachedResponse;
var $specials = $("#specials");
var $target = $("<div/>");
$specials.append($target);
var $select = $specials.find("select");
$select.change(function(){
  let $this = $(this);
  let val = $this.val();
  if(!cachedResponse){
    $.get("/data/specials.json").done((res)=> {
      cachedResponse=res;
      fillTarget(res[val]);
    });
  }
  else{
    fillTarget(cachedResponse[val]);
  }
});
function fillTarget(values){
  let html = "";
  let title= "<h3>"+values.title+"</h3>";
  let text = "<p>"+values.text+"</p>";
  let image = "<img src=\""+values.image+"\"/>";
  html = title + text + image;
  $target.html(html);
  $target.css("color", values.color);
}
$specials.find(".buttons").remove();

