window.onload = function(){
  var testElement = document.getElemetntById('test');

  appendEventListener(testElement, 'mouseover', function(){
    test.className = "tk";
  });

  appendEvnetListener(testElement, 'mouseover', function(){
    test.className = "tk1";
  });
}

//jq
$(function(){
  $("#test").hover(
    function(){
      $(this).removeClas("tk").addClass("tk");
    },
    function(){
      $(this).removeClass("tk1").addClass("tk1");
    }
  );
});


/*.html
 *
 *<div id="test" class="tk"></div>
 * */

/*.css
 *div{
   width: 450px;
   height: 200px;
   border-style: solid double groove;
 }
 div.tk {background-color : blue;}
 div.tk1{background-color : red;}
 * */


