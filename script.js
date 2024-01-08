const btn = document.querySelector(".btn");
const navbar = document.querySelector(".navbar");
const togglenavbar = ()=>{
    navbar.classList.toggle("active");
};

btn.addEventListener("click",()=>
    togglenavbar());