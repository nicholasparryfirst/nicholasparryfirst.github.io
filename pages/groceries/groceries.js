var checkboxes = document.querySelectorAll('input[type="checkbox"]');

function strike(e){

  var item = document.getElementById("item" + e);

  if (checkboxes[e - 1].checked == true) {
    item.classList.add("strike");
  }
  else {  item.classList.remove("strike");
  }
}

function reset() {
  for ( i = 0 ; i < checkboxes.length ; i++ ) {
    if ( checkboxes[i].checked == true ) {
      checkboxes[i].uncheck;
      console.log("reset");
    } else {

    }
  }
}
