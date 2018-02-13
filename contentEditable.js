$("#editArea").on("focus", function(){
  $(this).data("beforeContent", $(this).text());
}).on("blur", function(){
  var before = $(this).data("beforeContent");
  var content = $(this).text();
  if(before != content){
    log("[changed]" + content);
  }
})

