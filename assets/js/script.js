(function($) {

    "use strict";

    $(window).on("load", function() {

        /* ----------------------------------------------------------- */
        /*  PRELOADER ANIMATION
        /* ----------------------------------------------------------- */

        let pageTransitionAnimationDuration = 3500
        let preloader = $(".preloader");
        pageTransition({
            target: document.querySelector('.main-page'),
            delay: 3000,
            duration: pageTransitionAnimationDuration,
            conditions: function(event, link) {
                return !/(\#|callto:|tel:|mailto:|:\/\/)/.test(link) &&
                    !event.currentTarget.hasAttribute('data-lightgallery') &&
                    event.currentTarget.getAttribute('href') !== 'javascript:void(0);';
            },
            onTransitionStart: function(options) {
                setTimeout(function() {
                    preloader.removeClass('loaded');
                }, options.duration * .75);
            },
            onReady: function() {
                preloader.addClass('loaded');
            }
        });

        // pre-loader loading bar
        $('#pre-bar').barfiller({
            duration: 2000
        });


        /* ----------------------------------------------------------- */
        /*  TEXT ROTATOR ANIMATION
        /* ----------------------------------------------------------- */
        if ($("#maintext").length) {
            $("#maintext").animatedHeadline({
                animationType: "clip"
            });
        }

    });


    $(document).ready(function() {

        /* ----------------------------------------------------------- */
        /*  CURSOR FOLLOWER 
        /* ----------------------------------------------------------- */
        let mouseX = 0,
            mouseY = 0;
        let xp = 0,
            yp = 0;

        $(document).mousemove(function(e) {
            mouseX = e.pageX - 20;
            mouseY = e.pageY - 20;
        });

        setInterval(function() {
            xp += ((mouseX - xp) / 5);
            yp += ((mouseY - yp) / 5);
            $("#cursor").css({
                left: xp + 'px',
                top: yp + 'px'
            });
        }, 10);

        /* ----------------------------------------------------------- */
        /*  COUNTERup JS
        /* ----------------------------------------------------------- */
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

        /* ----------------------------------------------------------- */
        /*  BARFILLER JS
        /* ----------------------------------------------------------- */
        $('#bar1').barfiller({
            duration: 4000
        });
        $('#bar3').barfiller({
            duration: 4000
        });
        $('#bar2').barfiller({
            duration: 4000
        });
        $('#bar4').barfiller({
            duration: 4000
        });
        $('#bar5').barfiller({
            duration: 4000
        });
        $('#bar6').barfiller({
            duration: 4000
        });
        $('#bar7').barfiller({
            duration: 4000
        });
        $('#bar8').barfiller({
            duration: 4000
        });
        // $('#bar9').barfiller({duration: 4000});
        // $('#bar10').barfiller({duration: 4000});


        /* ----------------------------------------------------------- */
        /*  3D HOVER ANINATION on-slider-img JS
        /* ----------------------------------------------------------- */
        $('.swiper-container').plate({
            element: '.slide-img',
            maxRotation: '30',
            perspective: '1000'
        });

        /* ----------------------------------------------------------- */
        /*  SWIPER JS
        /* ----------------------------------------------------------- */
        let swiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
            }
        });
        let swiper2 = new Swiper('.swiper-container-feedback', {
            autoplay: {
                delay: 3000,
            },
            loop: true,
            slidesPerView: 1,
            spaceBetween: 50,
        });


        /* ----------------------------------------------------------- */
        /*  SMOOTH SCROLL JQUERY
        /* ----------------------------------------------------------- */
        $('a[href*="#"]')

        .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(event) {

                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                    location.hostname == this.hostname
                ) {

                    let target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                    if (target.length) {

                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function() {


                            let $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) {
                                return false;
                            } else {
                                $target.attr('tabindex', '-1');
                                $target.focus();
                            };
                        });
                    }
                }
            });

        /* ----------------------------------------------------------- */
        /*  ANIMATION on SCROLL JS
        /* ----------------------------------------------------------- */
        $(function() {
            AOS.init({
                duration: 900,
                once: true
            });
        });
        /* ----------------------------------------------------------- */
        /*  BOOTSTRAP SCROLL-SPY
        /* ----------------------------------------------------------- */
        let btnn = document.querySelector(".custom-btn")
        let curClick = document.querySelector(".click")

        btnn.addEventListener("hover", () => {
            curClick.classList.toggle("d-none")
            console.log('hello')
        })


    });


})(jQuery);