

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
  $('#popup-careting').toggleClass('active');
});

$('.popup-block__close').on('click', function() {
  $('#popup-dessert').removeClass('active');
});

$("#menu-toggle.active").click(function(e) {
  e.preventDefault();
  $("#header-menu").removeClass("active");
});


$('[data-toggle="tab"]').click(function(e) {
 e.preventDefault();
 
 var thisTarget = $(this).attr('data-target');
 
 if ($(this).parent().is('li')) {
  $(this).parent().addClass('active').siblings().removeClass('active');
 } else {
  $(this).addClass('active').siblings().removeClass('active');
 }
 
 $(thisTarget).addClass('active').siblings().removeClass('active');
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