$(window).scroll(function(){
    if($(this).scrollTop() < this.innerHeight - 350){
        $('.scrollDownLabel').css({'opacity': '0.5'});
      }
      else if ($(this).scrollTop() >= this.innerHeight - 350){
        $('.scrollDownLabel').css({'opacity': '0'});
      }
})