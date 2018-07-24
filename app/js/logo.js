$(document).ready(function () {

    let scroll_pos = 0;
    $(document).scroll(function() {
        let galleryH = $('.gallery').height();
        let newsH = $('.news').innerHeight();
        let studioH = $('.studio').innerHeight();
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > (galleryH + newsH)) {
            $('.header__logo_link').css('backgroundColor', '#4eb748');
        } else {
            $('.header__logo_link').css('backgroundColor', '#f3762e');
        }
        // console.log(scroll_pos);
    });
});