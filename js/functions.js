
$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });
    $('.fore-bird').css({
      'transform' : 'translate(0px, -'+ wScroll /38 +'%)'
    });
    if(wScroll >$('.clouthes').offset().top){
      $('.clouthes img').each(function(){

      });
    }
});
