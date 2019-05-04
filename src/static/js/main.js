function openModal(e) {
    iOS && iOS11 && (scrolledPositionBeforeOpenModal = $(document).scrollTop()), $("body, .page-header").css("padding-right", scrollbarWidth), $("body, html").addClass("modal-opened"), "header-menu" == $(e).attr("id") && $(window).width() < 768 ? $(e).addClass("active") : $(e).fadeIn(300)
}

function closeModals() {
    scrollbarWidth > 0 ? $(".popup-block:not(:hidden)").fadeOut(200, function() {
        $("body, .page-header").css("padding-right", 0), $("body, html").removeClass("modal-opened"), iOS && iOS11 && $("html, body").scrollTop(scrolledPositionBeforeOpenModal)
    }) : ($("body, .page-header").css("padding-right", 0), $("body, html").removeClass("modal-opened"), iOS && iOS11 && $("html, body").scrollTop(scrolledPositionBeforeOpenModal), $(".popup-block:not(:hidden)").fadeOut(200)), $("#header-menu").removeClass("active")
}

function showThanksModal() {
    $(".popup-block:not(:hidden)").fadeOut(), $("#thanks-popup").fadeIn(300)
}
var ua = navigator.userAgent,
    iOS = /iPad|iPhone|iPod/.test(ua),
    iOS11_0 = /OS 11_0_?(\d+)?/.test(ua),
    iOS11_1 = /OS 11_1_?(\d+)?/.test(ua),
    iOS11_2 = /OS 11_2_?(\d+)?/.test(ua),
    iOS11 = iOS11_0 || iOS11_1 || iOS11_2,
    scrolledPositionBeforeOpenModal;
iOS && iOS11 && $("body").addClass("iosBugFixCaret"), /Android/.test(navigator.appVersion) && window.addEventListener("resize", function() {
    "INPUT" != document.activeElement.tagName && "TEXTAREA" != document.activeElement.tagName || document.activeElement.scrollIntoView()
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