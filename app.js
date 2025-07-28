
let amigos = [];

function agregarAmigo(){
    let nuevoAmigo = document.getElementById("amigo").value;

    // Controlamos los casos en los que se intente ingresar una cadena vacía o un nombre cuya longitud sea menor a 3. 
    if (nuevoAmigo === "") {
        alert("Por favor, una cadena vacía no puede ser un nombre. Inserte un nombre válido");
        return;
    } else if (nuevoAmigo.length < 3) {
        alert("Por favor, inserte un nombre válido.");
        return;
    }

    // Controlamos el caso en que se intente ingresas un nombre repetido.
    if(buscarAmigo(nuevoAmigo, amigos)) {
        alert("Por favor, inserte un nombre diferente al ingresado.");
    }else{
        // Añadir el amigo a la lista de amigos.
        amigos.push(nuevoAmigo);
        listarAmigos(amigos);
    }

    // Limpieza del campo de ingreso del nombre.
    limpiarCampo("amigo");
}

function sortearAmigo(){
    let indice = Math.floor(Math.random()*amigos.length);
    // El sorteo es lógico cuando existen al menos 2 nombres.
    if (amigos.length < 2) {
        alert("Por favor, inserte como mínimo 2 nombres para poder realizar el sorteo.")
    }else{
        let sorteo = document.getElementById("resultado");
        // Ingreso del resultado a la etiqueta correspondiente.
        sorteo.innerHTML=`<li><b>El nombre sorteado es ${amigos[indice]}!!</b></li>`
    }    
}


function buscarAmigo(amigo, listaAmigos) {
    // Eliminación de espacios en blanco.
    amigo = amigo.trim();
    // Búsqueda del nombre ingresado en la lista de amigos.
    for (let i = 0; i < listaAmigos.length; i++) {
        // Conversión de las cadenas a minúscula para evitar sensibilidad.
        if (listaAmigos[i].toLowerCase() === amigo.toLowerCase() ) return true;
    }
    return false;
}

function listarAmigos(listaAmigos) {
    let listado = document.getElementById("listaAmigos");
    // Limpieza del contenido HTML de la lista
    listado.innerHTML = "";
    // Ingreso del contenido HTML en la lista
    for (let i = 0; i < listaAmigos.length; i++) {
        listado.innerHTML+=`<li><b>✔️ ${listaAmigos[i]}</b></li>`;
    }
}

function limpiarCampo(equiqueta) {
    let campo = document.getElementById(equiqueta);
    // Limpieza del campo en cuestión.
    campo.value="";
}