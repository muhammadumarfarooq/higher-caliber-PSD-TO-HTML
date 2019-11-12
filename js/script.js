window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("main-nav").style.backgroundColor = "#fff";
    document.getElementById("main-nav").style.boxShadow =
      "0 1px 4px 0 rgba(0, 0, 0, 0.5)";
  } else {
    document.getElementById("main-nav").style.backgroundColor =
      "rgba(255, 255, 255, 0)";
    document.getElementById("main-nav").style.boxShadow = "none";
  }
}
