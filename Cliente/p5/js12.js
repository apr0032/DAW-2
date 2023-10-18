const imagen = document.getElementById('foto');
const derechaboton = document.getElementById('derecha');
const izquierdaboton = document.getElementById('izquierda');
const resetboton = document.getElementById('reset');


derechaboton.addEventListener('mouseover', function () {
    interval = setInterval(function () {
        const izquierda1 = parseInt(getComputedStyle(imagen).left) || 0;
        const imageWidth = imagen.clientWidth;
        const screenWidth = window.innerWidth;
        if (izquierda1 + imageWidth + 5 <= screenWidth) {
            imagen.style.left = (izquierda1 + 5) + 'px';
        }
    }, 50);
});

derechaboton.addEventListener('mouseout', function () {
    clearInterval(interval);
});

izquierdaboton.addEventListener('mouseover', function () {
    interval = setInterval(function () {
    const izquierda1 = parseInt(getComputedStyle(imagen).left) || 0;
    if (izquierda1 - 5 >= 0) {
        imagen.style.left = (izquierda1 - 5) + 'px';
    }
}, 50);
});

izquierdaboton.addEventListener('mouseout', function () {
    clearInterval(interval);
});

resetboton.addEventListener('click', function () {
    imagen.style.left = '0px';
});
