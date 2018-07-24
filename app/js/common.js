(function (){

//  full page slider
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
//  full page slider

// navigation
  let burger = document.querySelector('.burger');
  let header = document.querySelector('header');
  let mobilePart = document.querySelector('.mobile__part');

  burger.addEventListener('click', function() {
    if (header.classList.contains('header-active')) {
      header.classList.remove('header-active');
      header.querySelector('.header__logo').classList.remove('header__logo-active');
      mobilePart.classList.remove('mobile__part-active');
      this.classList.remove('burger-active');
    } else {
      header.classList.add('header-active');
      header.querySelector('.header__logo').classList.add('header__logo-active');
      mobilePart.classList.add('mobile__part-active');
      this.classList.add('burger-active');
    }
  });
// navigation

//  news slider
  $('.news-list').slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    speed: 500,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 500,
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

//  news slider

//  section studio
  const studioLink = document.querySelector('.studio__link');
  const studioAbout = document.querySelector('.studio-about');
  const studioClose = document.querySelector('.studio-about__close');

  studioLink.addEventListener('click', function(e) {
    e.preventDefault();

    if (studioLink.classList.contains('studio-about-active')) {
      studioAbout.classList.remove('studio-about-active');
      document.body.classList.remove('body-locked');
    } else {
      studioAbout.classList.add('studio-about-active');
      document.body.classList.add('body-locked');
    }
  });
  studioClose.addEventListener('click', function(e) {
    e.preventDefault();
    studioAbout.classList.remove('studio-about-active');
    document.body.classList.remove('body-locked');
  });

//  section studio

})();