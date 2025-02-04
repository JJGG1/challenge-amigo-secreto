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

    // Actualiza lista de amigos
    actualizarListaAmigo();
}

// Implementación de una función para actualizar la lista de amigos
function actualizarListaAmigo(){
    // Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    limpiarLista();

    // Iterar sobre el arreglo
    for ( let i = 0; i < amigos.length; i++ ){
        // Crear un elemento de lista
        let li = document.createElement('li');
        li.textContent = amigos[i];
        //Agregar elementos a la lista
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    //Validar que haya amigos disponibles
    if (amigos.length === 0){
        alert("No hay amigos para sortear, ingrese nombres de amigos para sortear");
        return;
    }

    // Generar un indice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    //console.log(indiceAleatorio);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    //console.log(amigoSorteado);
}

function limpiarLista() {
    document.getElementById('listaAmigos').innerHTML = '';
}