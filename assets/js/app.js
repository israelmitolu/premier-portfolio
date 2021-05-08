
//Getting dom elements
let mouseCursor = document.querySelector('.cursor-effect'
);
let ctaLinks = document.querySelectorAll('.about-cta a');
let menuToggle = document.querySelector('.menu-toggler');
let topNav = document.querySelector(".top-nav");
let navLink = document.querySelector(".top-nav,open .nav-link");


//Background animation effect
function bgAnimationDots(){
    const rows = 7, cols = 10;
    for(let i = 0; i < rows; i++){
        for(let j = 0; j< cols; j++){
            const div = document.createElement("div");
            div.className = `col-${j+1}`;
            document.querySelector(".bg-animation-effect").appendChild(div);
        }
        }
}

bgAnimationDots();

//  Mouse effect
window.addEventListener('mousemove', cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

ctaLinks.forEach(link =>{
    link.addEventListener('mouseover', ()=>{
        mouseCursor.classList.add('link-grow');
        link.classList.add('hovered-link');
    });
    link.addEventListener('mouseleave', ()=>{
        mouseCursor.classList.remove('link-grow');
        link.classList.remove('hovered-link');
    })
})



//Toggle Body Scroll
function toggleBodyScrolling(){
    document.body.classList.toggle("hide-scrolling");
}

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

tl.to('.text', { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");


