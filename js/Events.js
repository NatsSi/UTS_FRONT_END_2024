const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav ul");
const navLink = document.querySelectorAll(".nav a");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

let currentSlide = 0;
const slides = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    slides.forEach((slide, i) => {
        slide.style.display = 'none';
        dots[i].classList.remove('active');
    });
    slides[currentSlide].style.display = 'flex';
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Add event listeners for navigation buttons
function changeSlide(n) {
    showSlide(currentSlide + n);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Initialize slideshow
showSlide(currentSlide);

// Change slide every 5 seconds
setInterval(nextSlide, 5000);


const items = document.querySelectorAll('.appear');

const active = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.classList.add('inview'); 
        }
    });
}
const io = new IntersectionObserver(active);
 for(let i=0; i < items.length; i++){
    io.observe(items[i]);
 }

const items2 = document.querySelectorAll('.appear2');

const active2 = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.classList.add('inview2'); 
        }
    });
}
const io2 = new IntersectionObserver(active2);
 for(let i=0; i < items2.length; i++){
    io2.observe(items2[i]);
 }

const items3 = document.querySelectorAll('.appear3');

const active3 = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.classList.add('inview3'); 
        }
    });
}
const io3 = new IntersectionObserver(active3);
 for(let i=0; i < items3.length; i++){
    io3.observe(items3[i]);
 }

const items4 = document.querySelectorAll('.appear4');

const active4 = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.classList.add('inview4'); 
        }
    });
}
const io4 = new IntersectionObserver(active4);
 for(let i=0; i < items4.length; i++){
    io4.observe(items4[i]);
 }

const items5 = document.querySelectorAll('.appear5');

const active5 = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.classList.add('inview5'); 
        }
    });
}
const io5 = new IntersectionObserver(active5);
 for(let i=0; i < items5.length; i++){
    io5.observe(items5[i]);
 }