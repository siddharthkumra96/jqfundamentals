//EXERCISE 1
{
  //Q1
  let q1 = $( "div.module" );
  //Q2
  let q2_option1 = $( "ul#myList :nth-child(3)" ); //too specific
  let q2_option2 = $( "ul#myList li" ).eq(2); //best -> returns a jQuery object, the selector is not too specific
  let q2_option3 = $( "ul#myList li" ).get(2); //returns a DOM element -> doesn't support much of jquery methods
  //Q3
  let q3 = $( "form#search label[for='q']" );
  //Q4
  let q4 = $( ":hidden" ).length;
  //Q5
  let q5 = $( "img[alt]" ).length;
  //Q6
  let q6 = $( "table tbody tr:nth-child(odd)" );
}

//EXERCISE 2
{
  //Q1
  let q1 = $( "img[alt]" ).each( 
    function(index, element)
    { 
      console.log(element.alt)
    }
  );
  //Q2
  let q2 = $( "form input[name='q']" ).parent().addClass("newClass");
  //Q3
  let q3 = $( "#myList .current").next().addClass("current").end().removeClass();
  //Q4
  let q4 = $( "#specials select" ).parent().siblings().find(":submit");
  //Q5
  let q5 = $( "#slideshow :first").siblings().addClass("disabled").end().addClass("current");

}
//EXERCISE 3  
{
  //Q1
  for( let i = 8; i<13; i++){
    let listElement = "<li> List Item "+i+"</li>";
    $( listElement ).appendTo( "#myList" );
  }
  //Q2
  let q2 = $( "#myList :nth-child(odd)" ).remove();
  //Q3
  let q3 = $( "div.module:last" ).append("<h2>Hello</h2><p>World</p>");
  //Q4
  let q4 = $( "#specials select" ).append("<option value=\"Wednesday\">Wednesday</option>");
  //Q5
  let q5 = $( "div.module:last" ).after( $("<div class='module'></div>").append( $( "img[alt='fruit']" ).clone()));
  
}

