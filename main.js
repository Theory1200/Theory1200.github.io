window.onload = () => {
    navbar = document.getElementById("NavBar")
    navbar.innerHTML = `
    <ul>
        <img class="logo" src="logo.png" alt="PlaceHolder for Logo" />
        <a href="https://theory1200.github.io/about"><li class="item">About</li></a>
        <a href="https://theory1200.github.io/features"><li class="item">Features</li></a>
        <a href="https://theory1200.github.io/future"><li class="item">Future Plans</li></a>
        <a href="https://theory1200.github.io/home"><li class="item">Home</li></a>
    </ul> `   
}

var $element = $('.each-event, .title');
var $window = $(window);

$window.on('scroll resize', check_for_fade);
$window.trigger('scroll');

function check_for_fade() {
  var window_height = $window.height();
  
  $.each($element, function (event) {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_offset = $element.offset().top;
    space = window_height - (element_height + element_offset - $(window).scrollTop());
    if (space < 60) {
      $element.addClass('non-focus');
    } else {
      $element.removeClass('non-focus');
    }
  });
};
