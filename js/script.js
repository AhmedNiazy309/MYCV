$(document).ready(function () {
    $(".client-carousel").owlCarousel({
        item: 1,
        rtl: true,
        stagePadding: 0,
        responsiveClass: true,
        center: true,
        margin: 40,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true
            },
            600: {
                items: 2,
                nav: false,
                loop: true
            },
            1000: {
                items: 4,
                nav: true,
                loop: true,
                margin: 20
            }
        }
    });
});
$(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');
        aos_init();
        portfolioIsotope.isotope({
            filter: $(this).data('filter')
        });
    });
    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function () {
        $('.venobox').venobox({
            'share': false
        });
    });
});

function aos_init() {
    AOS.init({
        duration: 1000,
        once: true
    });
}
$(window).on('load', function () {
    aos_init();
});