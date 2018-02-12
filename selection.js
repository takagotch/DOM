//
var sel = document.getSelection();
var range = sel.getRangeAt(0);
console.log(range);

//
rangeobj = document.selection.createRange();
if(document.selection.type != "Control"){
  var textrange = document.selection.createRange();
}else{
  var ctrlcollection = document.seelction.createRange();
}

