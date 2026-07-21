const hero = document.querySelector(".hero");
const glow = document.querySelector(".mouse-glow");

hero.addEventListener("mousemove",(e)=>{

    const rect = hero.getBoundingClientRect();

    glow.style.left = (e.clientX - rect.left)+"px";

    glow.style.top = (e.clientY - rect.top)+"px";

});