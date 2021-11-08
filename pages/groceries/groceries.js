var grocery_item = document.getElementsByClassName('groceries');

var checkbox = document.querySelector("input[name=groceries]");

console.log("groceries.js loaded");

checkbox.addEventListener('change', function() {
  for (i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      grocery_item[i].classList.add("strike");
    } else  {
      grocery_item[i].classList.remove("strike");
    }
  }
})
