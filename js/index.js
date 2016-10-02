$(document).ready(start);

function start() {
  $("a .viewMore").click(overrideLinks);
  $("#viewMore").click(showContent);
  $(".mobile-nav a").click(menuDropDown);
}

$(function(){
    $(".typed-text").typed({
        strings: ["Hi I'm Tim Phillips, I'm a Graphic designer. Below is a selction of my work. "],
        typeSpeed: 0
    });
});

function menuDropDown() {
  $(".dropdown-menu-wrap").toggleClass('is-shown');
}

function showContent() {
  $("#viewMore").css('display', 'none');
  $(".examples-overflow").addClass('active');
}

function overrideLinks(event) {
  console.log(event)
  event.preventDefault()
}
