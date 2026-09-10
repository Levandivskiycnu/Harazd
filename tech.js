const burger = document.querySelector('.nav__burger');
const navLinks = document.querySelector('.nav__links');

if (burger && navLinks) {

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav__links a').forEach(link => {

        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });

    });
}


const contactButtons = document.querySelectorAll(
    '#button__mainContact, .nav__button, .CTA button'
);

const contactOverlay = document.querySelector('.contact__overlay');
const contactClose = document.querySelector('.contact__close');


if (contactOverlay) {

    contactButtons.forEach(button => {

        button.addEventListener('click', (event) => {

            event.preventDefault();

            contactOverlay.classList.add('active');

        });

    });

}


if (contactClose && contactOverlay) {

    contactClose.addEventListener('click', () => {

        contactOverlay.classList.remove('active');

    });

}


if (contactOverlay) {

    contactOverlay.addEventListener('click', (event) => {

        if (event.target === contactOverlay) {

            contactOverlay.classList.remove('active');

        }

    });

}


document.addEventListener('keydown', (event) => {

    if (event.key === 'Escape' && contactOverlay) {

        contactOverlay.classList.remove('active');

    }

});


const projectsButton = document.getElementById('button__ourProject');

if (projectsButton) {
    projectsButton.addEventListener('click', function () {
        window.location.href = 'portfolio.html';
    });
}