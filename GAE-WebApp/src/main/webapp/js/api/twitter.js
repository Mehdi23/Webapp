var twitter_key="if5x4CYFuFeea2QUeU5mtw";
var twitter_secret="kJAhLPHRtMHjifNI7rxZpOnGlQaXDrgXTNmfZ4G2k";

function searchTweets(keyword) {

// twitter unavailable for client-side
// use java api : https://github.com/fernandezpablo85/scribe-java/wiki/getting-started
     $.ajax({
         type: 'POST',
         url: 'https://api.twitter.com/oauth2/token',
         data: {'grant_type': 'client_credentials'},
         dataType: 'json',        
         success: function(json){
                 if (json) {
                    //photos = json.photos;
                    console.log(json);
                    progressbar("20");                
                 }       
         }
    });

     $.ajax({
         type: 'GET',
         url: 'https://api.twitter.com/1.1/search/tweets.json?q='+keyword,
         dataType: 'jsonp',        
         success: function(json){
                 if (json) {
                    //photos = json.photos;
                    console.log(json);
                    progressbar("20");                
                 }       
         }
    });
 
}
