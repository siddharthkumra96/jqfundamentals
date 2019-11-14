// Q1
let listItems = '';
for (let i = 8; i < 13; i++) {
  listItems += `<li> List Item ${i} </li>`;
}
$('#myList').append($(listItems));
// Q2
const q2 = $('#myList :nth-child(odd)').remove();
// Q3
const q3 = $('div.module:last')
  .append($('<h2 />', { text: 'Hello' }))
  .append($('<p />', { text: 'World' }));
// Q4
const q4 = $('#specials select').append($('<option />', { value: 'Wednesday', text: 'Wednesday' }));
// Q5
const q5 = $('div.module:last').after(
  $('<div />', { className: 'module' })
    .append($("img[alt='fruit']").clone())
);
