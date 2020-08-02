var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || prevScrollpos < 0) {
    document.getElementById("header").style.top = "0";

    if (currentScrollPos < 50) {
      document.getElementById("header").style.backgroundColor = "rgba(0,0,0,0)";
    } else {
      document.getElementById("header").style.backgroundColor =
        "rgba(0,0,0,0.8)";
    }
  } else {
    document.getElementById("header").style.top = "-100px";
  }

  prevScrollpos = currentScrollPos;
};
