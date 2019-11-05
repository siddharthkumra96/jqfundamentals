//step1
let $modules = $( "div.module" ).hide();
//step2
let $unorderedList = $( "<ul/> ");
$unorderedList.insertBefore( "div.module:first" );
//step3
$modules
  .each(function(idx, module){ 
    let listItem = "<li>" + $( module ).find("h2").text() + "</li>"; 
    $unorderedList.append(
      $( listItem ).data("module", $( module ))
    );
  }
);
//step4
function clickHandler(){
  let $elementClicked = $( this );
  $elementClicked
    .addClass("current")
    .siblings()
    .removeClass("current")
    .each(function(idx, listItem){
      $( listItem ).data("module").hide();
      }
    )
    .end().data("module").show();
};
$unorderedList.find("li")
  .each(function(idx, listItem){
    $( listItem ).click(clickHandler);
  }
);
//step5
let $firstElementInList = $unorderedList
  .find("li").eq(0);
$firstElementInList.data("module").show();
$firstElementInList.addClass("current");