"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function ($) {
  "use strict";

  /*------------------------------------------------------------------
  [Table of contents]
  blackboy PRELOADER JS INIT
  blackboy SKILLBAR JS INIT
  blackboy MENU SIDEBAR JS INIT
  blackboy COUNTER JS INIT
  blackboy IMAGE ROTATE JS INIT
  blackboy AUTO SLIDER JS INIT
  blackboy PROJECT SLIDER JS INIT
  blackboy PROJECT SLIDER2 JS INIT
  blackboy MAGNIFIC POPUP JS INIT
  blackboy IMAGE SWIPE HOVER JS INIT
  blackboy PRICING TABLE JS INIT
  blackboy MAP JS
  blackboy wow js
  
  -------------------------------------------------------------------*/

  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  };
  $(function () {
    var _Swiper;
    /*--------------------------------------------------------------
    blackboy PRELOADER JS INIT
    --------------------------------------------------------------*/

    $(".blackboy-preloader-wrap").fadeOut(500);

    /*--------------------------------------------------------------
    blackboy SKILLBAR JS INIT
    ------------------------------------------------------------*/
    var skillbar = $('.blackboy-skillbar');
    if (skillbar.is_exist()) {
      skillbar.skillBars({
        from: 0,
        speed: 4000,
        interval: 100,
        decimals: 0
      });
    }

    /*--------------------------------------------------------------
    blackboy STICKY MENU JS INIT
    --------------------------------------------------------------*/
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('#sticky-menu').addClass('sticky-menu');
      } else {
        $('#sticky-menu').removeClass('sticky-menu');
      }
    });

    /*--------------------------------------------------------------
    blackboy MENU SIDEBAR JS INIT
    --------------------------------------------------------------*/
    $(".barger-menu").on("click", function (e) {
      $(".blackboy-sidemenu-column, .offcanvas-overlay").addClass("active");
      event.preventDefault(e);
    });
    $(".blackboy-sidemenu-close, .offcanvas-overlay").on("click", function () {
      $(".blackboy-sidemenu-column, .offcanvas-overlay").removeClass("active");
    });

    /*--------------------------------------------------------------
    blackboy COUNTER JS INIT
    --------------------------------------------------------------*/
    var blackboy_counter = $('#blackboy-counter');
    if (blackboy_counter.is_exist()) {
      var a = 0;
      $(window).scroll(function () {
        var oTop = $(blackboy_counter).offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.blackboy-counter').each(function () {
            var $this = $(this),
              countTo = $this.attr('data-percentage');
            $({
              countNum: $this.text()
            }).animate({
              countNum: countTo
            }, {
              duration: 4000,
              easing: 'swing',
              step: function step() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function complete() {
                $this.text(this.countNum);
              }
            });
          });
          a = 1;
        }
      });
    }

    /*--------------------------------------------------------------
    blackboy IMAGE ROTATE JS INIT
    ------------------------------------------------------------*/

    var $rotateTwo = $('#rotatetwo');
    var $win = $(window);
    $win.on('scroll', function () {
      var right = 18 - $win.scrollTop() * 0.01;
      $rotateTwo.css('transform', 'rotate(' + right + 'deg)');
    });

    /*--------------------------------------------------------------
    blackboy AUTO SLIDER JS INIT
    ------------------------------------------------------------*/
    var auto_slider = new Swiper('.blackboy-auto-slider', {
      centeredSlides: true,
      speed: 6000,
      autoplay: {
        delay: .5
      },
      loop: true,
      slidesPerView: 'auto',
      allowTouchMove: false,
      disableOnInteraction: true
    });

    /*--------------------------------------------------------------
    blackboy PROJECT SLIDER JS INIT
    ------------------------------------------------------------*/
    var blackboy_project_slider = new Swiper(".blackboy-project-slider", (_Swiper = {
      // Optional parameters
      spaceBetween: 24,
      direction: 'horizontal',
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    }, _defineProperty(_Swiper, "mousewheel", {
      releaseOnEdges: true
    }), _defineProperty(_Swiper, "breakpoints", {
      640: {
        slidesPerView: 1
      },
      900: {
        slidesPerView: 2
      },
      1600: {
        slidesPerView: 3.5
      }
    }), _Swiper));

    /*--------------------------------------------------------------
    blackboy PROJECT SLIDER2 JS INIT
    ------------------------------------------------------------*/
    var blackboy_project_slider2 = new Swiper(".blackboy-project-slider2", {
      // Optional parameters
      spaceBetween: 24,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        clickable: false
      },
      // Responsive breakpoints
      breakpoints: {
        640: {
          slidesPerView: 1
        },
        900: {
          slidesPerView: 2
        },
        1600: {
          slidesPerView: 3
        }
      }
    });

    /*--------------------------------------------------------------
    blackboy PROJECT SLIDER JS INIT
    ------------------------------------------------------------*/
    var blackboy_instagram_slider = new Swiper(".blackboy-instagram-slider", {
      loop: true,
      // Responsive breakpoints
      breakpoints: {
        640: {
          slidesPerView: 2
        },
        900: {
          slidesPerView: 3
        },
        1200: {
          slidesPerView: 4,
          autoplay: {
            delay: 1
          }
        },
        1400: {
          slidesPerView: 5
        }
      }
    });

    /*--------------------------------------------------------------
    blackboy PROJECT SLIDER JS INIT
    ------------------------------------------------------------*/
    var blackboy_resizingslider = new Swiper(".blackboy-image-resizing", {
      loop: true,
      // Responsive breakpoints
      breakpoints: {
        640: {
          slidesPerView: 2
        },
        900: {
          slidesPerView: 3
        },
        1200: {
          slidesPerView: 4,
          autoplay: {
            delay: 1
          }
        },
        1400: {
          slidesPerView: 5
        }
      }
    });

    /*--------------------------------------------------------------
    blackboy TESTIMONIAL SLIDER JS INIT
    ------------------------------------------------------------*/
    var blackboy_t_slider = new Swiper(".blackboy-testimonial-slider", {
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });

    /*--------------------------------------------------------------
    blackboy TESTIMONIAL SLIDER TWO JS INIT
    ------------------------------------------------------------*/
    var blackboy_t_slider2 = new Swiper(".blackboy-testimonial-slider2", {
      slidesPerView: 1
    });

    /*--------------------------------------------------------------
    blackboy MAGNIFIC POPUP JS INIT
    ------------------------------------------------------------*/
    var blackboy_iconbox_slider = new Swiper(".blackboy-iconbox-slider", {
      loop: true,
      spaceBetween: 30,
      grabCursor: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        900: {
          slidesPerView: 1.5
        },
        1200: {
          slidesPerView: 1.5
        },
        1400: {
          slidesPerView: 2.5
        }
      }
    });

    /*--------------------------------------------------------------
    blackboy MAGNIFIC POPUP JS INIT
    ------------------------------------------------------------*/
    var popup_youtube = $('.video-init');
    if (popup_youtube.is_exist()) {
      popup_youtube.magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade'
      });
    }

    /*--------------------------------------------------------------
    blackboy IMAGE SWIPE HOVER JS INIT
    ------------------------------------------------------------*/

    gsap.set('.blackboy-service-increase-row img.swipeimage', {
      yPercent: -50,
      xPercent: -50
    });
    var activeImage;
    gsap.utils.toArray(".blackboy-service-increase-row").forEach(function (el) {
      var image = el.querySelector('img.swipeimage'),
        setX,
        setY,
        align = function align(e) {
          setX(e.clientX);
          setY(e.clientY);
        },
        startFollow = function startFollow() {
          return document.addEventListener("mousemove", align);
        },
        stopFollow = function stopFollow() {
          return document.removeEventListener("mousemove", align);
        },
        fade = gsap.to(image, {
          autoAlpha: 1,
          ease: "none",
          paused: true,
          onReverseComplete: stopFollow
        });
      el.addEventListener('mouseenter', function (e) {
        fade.play();
        startFollow();
        if (activeImage) {
          // if there's an actively-animating one, we should match its position here
          gsap.set(image, {
            x: gsap.getProperty(activeImage, "x"),
            y: gsap.getProperty(activeImage, "y")
          });
        }
        activeImage = image;
        setX = gsap.quickTo(image, "x", {
          duration: 0.6,
          ease: "power3"
        }), setY = gsap.quickTo(image, "y", {
          duration: 0.6,
          ease: "power3"
        });
        align(e);
      });
      el.addEventListener('mouseleave', function () {
        return fade.reverse();
      });
    });

    /*--------------------------------------------------------------
    blackboy PRICING TABLE JS INIT
    ------------------------------------------------------------*/
    // Table BTN Trigger
    $("#l5-pricing-btn .toggle-btn").on("click", function (e) {
      console.log($(e.target).parent().parent().hasClass("monthly-active"));
      $(e.target).toggleClass("clicked");
      if ($(e.target).parent().parent().hasClass("monthly-active")) {
        $(e.target).parent().parent().removeClass("monthly-active").addClass("yearly-active");
      } else {
        $(e.target).parent().parent().removeClass("yearly-active").addClass("monthly-active");
      }
    });
    $("[data-pricing-trigger]").on("click", function (e) {
      $(e.target).addClass("active").siblings().removeClass("active");
      var target = $(e.target).attr("data-target");
      console.log($(target).attr("data-value-active") == "monthly");
      if ($(target).attr("data-value-active") == "monthly") {
        $(target).attr("data-value-active", "yearly");
      } else {
        $(target).attr("data-value-active", "monthly");
      }
    });
  }); /*End document ready*/

  $(window).on("resize", function () {}); // end window resize

  $(window).on("load", function () {}); // End window LODE

  /*--------------------------------------------------------------
  blackboy MAP JS
  ------------------------------------------------------------*/
  var google_map = $('#map');
  if (google_map.is_exist()) {
    var init = function init() {
      var mapOptions = {
        zoom: 11,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        disableDefaultUI: true,
        center: new google.maps.LatLng(40.6700, -73.9400),
        styles: [{
          "featureType": "landscape.man_made",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f7f1df"
          }]
        }, {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [{
            "color": "#d0e3b4"
          }]
        }, {
          "featureType": "landscape.natural.terrain",
          "elementType": "geometry",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.business",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.medical",
          "elementType": "geometry",
          "stylers": [{
            "color": "#fbd3da"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#bde6ab"
          }]
        }, {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffe15f"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#efd151"
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffffff"
          }]
        }, {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "black"
          }]
        }, {
          "featureType": "transit.station.airport",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#cfb2db"
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#a2daf2"
          }]
        }]
      };
      var mapElement = document.getElementById('map');
      var map = new google.maps.Map(mapElement, mapOptions);
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        // icon: 'assets/images/all-img/contact/map.png',
        title: 'fugu'
      });
      var contentString = '<div id="content">' + '<div id="tpw">' + '<h3>fugu' + '</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 280
      });
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function () {
        marker.setAnimation(null);
      }, 750); //time it takes for one bounce   

      google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
      });
    };
    google.maps.event.addDomListener(window, 'load', init);
  }

  //blackboy wow js
  var wow = new WOW({
    mobile: false,
    // default
    tablet: false
  });
  wow.init();

  // AOS.init({
  //   duration: 1200,
  // })
})(jQuery);