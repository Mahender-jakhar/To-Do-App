
 $("ul").on("click" ,"li" , function(event){
   $(this).toggleClass("change");
 });


 $("ul").on("click" ,"span", function(event){
   $(this).parent().fadeOut(500,function(){
   	 $(this).remove();
   });
 });


 $("input").on("keypress" , function(event){
   if(event.which === 13)
   {
     var textt = $(this).val();
      $(this).val("");
     $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + textt +"</li>");              
   }
   
 });

$("#abc").on("click",function(){
      $("input").fadeToggle();
 });
