$(document).ready(function () {
    var mySwiper = new Swiper('.swiper-container.place-economy-swiper', {
        slidesPerView: 3,
        spaceBetween: 40,
        slidesPerGroup: 1,
        speed: 500,
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            bulletClass: 'swiper-bullet',
            bulletActiveClass: 'swiper-bullet-activ',
            clickable: true,
        },

        breakpoints: {

            575: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,
            },


            767: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,
            },
        },

    })
});


$(document).ready(function () {
    var mySwiper2 = new Swiper('.swiper-container.benefit-mobale__swiper', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        speed: 500,
        loop: true,


        pagination: {
            el: '.swiper-pagination',
            bulletClass: 'swiper-bullet',
            bulletActiveClass: 'swiper-bullet-activ',
            clickable: true,
        },

        autoplay: {
            delay: 5000,
        },

    })
});



$(document).ready(function () {
    var mySwiper3 = new Swiper('.partners-customers__swiper.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 40,
        slidesPerGroup: 1,
        speed: 500,
        loop: true,

        breakpoints: {

            575: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,
            },

            767: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 20,
            },

        },

        autoplay: {
            delay: 5000,
        },

    })
});


(function ($) {
    $(function () {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);



$('.js-button-menu').click(function () {
    $(".js-popup-menu").fadeToggle(100);
});

$('.js-close-menu').click(function () {
    $('.js-popup-menu').fadeOut();
});


$('.accout__register.js-button-in').click(function () {
    $(".js-popup-in").fadeToggle(0);
    $('.js-popup-menu').fadeOut();
    document.body.style.overflow = "hidden";
    $('.tabs-in').removeClass('active');
    $('.tabs-up').addClass('active');
    $('.popup__tabs-in-wrap').removeClass('active');
    $('.popup__tabs-in-wrap:nth-child(2)').addClass('active');
});


$('.accout__logon.js-button-in').click(function () {
    $(".js-popup-in").fadeToggle(0);
    $('.js-popup-menu').fadeOut();
    document.body.style.overflow = "hidden";
});

$('.js-close-in').click(function () {
    $('.js-popup-in').fadeOut(0);
    document.body.style.overflow = "scroll";
});
