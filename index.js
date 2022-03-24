$(document).ready(function() {
  //social buttons
    $("#socialButtonUL li:nth-child(1)").delay(1000).animate({opacity: 1}, 200);
    $("#socialButtonUL li:nth-child(2)").delay(1300).animate({opacity: 1}, 200);
    $("#socialButtonUL li:nth-child(3)").delay(1600).animate({opacity: 1}, 200);

    //navigation
    $("#aboutMe").delay(900).animate({opacity: 1}, 400);
    $("#aboutMe").animate({width: "30vw", borderRadius: "40px"}, 400);
    $("#aboutMeLabel").delay(1600).animate({opacity: 1}, 200);
    
    $("#skills").delay(1100).animate({opacity: 1}, 400);
    $("#skills").animate({width: "30vw", borderRadius: "40px"}, 400);
    $("#skillsLabel").delay(1900).animate({opacity: 1}, 200);

    $("#experience").delay(1300).animate({opacity: 1}, 400);
    $("#experience").animate({width: "30vw", borderRadius: "40px"}, 400);
    $("#experienceLabel").delay(2200).animate({opacity: 1}, 200);

    $("#projects").delay(1500).animate({opacity: 1}, 400);
    $("#projects").animate({width: "30vw", borderRadius: "40px"}, 400);
    $("#projectsLabel").delay(2500).animate({opacity: 1}, 200);
  });

  

