$(window).on('scroll', function(){
    if (window.scrollY > 100) {
      $('.logo').css('width', '100px');
      $('.logo').css('height','100px');
      $('header').css('height','100px');
      $('header').css('opacity','0.5');
    }
    else{
        $('.logo').css('width', '900px');
      $('.logo').css('height','900px');
      $('header').css('height','900px');
      $('header').css('opacity','1');
    }
  });


