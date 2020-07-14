/* global $, alert, console */

$(function(){
    'use strict';


    //trigger nicescroll plugin :
    $('body').niceScroll();


    //change header height :
    $('.header').height($(window).height());


    //scroll of features :
    $('.header .arrow i').click(function(){
        $('html, body').animate({
        scrollTop: $('.features').offset().top
        }, 1000)
    });


    //show hidden items using button
    $('.show-more').click(function() {
        $('.our-work .hidden').fadeIn(2000);
    });

    // check reviews
    var leftArrow = $('.review .fa-chevron-left'),
    rightArrow = $('.review .fa-chevron-right')
    function checkClients () {
        $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn() ;
        $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn() ;
    }

    checkClients();

    $('.review i').click(function() {
        if ($(this).hasClass('fa-chevron-right')) {
            $('.review .active').fadeOut(500, function () {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                checkClients();
            });
        } else {

            $('.review .active').fadeOut(500, function () {
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                checkClients();
            });

        }
    });

});