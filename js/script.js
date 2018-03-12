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
    

    var isChrome = !!window.chrome; 
    var isIE = /*@cc_on!@*/false;

    // if( isChrome ) {
    //   console.log("is chrome");
    //     $("#video1").replaceWith($('<video id="video1" width="1500" controls><source src="imgs/appliedmedia16.webm" type="video/webm"></video>'));
    // }
    
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

