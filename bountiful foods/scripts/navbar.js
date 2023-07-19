const hamburgerBtn = document.querySelector('#hamburgerBtn');
const primaryNav = document.querySelector('.primaryNav');

hamburgerBtn.addEventListener('click', () => {primaryNav.classList.toggle('open');
});