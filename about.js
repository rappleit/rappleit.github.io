$(document).ready(function() {
    $("header").delay(500).animate({opacity: 1}, 400);
    $(".scrollDown").delay(1000).animate({opacity: 1}, 400);
});

$(window).scroll(function(){
    if($(this).scrollTop() < this.innerHeight - 70 ){
        $('.scrollDownLabel').css({'opacity': '0'});
      }
      else if ($(this).scrollTop() >= this.innerHeight - 70){
        $('.scrollDownLabel').css({'opacity': '0.75'});
      }
})