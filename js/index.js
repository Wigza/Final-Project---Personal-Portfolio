$(document).ready(start);

function start() {
  $("#viewMore").click(showContent);
  $(".mobile-nav").click(menuDropDown);
  $('.project-box').mousedown(buttonRipple);
  typedText();
}

function buttonRipple(e) {
  var ripple = $(this).find(".ripple");
  ripple.removeClass("animate");
  var x = parseInt(e.pageX - $(this).offset().left) - (ripple.width() / 2);
  var y = parseInt(e.pageY - $(this).offset().top) - (ripple.height() / 2);
  ripple.css({
     top: y,
     left: x
  }).addClass("animate");
}

function typedText() {
  $(".typed-text").typed({
      strings: ["<strong>Graphic Designer.</strong>", "^500<strong>Web Designer.</strong>", "^500<strong>Web Developer.</strong>"],
      typeSpeed: 30
  });
}

function menuDropDown(event) {
  event.preventDefault();
  $(".dropdown-menu-wrap").toggleClass('is-shown');
}

function showContent(event) {
  event.preventDefault();
  $("#viewMore").css('display', 'none');
  $(".examples-overflow").addClass('active');
}
