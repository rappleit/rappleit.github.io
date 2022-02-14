$(document).ready(function() {

    $("#socialButtonUL li:nth-child(1)").delay(1000).animate({opacity: 1}, 200);
    $("#socialButtonUL li:nth-child(2)").delay(1300).animate({opacity: 1}, 200);
    $("#socialButtonUL li:nth-child(3)").delay(1600).animate({opacity: 1}, 200);

    $("#aboutMe").delay(900).animate({opacity: 1}, 400);
    $("#aboutMe").animate({width: "40vh", borderRadius: "40px"}, 400);
    $("#aboutMeLabel").delay(1600).animate({opacity: 1}, 200);

    $("#experience").delay(1100).animate({opacity: 1}, 400);
    $("#experience").animate({width: "40vh", borderRadius: "40px"}, 400);
    $("#experienceLabel").delay(1900).animate({opacity: 1}, 200);

    $("#projects").delay(1300).animate({opacity: 1}, 400);
    $("#projects").animate({width: "40vh", borderRadius: "40px"}, 400);
    $("#projectsLabel").delay(2200).animate({opacity: 1}, 200);
  });

