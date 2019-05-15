

var bodyScrollOptions = {
    reserveScrollBarGap: true
};

function openModal(hrefModal) {
    
    if ($(hrefModal).length > 0){
        $(hrefModal).fadeIn(300);
    
        bodyScrollLock.clearAllBodyScrollLocks();
        bodyScrollLock.disableBodyScroll(hrefModal, bodyScrollOptions);
    }
    
    $(hrefModal).find('.slick-slider').slick('setPosition');
  
}

function closeModals() {
  if (scrollbarWidth > 0) {
    $('.popup-block:not(:hidden)').fadeOut(200, function() {
            bodyScrollLock.clearAllBodyScrollLocks();
        });
  } else {
    $('.popup-block:not(:hidden)').fadeOut(200);
    
    bodyScrollLock.clearAllBodyScrollLocks();
  }
}


$(document.body).on('click','[data-toggle="modal"]',function(e) {
  e.preventDefault();
  
  var hrefModal = $(this).attr('data-target');
  
  openModal(hrefModal);
});

$(document.body).on('click','.popup-block__overlay',function(e) {
  var closeButton = $(this).children('[data-toggle="dismiss"]');
  
  if (e.target != this) {
//    return false;
  } else {
    closeModals();
  }
});


$(document.body).on('click','[data-toggle="dismiss"]',function(e) {
  e.preventDefault();
  
  closeModals();
});

var block = $("<div>").css({
        height: "50px",
        width: "50px"
    }),
    indicator = $("<div>").css({
        height: "200px"
    }),
    scrollbarWidth = 0;
$("body").append(block.append(indicator));
var w1 = $("div", block).innerWidth();
block.css("overflow-y", "scroll");
var w2 = $("div", block).innerWidth();
$(block).remove();
scrollbarWidth = (w1 - w2);

$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $(this).toggleClass('active');
  $("#header-menu").toggleClass("active");
}); 

$('.desserts-block__slider-one').on('click', function() {
  $('#popup-dessert').toggleClass('active');
});

$('.desserts-block__slider-two').on('click', function() {
  $('#popup-raw').toggleClass('active');
});

$('.popup-block__close').on('click', function() {
  $('#popup-dessert').removeClass('active');
});

$('.popup-block__close').on('click', function() {
  $('#popup-raw').removeClass('active');
});

$('.catering-block__slider-one').on('click', function() {
  $('#popup-delivery').toggleClass('active');
});

$('.catering-block__slider-two').on('click', function() {
  $('#popup-catering').toggleClass('active');
});

$('.popup-block__close').on('click', function() {
  $('#popup-delivery').removeClass('active');
});

$('.popup-block__close').on('click', function() {
  $('#popup-catering').removeClass('active');
});

$("#menu-toggle.active").click(function(e) {
  e.preventDefault();
  $("#header-menu").removeClass("active");
});


$('.promo-block__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  prevArrow: '<button class="prev promo-block__arrow"></button>',
  nextArrow: '<button class="next promo-block__arrow"></button>',
});

$('.popup-block__dessert-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button class="prev popup-block__arrow"></button>',
  nextArrow: '<button class="next popup-block__arrow"></button>',
});


$('.popup-block__raw-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button class="prev popup-block__arrow"></button>',
  nextArrow: '<button class="next popup-block__arrow"></button>',
});

$('.popup-block__delivery-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button class="prev popup-block__arrow"></button>',
  nextArrow: '<button class="next popup-block__arrow"></button>',
});


$('.popup-block__catering-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button class="prev popup-block__arrow"></button>',
  nextArrow: '<button class="next popup-block__arrow"></button>',
});

wow = new WOW(
  {
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       0,
    mobile:       false,
    live:         true
  }
)
wow.init();


var arMapMarkers96863489 = [ { title:"Кутузовский проспект, 36 стр.4", descr:"", lat:"55.740284", lng:"37.52748", }, ];
$(document).ready(function() { t_map_lazyload_add_map(); $(window).bind('scroll', t_throttle(t_map_lazyload_add_map, 300)); function t_map_lazyload_add_map() { var windowHeight = $(window).height(); var scrollDiffHeigth = 700; var rec = $('#rec' + 96863489); var map = rec.find('.t-map-lazyload'); if (map.length != 0) { var blockTop = map.offset().top; if ($(window).scrollTop() > blockTop - windowHeight - scrollDiffHeigth) { if (map.attr('data-maplazy-load') == 'false') { map.attr('data-maplazy-load', 'true'); t_appendYandexMap("96863489",""); } } } }
});