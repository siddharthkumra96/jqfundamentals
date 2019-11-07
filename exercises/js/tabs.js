class Tabs{
  constructor(className) {
    this.$modules = $("div."+className).hide();
    this.$unorderedList = $( "<ul/> ");  
  }
  createList(){
    this.$unorderedList.insertBefore(this.$modules);
    let that = this;
    this.$modules.each(function(idx, module){ 
      let $listItem = $("<li>" + $( module ).find("h2").text() + "</li>"); 
      that.$unorderedList.append(
        $listItem.data("module", $( module )).click(that.clickHandler.bind(that)));
      });
    }
    clickHandler(e){
      let $elementClicked = $(e.currentTarget);
      $elementClicked
      .addClass("current")
      .siblings()
      .removeClass("current")
      .each(function(idx, listItem){
        $( listItem ).data("module").hide();
      })
      .end().data("module").show();
    };
    createTabs(){
      this.createList();
      let $firstElementInList = this.$unorderedList.find("li").eq(0);
      $firstElementInList.addClass("current").data("module").show();
    }
  }
  let tabbedModules = new Tabs("module");
  tabbedModules.createTabs();