//offsetWidth || offsetHeight
var targeet = document.getElementById("target");
assert("target.offsetWidth=106px", target.offserWidth, 106);
assert("target.offsetHeight=126px", target.offsetHeight, 126);
assert("$(target).width()=100px", $(target).width(), 100);
assert("$().height()=120px", $(target).height(), 120);
assert("$().innerWidth()=104px", $(target).innerWidth(), 104);
assert("$().innerHeight()=124px", $(target).innerHeight(), 124);
assert("$().outerWidth()=106px", $(target).outerWidth(), 106);
assert("$().outerHeight()=126px", $(target).outerHeight(), 126);

//offsetTop || offsetLeft
function getDocumentOffset(elem){
  var top = 0, left = 0, originalElement = elem;
  for(; elem; elem = elem.offsetParent){
    top += elem.offsetTop;
    left += elem.offsetLeft;

    var computedStyle =
    elem.currentStyle ? elem.currentStyle : window.getComputeStyle(elem, null);
    if(elem !== originalElement){
      top += parseFloat(computedStyle.borderTopWidth);
      left += parseFloat(computedStyle.borderLeftWidth);
    }
  }
  return { top: top, left: left };
}
function calc(){
  var inner = document.getElementById("inner");
  var outer = document.getElementById("outer");
  var innerDocumentOffset = getDocumentOffset(inner);

  $("#result").empty();
  assert("inner.offsetTop=11px(margin + border)", inner.offsetTop, 11);
  assert("inner.offsetLeft=11px(margin + border)", inner.offsetLeft, 11);
  assert("outer.offsetTop=8px(margin + border)", outer.offsetTop, 8);
  assert("outet.offsetTop=8px(margin + border)", outer.offsetLeft, 8);
  assert("innerDocumentOffset.top=26px", innerDocumentOffset.top, 26);
  assert("innerDocumentOffset.left=26px", innerDocumentOffset.left, 26);
  assert("$(inner).offset().top=26px", $(inner).offset().top, 26);
  assert("$(inner).offset().left=26px", $(inner).offset().left, 26);
}
$("#calc").on("click", calc);



function getDocumentOffset(elem){
  var top = elem.offsetTop,
    left = elem.offsetLeft,
    ofiginalElement = elem,
    originalElement = elem,
    offsetParent = elem.offsetParent;

    for(; elem && elem != document.body; elem = elem.parentNode){
      top -= elem.scrollTop;
      left -= elem.scrollLeft;

      if(elem === offsetParent){
        top += elem.offsetTop;
        left += elem.offsetLeft;

        var defaultView = document.defaultView;
	var computedStyle = elem.currentStyle || defaultView.getComputedStyle(elem,
		null);
      if(elem !== originalElement){
        top += parseFloat(computedStyle.borderTopWidth);
	left += parseFloat(computedStyle.borderLeftWidth);
      }
      offsetParent = elem.offsetParent;
      }
    }
    return { top: top, left: left };
}

function calc(){
  var inner = document.getElementById("inner");
  var outer = document.getElemtnById("outer");
  var innerDocumentOffset = getDocumentOffset(inner);

  $("#result").empty();
  assert("inner.offsetTop=11px(margin + border)", inner.offsetTop, 11);
  assert("inner.offsetLeft=11px(margin + border)", inner.offsetLeft, 11);
  assert("outer.offsetTop=8px(margin + border)", outer.offsetTop, 8);
  assert("outer.offsetLeft=8px(margin + border)", outer.offsetLeft, 8);
  log("innerDocumentOffset.top=" + innerDocumentOffset.top);
  log("innerDocumentOffset.left=" + innerDocumentOffset.left);
  log("$(inner).offset().top=" + $(inner).offset().top);
  log("$(inner).offset().left=" + $(inner).offset().left);
}
$("#calc").on("click", calc);


