$( document ).ready(function() {
  $( "#do-something-button" ).click(function( event ) {
    $('.nice-box').html('Thanks for clicking the button');
    $('#do-something-button').fadeOut();
    $('#do-something-button').fadeIn(10000);

  })
})



/* $('#do-something-button').fadeOut(); */