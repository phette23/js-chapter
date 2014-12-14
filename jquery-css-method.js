// first add two example elements to the page
// every line that starts with a "$" is using jQuery
$('body').append('<p class=one>One style applied.</p><br>')
    .append('<p class=multiple>Multiple styles applied.</p>');

// apply one style using two strings
// this makes the element's background color red
$('.one').css('background-color', 'red');

// apply several styles to the element using an object
$('.multiple').css({
    'background-color': 'blue', // blue background
    'color': 'white', // white font
    'font': '20px bold', // larger, bold font
    'transform': 'rotate(3deg)' // rotate 3 degrees
});
