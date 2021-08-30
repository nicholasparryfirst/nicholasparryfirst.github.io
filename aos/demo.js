function yourFavorite() {
  var v = document.getElementById("selectField").value;
  console.log(v);
  document.getElementById("readFavorite").innerHTML = v;
};

console.log("demo.js loaded");
