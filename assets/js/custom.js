// Menu js
jQuery(function () {
    'use strict';
    document.addEventListener("touchstart", function () {}, false);
    jQuery(function () {
      jQuery('<div class="overlapblackbg"></div>').prependTo('.wsmenu');
      jQuery('#wsnavtoggle').click(function () {
        jQuery('body').toggleClass('wsactive');
        $('body').toggleClass('overflow-hidden');
      });
      jQuery('.overlapblackbg').click(function () {
        jQuery("body").removeClass('wsactive');
        $('body').toggleClass('overflow-hidden');
      });
      jQuery('.wsmenu > .wsmenu-list > li').has('.sub-menu').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow"></i></span>');
      jQuery('.wsmenu > .wsmenu-list > li').has('.wsmegamenu').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow"></i></span>');
      jQuery('.wsmenu-click').click(function () {
        jQuery(this).toggleClass('ws-activearrow')
          .parent().siblings().children().removeClass('ws-activearrow');
        jQuery(".wsmenu > .wsmenu-list > li > .sub-menu, .wsmegamenu").not(jQuery(this).siblings('.wsmenu > .wsmenu-list > li > .sub-menu, .wsmegamenu')).slideUp('slow');
        jQuery(this).siblings('.sub-menu').slideToggle('slow');
        jQuery(this).siblings('.wsmegamenu').slideToggle('slow');
      });
      jQuery('.wsmenu > .wsmenu-list > li > ul > li').has('.sub-menu').prepend('<span class="wsmenu-click02"><i class="wsmenu-arrow"></i></span>');
      jQuery('.wsmenu > .wsmenu-list > li > ul > li > ul > li').has('.sub-menu').prepend('<span class="wsmenu-click02"><i class="wsmenu-arrow"></i></span>');
      jQuery('.wsmenu-click02').click(function () {
        jQuery(this).children('.wsmenu-arrow').toggleClass('wsmenu-rotate');
        jQuery(this).siblings('li > .sub-menu').slideToggle('slow');
      });
      jQuery(window).on('resize', function () {
        if (jQuery(window).outerWidth() < 992) {
          jQuery('.wsmenu').css('height', jQuery(this).height() + "px");
        } else {
          jQuery('.wsmenu').removeAttr("style");
          jQuery('body').removeClass("wsactive");
          jQuery('.wsmenu > .wsmenu-list > li > .wsmegamenu, .wsmenu > .wsmenu-list > li > ul.sub-menu, .wsmenu > .wsmenu-list > li > ul.sub-menu > li > ul.sub-menu, .wsmenu > .wsmenu-list > li > ul.sub-menu > li > ul.sub-menu > li > ul.sub-menu').removeAttr("style");
          jQuery('.wsmenu-click').removeClass("ws-activearrow");
          jQuery('.wsmenu-click02 > i').removeClass("wsmenu-rotate");
        }
      });
      jQuery(window).trigger('resize');
    });
}());

// Header fixed
$(window).scroll(function(){
    var sticky = $('header'),
        scroll = $(window).scrollTop();
    if (scroll >= 140) sticky.addClass('fixed-top');
    else sticky.removeClass('fixed-top');
});

// Banner slider
$('.banner-slider').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    items: 1,
	margin: 10,
});

// Dine carousel
$('.dine-carousel').owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    autoplay: false,
    items: 1,
	margin: 30,
    responsive:{
        0:{
            items: 1,
            nav: false,
            dots: true,
        },
        768:{
            items: 2,
        },
        1200:{
            items: 3,
            margin: 50
        },
    }
});

// Event carousel
$('.event-carousel').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: false,
    autoHeight: true,
    items: 1,
	margin: 30,
    responsive:{
        0:{
            items: 1,
            nav: false,
            dots: true,
        },
        768:{
            items: 2,
        },
        1200:{
            items: 3,
            margin: 40
        },
    }
});

// Scroll Animation
AOS.init({
	duration: 650,
	once: false,
	offset: 40,
});


// Filter Gallery
$(function() {
    $("#filter li").click(function() {
    var category = $(this).text().toLowerCase().replace(' ', '-');
    $("#filter li").removeClass("active");
    $(this).addClass("active");
    $("#portfolio li").hide();
    $("#portfolio li").each(function() {
        if ($(this).hasClass(category)) {
            $(this).fadeIn();
        }
      });
    });
});

// Fancy box
Fancybox.bind("[data-fancybox]");