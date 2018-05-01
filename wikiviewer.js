//var results;
//var autoResults;
var randomUrl = "https://en.wikipedia.org/wiki/Special:Random";
var searchPhrase;
$(document).ready(function(){

	


	$('#randomBtn').on('click', randomArticle);

	$('#searchBtn').on('click', getResults);




    function randomArticle() {
    
    	//document.getElementById('resultFrame').src = randomUrl;
        $('<iframe src="https://en.wikipedia.org/wiki/Special:Random" id="resultFrame" width="80%" height="500px" frameborder="1" scrolling="yes"></iframe>').appendTo('#resultsArea');
	}

	function getResults() {
    	searchPhrase = $('#inputField').val();
		$.getJSON('https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srsearch='+searchPhrase+'&utf8&callback=?', function(data){
      	console.log(data);
      	var query = data.query.search;
      	var hits = data.query.searchinfo.totalhits;
      	
        if (query.length === 0) {

      			console.log("no results found");
             	
      			$('<div id="titleZone" class="title"><h2>Sorry,<br> No Results found for that.<br>Try modifiying your search terms.</h2></div>').appendTo('#resultsArea');

      		}



        else {

      	    for (var i = 0; i < query.length; i++) {
      		
      		
      			$('<div id="titleZone" class="title"></div>')
.wrapInner("<a href='http://en.wikipedia.org/wiki/"+encodeURIComponent(query[i].title)+"'>" +'<strong>' + query[i].title +'</strong>' + '<br>'+ query[i].snippet + "</a>")
.appendTo('#resultsArea');
        	}


        	$(".title").on("mouseover", function() {
    var hovered = $(this).hasClass("highlight");
    $(".title").removeClass("highlight");
    if(!hovered) {
      $(this).addClass("highlight");
    }
});




      	}

  	});  
  
  }


  });