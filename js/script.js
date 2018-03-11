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

window.onbeforeunload = function () {

    //for changing the url

    var newUrl = "https://killsmoking.github.io/website/";
    window.location.href = newUrl;
}; 


