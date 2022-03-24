$(document).ready(function(){
    $(".navToggle").on('click', function(){
        const activated = $(".navToggle").attr("data-activated");
        console.log($(".navToggle").attr("data-activated"))

        if (activated === "false") {
            $(".navBarOptions").css({'opacity': '1', 'transform': 'translateY(0px)'});
            $("#navToggleIcon").removeClass("fa-bars");
            $("#navToggleIcon").addClass("fa-xmark");
            $(".navToggle").attr("data-activated", "true");
        } else if (activated === "true") {
            $(".navBarOptions").css({'opacity': '0', 'transform': 'translateY(-20px)'});
            $("#navToggleIcon").removeClass("fa-xmark");
            $("#navToggleIcon").addClass("fa-bars");
            $(".navToggle").attr("data-activated", "false");
        }
        
    });
  });