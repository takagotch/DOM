var result = document.getElementById("result");

var div = document.createElement("div");
div.text = "This is HTMLDivElement";
result.appendChild(div);

result.innerHTML = "<div>This is HTMLDivElement</div>";

//
var text = document.createTextNode("ADD");
var result = document.getElementById("result");

if(result.nodeType === Node.ELEMENT_NODE){
  result.appendChild(text);
}


