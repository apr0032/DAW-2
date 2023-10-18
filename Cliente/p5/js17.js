const cajitas = document.querySelectorAll('.cajas');
const correr = document.getElementById('correr');
const reset = document.getElementById('reset');
let winner = false;

correr.addEventListener('click', () => {
    if (!winner) {
        cajitas.forEach(cajas => {
            const velocidad = Math.floor(Math.random() * 10) + 1;
            const posicion = cajas.offsetLeft;
            cajas.style.transition = `left ${velocidad}s linear`;
            cajas.style.left = `${window.innerWidth - 120}px`;
            cajas.addEventListener('transitionend', () => {
                if (cajas.offsetLeft >= window.innerWidth - 120 && !winner) {
                    alert(`${cajas.id} ha ganado la carrera`);
                    winner = true;
                }
            });
        });
    }
});

reset.addEventListener('click', () => {
    winner = false;
    cajitas.forEach(cajas => {
        cajas.style.transition = 'none';
        cajas.style.left = '0';
    });
});
