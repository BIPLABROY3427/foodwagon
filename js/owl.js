$(document).ready(function () {
    $('#biplab-carousal').owlCarousel({
        items: 1,
        margin: 5,
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 1700,
        dots: false,
        stagePadding: 0,
        responsiveClass: true,
        autoplaySpeed: 800,
        navText: [
            "<i class='fa fa-caret-left text-success' onclick='Secondfunction()' id='Left'></i>",
            "<i class='fa fa-caret-right text-success' id='Right' onclick='Myfunction()'></i>",

        ],
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            380: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            },
            1400: {
                items: 5
            }
        }
    });
    $('#biplab-search-food').owlCarousel({
        items: 1,
        margin: 5,
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 1700,
        dots: false,
        stagePadding: 0,
        responsiveClass: true,
        autoplaySpeed: 800,
        navText: [
            "<i class='fa fa-caret-left text-success' onclick='Secondfunction()' id='Left'></i>",
            "<i class='fa fa-caret-right text-success' id='Right' onclick='Myfunction()'></i>",

        ],
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            1100: {
                items: 5
            },
            1400: {
                items: 6
            }
        }
    });
});



$(".searchinput").on("focus", function () {
    $(".searchbtn").css('border', '3px solid #ffb310d1');
})
$(".searchinput").on("blur", function () {
    $(".searchbtn").css('border', '1px solid black');
})
