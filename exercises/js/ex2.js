//Q1
let q1 = $( "img[alt]" ).each(function(index, element){ 
  console.log(element.alt);
});
//Q2
let q2 = $( "form input[name='q']" ).parent().addClass("newClass");
//Q3
let q3 = $( "#myList .current").next().addClass("current").end().removeClass();
//Q4
let q4 = $( "#specials select" ).parent().siblings().find(":submit");
//Q5
let q5 = $( "#slideshow :first").siblings().addClass("disabled").end().addClass("current");