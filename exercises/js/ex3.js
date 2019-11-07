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