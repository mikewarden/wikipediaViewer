$(document).ready(function(){


	$(".title").on("mouseover", function() {
    	var hovered = $(this).hasClass("highlight");
    	$(".title").removeClass("highlight");
    	if(!hovered)
        $(this).addClass("highlight");
	});

});