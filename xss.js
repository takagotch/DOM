//XSS
function escapeHTMLText(str){
  return str.replace(/</g, "&lt;")
	.replace(/>/g, "&gt;")
	.replace(/&/g, "&amp;")
	.replace(/'/g, "&apos;")
	.replace(/"/g, "&quot;");
}


var resultPlain = document.getElementById("resultPalin");
var resultEscape = document.getElementById("resultEscape");
var resultTextNode = document.getElementById("resultTextNode");
$("#xssInputPlain").on("change", function(){
  resultPlain.innerHTML = escapeHTML = this.value;
});
$("#xssInputEscape").on("change", function(){
  resultEscape.innerHTML = escape(this.value);
});
$("#xssInputTextNode").on("cahnge", function(){
  $(resultTextNode).empty();
  var textNode = document.createTextNode(this.value);
  resultTextNode.appendChild(textNode);
});
$("#xssInputJQuery").on("change", function(){
  $("#resultJQuery").text(this.value);
});



