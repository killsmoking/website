$(document).ready(function(){function n(){a<s.length-1&&s.eq(a).delay(6e3).fadeOut("fast",function(){a++,s.eq(a).fadeIn("fast"),n()})}var s=$("section").hide(),a=0;s.eq(0).show(),n(),$(".main-body").css("display","none"),$("#enter, #skip").click(function(){$("#window").fadeOut("slow"),$("#fp-nav").css("display","block"),$(".main-body").css("opacity","1"),$(".main-body").css("display","block")})});