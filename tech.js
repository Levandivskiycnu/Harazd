// =========================
// MOBILE MENU
// =========================

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


// =========================
// CONTACT MODAL
// =========================

const contactButtons = document.querySelectorAll(
    '#button__mainContact, .nav__button, .CTA button'
);

const contactOverlay = document.querySelector('.contact__overlay');
const contactClose = document.querySelector('.contact__close');


// OPEN MODAL

if (contactOverlay) {

    contactButtons.forEach(button => {

        button.addEventListener('click', (event) => {

            event.preventDefault();

            contactOverlay.classList.add('active');

        });

    });

}


// CLOSE BUTTON

if (contactClose && contactOverlay) {

    contactClose.addEventListener('click', () => {

        contactOverlay.classList.remove('active');

    });

}


// CLOSE BY CLICKING OUTSIDE

if (contactOverlay) {

    contactOverlay.addEventListener('click', (event) => {

        if (event.target === contactOverlay) {

            contactOverlay.classList.remove('active');

        }

    });

}


// CLOSE BY ESC

document.addEventListener('keydown', (event) => {

    if (event.key === 'Escape' && contactOverlay) {

        contactOverlay.classList.remove('active');

    }

});