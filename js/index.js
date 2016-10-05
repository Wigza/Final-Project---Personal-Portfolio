$(document).ready(start);

function start() {
  $("#viewMore").click(showContent);
  $(".mobile-nav").click(menuDropDown);
  typedText();
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
