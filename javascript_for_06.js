$( document ).ready(function() {
  $('#do-something-button').click(function(event){
    $( ".nice-box" ).toggleClass("bordered")
  })
})