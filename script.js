const roles = [
  "Backend Developer",
  "Data Science Student",
  "Java Developer",
  "Spring Boot Developer",
  "Machine Learning Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentRole = roles[roleIndex];

    if(!deleting){
        typingElement.textContent =
        currentRole.substring(0, charIndex++);

        if(charIndex > currentRole.length){
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }
    }
    else{

        typingElement.textContent =
        currentRole.substring(0, charIndex--);

        if(charIndex < 0){
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect,
        deleting ? 50 : 100);
}

typeEffect();

const toggleBtn =
document.getElementById("theme-toggle");

toggleBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){
        toggleBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';
    }
    else{
        toggleBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';
    }
});

const reveals =
document.querySelectorAll("section");

function revealSections(){

    reveals.forEach(section=>{

        const top =
        section.getBoundingClientRect().top;

        const windowHeight =
        window.innerHeight;

        if(top < windowHeight - 120){

            section.classList.add("reveal");
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll",
revealSections);

revealSections();

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document
        .querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});