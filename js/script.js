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
var bg_color = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 159, 64, 0.2)'
];
var border_color = [
    'rgba(255, 99, 132, 1)',
    'rgba(255, 99, 132, 1)',
    'rgba(255, 159, 64, 1)'
];
var bas = document.getElementById('basic').getContext('2d');
var myChart = new Chart(bas, {
    type: 'doughnut',
    data: {
        labels: ['HTML', 'CSS', 'JS'],
        datasets: [{
            data: [100, 95, 75],
            backgroundColor: bg_color,
            borderColor: border_color,
            borderWidth: 1
        }]
    },
    options: {
        
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var libe = document.getElementById('libraries').getContext('2d');
var myChart = new Chart(libe, {
    type: 'pie',
    data: {
        labels: ['jquery', 'Bootstrap', 'Chart.js', 'datatable', 'ckeditor', 'uikit', 'HeyUi', 'venobox', 'aos'],
        datasets: [{
            data: [75, 95, 70, 80, 75, 95, 90, 80, 95],
            label: 'percentage',
            backgroundColor: bg_color,
            borderColor: border_color,
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        stacked: false,
        plugins: {},
        scales: {
            y: {
                beginAtZero: true,
            },
        }
    }
});
var adva = document.getElementById('advanced').getContext('2d');
var myChart = new Chart(adva, {
    type: 'bar',
    data: {
        labels: ['scss', 'pug', 'axios'],
        datasets: [{
            data: [90, 85, 70],
            backgroundColor: bg_color,
            borderColor: border_color,
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
    type: 'line',
    data: {
        labels: ['vue', 'nuxt', 'webpack'],
        datasets: [{
            data: [90, 70, 60],
            backgroundColor: bg_color,
            borderColor: border_color,
            borderWidth: 1,
            fill: false,
            stepped: true,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    generateLabels: function (chart) {
                        // Get the default label list
                        const original = Chart.overrides.pie.plugins.legend.labels.generateLabels;
                        const labelsOriginal = original.call(this, chart);

                        // Build an array of colors used in the datasets of the chart
                        var datasetColors = chart.data.datasets.map(function (e) {
                            return e.backgroundColor;
                        });
                        datasetColors = datasetColors.flat();

                        // Modify the color and hide state of each label
                        labelsOriginal.forEach(label => {
                            // There are twice as many labels as there are datasets. This converts the label index into the corresponding dataset index
                            label.datasetIndex = (label.index - label.index % 2) / 2;

                            // The hidden state must match the dataset's hidden state
                            label.hidden = !chart.isDatasetVisible(label.datasetIndex);

                            // Change the color to match the dataset
                            label.fillStyle = datasetColors[label.index];
                        });

                        return labelsOriginal;
                    }
                },
                onClick: function (mouseEvent, legendItem, legend) {
                    // toggle the visibility of the dataset from what it currently is
                    legend.chart.getDatasetMeta(
                        legendItem.datasetIndex
                    ).hidden = legend.chart.isDatasetVisible(legendItem.datasetIndex);
                    legend.chart.update();
                }
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const labelIndex = (context.datasetIndex * 2) + context.dataIndex;
                        return context.chart.data.labels[labelIndex] + ': ' + context.formattedValue;
                    }
                }
            }
        },
        responsive: true,
        interaction: {
            intersect: false,
            axis: 'x'
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});