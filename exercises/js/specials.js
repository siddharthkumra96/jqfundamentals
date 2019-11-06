class DynamicSelect{
  constructor(id){
    this.$specials = $("#"+id);
    this.cachedResponse;
    this.$target = $("<div/>");
    this.$specials.append(this.$target);
  }
  addListeners(){
    let $select = this.$specials.find("select");
    $select.change(this.getData.bind(this));
    this.$specials.find(".buttons").remove();
  }
  getData(e){
    let $option = $(e.currentTarget);
    let val = $option.val();
    if(!this.cachedResponse){
      $.get("/data/specials.json").done((res)=> {
        this.cachedResponse=res;
        this.updateTarget(res[val]);
      });
    }
    else{
      this.updateTarget(this.cachedResponse[val]);
    }
  }
  updateTarget(values){
    let html = "";
    let title= "<h3>"+values.title+"</h3>";
    let text = "<p>"+values.text+"</p>";
    let image = "<img src=\""+values.image+"\"/>";
    html = title + text + image;
    this.$target.html(html);
    this.$target.css("color", values.color);
  }
}
var specials = new DynamicSelect("specials");
specials.addListeners();