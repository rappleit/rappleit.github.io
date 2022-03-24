$(document).ready(function(){
    $(".navOpenButton a").on('click', function(){
      const visibility = $(".navBar").attr("data-visible");
        
      if (visibility === "false") {
        $(".navBar").attr("data-visible", "true");
        $('.navOpenButton').css({'display': 'none'});
      } else if (visibility === "true") {
        $(".navBar").attr("data-visible", "false");
        $('.navOpenButton').css({'display': 'block'});
      }
    });

  });