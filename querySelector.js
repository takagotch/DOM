//getElementById
//getElementByTagName
//querySelector
//querySelectorAll
var child1 = document.getElementById("child1");
var child2 = document.getElementById("child2");

var elem1 = document.body.querySelector("#parent .children");
assert("querySelector(#parent .children)", elem === child1, true);

var nodeList1 = document.body.querySelector("#parent .children");
assert("querySelectorAll(#parent .children)", nodeList.length, 3);

var elem2 = document.body.querySelector("[name='bar']");
assert("querySelector([name='bar'])", elem === child2, true);

var nodeList2 = document.body.querySelectorAll("[name='bar']");
assert("querySelectorAll([name='bar'])", nodeList.length, 1);

var jqObj1 = jQuery("body #parent .children:first");
assert("jQuery(body #parent .children:first)", jqObj1.get(0) === child1, true);

var jqObj2 = jQuery("body #parent .children");
assert("jQuery(body #parent .children)", jqObj1.length, 3);

var jqObj3 = jQuery("body [name='bar']:first");
assert("jQuery(body [name='bar']:first)", jqObj3.get(0) === child2, true);

var jqObj4 = jQuery("body [name='bar']");
assert("jQuery(body [name='bar'])", jqObj3.length, 1);

var jqObj5 = jQuery("body [name!='bar']");
assert("jQuery(body [name!='bar'])", jqObj5.length, 4);

//var nodeList = document.querySelectorAll("[name!='foo']");





