const logoCarousel = document.querySelector('.logo-carousel');
const logos = logoCarousel.querySelectorAll('img');

let currentLogo = 0;

function showNextLogo() {
  logos[currentLogo].classList.remove('active');
  currentLogo = (currentLogo + 1) % logos.length;
  logos[currentLogo].classList.add('active');
}

setInterval(showNextLogo, 3000);
