
      // menu button
      $('.menu-button-wrapper').click(function(){
        $('.menu-button').toggleClass('active')
  });

  $('.menu-item').click(function(){
        $('.menu-button').removeClass('active')
  });

  // menu
  $(function() {
              $(".menu-item-1").hover(function() {
                    $(".menu-bg1").fadeIn(800);
              }, function() {
                    $(".menu-bg1").fadeOut(800);
              })
              $(".menu-item-2").hover(function() {
                    $(".menu-bg2").fadeIn(800);
              }, function() {
                    $(".menu-bg2").fadeOut(800);
              })
              $(".menu-item-3").hover(function() {
                    $(".menu-bg3").fadeIn(800);
              }, function() {
                    $(".menu-bg3").fadeOut(800);
              })
              $(".menu-item-4").hover(function() {
                    $(".menu-bg4").fadeIn(800);
              }, function() {
                    $(".menu-bg4").fadeOut(800);
              })
        })

        var t1 = new TimelineMax({paused: true});

        t1.to(".menu", 2, {
              width: "50%",
              ease: Expo.easeInOut
        });
        t1.staggerFrom(".menu ul li", 2, {y: 20 , opacity: 0, ease: Expo.easeInOut}, 0.1);

        t1.to(".menu-images", 2, {
              width: "50%",
              ease: Expo.easeInOut,
              delay: -3,
        });
        t1.reverse();
        $(document).on("click", ".menu-button-wrapper", function() {
              t1.reversed(!t1.reversed());
        });
        $(document).on("click", ".menu-item", function() {
              t1.reversed(!t1.reversed());
        });

        // header slider
        $(document).ready(function(){
              $('.header-slider').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    fade: true,
                    swipe: false,
                    autoplay: true,
                    autoplaySpeed: 3500,
                    prevArrow: '<i class="fas fa-arrow-left slider-arrow"></i>',
                    nextArrow: '<i class="fas fa-arrow-right slider-arrow"></i>',
                    asNavFor: '.slider-dots'                 
              });

              $('.slider-dots').slick({
                    infinite: false,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    asNavFor: '.header-slider'
              });            
        });

        // slider dots animation
        TweenMax.staggerFrom(".slider-dots-item", 1,{
              delay: 1, opacity: 0, y: 20, ease: Expo.easeInOut
        }, 0.4);

        // about animation
        $(window).scroll(function() {    
              var scroll = $(window).scrollTop();
              if (scroll >= 500) {
                    $(".about-section-image-wrap").addClass("anim");
                    $(".about-section-image").addClass("animation-block");
              }
        });

        // parallax
        var image = document.getElementsByClassName('po-img-one');
        new simpleParallax(image, {
              scale: 1.6
        });

        var image = document.getElementsByClassName('po-img-two');
        new simpleParallax(image, {
              scale: 1.6,
              orientation: 'left'
        });

        var image = document.getElementsByClassName('po-img-three');
        new simpleParallax(image, {
              scale: 1.6
        });

        var image = document.getElementsByClassName('po-img-four');
        new simpleParallax(image, {
              scale: 1.6,
              orientation: 'right'
        });

        // scroll
        $(document).ready(function() {
              $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
              if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
              &&
                    location.hostname == this.hostname
              ) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
              event.preventDefault();
              $('html, body').animate({
                    scrollTop: target.offset().top
              }, 2500, function() {
                    var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                    return false;
              } else {
                    $target.attr('tabindex','-1');
                    $target.focus(); 
              };
              });
                    }
              }
              });
                    });