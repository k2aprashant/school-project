$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        // dots: false,
        // nav:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    })



    // ********* fancy box *****
    $(document).ready(function () {
        $('[data-fancybox]').fancybox();
    });

    // marquee hover pause and play
    var marquee = document.getElementById('myMarquee');
    marquee.addEventListener('mouseover', function () {
        marquee.stop();
    });

    marquee.addEventListener('mouseout', function () {
        marquee.start();
    });


    // *** Aos ***
    AOS.init();
})


// ***** scroll top
let scrollBtn = document.querySelector('#scrollBtn');
window.addEventListener('scroll', function () {
    let value = window.scrollY;
    if (value > 300) {
        scrollBtn.style.opacity = "1";
        scrollBtn.style.bottom = "50px";
    } else {
        scrollBtn.style.opacity = "0";
        scrollBtn.style.bottom = "600px";

    }
})

scrollBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})