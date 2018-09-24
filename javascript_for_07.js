$( document ).ready(function() {
  $( "#myform" ).submit(function( event ) {
    console.log('inside here');
    
    if ( $( "input[name='first_name']" ).val() === "" ) {
      $('#first_name_msg').show().html("this is a required field!").addClass('alert').fadeOut(4000);
      event.preventDefault();
    }

    if ( $( "input[name='last_name']" ).val() === "" ) {
      $('#last_name_msg').show().html("this is a required field!").addClass('alert').fadeOut(4000);
      event.preventDefault();
    }
   });
});