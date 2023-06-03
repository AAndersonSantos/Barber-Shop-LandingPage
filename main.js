$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 0,
    autoplay:false,
    autoplayTimeout:6000,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})