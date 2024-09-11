
gsap.registerPlugin(ScrollTrigger);
gsap.to('.left-puzzle', {
    xPercent: 81,
    ease: "none",
    scrollTrigger: {
        trigger: ".left-puzzle",
        start: "top center",
        end: "=-50",
        scrub: true,
        // markers:true,
    }
});

gsap.to('.right-puzzle', {
    xPercent: -81,
    ease: "none",
    scrollTrigger: {
        trigger: ".right-puzzle",
        start: "top center",
        end: "=-50",
        scrub: true,
        // markers:true,
    }
}); 

jQuery(document).ready(function () {
    const $slider = jQuery('.slider');
    const $sliderItem = jQuery('.slider-item');
    const $prevBtn = jQuery('#prevBtn');
    const $nextBtn = jQuery('#nextBtn');
    const slideWidth = $sliderItem.first().outerWidth();
    const slideCount = $sliderItem.length;
    let currentIndex = 0;

    // Autoplay function
    function autoplay() {
        $nextBtn.click();
    }

    let autoplayInterval = setInterval(autoplay, 5000);

    // Click event for previous button
    $prevBtn.on('click', function () {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slideCount - 1;
        }
        updateSlider();
        resetAutoplay();
    });

    // Click event for next button
    $nextBtn.on('click', function () {
        currentIndex++;
        if (currentIndex >= slideCount) {
            currentIndex = 0;
        }
        updateSlider();
        resetAutoplay();
    });

    // Update the slider position
    function updateSlider() {
        const newPosition = -currentIndex * slideWidth;
        $slider.css('transform', `translateX(${newPosition}px)`);
    }

    // Reset autoplay interval
    function resetAutoplay() {
        clearInterval(autoplayInterval);
        autoplayInterval = setInterval(autoplay, 5000);
    }
});



jQuery(document).ready(function () {
    const $slider1 = jQuery('.slider1');
    const $images1 = $slider1.find('img');
    let currentIndex1 = 0;
    $images1.eq(currentIndex1).css('opacity','1');

    function nextImage1() {
        $images1.eq(currentIndex1).animate({ opacity: 0 }, 500);
        currentIndex1 = (currentIndex1 + 1) % $images1.length;
        $images1.eq(currentIndex1).animate({ opacity: 1 }, 500);
    }

    setInterval(nextImage1, 3000);
});

jQuery(document).ready(function () {
    const $slider2 = jQuery('.slider2');
    const $images2 = $slider2.find('img');
    let currentIndex2 = 0;
    $images2.eq(currentIndex2).css('opacity','1');

    function nextImage2() {
        $images2.eq(currentIndex2).animate({ opacity: 0 }, 500);
        currentIndex2 = (currentIndex2 + 1) % $images2.length;
        $images2.eq(currentIndex2).animate({ opacity: 1 }, 500);
    }

    setInterval(nextImage2, 3000);
});

jQuery(document).ready(function () {
    const $slider3 = jQuery('.slider3');
    const $images3 = $slider3.find('img');
    let currentIndex3 = 0;
    $images3.eq(currentIndex3).css('opacity','1');

    function nextImage3() {
        $images3.eq(currentIndex3).animate({ opacity: 0 }, 500);
        currentIndex3 = (currentIndex3 + 1) % $images3.length;
        $images3.eq(currentIndex3).animate({ opacity: 1 }, 500);
    }

    setInterval(nextImage3, 3000);
});

jQuery(document).ready(function () {
    const $slider4 = jQuery('.slider4');
    const $images4 = $slider4.find('img');
    let currentIndex4 = 0;
    $images4.eq(currentIndex4).css('opacity','1');

    function nextImage4() {
        $images4.eq(currentIndex4).animate({ opacity: 0 }, 500);
        currentIndex4 = (currentIndex4 + 1) % $images4.length;
        $images4.eq(currentIndex4).animate({ opacity: 1 }, 500);
    }

    setInterval(nextImage4, 3000);
});






$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});

$(document).ready(function(){
    $('.popup-btn').click(function(){
        $('.popupbox').fadeIn();
        $('.popupbox-overlay').fadeIn();
    });
    
    $('.popupbox .crossbtn').click(function(){
        $('.popupbox').fadeOut();
        $('.popupbox-overlay').fadeOut();
    }); 

    $('.popup-thm-btn').click(function(){
        $('.popupbox-thm').fadeIn();
        $('.popupbox-thm-overlay').fadeIn();
    });
    
    $('.popupbox-thm .crossbtn').click(function(){
        $('.popupbox-thm').fadeOut();
        $('.popupbox-thm-overlay').fadeOut();
    });
    
    $('.vidbox1').click(function(){
        $('.vidbox1-popp').fadeIn();
        $('.vidbox-popp-overlay').fadeIn();
        $('#myHeader').fadeOut();
    });
    
    $('.vidbox1-popp .crossbtn').click(function(){
        $('.vidbox1-popp').fadeOut();
        $('.vidbox-popp-overlay').fadeOut();
        $('#myHeader').fadeIn();
    });

    $('.vidbox2').click(function(){
        $('.vidbox2-popp').fadeIn();
        $('.vidbox-popp-overlay').fadeIn();
        $('#myHeader').fadeOut();
    });
    
    $('.vidbox2-popp .crossbtn').click(function(){
        $('.vidbox2-popp').fadeOut();
        $('.vidbox-popp-overlay').fadeOut();
        $('#myHeader').fadeIn();
    });

    $('.vidbox3').click(function(){
        $('.vidbox3-popp').fadeIn();
        $('.vidbox-popp-overlay').fadeIn();
        $('#myHeader').fadeOut();
    });
    
    $('.vidbox3-popp .crossbtn').click(function(){
        $('.vidbox3-popp').fadeOut();
        $('.vidbox-popp-overlay').fadeOut();
        $('#myHeader').fadeIn();
    });

    $('.vidbox4').click(function(){
        $('.vidbox4-popp').fadeIn();
        $('.vidbox-popp-overlay').fadeIn();
        $('#myHeader').fadeOut();
    });
    
    $('.vidbox4-popp .crossbtn').click(function(){
        $('.vidbox4-popp').fadeOut();
        $('.vidbox-popp-overlay').fadeOut();
        $('#myHeader').fadeIn();
    });

    $('.vidbox5').click(function(){
        $('.vidbox5-popp').fadeIn();
        $('.vidbox-popp-overlay').fadeIn();
        $('#myHeader').fadeOut();
    });
    
    $('.vidbox5-popp .crossbtn').click(function(){
        $('.vidbox5-popp').fadeOut();
        $('.vidbox-popp-overlay').fadeOut();
        $('#myHeader').fadeIn();
    });

    $('.vidbox6').click(function(){
        $('.vidbox6-popp').fadeIn();
        $('.vidbox-popp-overlay').fadeIn();
        $('#myHeader').fadeOut();
    });
    
    $('.vidbox6-popp .crossbtn').click(function(){
        $('.vidbox6-popp').fadeOut();
        $('.vidbox-popp-overlay').fadeOut();
        $('#myHeader').fadeIn();
    });

    $('.vidbox7').click(function(){
        $('.vidbox7-popp').fadeIn();
        $('.vidbox-popp-overlay').fadeIn();
        $('#myHeader').fadeOut();
    });
    
    $('.vidbox7-popp .crossbtn').click(function(){
        $('.vidbox7-popp').fadeOut();
        $('.vidbox-popp-overlay').fadeOut();
        $('#myHeader').fadeIn();
    });

    $('.vidbox8').click(function(){
        $('.vidbox8-popp').fadeIn();
        $('.vidbox-popp-overlay').fadeIn();
        $('#myHeader').fadeOut();
    });
    
    $('.vidbox8-popp .crossbtn').click(function(){
        $('.vidbox8-popp').fadeOut();
        $('.vidbox-popp-overlay').fadeOut();
        $('#myHeader').fadeIn();
    });

    $('.vidbox9').click(function(){
        $('.vidbox9-popp').fadeIn();
        $('.vidbox-popp-overlay').fadeIn();
        $('#myHeader').fadeOut();
    });
    
    $('.vidbox9-popp .crossbtn').click(function(){
        $('.vidbox9-popp').fadeOut();
        $('.vidbox-popp-overlay').fadeOut();
        $('#myHeader').fadeIn();
    });

    $('.vidbox10').click(function(){
        $('.vidbox10-popp').fadeIn();
        $('.vidbox-popp-overlay').fadeIn();
        $('#myHeader').fadeOut();
    });
    
    $('.vidbox10-popp .crossbtn').click(function(){
        $('.vidbox10-popp').fadeOut();
        $('.vidbox-popp-overlay').fadeOut();
        $('#myHeader').fadeIn();
    });

    $('.vidbox11').click(function(){
        $('.vidbox11-popp').fadeIn();
        $('.vidbox-popp-overlay').fadeIn();
        $('#myHeader').fadeOut();
    });
    
    $('.vidbox11-popp .crossbtn').click(function(){
        $('.vidbox11-popp').fadeOut();
        $('.vidbox-popp-overlay').fadeOut();
        $('#myHeader').fadeIn();
    });

});
    $('.popupbox').hide();
    $('.popupbox-overlay').hide();


    $('.popupbox-thm').hide();
    $('.popupbox-thm-overlay').hide();

    $('.vidbox1-popp').hide();
    $('.vidbox-popp-overlay').hide();

    $('.vidbox2-popp').hide();
    $('.vidbox-popp-overlay').hide();

    $('.vidbox3-popp').hide();
    $('.vidbox-popp-overlay').hide();

    $('.vidbox4-popp').hide();
    $('.vidbox-popp-overlay').hide();

    $('.vidbox5-popp').hide();
    $('.vidbox-popp-overlay').hide();

    $('.vidbox6-popp').hide();
    $('.vidbox-popp-overlay').hide();

    $('.vidbox7-popp').hide();
    $('.vidbox-popp-overlay').hide();

    $('.vidbox8-popp').hide();
    $('.vidbox-popp-overlay').hide();

    $('.vidbox9-popp').hide();
    $('.vidbox-popp-overlay').hide();

    $('.vidbox10-popp').hide();
    $('.vidbox-popp-overlay').hide();

    $('.vidbox11-popp').hide();
    $('.vidbox-popp-overlay').hide();




    $('.tv-slide').owlCarousel({
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:true
            }
        }
    });

    $('.comp-logos').owlCarousel({
        loop:true,
        responsiveClass:true,
        items:6,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        responsive:{
            0:{
                items:2,
                nav:false
            },
            400:{
                items:3,
                nav:false
            },
            600:{
                items:5,
                nav:false
            },
            992:{
                items:6,
                nav:false
            }
        }
    });

    // $('.puzz-stp-slide').owlCarousel({
    //     loop:true,
    //     responsiveClass:true,
    //     autoplay:true,
    //     autoplayTimeout:5000,
    //     responsive:{
    //         0:{
    //             items:1,
    //             nav:true
    //         },
    //         600:{
    //             items:1,
    //             nav:true
    //         },
    //         1000:{
    //             items:1,
    //             nav:true,
    //             loop:true
    //         }
    //     }
    // });

    var owlcar = $('.puzz-stp-slide');
    owlcar.owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        nav:false,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:false,
                loop:true
            }
        }
    });


    // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}




//     $('.portfolio-tabs').owlCarousel({
//     loop:false,
//     margin:165,
//     nav:true,
//     dots:false,
//     items:7,
//     responsive:{
//         0:{
//             items:3,
//             margin:120
//         },
//         340:{
//             items:3,
//             margin:50
//         },
        
//         400:{
//             items:3,
//             margin:50,
//         },
//         470:{
//             items:4,
//             margin:113,
//         },
//         500:{
//             items:4,
//             margin:125,
//         },
//         600:{
//             items:4,
//             margin:125,
//         },
//         800:{
//             items:5
//         },
//         1000:{
//             items:6
//         },
//         1200:{
//             items:7
//         }
//     }
// })


// $('.portfolio-tabs .port-li').removeClass('active');
    