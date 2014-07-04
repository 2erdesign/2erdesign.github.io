
$(document).ready(function() {
$( "#start" ).click(function() {
$("#start").remove();
$( "#ship" ).addClass('attack');
$( "#laser").addClass('laser');
setTimeout(function() {document.getElementById("logo").src="Images/explosion.gif";}, 3750);
setTimeout(function() {document.getElementById("logo").src="Images/finish.png";}, 4000);
setTimeout(function() {$('html, body').animate({
        scrollTop: $("#case").offset().top}, 
        {duration: 1500, queue: false });
        $("#logo").animate({
        	width: '0px'
        }, {duration: 1500, queue: false });
        $("#nav").animate({
        	marginLeft: '36.5vw'
        }, {duration: 1500, queue: false });
}, 4500);
});
});