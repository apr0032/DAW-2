const container = document.getElementById('container');
const numberOfCalabazas = 50; // Cambia este número según la cantidad de calabazas que desees.

for (let i = 0; i < numberOfCalabazas; i++) {
    const calabaza = document.createElement('div');
    calabaza.className = 'calabaza';
    calabaza.style.left = `${Math.random() * 100}vw`;
    calabaza.style.animationDuration = `${Math.random() * 3 + 6}s`; // Duración de la animación entre 6 y 9 segundos.
    calabaza.style.animationDelay = `${Math.random() * 6}s`; // Retardo aleatorio para que las calabazas no caigan todas al mismo tiempo. 
    container.appendChild(calabaza);
}


window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
