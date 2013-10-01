function progressbar(prog){ 
     var val = $('#progress progress').attr('value'); 
     var newVal = val*1+Number(prog); 
     var txt = Math.floor(newVal)+'%'; 
     $('#progress progress').attr('value',newVal).text(txt); 
     $('#progress strong').html(txt);
     completebar(newVal);  
}

function completebar(val) {
     if (val==100)  {
        $.mobile.changePage("result.html");
        //$('#progress progress').attr('value','0').text('0'); 
        //$('#progress strong').html('0'); 
     }
}

$(document).ready(function () {    
   if ($('body').is('#home')) {
     $("#go").on("click", function(event, ui) {
        $("#progress").attr("style","visibility : visible");
        var keyword = $("#search-mini").val();
        if (keyword) {
           //console.log(keyword); 
           searchPhoto(keyword);
           searchVideos(keyword);
           searchNews("nytd_geo", keyword);
           searchTweets(keyword);
           searchWiki(keyword);
        }
        $('#home').on("pagechange", function(e, data) {               
            if (data.toPage[0].id == "results") {
               $("#num_photos").html(searchPhotosNumber());
               $("#num_videos").html(searchVideosNumber());
               $("#num_tweets").html(searchTweetsNumber());
               $("#num_news").html(searchNewsNumber());
               $("#num_wikis").html(searchWikisNumber());          
            }
        });
     });
   }
});

