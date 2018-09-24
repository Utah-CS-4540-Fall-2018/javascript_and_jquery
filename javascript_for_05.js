$( document ).ready(function() {
  $( "#add-border-button" ).click(function( event ) {
    $('.nice-box').addClass('bordered');
  });
 $( "#remove-border-button" ).click(function( event ) {
    $('.nice-box').removeClass('bordered');
  })

})