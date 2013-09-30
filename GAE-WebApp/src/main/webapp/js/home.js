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
        $('#progress progress').attr('value','0').text('0'); 
        $('#progress strong').html('0'); 
     }

}

$(document).ready( function () { 
    
     $("#go").on("click", function(event, ui) {
        $("#progress").attr("style","visibility : visible"); 
        searchPhoto("eminem");
        searchNews("nytd_geo", "Morocco");
        searchVideos("eminem");
        searchTweets("@eminem");
     }); 

});


