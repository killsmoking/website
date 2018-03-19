$(document).ready(function() {

    var $sec = $("section").hide(),
        current = 0;

    $sec.eq(0).show();

    function showNext() {
        if (current < $sec.length - 1) {
            $sec.eq(current).delay(6000).fadeOut('fast', function() {
                current++;
                $sec.eq(current).fadeIn('fast');
                showNext();
            });
        }
    }
    showNext();

    // $('#fullpage').fullpage({
    // anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthpage', 'fifthpage']
    // });
    $('.main-body').css('display','none');

    $('#enter, #skip').click(function(){
      $('#window').fadeOut("slow");
      // $("#window").css('opacity','0');
      // $('#window').css('display','none');
      $('#fp-nav').css('display','block');
      $('.main-body').css('opacity','1');
      $('.main-body').css('display','block');
      myVideo.play();
    });

    var myVideo = document.getElementById("video1");
    var myVideo2 = document.getElementById("video2");

    window.onbeforeunload = location.replace("index.html#firstPage");

    var isChrome = !!window.chrome; 
    var isIE = /*@cc_on!@*/false;

    // if( isChrome ) {
    //   console.log("is chrome");
    //     $("#video1").replaceWith($('<video id="video1" width="1500" controls><source src="imgs/appliedmedia16.webm" type="video/webm"></video>'));
    // }
    var vcount = 0;
    
    $('#fullpage').fullpage({
        anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthpage', 'fifthpage', 'sixthpage', 'seventhpage'],
        menu: '#menu',
        navigation: true,
        verticalCentered: true,
        sectionsColor: ['#000000', '#161414', '#1e1f21', '#181919','#111112','#000000','grey'],


        onLeave: function(index, nextIndex, direction){
          if(nextIndex != 2){
            $("#Layer_3, #Layer_2").css("transition", "0s");
            $("#Nicotine").css("transform", "translate(-70%, 31.2%)");
            $("#Cadmium").css("transform", "translate(-54%, 24.5%)");
            $("#Stearic_Acid").css("transform", "translate(-44%, 20.3%)");
            $("#Methanol").css("transform", "translate(-35%, 16%)");
            $("#Butane").css("transform", "translate(-25%, 12%)");
            $("#Ammonia").css("transform", "translate(-13%, 5.4%)");
            $("#Layer_3").css("opacity", "0");
            $("#Layer_2").css({"opacity": "0", "transform": "translateX(-3%)"});
          }
          if(nextIndex != 3){
            $("#whteblock1, #whiteblock2").css({"transition": ".5s", "transform": "translateY(13%)"});
          }
          if(nextIndex != 4){
            $("#barchartpercent").css({"transition": "0s", "opacity": "0"});
            $(".s3st11, .s3st14").css("transform", "translateX(-27%)");
          }
          if(nextIndex == 2){
            $("#Nicotine, #Cadmium, #Stearic_Acid, #Methanol, #Butane, #Ammonia").css("transform", "none");
            $("#Layer_3").css("opacity", "1");
            $("#Layer_2").css({"opacity": "1", "transform": "none"});
          } else if(nextIndex == 3){
            // if(ccount < 1){
              counting();
              counting120();
            // }
            $("#whteblock1").css("transform", "translateY(2%)");
            $("#whiteblock2").css("transform", "none");
          } else if(nextIndex == 4){
            console.log("at chart");
            $(".s3st11").css("transform", "none");
            $(".s3st14").css("transform", "none");
            $("#barchartpercent").css("opacity", "1");
          } else if(nextIndex == 5){
            if(vcount < 1){
              myVideo2.play();
              vcount = 1;
            }
          }
        },

        afterLoad: function(anchorLink, index){
          var loadedSection = $(this);
          //reset s2 and s4
            $("#Layer_3, #Layer_2, #whteblock1, #whiteblock2, #barchartpercent").css("transition", "all 1s cubic-bezier(0.22, 0.61, 0.36, 1)");
            $("#Layer_3").css("transition-delay", ".9s");
            $("#Layer_2, #whteblock1, #whiteblock2, #barchartpercent").css("transition-delay", "1s");
        }

      });

});

function counting(){
  var easingFn = function (t, b, c, d) {
  var ts = (t /= d) * t;
  var tc = ts * t;
  return b + c * (tc + -3 * ts + 3 * t);
  }
  var options = {
    useEasing: true, 
    easingFn: easingFn, 
    useGrouping: true, 
    separator: ',', 
    decimal: '.',
    suffix: '%' 
  };
  var demo = new CountUp('c19', 0, 19.3, 1, 2.5, options);
  if (!demo.error) {
    demo.start();
  } else {
    console.error(demo.error);
  }
  var demo = new CountUp('c15', 0, 15.3, 1, 2.5, options);
  if (!demo.error) {
    demo.start();
  } else {
    console.error(demo.error);
  }
}
var ccount = 0;
function counting120(){
  ccount = 1; console.log(ccount);
  var easingFn = function (t, b, c, d) {
  var ts = (t /= d) * t;
  var tc = ts * t;
  return b + c * (tc + -3 * ts + 3 * t);
  }
  var options = {
    useEasing: true, 
    easingFn: easingFn, 
    useGrouping: true, 
    separator: ',', 
    decimal: '.',
  };
  var demo = new CountUp('c120', 0, 120000, 0, 2.5, options);
  if (!demo.error) {
    demo.start();
  } else {
    console.error(demo.error);
  }
} 

