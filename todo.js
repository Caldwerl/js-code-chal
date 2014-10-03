$(function() {

  $('#input').on('blur', function() {

    $('#list').append('<h1>' + $(this).val() + '</h1>');

    $(this).val('');

    $('h1').on('click', function(){
      $(this).remove();
    });
  });

});
