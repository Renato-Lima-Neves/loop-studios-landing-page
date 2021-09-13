const hamOpen = document.querySelector('.ham-open');
const hamClose = document.querySelector('.ham-close');
const navList = document.querySelector('.nav-list');
const heroMobile = document.querySelector('.img.hero.mobile');
const navToggle = document.querySelector('.nav-toggle');
const toggleHam = () => {
    if (hamOpen) {
       hamClose.classList.toggle('nav-open');
       hamOpen.classList.toggle('nav-open');
       navList.classList.toggle('open');
       heroMobile.classList.toggle('active');
    }
    
}

navToggle.addEventListener('click', toggleHam)