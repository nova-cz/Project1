document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.newscards', {elay: 300});
ScrollReveal().reveal('.cards-banner-one', {elay: 300});
ScrollReveal().reveal('.cards-banner-two', {elay: 300});