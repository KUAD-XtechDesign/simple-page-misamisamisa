
$(function(){

 $("#slide").slick({dock:true});

 $(".btn").on("click",()=>{
 $("#slide").slideToggle();
 })

});