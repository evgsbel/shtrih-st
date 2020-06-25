// $(() => {
//     $(window).on('load', function () {
//         $('.preloader__wrp').fadeOut();
//     });
// })


$(() => {
    $('.js-members-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="carousel__btn carousel__btn_prev"><svg width="13" height="20" viewBox="0 0 13 20"><use xlink:href="#sld-prev"></use></svg></button>',
        nextArrow: '<button type="button" class="carousel__btn carousel__btn_next"><svg width="13" height="20" viewBox="0 0 13 20"><use xlink:href="#sld-next"></use></svg></button>',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});