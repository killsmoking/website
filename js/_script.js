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
    });
});
