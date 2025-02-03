// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Crear un array para almacenar los nombres
let amigos = [];

// Implementación de una función para agregar amigos
function agregarAmigo(){
    // Capturar el valor del campo de entrada
    let nombre = document.getElementById('amigo').value;
    // Validar la entrada
    if (nombre === ""){
        alert("Por favor, inserte un nombre");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    document.getElementById('amigo').value = '';
}

// Implementación de una función para actualizar la lista de amigos
function actualizarListaAmigo(){
    // Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');
}