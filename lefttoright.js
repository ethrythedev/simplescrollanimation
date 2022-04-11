var scrollval = 0;
window.onscroll = async function() {
  if(scrollval > window.scrollY) {
    // Scrolling up
    $(".ssa-ltr").css("margin-left", window.scrollY + "px");
  } else {
    // Scrolling down
    $(".ssa-ltr").css("margin-left", window.scrollY + "px");
  }
  scrollval = window.scrollY;
};

document.addEventListener("touchstart", handleStart, false);
