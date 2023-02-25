$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],
        autoplay:true,
        autoplayTimeout:60000,
        responsive:{
            0:{
                items:2
            },

            1000:{
                items:2
            }
        }
    });
});