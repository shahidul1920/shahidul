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

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.gsap-fade-right').forEach(function(elem) {
        gsap.from(elem, {
            scrollTrigger: { trigger: elem, start: "top 80%" },
            x: -100, opacity: 0, duration: 1, ease: "power2.out"
        });
    });

    gsap.utils.toArray('.gsap-fade-left').forEach(function(elem) {
        gsap.from(elem, {
            scrollTrigger: { trigger: elem, start: "top 80%" },
            x: 100, opacity: 0, duration: 1, ease: "power2.out"
        });
    });

    gsap.utils.toArray('.gsap-zoom-out').forEach(function(elem) {
        gsap.from(elem, {
            scrollTrigger: { trigger: elem, start: "top 80%" },
            scale: 1.2, opacity: 0, duration: 1, ease: "power2.out"
        });
    });

    gsap.utils.toArray('.gsap-slide-right').forEach(function(elem) {
        gsap.from(elem, {
            scrollTrigger: { trigger: elem, start: "top 80%" },
            x: -50, opacity: 0, duration: 1, ease: "power2.out"
        });
    });

    gsap.utils.toArray('.gsap-fade-up').forEach(function(elem) {
        gsap.from(elem, {
            scrollTrigger: { trigger: elem, start: "top 80%" },
            y: 50, opacity: 0, duration: 1, ease: "power2.out"
        });
    });
});


    window.addEventListener('scroll', function(){
        let homeUp = document.querySelector('.home-btn');

        homeUp.classList.toggle('scactive',window.scrollY>200);
    })