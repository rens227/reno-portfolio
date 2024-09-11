/*===== scrol section link=====*/
let menuIcon =document.querySelector('#menu-icons');
let navbar =document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*===== scrol section link=====*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute ('id');

        if(top >= offset && top < offset + height) {
             navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
             });
        };
    });
    /*===== sticky navbar =====*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*===== remove toogle navbar=====*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*===== scroll reveal=====*/
ScrollReveal({
    // reset: true,
    distance: '800px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{ origin: 
'bottom' });
ScrollReveal().reveal('.home-container h1, .about-img',{ origin: 'left' });
ScrollReveal().reveal('.home-container p, .about-content',{ origin: 'right' });

/*===== type js =====*/
const typed = new Typed('.Multiple-text', {
    strings: ['.Frontend Developer', '.Safety office', '.Data Analyst'],
    typeSpeed: 100,
    backSpeed: 100,
    typeDelay: 1000,
    loop: true
});