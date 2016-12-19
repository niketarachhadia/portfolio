$(document).ready(function(){
  $(document).ready(function(){
      $('.parallax').parallax();
    })
 $('.chips').material_chip();
});

function moveToAboutMe(){
	$('html, body').animate({
        scrollTop: $("#aboutme").offset().top
    }, 2000);
}
function moveToPortfolio(){
	$('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 2000);
}
function moveToContact(){
	$('html, body').animate({
        scrollTop: $("#contactme").offset().top
    }, 2000);
}
