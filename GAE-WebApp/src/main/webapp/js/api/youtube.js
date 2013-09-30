var youtube_url= 'https://www.googleapis.com/youtube/v3/';
var youtube_key= 'AIzaSyA25ISk8gdpn4md-gCNR2p_GH7z3KzgqKA';
//https://code.google.com/apis/console/

var videos;
function searchVideos(keyword) {
    var method = 'search';

    $.ajax({
           type: 'GET',
	   dataType :'jsonp',
	   url : youtube_url+method+"?part=snippet&q="+keyword+"&type=videos"+"&key="+youtube_key,
	   success : function(json) {
	          if(json) {
	                videos = json.videos;
                        console.log(json);
                        progressbar("20");
	          }
	   }
    });
}

function displayConceptDetails(json) {
	var results = json.results;
	var html = "";
	for(var i =0; i < results.length; i++) {
		var id = i;
		var result = results[i];
		var headline = result.article_list.results[1];
		console.log(headline);
        }
}
