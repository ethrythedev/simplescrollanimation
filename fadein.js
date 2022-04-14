var scrollval = 0;
window.onscroll = async function() {
  if(scrollval > window.scrollY) {
    // Scrolling up
    $(".ssa-fi").css("opacity", window.scrollY/100);
  } else {
    // Scrolling down
    $(".ssa-fi").css("opacity", window.scrollY/100);
  }
  scrollval = window.scrollY;
};

document.addEventListener("touchstart", handleStart, false);
