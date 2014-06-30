/*====================================
=            ON DOM READY            =
====================================*/

$(function() {
  $(".toggle-nav").click(function() {
    // toggleFader();
    toggleNav();
    
    
  });
});

// Doesnt work since we cant add and eventlistener to an element that still doesnt exist
// $(function() {
//   $(".fadeout").click(function () {
//     toggleNav();
//     console.log("sdada");
//   });
// });

// Solves the above problem, applying a rule to the parent, or document.
$("body").on("click", ".fadeout", function() {
  // toggleFader();
  toggleNav();
  
  console.log("adasda");
});

var fader = "<div id='fader' style='opacity: 0.5;'></div>";

/*========================================
=            CUSTOM FUNCTIONS            =
========================================*/

var toggleNav = function() {
  if($("#nav-bar").hasClass("show-nav")) {
    // nav close
    $("#nav-bar").removeClass("show-nav");
    // fade in content
    $("#fader").removeClass("fadeout");
    fade_out();
    // $("#fader").remove();
    // uses jQuery method, main disadvantage is that if spam clicked the function will stack up and keep going
    // $("#fader").fadeTo(400,0);
  } else {
    // nav open
    $("#nav-bar").addClass("show-nav");
    // fade out content
    $("#fader").addClass("fadeout");
    fade_in();
    // $("body").append("<div id='fader' style='opacity: 0.7; display: block;'></div>");

    // uses jQuery method, main disadvantage is that if spam clicked the function will stack up and keep going
    // $("#fader").fadeTo(400,0.5);
  }
}


// var toggleFader = function() {
//   if($("#fader").length) {
//     $("#fader").stop().fadeOut(1000, function(){
//       $(this).remove();
//     });
//     // $("#fader").remove();
//     console.log("fader removed");
//   } else {
//     $(fader).hide().appendTo("body").stop().fadeIn(1000);
//     console.log("fader added");
//   }
// }

var fade_in = function() {
  // if fader exists
  if($("#fader").length) {
    $("#fader").stop(true,false).fadeIn(1000);
  } else {
    // if fader doesnt exists, create it
    $(fader).hide().appendTo("body").fadeIn(1000);
  }
}

var fade_out = function() {
  $("#fader").stop(true,false).fadeOut(1000, function() {
    $("#fader").remove();
  });
}


