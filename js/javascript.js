let nav = document.querySelector('nav')

window.addEventListener('scroll', ()=> {
    console.log();
    if(document.documentElement.scrollTop >= 40 && window.innerWidth > 768) {
        nav.classList.remove('first__navbar-ActiveD')
        nav.classList.add('first__navbar-noActiveD')
    } else if(document.documentElement.scrollTop === 0 && window.innerWidth > 768){
        nav.classList.remove('first__navbar-noActiveD')
        nav.classList.add('first__navbar-ActiveD')
    } else if(document.documentElement.scrollTop >= 40 && window.innerWidth <= 768) {
        nav.classList.remove('first__navbar-ActiveM')
        nav.classList.add('first__navbar-noActiveM')
    } else if(document.documentElement.scrollTop === 0 && window.innerWidth <= 768) {
        nav.classList.remove('first__navbar-noActiveM')
        nav.classList.add('first__navbar-ActiveM')
    }
})

const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});