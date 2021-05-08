
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
    console.log("Booyeagh");
})
// document.addEventListener('DOMContentLoaded', ()=> {
// });





//Filter Portfolio items
// const filterBtnsContainer = document.querySelector(".portfolio-filter");
// filterBtnsContainer.addEventListener("click", (e) =>{
//     if(e.target.classList.contains("portfolio-filter-btn") &&
//     !e.target.classList.contains("active")){
//         filterBtnsContainer.querySelector(".active").classList.remove("active");
//         e.target.classList.add("active");
//         toggleBodyScrolling();
//         document.querySelector(".filter-status").classList.add("active");
//         document.querySelector(".filter-status p").innerHTML = `Filtering <span>${e.target.innerHTML}</span> works`;
//         setTimeout(() =>{
            
//             filterItems(e.target);
//         },400);
//         setTimeout(() =>{
//             document.querySelector(".filter-status").classList.remove("active");
//             toggleBodyScrolling();
//         },800);
//     };
// });

// function filterItems(filterBtn){
//     const selectedCategory = filterBtn.getAttribute("data-filter");
//     document.querySelectorAll(".portfolio-item").forEach((item)=>{
//         const category = item.getAttribute("data-category").split(",");
//         if(category.indexOf(selectedCategory) !== -1 || selectedCategory === "all"){
//             item.classList.add("show");
//         }else{
//             item.classList.remove("show");
//         }
    
//     });
// }

// //Filter Active Category Portfolio items
// filterItems(document.querySelector(".portfolio-filter-btn.active"));

//GSAP animations
const tl = gsap.timeline({
    defaults: { ease: "power1.out" }
});

tl.to('.text', { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");


