$(document).ready(function(){

    $('.carousel__main').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    });    

    $('.clients__carousel').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
  });   

    $('ul.services__tabs').on('click', 'li:not(.services__tab_active-white)', function() {
        $(this)
          .addClass('services__tab_active-white').siblings().removeClass('services__tab_active-white')
          .closest('div.container').find('div.services__content').removeClass('services__content_active').eq($(this).index()).addClass('services__content_active');
      });
      $(window).width(function(){
        if($(this).width()>550){
          $(window).scroll(function() {
            if ($(this).scrollTop()>1600){
              $('.pageup').fadeIn();
            } else{
              $('.pageup').fadeOut();
            }
          });
        } else{
          return;
        }
      });

        //Scroll
      $("a[href^='#']").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
      });

});