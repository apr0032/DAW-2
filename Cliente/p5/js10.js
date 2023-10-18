const cajas = document.querySelectorAll('.caja');
const body = document.body;

cajas.forEach(caja => {
    caja.addEventListener('mouseover', () => {
        body.style.backgroundColor = getComputedStyle(caja).backgroundColor;
    });
});