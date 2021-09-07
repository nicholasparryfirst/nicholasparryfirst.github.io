$('select').change(function(){
    $(#button2).find(':active').addClass('active')
           .siblings('option').removeClass('active');
});
