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