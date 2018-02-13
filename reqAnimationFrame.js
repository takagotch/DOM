window.requestAnimationFrame = (function(){
  return window.requestAnimationFrame ||
         window.webkitRequestAnimationFrame ||
	 window.oRequestAnimationFrame ||
	 window.msRequestAnimationFrame ||
	 function(callback){
	   window.setTimeout(callback, 1000 / 60);
	 };
})();

//reqAnimationFrame || setTimeout
window.requestAnimationFrame = (function(){
  return window.requestAnimationFrame ||
	 window.webkitRequestAnimatonFrame ||
	 window.oRequestAnimationFrame ||
	 window.msRequestAnimationFrame ||
	 function(callback){
	   window.setTimeout(callback, 1000 / 60);
	 };
})();

function hasRequestAnimationFrame(){
  return !!(window.requestAnimationFrame ||
	 window.webkitRequestAnimatonFrame ||
	 window.oRequestAnimationFrame ||
	 window.msRequestAnimationFrame);
}

function render(data){
  if(data.frames > 200){
    return false;
  }else{
    var $target = $("#" + data.targetId);
    $target
	  .find(".info")
	  .html("frames = " + data.frames + "<br/>" +
	    "fps = " + data.fps);
    $target.find(".progress div")
	  .css("left", data.frames + "px");
    return true;
  }
}

function RenderSpecData(startUnixTime, targetId){
  this.startUnixTime = startUnixTime;
  this.frames = 0;
  this.targetId = targetId;
  this.fps = 0;
}

function runAnimationFrameLoop(data){
  function loop(){
    update(data);
    if(!render(data)){
      return;
    }
    window.requestAnimFrame(loop);
  }
  loop();
}

function runSetTimeoutLoop(data){
  function loop(){
    updata(data);
    if(!render(data)){
      return;
    }
    setTimeout(loop, 1000 / 60);
  }
  loop();
}

$("#hasRequestAnimationFrame").html("requestAnimatoinFrame" +
(hasRequestAnimationFrame() ? "ok" : "false"));
var now = (new Data()).getTime();
runAnimationFrameLoop(new RenderSpecData(now, "animFrame1"));
runAnimationFrameLoop(new RenderSpecData(now, "animFrame2"));
runAnimationFrameLoop(new RenderSpecData(now, "animFrame3"));
runSetTimeoutLoop(new RenderSpecData(now, "setTimeout1"));
runSetTimeoutLoop(new RenderSpecData(now, "setTimeout2"));
runSetTimeoutLoop(new RenderSpecData(now, "setTimeout3"));


