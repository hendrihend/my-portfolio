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