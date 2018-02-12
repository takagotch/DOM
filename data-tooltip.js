(function(){
  $.fn.tooltip = function(){
    $(this).each(function(){
      $(this)
	    .bind('mouseenter.tooltip', function(ev){
	      var content = $(this).attr("data-tooltip");
	      var position = { top: ev.clientY, left: ev.clientX };
	      $('<p id="tooltip">')
		    .append(content)
		    .css(positoin)
		    .appendTo('body')
		    .fadeIn('slow');
	    })
	    .bind('mouseleave.tooltip', function(ev){
		    $("#tooltip").fadeOut("slow").remove;	    
	    });
    });
    return $(this);

  };

  $(".tooltip").tooltip();
});

