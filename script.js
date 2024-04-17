let stars = document.getElementById("stars");
let nouvil = document.getElementById("nouvil");
let moon = document.getElementById("moon");
let mountain3 = document.getElementById("mountain3");
let mountain4 = document.getElementById("mountain4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let mountain7 = document.getElementById("mountain7");

window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value * 2 + "px";
  moon.style.top = value * 2.5 + "px";
  mountain3.style.top = value * 0.5 + "px";
  mountain4.style.top = value * 0.5 + "px";
  mountain7.style.top = value * 0.3 + "px";
  river.style.top = value + "px";
  boat.style.top = value * 0.5 + "px";
  boat.style.left = value + "px";
  nouvil.style.fontSize = value + "px";
  // At Certain Conditions
  if (scrollY >= 20) {
    document.querySelector(".main").style.background =
      "linear-gradient(red,blue);";
  } else {
    document.querySelector(".main").style.background = "transparent";
  }
  if (value >= 74) {
    nouvil.style.fontSize = 74 + "px";
    nouvil.style.position = "fixed";
  } else {
    nouvil.style.display = "block";
  }
  if (value >= 320) {
    nouvil.style.display = "none";
  }
  if (value >= 120) {
    document.querySelector(".main").style.background =
      "linear-gradient(to left, #376281, #10001f)";
  }
};
