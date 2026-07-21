console.log("Portfolio Loaded Successfully!");

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

};

topBtn.onclick = function () {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};


// -----Scroll------
ScrollReveal({

    distance: "60px",
    duration: 1800,
    delay: 200,
    reset: false

});

ScrollReveal().reveal(".hero-content", {
    origin: "left"
});

ScrollReveal().reveal(".hero-image", {
    origin: "right"
});

ScrollReveal().reveal(".about", {
    origin: "bottom"
});

ScrollReveal().reveal(".skills", {
    origin: "bottom"
});

ScrollReveal().reveal(".projects", {
    origin: "bottom"
});

ScrollReveal().reveal(".certifications", {
    origin: "bottom"
});

ScrollReveal().reveal(".education", {
    origin: "bottom"
});

ScrollReveal().reveal(".contact", {
    origin: "bottom"
});


// Active Navbar

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});