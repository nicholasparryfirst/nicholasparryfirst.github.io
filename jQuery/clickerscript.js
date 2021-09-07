$(document).ready(function(){
  $('.fadeOut').click(function(){
    $(this).fadeOut();
  });
});


$(document).ready(function(){
  $('#fadeInButton').click(function(){
    $('#fadeIn').fadeIn();
  });
});

$(document).ready(function(){
  $('#fadeInButton').dblclick(function(){
    $('#fadeIn2').toggle();
  });
});
