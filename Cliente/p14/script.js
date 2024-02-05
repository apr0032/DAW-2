function guardarElemento() {
    var itemName = document.getElementById('itemName').value;
    if (itemName.trim() === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // Obtener lista actual
    var itemList = JSON.parse(localStorage.getItem('itemList')) || [];

    // Agregar nuevo elemento
    itemList.push(itemName);

    // Guardar lista actualizada en localStorage
    localStorage.setItem('itemList', JSON.stringify(itemList));

    // Limpiar campo de entrada
    document.getElementById('itemName').value = "";

    // Actualizar la lista en la página    ????????????????????????????????????????????????????????????????????????????????????????????????????????????
    mostrarContenido();
}

function mostrarContenido() {
    var itemList = JSON.parse(localStorage.getItem('itemList')) || [];
    var listContainer = document.getElementById('itemList');
    listContainer.innerHTML = "";

    // Mostrar la lista en la página
    itemList.forEach(function (item) {
        var listItem = document.createElement('li');
        listItem.textContent = item;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = function () {
            eliminarElemento(item);
        };

        listItem.appendChild(deleteButton);
        listContainer.appendChild(listItem);
    });
}

function eliminarElemento(item) {
    var itemList = JSON.parse(localStorage.getItem('itemList')) || [];

    // Eliminar el elemento específico
    var index = itemList.indexOf(item);
    if (index !== -1) {
        itemList.splice(index, 1);
        localStorage.setItem('itemList', JSON.stringify(itemList));
        mostrarContenido();
    }
}

function limpiarContenido() {
    // Limpiar todos los elementos
    localStorage.removeItem('itemList');
    mostrarContenido();
}
