(function () {

/*  full page slider */
  $('.gallery').slick({
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1200,
    nextArrow: '<span class="slick-next"><img src="img/right.png" alt="arrow"></span>',
    prevArrow: '<span class="slick-prev"><img src="img/left.png" alt="arrow"></span>'
  });
/*  full page slider */

/*  news slider */
  $('.news-list').slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    speed: 750,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 750,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 850,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 769,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoHeight: true
        }
      },
    ]
  });

  $('.news__arrows-left').click(function(){
    $('.news-list').slick('slickPrev');
  });

  $('.news__arrows-right').click(function(){
    $('.news-list').slick('slickNext');
  });

  //count and active slides
  $('.news-list').on('init', function(event, slick){
    slideCount = slick.slideCount;
    setSlideCount();
    setCurrentSlideNumber(slick.currentSlide);
  });

  $('.news-list').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    setCurrentSlideNumber(nextSlide);
  });

  function setSlideCount() {
    let $el = $('.slide-count-wrap').find('.total');
    $el.text(slideCount);
  }

  function setCurrentSlideNumber(currentSlide) {
    let $el = $('.slide-count-wrap').find('.current');
    $el.text(currentSlide + 1);
  }
  //count and active slides

  let itemH = $('.news__item').innerHeight();

  // if (window.matchMedia("(min-width: 991px)").matches) {
  //   $('.news__item').css('min-height', itemH + 80);
  // }


/*/  news slider */

/*  projects slider */
  $('.projects__viewport').slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1200,
    nextArrow: '<span class="slick-next"><img src="img/right.png" alt="arrow"></span>',
    prevArrow: '<span class="slick-prev"><img src="img/left.png" alt="arrow"></span>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500
        }
      },
      {
        breakpoint: 769,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500
        }
      },
    ]
  });
  $('.projects__arrows-left').click(function(){
    $('.projects__viewport').slick('slickPrev');
  });

  $('.projects__arrows-right').click(function(){
    $('.projects__viewport').slick('slickNext');
  });

  $(document).find('.slick-cloned .projects__item').removeAttr('data-fancybox');

/*/  projects slider */

  $('[data-fancybox]').fancybox({
      loop: true
  });

//  ***************************************************
    var w = $(window).width();
    var h = w < 768 ? 80 : 260;
    var h_max = w < 768 ? 100 : 300;

    var w1=w*.1;
    var w2=w*.5;
    var w3=w/2;
    var w4=w-w*.5;
    var w5=w-w*.1;

    var h1 = h_max;

    var c = [];
    var c2 = [];

    var x = 0;
    $(".animate-line2").each(function(){
        var id=$(this).attr('id');
        var color=$(this).data('color');

        var paper = Raphael(id, w, h_max);
        paper.setViewBox(0, 0, w, h_max );
        var h1 = h_max;
        c[x] = paper.path("M0,"+h_max+" 0,"+(h_max-h)+" C"+w1+","+h1+" "+w2+","+h_max+" "+w3+","+h_max+" C"+w4+","+h_max+" "+w5+","+h1+" "+w+","+(h_max-h)+" L"+w+","+h_max+" Z").attr({'fill':'#'+color, 'stroke': 'none'});

        x++;
    });

    $(window).scroll(function(){
        var x = 0;
        $(".animate-line2").each(function(){
            var top = $(this).offset().top;

            var w_height = $(window).height();
            var h_height = w_height / 2;
            var s_top = $(window).scrollTop();

            if(top < s_top + w_height && top + w_height > s_top + w_height){
                var acti = top - s_top;
                var k = Math.abs(acti / w_height);
                h_max2 = h_max * k;

                c[x].animate({ 'path': "M0,"+h_max+" 0,"+(h_max-h_max2)+" C"+w1+","+h1+" "+w2+","+h_max+" "+w3+","+h_max+" C"+w4+","+h_max+" "+w5+","+h1+" "+w+","+(h_max-h_max2)+" L"+w+","+h_max+" Z"}, 0);
            }

            x++;
        });

    });

    var x = 0;
    $(".animate-line").each(function(){
        var id=$(this).attr('id');
        var color=$(this).data('color');

        var paper = Raphael(id, w, h_max);
        paper.setViewBox(0, 0, w, h_max );
        var h1 = h_max;
        c2[x] = paper.path("M0,0 0,0 C"+w1+","+h1+" "+w2+","+h_max+" "+w3+","+h_max+" C"+w4+","+h_max+" "+w5+","+h1+" "+w+",0 L"+w+",0  Z").attr({'fill':'#'+color, 'stroke': 'none'});

        x++;
    });

    $(window).scroll(function(){
        var x = 0;
        $(".animate-line").each(function(){
            var top = $(this).offset().top;

            var w_height = $(window).height();
            var h_height = w_height / 2;
            var s_top = $(window).scrollTop()-300;

            if(top < s_top + w_height && top + w_height > s_top + w_height){
                var acti = top - s_top;
                var k = Math.abs(acti / w_height);
                h_max2 = h_max * k;

                c2[x].animate({ 'path': "M0,0 L0,"+(h_max-h_max2)+" C"+w1+","+h_max+" "+w2+","+h_max+" "+w3+","+h_max+" C"+w4+","+h_max+" "+w5+","+h_max+" "+w+","+(h_max-h_max2)+" L"+w+",0 Z"}, 0);
            }

            x++;
        });

    });

//  ***************************************************



})();