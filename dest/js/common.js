$(document).ready(function () {

    var faq = $('.js-faq'),
        faq_b = $('.js-faq b');

    $('.faq_item .faq_qustns b').click(function () {
        var act = $(this).parent().parent().hasClass('open');
        if(act !== true) {
            faq_b.text('+');
            $(this).text('-');
            faq.removeClass('open');
            faq.children('.faq_answer').slideUp(1000);
            $(this).parent().parent().addClass('open');
            $(this).parent().siblings().slideDown(1000);
        }
    });

    // toggle tabs
    var tabs = $('.tabs_tab ul li');

    tabs.on('click', function (e) {
        e.preventDefault();

        if(!$(this).hasClass('active')) {
            var i = $(this).index();

            tabs.removeClass('active');
            $('.tab.show').css('display', 'none').removeClass('show');
            $(this).addClass('active');
            $($('.tabs_content').children('.tab')[i]).fadeIn(1000).addClass('show');
        }
    });

    // humburger
    var humb = $('.js-nav'),
        mobile = $('.mob'),
        line = $('.js-line');

    $('.js-close').on('click', function() {
        line.removeClass('animate');
        mobile.animate({
            left: '-250px'
        }, 600);
    });

    // mobile menu
    humb.on('click', function() {
        line.toggleClass('animate');

        if(line.hasClass('animate')) {
            mobile.animate({
                left: 0
            }, 600);
        }else{
            mobile.animate({
                left: '-250px'
            }, 600);
        }
    });

    // mobile menu building
    function buildNav() {
        var menu = $('.nav_menu'),
            mob = $('.mob_menu-list'),
            nav = $('.nav'),
            width = $(window).width();

        if(width < 977) {
            mob.prepend(menu);
        }else{
            nav.append(menu);
        }
    }

    // call menu building
    buildNav();
    $(window).resize(buildNav);

    // gallery about page fancybox
    $('[data-fancybox="gallery"]').fancybox({
        loop: true,
        arrows: true,
        buttons: [
            "zoom",
            "slideShow",
            "close"
        ]
    });

    // fancybox callback event
    $('[data-fancybox]').fancybox({
        arrows: false,
        infobar: false,
        parentEl: "body",
        padding: 0
    });

    // slick slider main page
    $('.js-slick').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        nextArrow: '<div class="btn_wrap btn_left"><span class="prev"></span></div>',
        prevArrow: '<div class="btn_wrap btn_right"><span class="next"></span></div>',
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

});