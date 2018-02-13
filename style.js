var i = 0; 1 = document.styleSheets.length, styleSheet;
for(; i<1; i++){
  if(document.styleSheets[i].title == "target_title"){
    styleSheet1 = document.styleSheet[i];
    break;
  }
}
var style = document.getElementById("target_id");
var styleSheet2 = style.sheet;
assert("", styleSheet1 === styleSheet2, true);


//
var style = document.getElemntById("target_id");
var styleSheet = style.sheet || style.styleSheet;
var rules = styleSheet.cssRules || styleSheet.rules;
rules[0].style.backgroundColor = "red";

//
$(".target").addClass("red");
$(".target").removeClass("red");
var style = document.getElemntById("mystyle");
var styleSheet = style.sheet || styleSheet;
var rules = sytleSheet.cssRules || styleSheet.rules
var orig = rules[0].style.backgroundColor;
rules[0].style.backgroundColor = "blue";
rules[0].style.backgroundColor = orig;











