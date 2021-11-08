var checkboxes = document.querySelectorAll('input[type="checkbox"]');

var items = document.getElementsByClassName('groceries');

// for(var i = 0; i < checkboxes.length; i++){
//      var checkbox = checkboxes[i];
//      checkbox.addEventListener('click', function(){
//
//        if (checkbox.checked) {
//          console.log(checkbox.id + ' checked');
//        } else {
//          console.log(checkbox.id + ' un-checked');
//        }
//      });
// }

function strike(e){

  var item = document.getElementById("item" + e);

  if (checkboxes[e - 1].checked == true) {
    item.classList.add("strike");
  }
  else {  item.classList.remove("strike");
  }
}
