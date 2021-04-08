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
var bas = document.getElementById('basic').getContext('2d');
var myChart = new Chart(bas, {
    type: 'bar',
    data: {
        labels: ['HTML', 'CSS', 'JS'],
        datasets: [{
            label: 'percentage',
            data: [100 , 95 , 75],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
var libe = document.getElementById('libraries').getContext('2d');
var myChart = new Chart(libe, {
    type: 'bar',
    data: {
        labels: ['jquery', 'Bootstrap', 'Chart.js' , 'datatable' , 'ckeditor' , 'uikit' , 'HeyUi' , 'venobox' , 'aos'],
        datasets: [{
            label: 'percentage',
            data: [75 , 95 , 70 , 80 , 75 , 95 , 90 , 80 , 95],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
var adva = document.getElementById('advanced').getContext('2d');
var myChart = new Chart(adva, {
    type: 'bar',
    data: {
        labels: ['scss', 'pug', 'axios'],
        datasets: [{
            label: 'percentage',
            data: [90 , 85 , 70],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
var framework = document.getElementById('framework').getContext('2d');
var myChart = new Chart(framework, {
    type: 'bar',
    data: {
        labels: ['vue', 'nuxt'],
        datasets: [{
            label: 'percentage',
            data: [90 , 70],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
