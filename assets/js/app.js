  //===== Preloader

  $(".preloader").delay(1400).fadeOut(1450);

//Getting dom elements
let mouseCursor = document.querySelector('.cursor-effect');
let ctaLinks = document.querySelectorAll('.about-content a');
let menuToggle = document.querySelector('.menu-toggler');
let topNav = document.querySelector(".inner");
let navLink = document.querySelector(".top-nav,open .nav-link");


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



//Toggle Body Scroll
// function toggleBodyScrolling(){
//     document.body.classList.toggle("hide-scrolling");
// }

// Toggle menu
menuToggle.addEventListener ('click', ()=>{
    menuToggle.classList.toggle("open");
    topNav.classList.toggle("open");
});
navLink.addEventListener ('click', ()=>{
    menuToggle.classList.toggle("open");
    topNav.classList.toggle("open");
})



//GSAP animations
const tl = gsap.timeline({
    defaults: { ease: "power1.out" }
});

tl.to('.text', { y: "0%", duration: 1, stagger: 0.1 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");

tl.fromTo('.landing-text h6', {opacity: 0}, {opacity: 1, duration:1});
tl.fromTo('.landing-text h1', {opacity: 0}, {opacity: 1, duration:1}, "-=.8");


