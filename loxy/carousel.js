
const track = document.querySelector('.carrousel-track');
const images = track.querySelectorAll('img');
const total = images.length;
let index = 0;
let interval;

function showSlide(i) {
    index = (i + total) % total;
    gsap.to(track, {
        x: -index * 70 + "vh",
        duration: 0.6,
        ease: "power2.inOut"
    });
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

document.querySelector('.next').addEventListener('click', () => {
    nextSlide();
    resetTimer();
});

document.querySelector('.prev').addEventListener('click', () => {
    prevSlide();
    resetTimer();
});

function startTimer() {
    interval = setInterval(nextSlide, 3000);
}

function resetTimer() {
    clearInterval(interval);
    startTimer();
}

startTimer();
