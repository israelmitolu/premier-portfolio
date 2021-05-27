  //===== Preloader

  $(".preloader").delay(1200).fadeOut(1450);

//Getting dom elements
let mouseCursor = document.querySelector('.cursor-effect');
let ctaLinks = document.querySelectorAll('.about-content a, .footer-links a');


//  Mouse effect
window.addEventListener('mousemove', cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

ctaLinks.forEach(link =>{
    link.addEventListener('mouseover', ()=>{
        mouseCursor.classList.add('link-grow');
    });
    link.addEventListener('mouseleave', ()=>{
        mouseCursor.classList.remove('link-grow');
    })
})


//GSAP animations
const tl = gsap.timeline({
    defaults: { ease: "power1.out" }
});

tl.to('.layer-1', {y: '-100vh', delay: .1});
tl.to('.layer-2', {y: '-100vh', delay: .2});
tl.to('.layer-3', {y: '-100vh', delay: .3});
tl.to('.overlay', {y: '-100vh', delay: .6});

tl.fromTo('.landing-text h1', {opacity: 0}, {opacity: 1, duration:.5, stagger: .5});
tl.fromTo('.landing-text h5', {opacity: 0}, {opacity: 1, duration:1});
tl.fromTo('.effect-1', {opacity: 0}, {opacity: 1, duration:1});
tl.fromTo('.effect-2', {opacity: 0}, {opacity: 1, duration:1});
tl.fromTo('.effect-3', {opacity: 0}, {opacity: 1, duration:1});
tl.fromTo('.effect-4', {opacity: 0}, {opacity: 1, duration:1});
tl.fromTo('.inner', {opacity: 0}, {opacity: 1, duration:.3}, "-=1");


