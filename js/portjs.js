$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    });

    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobilenNav = document.querySelector('.mobile-nav');

    hamberger.addEventListener('click', function(){
        mobilenNav.classList.add('open');

    });

    times.addEventListener('click', function(){
        mobilenNav.classList.remove('open');


    });

    AOS.init({
        duration : 1000
    });
});