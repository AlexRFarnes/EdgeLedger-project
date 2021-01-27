const navbar = document.getElementById('navbar');
const links = document.querySelectorAll('.nav__link');
let scrolled = false;


const setTransparency =  () => {
    if( window.pageYOffset > 100) {
        navbar.classList.remove('top');
        if(!scrolled) {
            navbar.style.transform = 'translateY(-100%)';
        }
        setTimeout(() => {
            navbar.style.transform = 'translateY(0)';
            scrolled = true;
        }, 200);
    } else {
        navbar.classList.add('top');
        scrolled = false;
    }
}

const smoothScroll = function(e){
    e.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop - 70;

    scroll({
        top: offsetTop,
        behavior: 'smooth'
    });
}


window.addEventListener('scroll', setTransparency);

links.forEach(link => {
    link.addEventListener('click', smoothScroll);
})
 