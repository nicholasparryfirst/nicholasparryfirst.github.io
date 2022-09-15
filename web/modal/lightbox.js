
jQuery(document).ready(function($) {
    $('.portfolioImage').click(function(e){
  
      e.preventDefault();
  
      var image_href = $(this).attr("src");
  
      if ($('.lightbox').length > 0) {
        $('.lightboxContent').html('<img src="' + image_href + '" />');
        $('.lightbox').show();
      } else {
        var lightbox =
                  '<div class="lightbox">' +
                  '<div class="lightboxClose">&#10006;</div>' +
                  '<div class="lightboxContent">' +
                    '<img src="' + img_href + '"/>' +
                  '</div>' +
                '</div>';
  
          $('body').append(lightbox);
      }
    });
      $('body').on('click', '.lightbox', function() {
      $('.lightbox').hide();
    });
    $('.lightboxClose').on('click', '.lightbox', function() {
    $('.lightbox').hide();
  });
  
  });