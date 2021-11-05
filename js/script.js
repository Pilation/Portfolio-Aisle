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
    // responsive: [
    //     {
    //         breakpoint: 1400,
    //         settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 1,
    //         }
    //     },
    //     {
    //         breakpoint: 1024,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 1,
    //         }
    //     },
    //     {
    //         breakpoint: 800,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             centerMode: true,
    //             slidePerRow: 1,

    //         }
    //     }

    // ],
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
    // responsive: [
    //     {
    //         breakpoint: 1400,
    //         settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 1,
    //         }
    //     },
    //     {
    //         breakpoint: 1024,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 1,
    //         }
    //     },
    //     {
    //         breakpoint: 800,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             centerMode: true,
    //             slidePerRow: 1,

    //         }
    //     }

    // ],
});



$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header-menu,.wrapper,.header__buttons').toggleClass('active');
        $('body').toggleClass('lock');
    });

});

var btn = $('.go-top-button');

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

const animItems = document.querySelectorAll('.anim-scroll');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            // возможно поставить один
            const animStart = 10;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            // добавляем и убираем Active
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('anim-scroll-active');
            } else {
                if (!animItem.classList.contains('anim-scroll-no-hide')) {
                    animItem.classList.remove('anim-scroll-active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
}
