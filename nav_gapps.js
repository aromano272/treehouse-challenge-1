/*====================================
=            ON DOM READY            =
====================================*/

$(function() {
  $(".toggle-nav").click(function() {
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
  toggleNav();
  console.log("adasda");
});


/*========================================
=            CUSTOM FUNCTIONS            =
========================================*/

var toggleNav = function() {
  if($("#nav-bar").hasClass("show-nav")) {
    // nav close
    $("#nav-bar").removeClass("show-nav");
    // fade in content
    $("#fader").removeClass("fadeout");
    // uses jQuery method, main disadvantage is that if spam clicked the function will stack up and keep going
    // $("#fader").fadeTo(400,0);
  } else {
    // nav open
    $("#nav-bar").addClass("show-nav");
    // fade out content
    $("#fader").addClass("fadeout");
    // uses jQuery method, main disadvantage is that if spam clicked the function will stack up and keep going
    // $("#fader").fadeTo(400,0.5);
  }
}




