var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || prevScrollpos < 0) {
    document.getElementById("header").style.top = "0";

    if (currentScrollPos < 10) {
      document.getElementById("header").style.backgroundColor = "rgba(0,0,0,0)";
      document.getElementById("scroll").style.opacity = "1";
      document.getElementById("scroll").style.bottom = "2%";
    } else {
      document.getElementById("header").style.backgroundColor =
        "rgba(0,0,0,0.85)";
    }
  } else {
    document.getElementById("header").style.top = "-100px";
    document.getElementById("scroll").style.opacity = "0";
    document.getElementById("scroll").style.bottom = "-100px";
  }

  prevScrollpos = currentScrollPos;
};
