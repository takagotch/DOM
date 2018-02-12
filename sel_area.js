$(function(){
  $("#range_btn").on('click', function(){
    encapHTML();
  });
});

functionencapHTMLForW3C(encap_node)
{
  var selection = document.getSelection();
  var range = selection.getRangeAt(0);
  range.surroundContents(encap_node);
}

function encapHTMLforIE(encap_node)
{
  window.focus();
  var range = document.seelction.createRange();
  var container = document.createElement("div");
  container.appendChild(encap_node);
  encap_node.innerHTML = range.htmlText;

  try{
    range.pasteHTML(container.innerHTML)
  }catch(e){
    alert(e)
  }
}

function encapHTML()
{
  var node = document.createElement("b");
  if(document){
    encapeHTMLforIE(node);
  }else{
    encapHTMLForW3C(node);
  }
}


