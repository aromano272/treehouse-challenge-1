/*========================================
=               DEPRECATED               =
========================================*/

// 19
// Doesnt work since we cant add and eventlistener to an element that still doesnt exist
// $(function() {
//   $(".fadeout").click(function () {
//     toggleNav();
//     console.log("sdada");
//   });
// });

// 69
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


/*========================================
=              ON DOM READY              =
========================================*/

$(function() {
  $(".toggle-nav").click(function() {
    // toggleFader();
    toggleNav();
    
    
  });
});



// Solves the above problem, applying a rule to the parent, or document.
$("body").on("click", ".fadeout", function() {
  // toggleFader();
  toggleNav();
  
  console.log("adasda");
});

var fader = "<div id='fader' style='opacity: 0.5;'></div>";
// var $overlay = $("<div id='overlay'></div>");
// $("body").append($overlay);

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


/*========================================
=                LIGHTBOX                =
========================================*/

// add overlay
var $overlay = $("<div id='overlay'></div>");
$("body").append($overlay);
// an image
var $image = $("<img>");
$overlay.append($image);
// a caption
var $caption = $("<p id='caption'></p>");
$overlay.append($caption);

// capture the click event on a link
$("#gallery a").click(function() {
  event.preventDefault();
  // show the overlay
  $overlay.fadeIn(200);

  // update overlay with the image linked in the link
  var imageLocation = $(this).attr("href");
  $image.attr("src", imageLocation);
  // get childs p element text and set caption
  var captionText = $(this).children("p").text();
  $caption.text(captionText);
})


  
  
// when overlay is clicked
$overlay.click(function() {
  // hide the overlay
  $(this).fadeOut(200);
});

// stops the propagation of event, in this case the click event, up the dom tree,
// so when we click the image of the caption is doesnt trigger the click even on $overlay
$image.click(function() {
  event.stopPropagation();
});
$caption.click(function() {
  event.stopPropagation();
});

  





