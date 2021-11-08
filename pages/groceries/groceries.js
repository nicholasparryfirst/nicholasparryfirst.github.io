var grocery_item = document.getElementsByClassName('groceries');

function myFunction(x) {
  if (document.getElementById(x).checked) {
    document.getElementById('item' + x).classList.add("checked");
  } else  {
    console.log("heh");
  }
}
