$(document).ready(function () {

    let scroll_pos = 0;
    $(document).scroll(function() {
        let galleryH = $('.gallery').innerHeight();
        let newsH = $('.news-orange').innerHeight();
        let studioH = $('.studio-yellow').innerHeight();
        let projectsH = $('.projects-purple').innerHeight();

        scroll_pos = $(this).scrollTop();

        if (scroll_pos > (galleryH + newsH - 100)) {
            $('.header__logo_link').css('backgroundColor', '#4eb748');
        } else {
            $('.header__logo_link').css('backgroundColor', '#f3762e');
        }

        if (scroll_pos > (galleryH + newsH - 100 + studioH)) {
            $('.header__logo_link').css('backgroundColor', '#635eaa');
        }

        if (scroll_pos > (galleryH + newsH - 100 + studioH + projectsH - 25)) {
           $('.header__logo_link').css('backgroundColor', '#bdd747');
        }

        // console.log(scroll_pos);
    });
});