$("form").on("submit", function(){
  var $submitBtn = $(this).find(":submit");
  if($submitBtn && $submitBtn.attr("disabled")){
    return false;
  }
  $submitBtn.attr("disabled", true);
});


//hide()
$("from").on("submit", function(){
  var $submitBtn = $(this).fine(":submit");
  $submitBtn.hide();
  var $image = $(this).find("img");
  $image.show();
});

