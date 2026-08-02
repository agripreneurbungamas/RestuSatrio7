/*======================================================
    BUDIDAYA BUNGA MAS
    SCRIPT.JS
    PART 3A
======================================================*/

/* ==========================
   NAVBAR SCROLL
========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function(){

    if(window.scrollY > 80){

        navbar.style.background="#1B5E20";

        navbar.style.boxShadow="0 10px 25px rgba(0,0,0,.15)";

        navbar.style.padding="10px 0";

    }

    else{

        navbar.style.background="rgba(0,0,0,.45)";

        navbar.style.boxShadow="none";

        navbar.style.padding="18px 0";

    }

});

/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ==========================
   BUTTON HOVER EFFECT
========================== */

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-5px)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0)";

    });

});

/* ==========================
   IMAGE HOVER
========================== */

const images=document.querySelectorAll("img");

images.forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transition=".4s";

    });

});

/* ==========================
   CARD EFFECT
========================== */

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0)";

    });

});

console.log("Budidaya Bunga Mas Ready ✅");
/*======================================================
    BUDIDAYA BUNGA MAS
    SCRIPT.JS
    PART 3B
======================================================*/

/* ==========================
   BACK TO TOP BUTTON
========================== */

// Membuat tombol secara otomatis
const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";
backToTop.id = "backToTop";

document.body.appendChild(backToTop);

// Style tombol
backToTop.style.position = "fixed";
backToTop.style.right = "25px";
backToTop.style.bottom = "100px";
backToTop.style.width = "50px";
backToTop.style.height = "50px";
backToTop.style.borderRadius = "50%";
backToTop.style.border = "none";
backToTop.style.background = "#198754";
backToTop.style.color = "#fff";
backToTop.style.fontSize = "22px";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.zIndex = "999";
backToTop.style.boxShadow = "0 8px 20px rgba(0,0,0,.25)";

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        backToTop.style.display = "block";
    }else{
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ==========================
   ACTIVE MENU
========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar .nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


/* ==========================
   SCROLL REVEAL
========================== */

const revealElements = document.querySelectorAll("section, .card");

function revealOnScroll(){

    revealElements.forEach(el=>{

        const windowHeight = window.innerHeight;

        const elementTop = el.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            el.classList.add("fade-in");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

console.log("Part 3B Loaded ✅");
/*======================================================
    BUDIDAYA BUNGA MAS
    SCRIPT.JS
    PART 3C
======================================================*/

/* ==========================================
        LIGHTBOX GALERI
========================================== */

const galleryImages = document.querySelectorAll("#galeri img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML = `
    <span id="closeLightbox">&times;</span>
    <img id="lightboxImg">
`;

document.body.appendChild(lightbox);

const lightboxImg = document.getElementById("lightboxImg");

galleryImages.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImg.src=img.src;

    });

});

document.getElementById("closeLightbox").onclick=()=>{

    lightbox.style.display="none";

}

lightbox.onclick=(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

};

/* ==========================================
        COUNTER ANGKA
========================================== */

const counters=document.querySelectorAll(".counter");

const speed=80;

function startCounter(){

    counters.forEach(counter=>{

        const target=+counter.getAttribute("data-target");

        const update=()=>{

            const current=+counter.innerText;

            const increment=Math.ceil(target/speed);

            if(current<target){

                counter.innerText=current+increment;

                setTimeout(update,25);

            }

            else{

                counter.innerText=target;

            }

        }

        update();

    });

}

let counterStarted=false;

window.addEventListener("scroll",()=>{

    const statistik=document.querySelector("#statistik");

    if(statistik){

        const posisi=statistik.getBoundingClientRect().top;

        if(posisi<window.innerHeight && !counterStarted){

            startCounter();

            counterStarted=true;

        }

    }

});

/* ==========================================
        FADE SAAT WEBSITE DIBUKA
========================================== */

window.addEventListener("load",()=>{

    document.body.classList.add("fade-in");

});

console.log("Part 3C Loaded ✅");