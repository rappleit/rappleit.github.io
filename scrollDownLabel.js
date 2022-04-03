$(window).scroll(function(){
    if($(this).scrollTop() < this.innerHeight - 70){
        $('.scrollDownLabel').css({'opacity': '0.5'});
      }
      else if ($(this).scrollTop() >= this.innerHeight - 70){
        $('.scrollDownLabel').css({'opacity': '0'});
      }
})