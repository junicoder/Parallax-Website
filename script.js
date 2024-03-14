let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");
let sec1 = document.querySelector(".sec1");
let initialScroll = window.scrollY;

window.addEventListener("scroll", () => {
  let value = window.scrollY - initialScroll; // Calculate the difference from initial scroll position
  let sec1OffsetTop = sec1.offsetTop; // Get the offset top of sec1
  let windowHeight = window.innerHeight; // Get the height of the viewport
  let sec1End = sec1OffsetTop + sec1.offsetHeight - windowHeight; // Calculate the end point of sec1

  if (window.scrollY >= sec1End) {
    // If the user has scrolled to the end of sec1, stop the parallax effect
    return;
  }

  text.style.marginTop = value * 2.5 + "px";
  leaf.style.top = value * -1.5 + "px";
  leaf.style.left = value * 1.5 + "px";
  hill5.style.left = value * 1.5 + "px";
  hill4.style.left = value * -1.5 + "px";

  // Check if the user has scrolled down or up
  if (value > 0) {
    hill1.style.position = "fixed";
    hill1.style.top = "0";
  } else {
    hill1.style.position = "absolute";
    hill1.style.top = value * 1 + "px";
  }
});
