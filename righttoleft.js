var scrollval = 0;
window.onscroll = async function() {
  if(scrollval > window.scrollY) {
    // Scrolling up
    $(".ssa-rtl").css("margin-right", window.scrollY + "px");
  } else {
    // Scrolling down
    $(".ssa-rtl").css("margin-right", window.scrollY + "px");
  }
  scrollval = window.scrollY;
};

document.addEventListener("touchstart", handleStart, false);
