var nytimes_url= 'http://api.nytimes.com/svc/semantic/v2/concept/name/';
var nytimes_key= '230b96ed1ac846a66d546ceac241b0b9:10:68160366';

var news;
function searchNews(concept_type, specific_concept) {
    var url = nytimes_url + concept_type +'/'+specific_concept+'.jsonp?fields=all&api-key='+nytimes_key;
    $.ajax( {
	   dataType :'jsonp',
	   jsonp :'callback',
	   url : url,
	   success : function(json) {
	          if(json.results) {
	                news = json.results;
                        console.log(news);
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
