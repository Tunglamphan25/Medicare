$(function() {
  // Owl Carousel
$('.feedback__block').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    navText: ['<span class="<i class="fas fa-chevron-left"></i><</span>','<span class="<i class="fas fa-chevron-right"></i>></span>'],
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1
        },
        992:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('.brand__list').owlCarousel({
    loop:true,
    margin:10,
    nav: false,
    dots: false,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        },
        1000:{
            items:5
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
$('.team-about__block').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    navText: ['<span class="<i class="fas fa-chevron-left"></i><</span>','<span class="<i class="fas fa-chevron-right"></i>></span>'],
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1
        },
        992:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
});

