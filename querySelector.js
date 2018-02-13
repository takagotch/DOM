//getElementById
//getElementByTagName
//querySelector
//querySelectorAll
var child1 = document.getElementById("child1");
var child2 = document.getElementById("child2");

var elem1 = document.body.querySelector("#parent .children");
assert("querySelector(#parent .children)", elem === child1, true);




