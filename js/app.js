jQuery(document).ready(function(){
  var viewPortWidth = jQuery(window).width();
  var viewPortHeight = jQuery(window).height();
  var navPos = jQuery("#papa-nav").offset().top;

  // onClick functions for the hamburger menu
  displayHamburgerMenu();

  //


  // Scroll to point
   $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 120
        }, 1250);
        return false;
      }
    }
  });

  // This is for the typed section on the landing area
  $(".typed").typed({
        strings: ["I have been teaching myself front-end web development for the last 1.5 years. Thanks internet! =]",
        "At present, I'm in my final semester of grad school studying HCI and Data Visualization at UC Berkeley.",
        "Recently, I learned to sing in overtones - two notes at the same time!",
        "I speak 7 languages, half of them half as fluently as the other.",
        "I also design beautiful cheat sheets.",
        "Currently, I'm reading <a href='http://www.npr.org/2014/11/13/363123510/three-body-problem-asks-a-classic-sci-fi-question-in-chinese'>The Three Body Problem by Cixin Liu</a>.",
        "Some of the designers I follow are Julie Zhou, Luke Wroblewski and Victor Papanek."],
        typeSpeed: 0,
        startDelay: 1000,
        backDelay: 3000,
        showCursor: false,
        loopCount: 10000,
        loop: true,
        typeSpeed: -2,
        shuffle: true
      });

  // TODO: Write a function to resize your window each time some Curious Carl
  // decides to check if you're being responsive
    // TODO: Write a bundle of functions you want fired each time it resizes

  // to edit the before class what I need to do is to add a class that has the before property.
  // http://stackoverflow.com/questions/5814810/target-before-and-after-pseudo-elements-with-jquery
  // this is because :before and :after are not technically part of the dom
  // this needs to be done on load once
  // load should initialize a list of functions that will adjust heights and top-margins of the
  // slanted divs - this is what you must figure out tonight

  jQuery(window).scroll(function(){
    var scrollPos = jQuery(window).scrollTop();

    // Logo microinteractions (parallax + linear fade)
    // $('.logo').css({
    //   'transform' : 'translate(0px, ' + scrollPos*2 + '%)'
    // });
    // $('.intro-wrapper').css({
    //   'transform' : 'translate(0px, ' + scrollPos/36 + '%)'
    // });
    // $('.logo').css({
    //   'opacity' :  (160-scrollPos)/160
    // });
    var logoOpacity = opacityCeiling((4*scrollPos)/(viewPortWidth*3));
    $('.logo').css({
        'opacity' : logoOpacity
    });

    // Parallax for the action shot
    // $('.profile').css({
    //   'transform' : 'translate(0px, -' + scrollPos/24 + '%)'
    // });


    // Sticky Navigation
  //   if (scrollPos >= navPos){
  //     jQuery("nav").children().addClass("fixed");
  //     jQuery(".logo-alt").removeClass(".logo-scroll-before");
  //     jQuery(".logo-alt").addClass(".logo-scroll-after");
  //   }
  //   else{
  //     jQuery("nav").children().removeClass("fixed");
  //     jQuery(".logo-alt").removeClass(".logo-scroll-after");
  //     jQuery(".logo-alt").addClass(".logo-scroll-before");
  //   }
  // });

    if (scrollPos >= (navPos)){
      jQuery(".nav-wrap").addClass("fixed");
    }
    else{
      jQuery(".nav-wrap").removeClass("fixed");
    }
});
  // For the Curious Carls who want to check if I'm being responsive
  jQuery(window).resize(doThisOnResize());

});
//
// function superimposeCorrect(skewedWrapper, degrees, navOffset, vw, vh){
//   // pass the div and the number of degrees it has been skewed
//   var wrapperHeight = jQuery(skewedWrapper).height();
//   console.log("Original height of " + skewedWrapper + " is " + wrapperHeight);
//   console.log("New wrapper has been pulled back up by " + navOffset);
//   // console.log(jQuery(skewedWrapper).offset().top);
//   // console.log(vw, wrapperHeight);
//   var radians= Math.abs(degrees)*Math.PI/180;
//   var skewDelta = (vw*Math.tan(radians))/2;
//   var topOffset = -skewDelta - navOffset;
//   // topOffset needs to have something to do with the viewPortWidth and viewPortHeight -
//   // that will be your mediaquery
//
//   var newHeight = wrapperHeight + 4*skewDelta + navOffset;
//   // console.log(topOffset, newHeight);
//   document.styleSheets[0].addRule(skewedWrapper + '.special:before', 'height: ' + newHeight + 'px;');
//   document.styleSheets[0].addRule(skewedWrapper + '.special:before', 'top: ' + topOffset + 'px;');
//   jQuery(skewedWrapper).toggleClass("special");
// }

function opacityCeiling(opacityMeasure){
  if (opacityMeasure < 1) return opacityMeasure;
  else return 1;
}

function doThisOnResize(){

}

function displayHamburgerMenu(){
  $( ".ham-nav-link" ).click(function() {
    $('#slide-menu-toggler').trigger('click');
  });
}
