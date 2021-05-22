$(".preloader").delay(500).fadeOut(500);


let mouseCursor = document.querySelector('.mouse-cursor');

//  Mouse effect
window.addEventListener('mousemove', cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}


const tabsContainer = document.querySelector(".tabs"),
        moreAboutSection = document.querySelector(".more-about");


////Select Tabs 
tabsContainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        moreAboutSection.querySelector(".tab-content.active").classList.remove("active");
        moreAboutSection.querySelector(target).classList.add("active");
    }
});



