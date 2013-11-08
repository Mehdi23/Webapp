$( document ).ready( function(){
   $( ".thumbnail" ).mouseover(function() {
         $(this).css("background","#cccccc");
   });
   
   $( ".thumbnail" ).mouseleave(function() {
         $(this).css("background","#FFFFFF");
   });

})