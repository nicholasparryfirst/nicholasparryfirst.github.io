var grocery_items = document.getElementsByClassName('groceries');

var checkboxes = document.querySelector("input[name=groceries]");

var checkbox = checkboxes[0];
var grocery_item = grocery_items[0];

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
