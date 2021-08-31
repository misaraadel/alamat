$(document).ready(function () {
    /*start the loading page */
    jQuery(".loader").fadeOut(1000);
    //scroll to top make fade for button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-button").fadeIn();
        } else {
            $(".scroll-top-button").fadeOut();
        }
    });
    //scroll to top button
    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });
    //change navbar color on scroll
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
     //Wow intit
     wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: false
    });
    wow.init();
    $('.first-card-header').click(function(){
        $('.first-card-header').toggleClass('active-arrow');
        $('.second-card-header').removeClass('active-arrow');
    });
    $('.second-card-header').click(function(){
        $('.second-card-header').toggleClass('active-arrow');
        $('.first-card-header').removeClass('active-arrow');
    });
    //start active navbar
    $('.toggle-btn').click(function(){
        $('.links-content').addClass('active-nav');
    });
    $('.close-nav').click(function(){
        $('.links-content').removeClass('active-nav');
    });
    //owl header screen 
    //projects slider 
    $('.owl-projects').owlCarousel({
        rtl: true,
        loop:false,
        margin: 20,
        nav:true,
        dots: false,
        autoplay: false,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        navContainerClass: "container owl-nav",
		navText: [
            '<i class="fas fa-chevron-right"></i>',
            '<i class="fas fa-chevron-left"></i>'
        ],
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
    });
    $('.owl-partner').owlCarousel({
        rtl: true,
        loop:false,
        margin: 20,
        nav:true,
        dots: false,
        autoplay: false,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        navContainerClass: "container owl-nav",
		navText: [
            '<i class="fas fa-chevron-right"></i>',
            '<i class="fas fa-chevron-left"></i>'
        ],
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    var swiper = new Swiper('.swiper-container', {
        effect: 'fade',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
    });
});