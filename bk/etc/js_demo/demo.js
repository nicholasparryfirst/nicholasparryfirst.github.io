var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

var writeH = document.getElementById("height");

var writeW = document.getElementById("width");

writeW.innerHTML = screenWidth + "px";
writeH.innerHTML = screenHeight + "px";

console.log(screenWidth);
