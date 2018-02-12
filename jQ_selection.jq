$(function(){
  $("#range_btn").on('click', function(){
    $('#textarea')
      .selection('insert', {text: '<strong>', mode: 'before'})
      .selection('insert', {text: '<strong>', mode: 'after' })
  });
});

