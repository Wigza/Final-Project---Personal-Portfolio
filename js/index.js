$(document).ready(start);

function start() {
  $("a .viewMore").click(overrideLinks);
  $("#viewMore").click(showContent);
  $(".mobile-nav a").click(menuDropDown);

}

function menuDropDown() {
  $(".dropdown-menu").slideDown();
}

function showContent() {
  $(".examples-overflow").slideDown();
}

function overrideLinks(event) {
  console.log(event)
  event.preventDefault()
}


// function showAbout() {
//   $("#learnmoretext").slideDown()
//   $(".learnmore").hide()
//   $(".learnMoreShow").show()
// }
//
// function hideText() {
//   $("#show-this-on-click").slideUp()
//   $(".readmore").show()
//   $(".readless").hide()
// }
//
// function showText() {
//   $("#show-this-on-click").slideDown()
//   $(".readmore").hide()
//   $(".readless").show()
// }
//
// function start() {
//   $(".readmore").click(showText);
//   $(".readless").click(hideText);
//   $(".learnmore").click(showAbout);
// }
