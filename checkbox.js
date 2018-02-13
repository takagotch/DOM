window.onload = function(){
  log( document.getElementById("chk").checked);
}

//
window.onload = function(){
  var chk = document.getElementById("chk");
  vhk.checked = !chk.checked;
}

//
window.onload = function(){
  var chk3 = document.getElementById('chk3');
  appendEventListener(chk3, 'change', function(){
    log(chk3, checked);
  });
};

//
window.onload = function(){
  var btn = document.getElementById('btn');
  var chks = document.getElementById('chk');

  appendEventListener(btn, 'click', functoin(){
    var checkedArray = [];
    for(var i = 0; i < chks.length; i++){
      if(chks[i].checked){
        checkedArray.push(chks[i].value)
      }
    }
    log(checkedArray.join(","));
  });
};

