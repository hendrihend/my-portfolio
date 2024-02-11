let slideIndex = 1;
let btnPrev = document.querySelector('.prev');
let btnNext = document.querySelector('.next');
showSlides(slideIndex);

// Next / Previous Controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Background Controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll('.mySlides');
    if(n > slides.length) {
        slideIndex = 1;
    }
    if(n < 1) {
        slideIndex = slides.length;
    }

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';

}

// Ketika tombol Prev & next di klik
btnPrev.addEventListener('click', () => { plusSlides(-1); });
btnNext.addEventListener('click', () => { plusSlides(1); });

// Nav Links
function openSection(e, sectionName) {
    let i, tabContent, navLinks;
    tabContent = document.querySelectorAll('.tab-content');
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }
    navLinks = document.querySelectorAll('.nav-link');
    for (i = 0; i < navLinks; i++) {
        navLinks[i].className = navLinks[i].className.replace(' active', '');
    }
    document.getElementById(sectionName).style.display = 'block';
    e.currentTarget.className += ' active';
}

// Ketika Navbar di klik
let navAbout = document.querySelector('#nav-about');
let navSkill = document.querySelector('#nav-skill');
let navAcademy = document.querySelector('#nav-academy');
let navContact = document.querySelector('#nav-contact');

navAbout.addEventListener('click', () => { openSection(event, 'about'); });
navSkill.addEventListener('click', () => { openSection(event, 'skill'); });
navAcademy.addEventListener('click', () => { openSection(event, 'academy'); });
navContact.addEventListener('click', () => { openSection(event, 'contact'); });

