function openNav()
{
  document.getElementById("menu-side").style.width="250px";

}

function closeNav()
{
  document.getElementById("menu-side").style.width="0";
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "10px";
  } else {
    document.getElementById("nav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}