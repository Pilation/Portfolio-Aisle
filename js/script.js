// $(document).ready(function () {
$('.best-sellers__list').slick({
    // accessibility: true;
    arrows: false,
    dots: false,
    draggable: true,
    respondTo: 'window',
    // адаптивная высота
    adaptiveHeight: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    easing: 'linear',
    infinite: true,
    // or false
    initialSlide: 0,
    // autoplay, при infinite - true
    autoplay: false,
    autoplaySpeed: 4500,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: false,
    // перетягивание мышкой и телефон
    draggable: true,
    swipe: true,
    touchThreshold: 5,
    touchMove: true,
    // дождаться окончания анимации при переключении
    waitForAnimate: true,
    centerMode: true,
    // centerPadding: '-30px 30px',
    // при true ширина не определяется автоматически, слайды слипаются вместе а те что не влезают, обрезаются сбоку
    variableWidth: true,
    // ряды
    // rows: 1,
    // slidesPerRow: 1,
    // 1 слайд как на презентации, листаются по 1 слайду онли
    fade: false,
    // переместить стрелки в див
    // appendArrows: $(".arws"),
    // переместить стрелки в див
    // appendDots: $(".arws"),
    // swipe: true,
    touchMove: true,
    // переключение слайдов с клика
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
                variableWidth: false,

            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                variableWidth: false,

            }
        }

    ],
});
$('.featured-pages__list').slick({
    // accessibility: true;
    arrows: false,
    dots: false,
    draggable: true,
    respondTo: 'window',
    // адаптивная высота
    adaptiveHeight: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    easing: 'linear',
    infinite: true,
    // or false
    initialSlide: 0,
    // autoplay, при infinite - true
    autoplay: false,
    autoplaySpeed: 4500,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: false,
    // перетягивание мышкой и телефон
    draggable: true,
    swipe: true,
    touchThreshold: 5,
    touchMove: true,
    // дождаться окончания анимации при переключении
    waitForAnimate: true,
    centerMode: true,
    // centerPadding: '-30px',
    // при true ширина не определяется автоматически, слайды слипаются вместе а те что не влезают, обрезаются сбоку
    variableWidth: true,
    // ряды
    // rows: 1,
    // slidesPerRow: 1,
    // 1 слайд как на презентации, листаются по 1 слайду онли
    fade: false,
    // переместить стрелки в див
    // appendArrows: $(".arws"),
    // переместить стрелки в див
    // appendDots: $(".arws"),
    // swipe: true,
    touchMove: true,
    // переключение слайдов с клика
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
                variableWidth: false,

            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                variableWidth: false,

            }
        }

    ],
});



$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header-menu,.wrapper,.header__buttons').toggleClass('active');
        $('body').toggleClass('lock');
    });
});



$(document).ready(function () {
    $('.period-products__green').click(function (event) {
        $('.period-products__green img').toggleClass('fullscreen');
    });
});
$(document).ready(function () {
    $('.fresh-blood__card').click(function (event) {
        $('.fresh-blood__card').toggleClass('fullscreen');
    });
});
$(document).ready(function () {
    $('.fresh-blood__picture').click(function (event) {
        $('.fresh-blood__picture').toggleClass('fullscreen');
    });
});






var btn = $('.go-top-button');

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

