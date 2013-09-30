var flickr_url= 'http://api.flickr.com/services/rest/?method=';
var flickr_key= '88d30455b41ff5aab043a29dc3bbd53c';
//flickr_secret= 0b4f276202e7253b

//http://www.flickr.com/services/api/flickr.photos.search.html

var photos;

function searchPhoto(keyword) {
     var method = 'flickr.photos.search';
     $.ajax({
         url: flickr_url + method + '&format=json'+ '&api_key=' + flickr_key,
         dataType: 'jsonp',
         data: {'text': keyword,
                //'tags': (keyword, 'Actor'),
                //'tag_mode': "", 
                //'content_type':3,
                //'in_gallery': true,
                'sort':'relevance'
               },
         type: 'GET',
         jsonpCallback: 'jsonFlickrApi',
         success: function(json){
                 if (json.photos) {
                    photos = json.photos;
                    console.log(photos);
                    progressbar("20");
                    //displayPhotoResultNumber(json);
                    //var photo = json.photos.photo[10];
                    //console.log(json.photos);
                    //console.log("http://farm2.staticflickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+".jpg");                
                 }       
         }
    });
 
}
